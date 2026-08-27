import type { ContactContent } from '../types';

export const contact: ContactContent = {
	title: '\u00a1PONTE EN CONTACTO CON NOSOTROS!',
	subtitle:
		'SI TIENES ALGUNA PREGUNTA O COMENTARIO, RELLENA EL FORMULARIO Y NOS PONDREMOS EN CONTACTO CONTIGO!',
	form: {
		fields: [
			{ name: 'name', label: 'Nombre (obligatorio)', rows: 1, required: true },
			{ name: 'church_name', label: 'Nombre de la iglesia (obligatorio)', rows: 1, required: true },
			{ name: 'role', label: 'Rol (obligatorio)', rows: 1, required: true },
			{
				name: 'contact_info',
				label: 'Informaci\u00f3n de contacto (obligatorio)',
				rows: 1,
				required: true
			},
			{
				name: 'prompt',
				label: '\u00bfQu\u00e9 te motiv\u00f3 a contactarnos?',
				rows: 4,
				required: false
			}
		],
		submit: 'Iniciar la conversaci\u00f3n'
	}
};
