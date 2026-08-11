import type { SiteContent } from '../types';
import { about } from './about';
import { churches } from './churches';
import { contact } from './contact';
import { getHelp } from './get-help';
import { helpSomeone } from './help-someone';
import { home } from './home';
import { seo } from './seo';
import { zoomSchedule } from './zoom-schedule';

export const es: SiteContent = {
	home,
	about,
	getHelp,
	helpSomeone,
	contact,
	zoomSchedule,
	churches,
	seo
};
