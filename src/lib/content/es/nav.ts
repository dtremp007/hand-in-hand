import type { NavContent } from '../types';

export const nav: NavContent = {
	links: [
		{ href: '/es', label: 'Inicio', key: 'home' },
		{ href: '/es/get-help', label: 'Busca ayuda', key: 'get-help' },
		{ href: '/es/help-someone', label: 'Ayuda a alguien', key: 'help-someone' },
		{ href: '/churches', label: 'Iglesias', key: 'churches' },
		{ href: '/es/about', label: 'Acerca de', key: 'about' },
		{ href: '/es/zoom-schedule', label: 'Horario Zoom', key: 'zoom-schedule' }
	],
	getHelpNow: 'Busca ayuda',
	zoomSchedule: 'Horario Zoom',
	languageSwitch: 'English'
};
