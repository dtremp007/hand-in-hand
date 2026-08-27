import type { ContactContent } from '../types';

export const contact: ContactContent = {
	title: 'Get in Contact!',
	subtitle:
		'For questions, concerns, or comments, please fill out the form and we\u2019ll be in touch!',
	form: {
		fields: [
			{ name: 'name', label: 'Name (required)', rows: 1, required: true },
			{ name: 'church_name', label: 'Church Name (required)', rows: 1, required: true },
			{ name: 'role', label: 'Role (required)', rows: 1, required: true },
			{ name: 'contact_info', label: 'Contact Information (required)', rows: 1, required: true },
			{ name: 'prompt', label: 'What prompted you to reach out?', rows: 4, required: false }
		],
		submit: 'Start the Conversation'
	}
};
