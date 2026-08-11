import type { GetHelpContent } from '../types';

export const getHelp: GetHelpContent = {
	intro:
		'If you\u2019re an individual who struggles with pornography, and you\u2019re ready to find freedom, we\u2019re here to help you. After completing this form, we\u2019ll connect you with an individual who has been in your shoes, and is now willing to walk hand-in-hand with you, helping you to walk hand-in-hand with God, who gives freedom to anyone who seeks Him.',
	form: {
		title: 'Request Connection',
		subtitle: 'Taking the first step toward real change.',
		fields: [
			{
				name: 'full_name',
				id: 'full_name',
				label: 'Name (Required)',
				placeholder: 'Your full name',
				type: 'text',
				required: true
			},
			{
				name: 'contact_info',
				id: 'contact_info',
				label: 'Contact Information (Phone or Email, Required)',
				placeholder: 'How can we reach you?',
				type: 'text',
				required: true
			},
			{
				name: 'location',
				id: 'location',
				label: 'Location (Optional)',
				placeholder: 'City or Region',
				type: 'text',
				required: false
			}
		],
		messageLabel: 'Short Message (Optional)',
		messagePlaceholder: 'Briefly, how can we help?',
		checkbox: 'I understand this is a step toward real change',
		quote: 'If you\u2019re here, something in you already knows. Take the first step.',
		submit: 'Take The First Step',
		success: 'Thank you. We received your request and will follow up with care.'
	}
};
