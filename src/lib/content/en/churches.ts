import type { ChurchesContent } from '../types';

export const churches: ChurchesContent = {
	title: 'We recognize that churches are already carrying a great deal.',
	subtitle: ['This ministry is not here to replace that.', 'It exists to walk alongside it.'],
	focus: {
		title: 'Focus',
		intro: 'One thing: walking with people one-on-one.',
		items: [
			'showing up consistently',
			'being honest, not harsh, but real',
			'staying connected over time'
		]
	},
	boundaries: {
		title: 'Boundaries',
		intro: 'What this is not.',
		items: [
			'not replacing leadership',
			'not taking authority',
			'not stepping outside the church'
		]
	},
	trust: {
		label: 'A Sacred Trust',
		quote:
			'We take confidentiality seriously. Conversations are handled carefully. Nothing is shared carelessly.'
	},
	howItWorks: {
		title: 'How this can work',
		items: [
			'Leaders can refer individuals who need focused, long-term walking alongside.',
			'Support can happen quietly, without drawing unnecessary attention.',
			'Communication stays appropriate and agreed upon between all parties.'
		]
	},
	cta: {
		quote:
			"If you'd like to understand how this could work alongside your church, we're open to that conversation.",
		button: 'Start a Conversation'
	}
};
