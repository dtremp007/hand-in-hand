<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import HeaderPill from '$lib/components/HeaderPill.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';

	const links = $derived([
		{ href: resolve('/admin/submissions'), label: 'Submissions', key: 'submissions' },
		{ href: resolve('/admin/settings'), label: 'Notification emails', key: 'settings' },
		{ href: localizeHref('/') as Pathname, label: 'View site', key: 'site' }
	]);

	const current = $derived(
		page.url.pathname.startsWith('/admin/settings') ? 'settings' : 'submissions'
	);
</script>

<header
	class="sticky top-0 z-50 border-b border-[#4e4639]/30 bg-surface/90 px-6 py-4 backdrop-blur-xl md:px-12"
>
	<div
		class="mx-auto flex w-full max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
	>
		<a
			href={resolve('/admin/submissions')}
			class="flex shrink-0 items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
		>
			<img
				src="/images/logo-gold.webp"
				alt="Hand In Hand"
				width="849"
				height="208"
				class="h-9 w-auto"
			/>
			<span class="font-serif text-xs font-semibold uppercase tracking-[0.22em] text-gold">
				Admin
			</span>
		</a>

		<div class="flex flex-wrap items-center gap-x-8 gap-y-3 sm:justify-end">
			<nav class="flex flex-wrap items-center gap-x-8 gap-y-3">
				{#each links as link (link.key)}
					<a
						href={link.href}
						class={`font-serif text-xs font-semibold uppercase tracking-[0.22em] transition-colors ${
							current === link.key
								? 'border-b border-gold pb-1 text-gold'
								: 'text-gray-500 hover:text-paper'
						}`}
						aria-current={current === link.key ? 'page' : undefined}
					>
						{link.label}
					</a>
				{/each}
			</nav>
			<form method="post" action={resolve('/logout')}>
				<HeaderPill variant="outline" type="submit">Sign out</HeaderPill>
			</form>
		</div>
	</div>
</header>
