import type { GetHelpContent } from '../types';

export const getHelp: GetHelpContent = {
	intro:
		'Si eres una persona que lucha contra la pornograf\u00eda y est\u00e1s listo para encontrar la libertad, estamos aqu\u00ed para ayudarte. Despu\u00e9s de completar este formulario, te pondremos en contacto con alguien que ha estado en tu situaci\u00f3n y que ahora est\u00e1 dispuesto a acompa\u00f1arte, ayud\u00e1ndote a caminar de la mano de Dios, quien da libertad a cualquiera que lo busque..',
	form: {
		title: 'Solicitar conexi\u00f3n',
		subtitle: 'Dar el primer paso hacia un cambio real.',
		fields: [
			{
				name: 'full_name',
				id: 'full_name',
				label: 'Nombre (Obligatorio)',
				placeholder: 'Tu nombre completo',
				type: 'text',
				required: true
			},
			{
				name: 'contact_info',
				id: 'contact_info',
				label: 'Informaci\u00f3n de contacto (Tel\u00e9fono o correo, Obligatorio)',
				placeholder: '\u00bfC\u00f3mo podemos contactarte?',
				type: 'text',
				required: true
			},
			{
				name: 'location',
				id: 'location',
				label: 'Ubicaci\u00f3n (Opcional)',
				placeholder: 'Ciudad o regi\u00f3n',
				type: 'text',
				required: false
			}
		],
		messageLabel: 'Mensaje breve (Opcional)',
		messagePlaceholder: 'Brevemente, \u00bfc\u00f3mo podemos ayudarte?',
		checkbox: 'Entiendo que este es un paso hacia un cambio real',
		quote: 'Si est\u00e1s aqu\u00ed, algo en ti ya lo sabe. Da el primer paso.',
		submit: 'Da el primer paso',
		success: 'Gracias. Recibimos tu solicitud y haremos seguimiento con cuidado.'
	}
};
