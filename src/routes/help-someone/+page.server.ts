import { fail } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { submission } from '$lib/server/db/schema';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name')?.toString().trim() ?? '';
		const contactInfo = formData.get('contact_info')?.toString().trim() ?? '';
		const experience = formData.get('experience')?.toString().trim() ?? '';
		const readiness = formData.get('readiness')?.toString().trim() ?? '';
		const confirmed = formData.get('confirmed') === 'on';

		if (!name || !contactInfo || !experience || !readiness || !confirmed) {
			return fail(400, {
				error: 'Please complete the required fields and confirmation before sending.'
			});
		}

		await db.insert(submission).values({
			kind: 'help_someone',
			name,
			contactInfo,
			location: formData.get('location')?.toString().trim() || null,
			experience,
			readiness,
			message: formData.get('message')?.toString().trim() || null,
			confirmed
		});

		return { success: true };
	}
};
