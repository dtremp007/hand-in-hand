import { env } from '$env/dynamic/private';

export type PublicFormAction = 'contact' | 'get-involved';

const MIN_FILL_MS = 3_000;
const MAX_TOKEN_LENGTH = 2_048;

type SiteverifyResult = {
	success?: boolean;
	action?: string;
	hostname?: string;
};

export type FormGuardResult = { ok: true } | { ok: false; silent: boolean };

export function publicFormPageData() {
	return {
		formStartedAt: Date.now(),
		turnstileSiteKey: env.TURNSTILE_SITE_KEY?.trim() ?? ''
	};
}

function expectedHostnames() {
	const hosts = new Set(
		(env.TURNSTILE_HOSTNAMES ?? '')
			.split(',')
			.map((hostname) => hostname.trim())
			.filter(Boolean)
	);

	const vercelHost = env.VERCEL_URL?.trim().replace(/^https?:\/\//, '').split('/')[0];
	if (vercelHost) {
		hosts.add(vercelHost);
	}

	return hosts;
}

export async function guardPublicForm(options: {
	formData: FormData;
	getClientAddress: () => string;
	action: PublicFormAction;
}): Promise<FormGuardResult> {
	const honeypot = options.formData.get('website')?.toString() ?? '';
	if (honeypot.trim()) {
		return { ok: false, silent: true };
	}

	const startedRaw = options.formData.get('form_started_at')?.toString() ?? '';
	const startedAt = Number(startedRaw);
	if (!Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS) {
		return { ok: false, silent: true };
	}

	const token = options.formData.get('cf-turnstile-response');
	const secret = env.TURNSTILE_SECRET_KEY?.trim() ?? '';
	const hosts = expectedHostnames();

	if (
		typeof token !== 'string' ||
		token.length === 0 ||
		token.length > MAX_TOKEN_LENGTH ||
		!secret ||
		hosts.size === 0
	) {
		return { ok: false, silent: false };
	}

	let result: SiteverifyResult;
	try {
		const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			signal: AbortSignal.timeout(10_000),
			body: new URLSearchParams({
				secret,
				response: token,
				remoteip: options.getClientAddress()
			})
		});

		if (!response.ok) {
			return { ok: false, silent: false };
		}

		result = (await response.json()) as SiteverifyResult;
	} catch {
		return { ok: false, silent: false };
	}

	if (
		result.success !== true ||
		result.action !== options.action ||
		typeof result.hostname !== 'string' ||
		!hosts.has(result.hostname)
	) {
		return { ok: false, silent: false };
	}

	return { ok: true };
}
