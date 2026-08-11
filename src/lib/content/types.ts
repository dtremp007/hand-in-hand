export type Locale = 'en' | 'es';

export type HomeContent = {
	hero: { title: string; subtitle: string; getHelp: string; learnMore: string };
	phases: { title: string; body: string }[];
	testimony: { title: string; description: string };
	statistics: string;
	revelation: string;
	romans: string;
	references: { label: string; url: string; accessed: string };
	confidentiality: { label: string; quote: string };
	unseen: { title: string; body: string };
	cta: { quote: string; button: string };
};

export type AboutContent = {
	mission: { title: string; subtitle: string; paragraphs: string[] };
	whoWeAre: { title: string; intro: string; dedication: string };
	bob: { name: string; role: string; bio: string };
	acknowledgements: { title: string; intro: string; items: string[] };
	cta: { button: string };
};

export type GetInvolvedContent = {
	title: string;
	subtitle: string;
	victorIntro: string;
	seekerIntro: string;
	guidelines: { title: string; items: string[] };
	form: {
		title: string;
		subtitle: string;
		firstName: string;
		lastName: string;
		whatsapp: string;
		whatsappHint: string;
		email: string;
		age: string;
		location: string;
		locationHint: string;
		language: string;
		languageHint: string;
		situation: string;
		roleLabel: string;
		victor: string;
		seeker: string;
		partner: string;
		partnerHint: string;
		confidentialityTitle: string;
		confidentiality: string;
		checkbox: string;
		submit: string;
		success: string;
	};
};

export type ContactContent = {
	title: string;
	subtitle: string;
	form: {
		fields: { name: string; label: string; rows: number; required: boolean }[];
		submit: string;
		success: string;
	};
};

export type ZoomScheduleContent = {
	title: string;
	description: string;
	hope: string;
	noEvents: string;
	cta: string;
};

export type ChurchesContent = {
	title: string;
	subtitle: string[];
	focus: { title: string; intro: string; items: string[] };
	boundaries: { title: string; intro: string; items: string[] };
	trust: { label: string; quote: string };
	howItWorks: { title: string; items: string[] };
	cta: { quote: string; button: string };
};

export type SeoContent = Record<
	string,
	{
		title: string;
		description: string;
	}
>;

export type SiteContent = {
	home: HomeContent;
	about: AboutContent;
	getInvolved: GetInvolvedContent;
	contact: ContactContent;
	zoomSchedule: ZoomScheduleContent;
	churches: ChurchesContent;
	seo: SeoContent;
};
