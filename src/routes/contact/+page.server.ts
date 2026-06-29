import { fail } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { submission } from '$lib/server/db/schema';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name')?.toString().trim() ?? '';
		const churchName = formData.get('church_name')?.toString().trim() ?? '';
		const role = formData.get('role')?.toString().trim() ?? '';
		const contactInfo = formData.get('contact_info')?.toString().trim() ?? '';

		if (!name || !churchName || !role || !contactInfo) {
			return fail(400, {
				error: 'Please complete the required fields before sending.'
			});
		}

		await db.insert(submission).values({
			kind: 'contact',
			name,
			churchName,
			role,
			contactInfo,
			prompt: formData.get('prompt')?.toString().trim() || null
		});

		return { success: true };
	}
};
