<script lang="ts">
	import type { Pathname } from '$app/types';
	import LanguageMenu from '$lib/components/LanguageMenu.svelte';
	import HeaderPill from '$lib/components/HeaderPill.svelte';
	import { m } from '$lib/paraglide/messages';
	import { localizeHref } from '$lib/paraglide/runtime';

	let { active = 'home' } = $props<{ active?: string }>();
	let open = $state(false);

	const links = $derived([
		{ href: localizeHref('/') as Pathname, label: m.nav_home(), key: 'home' },
		{
			href: localizeHref('/get-involved') as Pathname,
			label: m.nav_get_involved(),
			key: 'get-involved'
		},
		{ href: localizeHref('/churches') as Pathname, label: m.nav_churches(), key: 'churches' },
		{ href: localizeHref('/about') as Pathname, label: m.nav_about(), key: 'about' },
		{
			href: localizeHref('/zoom-schedule') as Pathname,
			label: m.nav_zoom_schedule(),
			key: 'zoom-schedule'
		}
	]);
</script>

<nav
	class="fixed top-0 z-50 w-full border-b border-[#4e4639]/30 bg-surface/90 px-6 py-4 backdrop-blur-xl md:px-12"
	class:h-dvh={open}
	class:flex={open}
	class:flex-col={open}
	class:xl:h-auto={open}
	class:xl:flex-none={open}
>
	<div class="flex items-center justify-between gap-4">
		<a
			href={localizeHref('/') as Pathname}
			class="shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
		>
			<img
				src="/images/logo-gold.webp"
				alt="Hand In Hand Ministry"
				width="849"
				height="208"
				class="h-9 w-auto md:h-11"
			/>
		</a>

		<div class="hidden flex-1 items-center justify-center gap-8 xl:flex">
			{#each links as link (link.key)}
				<a
					href={link.href}
					class={`font-serif text-xs font-semibold uppercase tracking-[0.22em] transition-colors ${
						active === link.key
							? 'border-b border-gold pb-1 text-gold'
							: 'text-gray-500 hover:text-paper'
					}`}
				>
					{link.label}
				</a>
			{/each}
		</div>

		<div class="hidden items-center gap-2.5 xl:flex">
			<LanguageMenu />
			<HeaderPill href={localizeHref('/get-involved') as Pathname}>
				{m.nav_get_involved_now()}
			</HeaderPill>
		</div>

		<button
			onclick={() => (open = !open)}
			class="flex items-center justify-center xl:hidden"
			aria-label={m.nav_toggle_menu()}
			aria-expanded={open}
		>
			{#if open}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 text-gold"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 text-gold"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			{/if}
		</button>
	</div>

	{#if open}
		<div class="mt-6 flex flex-1 flex-col justify-center gap-6 xl:hidden">
			{#each links as link (link.key)}
				<a
					href={link.href}
					onclick={() => (open = false)}
					class={`font-serif text-lg font-semibold uppercase tracking-[0.18em] transition-colors ${
						active === link.key ? 'text-gold' : 'text-gray-500 hover:text-paper'
					}`}
				>
					{link.label}
				</a>
			{/each}
			<div class="mt-4 flex w-full max-w-xs flex-col items-stretch gap-2.5">
				<HeaderPill
					href={localizeHref('/get-involved') as Pathname}
					stretch
					onclick={() => (open = false)}
				>
					{m.nav_get_involved_now()}
				</HeaderPill>
				<LanguageMenu stretch />
			</div>
		</div>
	{/if}
</nav>
