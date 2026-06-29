import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { APIError } from 'better-auth/api';
import { auth } from '$lib/server/auth';

const redirectTarget = (url: URL) => url.searchParams.get('redirectTo') || '/admin/submissions';

export const load: PageServerLoad = (event) => {
	if (event.locals.user) {
		throw redirect(302, redirectTarget(event.url));
	}

	return {};
};

export const actions: Actions = {
	signInEmail: async (event) => {
		const formData = await event.request.formData();
		const email = formData.get('email')?.toString() ?? '';
		const password = formData.get('password')?.toString() ?? '';

		try {
			await auth.api.signInEmail({
				body: {
					email,
					password,
					callbackURL: '/auth/verification-success'
				}
			});
		} catch (error) {
			if (error instanceof APIError) {
				return fail(400, { message: error.message || 'Signin failed' });
			}

			return fail(500, { message: 'Unexpected error' });
		}

		throw redirect(302, redirectTarget(event.url));
	},
	signUpEmail: async (event) => {
		const formData = await event.request.formData();
		const email = formData.get('email')?.toString() ?? '';
		const password = formData.get('password')?.toString() ?? '';
		const name = formData.get('name')?.toString() ?? '';

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
