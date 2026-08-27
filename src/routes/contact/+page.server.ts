import { fail, redirect } from '@sveltejs/kit';
import { m } from '$lib/paraglide/messages';
import { localizeHref } from '$lib/paraglide/runtime';
import { db } from '$lib/server/db';
import { submission } from '$lib/server/db/schema';
import { notifyFormRecipientsSafe } from '$lib/server/email';
import { guardPublicForm, publicFormPageData } from '$lib/server/form-guard';

export const load = () => publicFormPageData();

export const actions = {
	default: async ({ request, getClientAddress }) => {
		const formData = await request.formData();
		const guarded = await guardPublicForm({
			formData,
			getClientAddress,
			action: 'contact'
		});

		if (!guarded.ok) {
			if (guarded.silent) {
				throw redirect(303, `${localizeHref('/submission-success')}?from=contact`);
			}

			return fail(403, {
				error: m.form_error_verification()
			});
		}

		const name = formData.get('name')?.toString().trim() ?? '';
		const churchName = formData.get('church_name')?.toString().trim() ?? '';
		const role = formData.get('role')?.toString().trim() ?? '';
		const contactInfo = formData.get('contact_info')?.toString().trim() ?? '';
		const prompt = formData.get('prompt')?.toString().trim() || null;

		if (!name || !churchName || !role || !contactInfo) {
			return fail(400, {
				error: m.form_error_contact()
			});
		}

		const [created] = await db
			.insert(submission)
			.values({
				kind: 'contact',
				name,
				churchName,
				role,
				contactInfo,
				prompt
			})
			.returning({ id: submission.id });

		await notifyFormRecipientsSafe(
			'contact',
			{
				name,
				churchName,
				role,
				contactInfo,
				prompt
			},
			created?.id
		);

		throw redirect(303, `${localizeHref('/submission-success')}?from=contact`);
	}
};
