<script lang="ts">
	import { page } from '$app/state';
	import {
		getContent,
		getLocaleFromPath,
		stripLocalePrefix,
		switchLocalePath,
		type Locale
	} from '$lib/content';
	import './layout.css';

	let { children } = $props();

	const siteName = 'Hand In Hand';
	const defaultDescription =
		'Confidential, faith-rooted support connecting people with someone steady who will walk alongside them.';

	let pathname = $derived(page.url.pathname.replace(/\/$/, '') || '/');
	let locale = $derived<Locale>(getLocaleFromPath(pathname));
	let contentPath = $derived(stripLocalePrefix(pathname));
	let seo = $derived(
		getContent(locale).seo[contentPath] ?? { title: siteName, description: defaultDescription }
	);
	let title = $derived(`${seo.title} | ${siteName}`);
	let canonical = $derived(new URL(pathname, page.url.origin).href);
	let alternateEn = $derived(new URL(switchLocalePath(pathname, 'en'), page.url.origin).href);
	let alternateEs = $derived(new URL(switchLocalePath(pathname, 'es'), page.url.origin).href);
	let isPrivateRoute = $derived(pathname === '/login' || pathname.startsWith('/admin'));
	let htmlLang = $derived(locale === 'es' ? 'es' : 'en');
	let ogLocale = $derived(locale === 'es' ? 'es_ES' : 'en_CA');
	let structuredData = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: siteName,
			url: page.url.origin,
			description: defaultDescription
		})
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={seo.description} />
	<meta name="robots" content={isPrivateRoute ? 'noindex, nofollow' : 'index, follow'} />
	<link rel="canonical" href={canonical} />
	<link rel="alternate" hreflang="en" href={alternateEn} />
	<link rel="alternate" hreflang="es" href={alternateEs} />
	<link rel="alternate" hreflang="x-default" href={alternateEn} />
	<link rel="icon" type="image/png" sizes="180x180" href="/favicon.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
	<meta name="theme-color" content="#131313" />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={seo.description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:locale" content={ogLocale} />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={seo.description} />

	{@html `<script type="application/ld+json">${structuredData}<\/script>`}
</svelte:head>

<div lang={htmlLang}>
	{@render children()}
</div>
