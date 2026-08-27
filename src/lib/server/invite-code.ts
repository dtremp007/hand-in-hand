import { timingSafeEqual } from 'node:crypto';
import { env } from '$env/dynamic/private';

export function getInviteCodeFromSearchParams(searchParams: URLSearchParams) {
	return (searchParams.get('code') ?? searchParams.get('invite') ?? '').trim();
}

export function isAdminRegistrationEnabled() {
	return Boolean(env.ADMIN_INVITE_CODE?.trim());
}

export function adminInviteCodeIsValid(provided: string | null | undefined) {
	const expected = env.ADMIN_INVITE_CODE?.trim() ?? '';
	const given = provided?.trim() ?? '';

	if (!expected || !given) {
		return false;
	}

	const expectedBuffer = Buffer.from(expected);
	const givenBuffer = Buffer.from(given);

	if (expectedBuffer.length !== givenBuffer.length) {
		return false;
	}

	return timingSafeEqual(expectedBuffer, givenBuffer);
}
