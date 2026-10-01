import type { SiteContent } from '../types';
import { about } from './about';
import { getInvolved } from './get-involved';
import { home } from './home';
import { processSteps } from './process-steps';
import { seo } from './seo';
import { submissionSuccess } from './submission-success';

export const es: SiteContent = {
	home,
	about,
	getInvolved,
	submissionSuccess,
	processSteps,
	seo
};
