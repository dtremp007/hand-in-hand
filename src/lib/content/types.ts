export type Locale = 'en' | 'es' | 'de';

export type HomeContent = {
	hero: { title: string; subtitle: string; getHelp: string; learnMore: string };
	foundation: { label: string; heading: string };
	phases: { title: string; scripture: string; heading: string; body: string }[];
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
	mission: {
		title: string;
		subtitle: string;
		paragraphs: string[];
		diagram: { src: string; width: number; height: number; alt: string; caption: string };
	};
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
	};
};

export type SubmissionSuccessContent = {
	title: string;
	body: string;
	getInvolvedBody: string;
	homeCta: string;
};

export type SeoContent = Record<
	string,
	{
		title: string;
		description: string;
	}
>;

export type ProcessStepsContent = {
	title: string;
	steps: { title: string; body: string }[];
};

export type SiteContent = {
	home: HomeContent;
	about: AboutContent;
	getInvolved: GetInvolvedContent;
	submissionSuccess: SubmissionSuccessContent;
	processSteps: ProcessStepsContent;
	seo: SeoContent;
};
