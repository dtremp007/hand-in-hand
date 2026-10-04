import type { HowItWorksContent } from '../types';

export const howItWorks: HowItWorksContent = {
	label: 'Das Dreibein',
	title: 'So funktioniert es',
	subtitle: 'Drei Menschen. Eine WhatsApp-Gruppe. Niemand steht allein.',
	intro:
		'Ein Dreibein ist eine kleine, private WhatsApp-Gruppe: zwei Suchende und ein Sieger. Ein Dreibein steht nur, wenn alle drei Beine halten. Jeder trägt mit, und jeder wird getragen.',
	image: {
		src: '/images/tripod.jpg',
		width: 1236,
		height: 648,
		alt: 'Ein hölzernes Stativ auf einer Waldlichtung. Die beiden vorderen Beine sind mit „Seeker“ beschriftet, das mittlere Bein mit „Victor“.',
		caption: 'Zwei Suchende · Ein Sieger'
	},
	rhythm: [
		{
			when: 'Täglich',
			what: 'Jeder Suchende schickt ✅ für einen Tag des Sieges oder ❎ für einen Rückfall.'
		},
		{ when: 'Wöchentlich', what: 'Alle drei treffen sich zu einem WhatsApp-Videoanruf.' },
		{ when: 'Monatlich', what: 'Ein Botschafter kommt dazu, um zu beobachten und zu ermutigen.' }
	],
	roles: [
		{
			name: 'Sieger',
			count: 'Einer pro Dreibein',
			summary:
				'Jemand, der Freiheit gefunden hat und zwei anderen zur Seite steht, die noch kämpfen.',
			duties: [
				'Eine starke Beziehung zu Jesus Christus haben.',
				'Alles Geteilte streng vertraulich behandeln.',
				'Mit der Heiligen Schrift den Suchenden helfen, ihren Weg zu finden.',
				'Einen wöchentlichen WhatsApp-Videoanruf für alle drei organisieren.',
				'Täglich um ein ✅ für Sieg oder ❎ für einen Rückfall bitten.',
				'Beim Treffen die drei Fragen stellen.',
				'Einander daran erinnern, dass jeder eine wichtige Rolle spielt.',
				'Großen Wert darauf legen, täglich mit Jesus Christus verbunden zu bleiben. Von dort kommt der Sieg.',
				'Füreinander beten.'
			]
		},
		{
			name: 'Suchender',
			count: 'Zwei pro Dreibein',
			summary:
				'Jemand, der es mit seiner Genesung ernst meint und den Weg nicht allein gehen will.',
			duties: [
				'Eine persönliche Beziehung zu Jesus Christus als Retter haben.',
				'Es mit der Befreiung von der Sucht ernst meinen.',
				'Alle Maßnahmen ergreifen, um Hindernisse in den sozialen Medien zu beseitigen.',
				'Wie Jesus lernen, Nein zu sagen.',
				'Jederzeit offen und ehrlich sein.',
				'Täglich ein ✅ oder ❎ schicken.',
				'Füreinander beten.',
				'Dankbar sein, wenn du Sieg erlebst.'
			]
		}
	],
	questions: {
		label: 'Wenn ihr zusammenkommt',
		title: 'Drei Fragen',
		items: [
			'Wie hast du deine Seele genährt?',
			'Wie hast du anderen geholfen?',
			'Wie hast du dein Fleisch genährt?'
		]
	},
	ambassador: {
		label: 'Über das Dreibein hinaus',
		name: 'Botschafter',
		count: 'Begleitet mehrere Dreibeine',
		summary: 'Jemand, der über Dreibeine wacht und den Dienst in die Gemeinden trägt.',
		duties: [
			'Mindestens einmal im Monat einem zugewiesenen Dreibein beitreten.',
			'Beobachten, wie das Dreibein funktioniert, und Vorschläge machen.',
			'Die laufende Aktivität im Dreibein nutzen, um zu erkennen, wie du helfen kannst.',
			'Den Dienst in Gemeinden, Jugendgruppen und Männergruppen bekannt machen.',
			'Dem Dienst hilfreiche Rückmeldungen geben.',
			'Plakate des Dienstes in Gemeinden aufhängen.',
			'Für die Dreibeine und den Dienst beten.'
		]
	},
	confidentiality:
		'Was in einem Dreibein gesagt wird, bleibt im Dreibein. Die Vertraulichkeit wird nur dort gebrochen, wo das Gesetz es verlangt.',
	cta: {
		title: 'Nimm deinen Platz in einem Dreibein ein',
		body: 'Ob du Freiheit suchst oder bereit bist, jemanden zu begleiten: Der erste Schritt ist ein kurzes, vertrauliches Formular.',
		button: 'Mitmachen'
	}
};
