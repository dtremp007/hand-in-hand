import { en } from './en';
import { es } from './es';
import type { Locale, SiteContent } from './types';

const contentByLocale: Record<Locale, SiteContent> = { en, es };

export function getContent(locale: Locale): SiteContent {
	return contentByLocale[locale];
}

export function getLocaleFromPath(pathname: string): Locale {
	return pathname === '/es' || pathname.startsWith('/es/') ? 'es' : 'en';
}

export function stripLocalePrefix(pathname: string): string {
	if (pathname === '/es') return '/';
	if (pathname.startsWith('/es/')) return pathname.slice(3) || '/';
	return pathname;
}

export function localePath(locale: Locale, path: string): string {
	const normalized = path === '/' ? '' : path;
	if (path === '/churches') return '/churches';
	if (locale === 'es') return `/es${normalized}`;
	return normalized || '/';
}

export function switchLocalePath(pathname: string, targetLocale: Locale): string {
	const basePath = stripLocalePrefix(pathname.replace(/\/$/, '') || '/');
	return localePath(targetLocale, basePath);
}

export type { Locale, SiteContent } from './types';
