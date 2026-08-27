import type { User, Session } from 'better-auth';

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			user?: User;
			session?: Session;
		}

		// interface Error {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface Window {
		__onTurnstileLoad?: () => void;
		turnstile?: {
			render: (
				element: HTMLElement,
				options: {
					sitekey: string;
					action?: string;
					theme?: 'light' | 'dark' | 'auto';
					language?: string;
				}
			) => string;
			reset: (widgetId: string) => void;
			remove: (widgetId: string) => void;
		};
	}
}

export {};
