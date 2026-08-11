import type { HelpSomeoneContent } from '../types';

export const helpSomeone: HelpSomeoneContent = {
	title: 'It All Begins Here',
	subtitle: 'Let\u2019s walk Hand-In-Hand!',
	victorIntro:
		'If you\u2019re a Victor over pornography, we want to encourage you to take this opportunity to help a brother! As a victor, you\u2019ll be connected (via WhatsApp) with individuals who are still struggling with a pornography addiction. You\u2019ll walk hand-in-hand with these individuals, helping them through struggles and keep them accountable.',
	guidelines: {
		title: 'requirements participants must meet to take part in this program are as follows:',
		items: [
			'Have a meaningful, committed, and consistent relationship with Jesus Christ.',
			'Be good listeners and willing to give full attention to the person they are helping.',
			'Stay focused during conversations with the person they are mentoring.',
			'Take initiative and help make sure this ministry fulfills its mission.',
			'Be available to the people they mentor and help meet their needs.',
			'Have a solid understanding of the Bible, since this ministry is built on Scripture and communication with God through His Word.',
			'Under no circumstances should a Victor break confidentiality, except when required by law.'
		]
	},
	form: {
		expectation: 'Expectation',
		title: 'This isn\u2019t casual.',
		fields: [
			{ name: 'name', label: 'Name *', rows: 1, required: true },
			{ name: 'contact_info', label: 'Contact Info *', rows: 1, required: true },
			{ name: 'location', label: 'Location (Optional)', rows: 1, required: false },
			{
				name: 'experience',
				label: 'Have you walked through something you can now help someone else with?',
				rows: 3,
				required: true
			},
			{
				name: 'readiness',
				label: 'Why do you feel ready to walk with someone?',
				rows: 3,
				required: true
			},
			{
				name: 'message',
				label: 'Anything else you want us to know (Optional)',
				rows: 3,
				required: false
			}
		],
		checkbox:
			'I understand this is a responsibility, not something casual. I am committing to showing up and being present for someone else.',
		submit: 'Start Here',
		success: 'Thank you. We received your response and will follow up thoughtfully.'
	}
};
