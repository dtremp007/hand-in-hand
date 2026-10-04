import type { HowItWorksContent } from '../types';

export const howItWorks: HowItWorksContent = {
	label: 'El trípode',
	title: 'Cómo funciona',
	subtitle: 'Tres personas. Un grupo de WhatsApp. Nadie está solo.',
	intro:
		'Un trípode es un grupo pequeño y privado de WhatsApp: dos aspirantes y un vencedor. Un trípode solo se sostiene cuando las tres patas resisten. Cada persona carga peso, y cada persona es sostenida.',
	image: {
		src: '/images/tripod.jpg',
		width: 1236,
		height: 648,
		alt: 'Un trípode de madera en un claro del bosque. Sus dos patas delanteras llevan la palabra «Seeker» y la pata central la palabra «Victor».',
		caption: 'Dos aspirantes · Un vencedor'
	},
	rhythm: [
		{
			when: 'Cada día',
			what: 'Cada aspirante envía ✅ por un día de victoria o ❎ por una caída.'
		},
		{ when: 'Cada semana', what: 'Los tres se reúnen en una videollamada de WhatsApp.' },
		{ when: 'Cada mes', what: 'Un embajador se une para observar y animar.' }
	],
	roles: [
		{
			name: 'Vencedor',
			count: 'Uno por trípode',
			summary: 'Alguien que ha encontrado libertad y camina junto a dos personas que aún luchan.',
			duties: [
				'Tener una relación firme con Jesucristo.',
				'Guardar en estricta confidencialidad todo lo compartido.',
				'Usar las Escrituras para ayudar a los aspirantes a encontrar su camino.',
				'Organizar una videollamada semanal de WhatsApp para los tres.',
				'Pedir cada día un ✅ por la victoria o un ❎ por una caída.',
				'Al reunirse, hacer las tres preguntas.',
				'Recordarse unos a otros que cada uno tiene un papel importante.',
				'Poner énfasis en mantenerse conectado con Jesucristo cada día. De ahí viene la victoria.',
				'Orar unos por otros.'
			]
		},
		{
			name: 'Aspirante',
			count: 'Dos por trípode',
			summary: 'Alguien que toma en serio su recuperación y no quiere recorrer el camino solo.',
			duties: [
				'Tener una relación personal con Jesucristo como Salvador.',
				'Tomar en serio la recuperación de la adicción.',
				'Tomar todas las medidas para quitar obstáculos en las redes sociales.',
				'Como Jesús, aprender a decir que no.',
				'Ser abierto y sincero en todo momento.',
				'Enviar cada día un ✅ o un ❎.',
				'Orar unos por otros.',
				'Ser agradecido cuando tengas victoria.'
			]
		}
	],
	questions: {
		label: 'Cuando se reúnan',
		title: 'Tres preguntas',
		items: ['¿Cómo alimentaste tu alma?', '¿Cómo ayudaste a otros?', '¿Cómo alimentaste tu carne?']
	},
	ambassador: {
		label: 'Más allá del trípode',
		name: 'Embajador',
		count: 'Acompaña a varios trípodes',
		summary: 'Alguien que cuida de los trípodes y lleva el ministerio a las iglesias.',
		duties: [
			'Unirse a un trípode asignado al menos una vez al mes.',
			'Observar cómo funciona el trípode y ofrecer sugerencias.',
			'Usar la actividad que ve en el trípode para saber cómo ayudar.',
			'Promover el ministerio en iglesias, grupos de jóvenes y grupos de hombres.',
			'Ofrecer críticas constructivas al ministerio.',
			'Colocar carteles del ministerio en las iglesias.',
			'Orar por los trípodes y por el ministerio.'
		]
	},
	confidentiality:
		'Lo que se dice en un trípode se queda en el trípode. La confidencialidad solo se rompe cuando la ley lo exige.',
	cta: {
		title: 'Ocupa tu lugar en un trípode',
		body: 'Ya sea que busques libertad o estés listo para acompañar a alguien, el primer paso es un formulario breve y confidencial.',
		button: 'Involúcrate'
	}
};
