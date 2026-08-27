<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { getContent, type Locale } from '$lib/content';
	import { deLocalizeUrl, getLocale, locales, localizeHref } from '$lib/paraglide/runtime';

	import './layout.css';

	let { children } = $props();

	const siteName = 'Hand In Hand';
	const defaultDescription =
		'Confidential, faith-rooted support connecting people with someone steady who will walk alongside them.';

	let pathname = $derived(page.url.pathname.replace(/\/$/, '') || '/');
	let locale = $derived(getLocale() as Locale);
	let contentPath = $derived(deLocalizeUrl(page.url).pathname.replace(/\/$/, '') || '/');
	let seo = $derived(
		getContent(locale).seo[contentPath] ?? { title: siteName, description: defaultDescription }
	);
	let title = $derived(`${seo.title} | ${siteName}`);
	let canonical = $derived(new URL(pathname, page.url.origin).href);
	let alternateHrefs = $derived(
		Object.fromEntries(
			locales.map((loc) => [
				loc,
				new URL(localizeHref(contentPath, { locale: loc }), page.url.origin).href
			])
		)
	);
	let isPrivateRoute = $derived(
		pathname === '/login' || pathname === '/register' || pathname.startsWith('/admin')
	);
	let ogLocale = $derived(locale === 'es' ? 'es_ES' : locale === 'de' ? 'de_DE' : 'en_CA');

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
	{#each locales as loc (loc)}
		<link rel="alternate" hreflang={loc} href={alternateHrefs[loc]} />
	{/each}
	<link rel="alternate" hreflang="x-default" href={alternateHrefs.en} />
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

{@render children()}

<div style="display:none">
	{#each locales as loc (loc)}
		<a href={resolve(localizeHref(page.url.pathname, { locale: loc }) as Pathname)}>{loc}</a>
	{/each}
</div>
