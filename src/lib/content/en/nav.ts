import type { NavContent } from '../types';

export const nav: NavContent = {
	links: [
		{ href: '/', label: 'Home', key: 'home' },
		{ href: '/get-help', label: 'Get Help', key: 'get-help' },
		{ href: '/help-someone', label: 'Help Someone', key: 'help-someone' },
		{ href: '/churches', label: 'Churches', key: 'churches' },
		{ href: '/about', label: 'About', key: 'about' },
		{ href: '/zoom-schedule', label: 'Zoom Schedule', key: 'zoom-schedule' }
	],
	getHelpNow: 'Get Help Now',
	zoomSchedule: 'Zoom Schedule',
	languageSwitch: 'Espa\u00f1ol'
};
