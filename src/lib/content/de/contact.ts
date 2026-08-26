import type { ContactContent } from '../types';

export const contact: ContactContent = {
	title: 'Nimm Kontakt mit uns auf',
	subtitle:
		'Bei Fragen, Anliegen oder Anmerkungen fülle bitte das folgende Formular aus – wir melden uns dann bei dir.',
	form: {
		fields: [
			{ name: 'name', label: 'Name (erforderlich)', rows: 1, required: true },
			{ name: 'church_name', label: 'Name der Gemeinde (erforderlich)', rows: 1, required: true },
			{ name: 'role', label: 'Rolle (erforderlich)', rows: 1, required: true },
			{ name: 'contact_info', label: 'Kontaktdaten (erforderlich)', rows: 1, required: true },
			{
				name: 'prompt',
				label: 'Was hat dich dazu bewogen, uns zu schreiben?',
				rows: 4,
				required: false
			}
		],
		submit: 'Absenden',
		success: 'Danke. Wir haben deine Nachricht erhalten und werden uns bei dir melden.'
	}
};
