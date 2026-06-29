import { fail } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { submission } from '$lib/server/db/schema';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('full_name')?.toString().trim() ?? '';
		const contactInfo = formData.get('contact_info')?.toString().trim() ?? '';
		const confirmed = formData.get('confirmed') === 'on';

		if (!name || !contactInfo || !confirmed) {
			return fail(400, {
				error: 'Please share your name, contact information, and confirmation before sending.'
			});
		}

		await db.insert(submission).values({
			kind: 'get_help',
			name,
			contactInfo,
			location: formData.get('location')?.toString().trim() || null,
			message: formData.get('message')?.toString().trim() || null,
			confirmed
		});

		return { success: true };
	}
};
