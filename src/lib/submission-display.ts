export const submissionKindLabels = {
	get_involved: 'Get Involved',
	get_help: 'Get Help',
	help_someone: 'Help Someone',
	contact: 'Contact'
} as const;

export type SubmissionKind = keyof typeof submissionKindLabels;

export const submissionFieldLabels = {
	name: 'Name',
	churchName: 'Church',
	role: 'Role',
	contactInfo: 'Contact',
	email: 'Email',
	age: 'Age',
	language: 'Language',
	location: 'Location',
	partner: 'Partner',
	experience: 'Experience',
	readiness: 'Readiness',
	prompt: 'Prompt',
	message: 'Message',
	confirmed: 'Confirmed'
} as const;

export type SubmissionFieldKey = keyof typeof submissionFieldLabels;

const fieldOrder: SubmissionFieldKey[] = [
	'name',
	'contactInfo',
	'email',
	'churchName',
	'role',
	'age',
	'language',
	'location',
	'partner',
	'experience',
	'readiness',
	'prompt',
	'message',
	'confirmed'
];

export function formatSubmissionValue(value: unknown) {
	if (typeof value === 'boolean') {
		return value ? 'Yes' : 'No';
	}
	return String(value);
}

export function submissionDetailRows(item: {
	kind: SubmissionKind;
} & Record<string, unknown>) {
	return fieldOrder.flatMap((key) => {
		if (key === 'confirmed' && item.kind !== 'get_involved') {
			return [];
		}

		const value = item[key];
		if (value === null || value === undefined || value === '') {
			return [];
		}
		return [{ key, label: submissionFieldLabels[key], value: formatSubmissionValue(value) }];
	});
}
