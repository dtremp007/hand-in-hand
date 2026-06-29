<script lang="ts">
	import { page } from '$app/state';
	import './layout.css';

	let { children } = $props();

	const siteName = 'Hand In Hand';
	const defaultDescription =
		'Confidential, faith-rooted support connecting people with someone steady who will walk alongside them.';
	const seoByPath: Record<string, { title: string; description: string }> = {
		'/': {
			title: 'Confidential, Faith-Rooted Support',
			description:
				'You do not have to face a private struggle alone. Hand In Hand connects you with trusted, confidential, faith-rooted support.'
		},
		'/about': {
			title: 'About Our Ministry',
			description:
				'Learn how Hand In Hand walks alongside people through steady relationships, honest presence, and confidential faith-rooted care.'
		},
		'/get-help': {
			title: 'Get Confidential Support',
			description:
				'Take a first step toward personal, confidential support from someone committed to listening and walking alongside you.'
		},
		'/help-someone': {
			title: 'Walk Alongside Someone',
			description:
				'Learn what it means to offer steady, responsible support to someone moving through a difficult or private season.'
		},
		'/churches': {
			title: 'Support for Churches',
			description:
				'Hand In Hand works alongside churches to provide focused, confidential, one-to-one support without replacing church leadership.'
		},
		'/contact': {
			title: 'Start a Conversation',
			description:
				'Contact Hand In Hand to discuss confidential support, walking alongside someone, or partnering with your church.'
		},
		'/login': {
			title: 'Login',
			description: 'Private access for Hand In Hand administrators.'
		},
		'/admin/submissions': {
			title: 'Admin Submissions',
			description: 'Private Hand In Hand form submissions.'
		}
	};

	let pathname = $derived(page.url.pathname.replace(/\/$/, '') || '/');
	let seo = $derived(seoByPath[pathname] ?? { title: siteName, description: defaultDescription });
	let title = $derived(
		pathname === '/' ? `${seo.title} | ${siteName}` : `${seo.title} | ${siteName}`
	);
	let canonical = $derived(new URL(pathname, page.url.origin).href);
	let isPrivateRoute = $derived(pathname === '/login' || pathname.startsWith('/admin'));
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
	<link rel="icon" type="image/png" sizes="180x180" href="/favicon.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
	<meta name="theme-color" content="#131313" />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={seo.description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:locale" content="en_CA" />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={seo.description} />

	{@html `<script type="application/ld+json">${structuredData}<\/script>`}
</svelte:head>
{@render children()}
