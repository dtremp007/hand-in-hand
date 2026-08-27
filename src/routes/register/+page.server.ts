import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { APIError } from 'better-auth/api';
import { auth } from '$lib/server/auth';
import {
	adminInviteCodeIsValid,
	getInviteCodeFromSearchParams,
	isAdminRegistrationEnabled
} from '$lib/server/invite-code';

const redirectTarget = (url: URL) => url.searchParams.get('redirectTo') || '/admin/submissions';

export const load: PageServerLoad = (event) => {
	if (event.locals.user) {
		throw redirect(302, redirectTarget(event.url));
	}

	return {
		inviteCode: getInviteCodeFromSearchParams(event.url.searchParams),
		registrationEnabled: isAdminRegistrationEnabled()
	};
};

export const actions: Actions = {
	signUpEmail: async (event) => {
		if (!isAdminRegistrationEnabled()) {
			return fail(403, { message: 'Registration is not available.' });
		}

		const formData = await event.request.formData();
		const email = formData.get('email')?.toString() ?? '';
		const password = formData.get('password')?.toString() ?? '';
		const name = formData.get('name')?.toString() ?? '';
		const inviteCode = formData.get('invite_code')?.toString() ?? '';

		if (!adminInviteCodeIsValid(inviteCode)) {
			return fail(400, { message: 'Invalid invite code.' });
		}

		try {
			await auth.api.signUpEmail({
				body: {
					email,
					password,
					name,
					callbackURL: '/auth/verification-success'
				}
			});
		} catch (error) {
			console.error(error);

			if (error instanceof APIError) {
				return fail(400, { message: error.message || 'Registration failed' });
			}

			return fail(500, { message: 'Unexpected error' });
		}

		throw redirect(302, redirectTarget(event.url));
	}
};
