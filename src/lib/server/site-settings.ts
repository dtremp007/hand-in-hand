import { eq } from 'drizzle-orm';
import { db } from '$lib/server/db';
import { SITE_SETTINGS_ID, siteSettings } from '$lib/server/db/schema';

export async function getSiteSettings() {
	await db
		.insert(siteSettings)
		.values({
			id: SITE_SETTINGS_ID,
			notificationEmails: []
		})
		.onConflictDoNothing({ target: siteSettings.id });

	const [settings] = await db
		.select()
		.from(siteSettings)
		.where(eq(siteSettings.id, SITE_SETTINGS_ID))
		.limit(1);

	if (!settings) {
		throw new Error('site_settings row is missing');
	}

	return settings;
}

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function parseNotificationEmails(raw: string) {
	const candidates = raw
		.split(/[\n,;]+/)
		.map((value) => value.trim())
		.filter(Boolean);

	const emails: string[] = [];
	const seen = new Set<string>();

	for (const candidate of candidates) {
		const email = candidate.toLowerCase();
		if (!EMAIL_PATTERN.test(email)) {
			return { error: `Invalid email: ${candidate}` };
		}
		if (!seen.has(email)) {
			seen.add(email);
			emails.push(email);
		}
	}

	return { emails };
}
