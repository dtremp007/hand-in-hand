import type { HowItWorksContent } from '../types';

export const howItWorks: HowItWorksContent = {
	label: 'The Tripod',
	title: 'How It Works',
	subtitle: 'Three people. One WhatsApp group. Nobody stands alone.',
	intro:
		'A tripod is a small, private WhatsApp group: two Seekers and one Victor. A tripod only stands when all three legs hold. Each person carries weight, and each person is carried.',
	image: {
		src: '/images/tripod.jpg',
		width: 1236,
		height: 648,
		alt: 'A wooden tripod in a forest clearing. Its two front legs are labelled Seeker, and the centre leg is labelled Victor.',
		caption: 'Two Seekers · One Victor'
	},
	rhythm: [
		{ when: 'Daily', what: 'Each Seeker sends ✅ for a day of victory or ❎ for a slip.' },
		{ when: 'Weekly', what: 'All three meet on a WhatsApp video call.' },
		{ when: 'Monthly', what: 'An Ambassador joins to observe and encourage.' }
	],
	roles: [
		{
			name: 'Victor',
			count: 'One per tripod',
			summary: 'Someone who has found freedom, walking beside two others who are still fighting.',
			duties: [
				'Have a strong relationship with Jesus Christ.',
				'Keep everything shared in strict confidence.',
				'Use scripture to help the Seekers find their way.',
				'Arrange a weekly WhatsApp video call for all three.',
				'Ask for a daily ✅ for victory or ❎ for a slip.',
				'When you meet, ask the three questions.',
				'Remind each other that you each have an important role to play.',
				'Put the emphasis on staying connected with Jesus Christ daily. That is where victory comes from.',
				'Pray for each other.'
			]
		},
		{
			name: 'Seeker',
			count: 'Two per tripod',
			summary: 'Someone serious about recovery, who will not walk the road alone.',
			duties: [
				'Have a personal relationship with Jesus Christ as Saviour.',
				'Be serious about recovery from addiction.',
				'Take every measure to clear hindrances from social media.',
				'Like Jesus, learn how to say no.',
				'Be open and honest at all times.',
				'Send a daily ✅ or ❎.',
				'Pray for each other.',
				'Be thankful when you have victory.'
			]
		}
	],
	questions: {
		label: 'When you come together',
		title: 'Three questions',
		items: [
			'How did you feed your soul?',
			'How did you help others?',
			'How did you feed your flesh?'
		]
	},
	ambassador: {
		label: 'Beyond the tripod',
		name: 'Ambassador',
		count: 'Supports several tripods',
		summary: 'Someone who watches over tripods and carries the ministry into churches.',
		duties: [
			'Join an assigned tripod at least once a month.',
			'Observe how the tripod is functioning and offer suggestions.',
			'Use the ongoing activity you see in the tripod to know how to help.',
			'Promote the ministry in churches, youth groups and men’s groups.',
			'Offer helpful critique to the ministry.',
			'Put ministry posters up in churches.',
			'Pray for the tripods and the ministry.'
		]
	},
	confidentiality:
		'What is said in a tripod stays in the tripod. Confidentiality is broken only where the law requires it.',
	cta: {
		title: 'Take your place in a tripod',
		body: 'Whether you are seeking freedom or ready to walk with someone, the first step is a short, confidential form.',
		button: 'Get Involved'
	}
};
