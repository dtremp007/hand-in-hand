import type { SiteContent } from '../types';
import { about } from './about';
import { contact } from './contact';
import { footer } from './footer';
import { getHelp } from './get-help';
import { helpSomeone } from './help-someone';
import { home } from './home';
import { nav } from './nav';
import { seo } from './seo';
import { zoomSchedule } from './zoom-schedule';

export const en: SiteContent = {
	home,
	about,
	getHelp,
	helpSomeone,
	contact,
	zoomSchedule,
	nav,
	footer,
	seo
};
