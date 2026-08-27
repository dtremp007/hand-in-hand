import type { GetInvolvedContent } from '../types';

export const getInvolved: GetInvolvedContent = {
	title: 'Todo Empieza aqu\u00ed',
	subtitle: '\u00a1Caminemos mano en mano!',
	victorIntro:
		'Si has vencido a la pornograf\u00eda, \u00a1queremos animarte a que aproveches esta oportunidad para ayudar a un hermano! Como alguien que ha vencido, te pondremos en contacto (a trav\u00e9s de WhatsApp) con personas que a\u00fan luchan contra la adicci\u00f3n a la pornograf\u00eda. Caminar\u00e1s de la mano con estas personas, ayud\u00e1ndolas en sus dificultades y manteni\u00e9ndolas responsables.',
	seekerIntro:
		'Si eres una persona que lucha contra la pornograf\u00eda y est\u00e1s listo para encontrar la libertad, estamos aqu\u00ed para ayudarte. Despu\u00e9s de completar este formulario, te pondremos en contacto con alguien que ha estado en tu situaci\u00f3n y que ahora est\u00e1 dispuesto a acompa\u00f1arte, ayud\u00e1ndote a caminar de la mano de Dios, quien da libertad a cualquiera que lo busque.',
	guidelines: {
		title: 'Los requisitos que deben cumplir los participantes para formar parte de este programa son los siguientes:',
		items: [
			'Tener una relaci\u00f3n significativa, comprometida y constante con Jesucristo.',
			'Deben saber escuchar y mostrarse dispuestos a escuchar atentamente a la persona a la que est\u00e1n ayudando.',
			'Es fundamental que los Vencedores no se desv\u00eden del tema cuando hablan con su mentorado.',
			'Los Vencedores deben ser personas que tomen la iniciativa y se aseguren de que este ministerio cumpla su misi\u00f3n.',
			'Los Vencedores deben estar disponibles para sus mentorados y asegurarse de satisfacer sus necesidades.',
			'Es importante que el Vencedor tenga conocimientos b\u00edblicos, ya que este ministerio se basa en la Biblia y en la comunicaci\u00f3n con Dios a trav\u00e9s de su palabra.',
			'En ning\u00fan caso el Vencedor debe romper la confidencialidad, excepto cuando lo exija la ley.'
		]
	},
	form: {
		title: 'Invol\u00facrate',
		subtitle: 'Cu\u00e9ntanos un poco sobre ti para poder conectarte con cuidado.',
		firstName: 'Nombre',
		lastName: 'Apellido',
		whatsapp: 'N\u00famero de WhatsApp',
		whatsappHint: 'Incluye el c\u00f3digo de pa\u00eds (por ejemplo, +52).',
		email: 'Correo electr\u00f3nico',
		age: 'Edad',
		location: 'Iglesia local / Ubicaci\u00f3n',
		locationHint: 'Por favor ingresa tu iglesia local y/o tu ubicaci\u00f3n.',
		language: 'Idioma',
		languageHint: 'Idioma de preferencia',
		situation: 'Por favor, describe tu situaci\u00f3n',
		roleLabel: '\u00bfEst\u00e1s aqu\u00ed como vencedor o aspirante?',
		victor: 'Vencedor',
		seeker: 'Aspirante',
		partner: 'Acompa\u00f1ante previo',
		partnerHint: 'Si ya est\u00e1s trabajando con un acompa\u00f1ante, por favor ingresa su nombre aqu\u00ed.',
		confidentialityTitle: 'Acuerdo de confidencialidad',
		confidentiality:
			'Al marcar esta casilla, me comprometo a mantener en total confidencialidad todo lo que se hable dentro de este programa.',
		checkbox: 'Me comprometo',
		submit: 'Enviar'
	}
};
