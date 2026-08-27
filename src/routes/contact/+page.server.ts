import { fail } from '@sveltejs/kit';
import { m } from '$lib/paraglide/messages';
import { db } from '$lib/server/db';
import { submission } from '$lib/server/db/schema';
import { notifyFormRecipientsSafe } from '$lib/server/email';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
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

		return { success: true };
	}
};
