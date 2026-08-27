import { env } from '$env/dynamic/private';
import { Resend } from 'resend';
import { getSiteSettings } from '$lib/server/site-settings';
import {
	buildNotificationHtml,
	buildNotificationText,
	type NotificationEmailInput
} from '$lib/server/notification-email';
import { submissionKindLabels, type SubmissionKind } from '$lib/submission-display';

export type { SubmissionKind };

function adminOrigin() {
	if (env.VERCEL_PROJECT_PRODUCTION_URL) {
		return `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`;
	}

	return env.ORIGIN?.replace(/\/$/, '') ?? '';
}

function adminUrlFor(submissionId?: string) {
	const origin = adminOrigin();
	if (!origin) {
		return undefined;
	}

	return submissionId
		? `${origin}/admin/submissions/${submissionId}`
		: `${origin}/admin/submissions`;
}

export async function notifyFormRecipients(
	kind: SubmissionKind,
	fields: Record<string, unknown>,
	submissionId?: string
) {
	const apiKey = env.RESEND_API_KEY;
	const from = env.RESEND_FROM;

	if (!apiKey || !from) {
		console.warn('Skipping form notification: RESEND_API_KEY or RESEND_FROM is not set');
		return;
	}

	const settings = await getSiteSettings();
	const to = settings.notificationEmails ?? [];

	if (to.length === 0) {
		return;
	}

	const payload: NotificationEmailInput = {
		kind,
		fields,
		receivedAt: new Date(),
		adminUrl: adminUrlFor(submissionId)
	};
	const resend = new Resend(apiKey);
	const { error } = await resend.emails.send({
		from,
		to,
		subject: `New ${submissionKindLabels[kind]} submission`,
		text: buildNotificationText(payload),
		html: buildNotificationHtml(payload)
	});

	if (error) {
		throw new Error(error.message);
	}
}

export async function notifyFormRecipientsSafe(
	kind: SubmissionKind,
	fields: Record<string, unknown>,
	submissionId?: string
) {
	try {
		await notifyFormRecipients(kind, fields, submissionId);
	} catch (error) {
		console.error('Failed to send form notification email', error);
	}
}
