import { fail, redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { db } from '$lib/server/db';
import { SITE_SETTINGS_ID, siteSettings } from '$lib/server/db/schema';
import { getSiteSettings, parseNotificationEmails } from '$lib/server/site-settings';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, url }) => {
	if (!locals.user) {
		throw redirect(302, `/login?redirectTo=${encodeURIComponent(url.pathname)}`);
	}

	const settings = await getSiteSettings();

	return {
		notificationEmails: (settings.notificationEmails ?? []).join('\n')
	};
};

export const actions: Actions = {
	default: async ({ locals, request, url }) => {
		if (!locals.user) {
			throw redirect(302, `/login?redirectTo=${encodeURIComponent(url.pathname)}`);
		}

		const formData = await request.formData();
		const raw = formData.get('notification_emails')?.toString() ?? '';
		const parsed = parseNotificationEmails(raw);

		if ('error' in parsed) {
			return fail(400, { error: parsed.error, notificationEmails: raw });
		}

		await db
			.update(siteSettings)
			.set({
				notificationEmails: parsed.emails,
				updatedAt: new Date()
			})
			.where(eq(siteSettings.id, SITE_SETTINGS_ID));

		return {
			success: true,
			notificationEmails: parsed.emails.join('\n')
		};
	}
};
