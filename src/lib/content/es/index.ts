import type { SiteContent } from '../types';
import { about } from './about';
import { churches } from './churches';
import { contact } from './contact';
import { getInvolved } from './get-involved';
import { home } from './home';
import { processSteps } from './process-steps';
import { seo } from './seo';
import { zoomSchedule } from './zoom-schedule';

export const es: SiteContent = {
	home,
	about,
	getInvolved,
	contact,
	zoomSchedule,
	churches,
	processSteps,
	seo
};
