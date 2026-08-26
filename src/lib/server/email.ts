import { env } from '$env/dynamic/private';
import { Resend } from 'resend';
import { getSiteSettings } from '$lib/server/site-settings';
import {
	formatSubmissionValue,
	submissionFieldLabels,
	submissionKindLabels,
	type SubmissionKind
} from '$lib/submission-display';

export type { SubmissionKind };

function entries(fields: Record<string, unknown>) {
	return Object.entries(fields).filter(([, value]) => value !== null && value !== undefined && value !== '');
}

function buildText(kind: SubmissionKind, fields: Record<string, unknown>, receivedAt: Date) {
	const lines = [
		`New ${submissionKindLabels[kind]} submission`,
		`Received: ${receivedAt.toISOString()}`,
		'',
		...entries(fields).map(
			([key, value]) =>
				`${submissionFieldLabels[key as keyof typeof submissionFieldLabels] ?? key}: ${formatSubmissionValue(value)}`
		)
	];
	return lines.join('\n');
}

function buildHtml(kind: SubmissionKind, fields: Record<string, unknown>, receivedAt: Date) {
	const rows = entries(fields)
		.map(
			([key, value]) =>
				`<tr><th scope="row">${escapeHtml(submissionFieldLabels[key as keyof typeof submissionFieldLabels] ?? key)}</th><td>${escapeHtml(formatSubmissionValue(value))}</td></tr>`
		)
		.join('');

	return `<p>New <strong>${submissionKindLabels[kind]}</strong> submission</p>
<p>Received ${escapeHtml(receivedAt.toISOString())}</p>
<table>${rows}</table>`;
}

function escapeHtml(value: string) {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;');
}

export async function notifyFormRecipients(
	kind: SubmissionKind,
	fields: Record<string, unknown>
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

	const receivedAt = new Date();
	const resend = new Resend(apiKey);
	const { error } = await resend.emails.send({
		from,
		to,
		subject: `New ${submissionKindLabels[kind]} submission`,
		text: buildText(kind, fields, receivedAt),
		html: buildHtml(kind, fields, receivedAt)
	});

	if (error) {
		throw new Error(error.message);
	}
}

export async function notifyFormRecipientsSafe(
	kind: SubmissionKind,
	fields: Record<string, unknown>
) {
	try {
		await notifyFormRecipients(kind, fields);
	} catch (error) {
		console.error('Failed to send form notification email', error);
	}
}
