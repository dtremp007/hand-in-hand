import { fail } from '@sveltejs/kit';
import { m } from '$lib/paraglide/messages';
import { db } from '$lib/server/db';
import { submission } from '$lib/server/db/schema';
import { notifyFormRecipientsSafe } from '$lib/server/email';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const firstName = formData.get('first_name')?.toString().trim() ?? '';
		const lastName = formData.get('last_name')?.toString().trim() ?? '';
		const whatsapp = formData.get('whatsapp')?.toString().trim() ?? '';
		const email = formData.get('email')?.toString().trim() ?? '';
		const age = formData.get('age')?.toString().trim() ?? '';
		const location = formData.get('location')?.toString().trim() ?? '';
		const language = formData.get('language')?.toString().trim() ?? '';
		const situation = formData.get('situation')?.toString().trim() ?? '';
		const role = formData.get('role')?.toString().trim() ?? '';
		const partner = formData.get('partner')?.toString().trim() || null;
		const confirmed = formData.get('confirmed') === 'on';

		if (
			!firstName ||
			!lastName ||
			!whatsapp ||
			!email ||
			!age ||
			!location ||
			!language ||
			!situation ||
			(role !== 'victor' && role !== 'seeker') ||
			!confirmed
		) {
			return fail(400, {
				error: m.form_error_get_involved()
			});
		}

		await db.insert(submission).values({
			kind: 'get_involved',
			name: `${firstName} ${lastName}`,
			contactInfo: whatsapp,
			email,
			age,
			language,
			location,
			role,
			partner,
			message: situation,
			confirmed
		});

		await notifyFormRecipientsSafe('get_involved', {
			name: `${firstName} ${lastName}`,
			contactInfo: whatsapp,
			email,
			age,
			language,
			location,
			role,
			partner,
			message: situation,
			confirmed
		});

		return { success: true };
	}
};
