import type { HelpSomeoneContent } from '../types';

export const helpSomeone: HelpSomeoneContent = {
	title: 'Todo Empieza aqu\u00cd',
	subtitle: 'CAMINEMOS MANO EN MANO!',
	victorIntro:
		'Si has vencido a la pornograf\u00eda, \u00a1queremos animarte a que aproveches esta oportunidad para ayudar a un hermano! Como alguien que ha vencido, te pondremos en contacto (a trav\u00e9s de WhatsApp) con personas que a\u00fan luchan contra la adicci\u00f3n a la pornograf\u00eda. Caminar\u00e1s de la mano con estas personas, ayud\u00e1ndolas en sus dificultades y manteni\u00e9ndolas responsables.',
	guidelines: {
		title:
			'LOS REQUISITOS QUE DEBEN CUMPLIR LOS VENCEDORES PARA PARTICIPAR EN ESTE PROGRAMA SON LOS SIGUIENTES',
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
		expectation: 'Expectativa',
		title: 'Esto no es casual.',
		fields: [
			{ name: 'name', label: 'Nombre *', rows: 1, required: true },
			{ name: 'contact_info', label: 'Informaci\u00f3n de contacto *', rows: 1, required: true },
			{ name: 'location', label: 'Ubicaci\u00f3n (Opcional)', rows: 1, required: false },
			{
				name: 'experience',
				label: '\u00bfHas atravesado algo que ahora te permita ayudar a otra persona?',
				rows: 3,
				required: true
			},
			{
				name: 'readiness',
				label: '\u00bfPor qu\u00e9 te sientes listo para caminar con alguien?',
				rows: 3,
				required: true
			},
			{
				name: 'message',
				label: 'Algo m\u00e1s que quieras que sepamos (Opcional)',
				rows: 3,
				required: false
			}
		],
		checkbox:
			'Entiendo que esto es una responsabilidad, no algo casual. Me comprometo a estar presente para otra persona.',
		submit: 'Comienza aqu\u00ed',
		success: 'Gracias. Recibimos tu respuesta y haremos seguimiento con cuidado.'
	}
};
