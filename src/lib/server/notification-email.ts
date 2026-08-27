import {
	formatSubmissionValue,
	submissionFieldLabels,
	submissionKindLabels,
	type SubmissionKind
} from '$lib/submission-display';

export type NotificationEmailInput = {
	kind: SubmissionKind;
	fields: Record<string, unknown>;
	receivedAt: Date;
	adminUrl?: string;
};

const SERIF = "Georgia, 'Times New Roman', Times, serif";

function entries(fields: Record<string, unknown>) {
	return Object.entries(fields).filter(
		([, value]) => value !== null && value !== undefined && value !== ''
	);
}

function fieldLabel(key: string) {
	return submissionFieldLabels[key as keyof typeof submissionFieldLabels] ?? key;
}

function formatReceivedAt(receivedAt: Date) {
	return receivedAt.toLocaleString('en-CA', {
		dateStyle: 'long',
		timeStyle: 'short'
	});
}

export function escapeHtml(value: string) {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;');
}

export function buildNotificationText({
	kind,
	fields,
	receivedAt,
	adminUrl
}: NotificationEmailInput) {
	const lines = [
		'Hand In Hand',
		`New ${submissionKindLabels[kind]} submission`,
		`Received ${formatReceivedAt(receivedAt)}`,
		'',
		...entries(fields).map(([key, value]) => `${fieldLabel(key)}: ${formatSubmissionValue(value)}`),
		'',
		'This message is confidential and intended for ministry staff.'
	];

	if (adminUrl) {
		lines.push('', `Open in admin: ${adminUrl}`);
	}

	return lines.join('\n');
}

export function buildNotificationHtml({
	kind,
	fields,
	receivedAt,
	adminUrl
}: NotificationEmailInput) {
	const kindLabel = escapeHtml(submissionKindLabels[kind]);
	const received = escapeHtml(formatReceivedAt(receivedAt));
	const rows = entries(fields)
		.map(([key, value], index) => {
			const border = index === 0 ? '' : 'border-top:1px solid #4e4639;';
			return `<tr>
				<td style="${border}padding:16px 0;width:36%;vertical-align:top;font-family:${SERIF};font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#9a8f80;">
					${escapeHtml(fieldLabel(key))}
				</td>
				<td style="${border}padding:16px 0;vertical-align:top;font-family:${SERIF};font-size:17px;line-height:1.55;color:#e5e2e1;">
					${escapeHtml(formatSubmissionValue(value))}
				</td>
			</tr>`;
		})
		.join('');

	const action = adminUrl
		? `<tr>
				<td colspan="2" style="padding:28px 0 8px;">
					<a href="${escapeHtml(adminUrl)}" style="display:inline-block;background:#e9c176;color:#412d00;font-family:${SERIF};font-size:13px;letter-spacing:0.16em;text-transform:uppercase;text-decoration:none;padding:14px 24px;">
						Open in admin
					</a>
				</td>
			</tr>`
		: '';

	return `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>New ${kindLabel} submission</title>
</head>
<body style="margin:0;padding:0;background:#0e0e0e;">
	<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#0e0e0e;">
		<tr>
			<td align="center" style="padding:32px 16px;">
				<table role="presentation" width="600" cellspacing="0" cellpadding="0" style="width:100%;max-width:600px;background:#131313;border:1px solid #4e4639;">
					<tr>
						<td style="padding:32px 32px 24px;border-bottom:1px solid #4e4639;">
							<p style="margin:0;font-family:${SERIF};font-size:12px;letter-spacing:0.22em;text-transform:uppercase;color:#e9c176;">
								Hand In Hand
							</p>
							<h1 style="margin:12px 0 0;font-family:${SERIF};font-size:30px;line-height:1.15;font-weight:500;color:#e5e2e1;">
								New form submission
							</h1>
						</td>
					</tr>
					<tr>
						<td style="padding:24px 32px 8px;">
							<p style="margin:0;font-family:${SERIF};font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:#e9c176;">
								${kindLabel}
							</p>
							<p style="margin:8px 0 0;font-family:${SERIF};font-size:15px;line-height:1.6;color:#d1c5b4;">
								Received ${received}
							</p>
						</td>
					</tr>
					<tr>
						<td style="padding:8px 32px 24px;">
							<table role="presentation" width="100%" cellspacing="0" cellpadding="0">
								${rows}
								${action}
							</table>
						</td>
					</tr>
					<tr>
						<td style="padding:20px 32px;background:#1c1b1b;border-top:1px solid #4e4639;">
							<p style="margin:0;font-family:${SERIF};font-size:13px;line-height:1.6;color:#9a8f80;">
								This message is confidential and intended for ministry staff. You are receiving it because this address is listed for Hand In Hand form notifications.
							</p>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>
</html>`;
}
