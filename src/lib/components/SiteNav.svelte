<script lang="ts">
	import { page } from '$app/state';
	import { getContent, localePath, switchLocalePath, type Locale } from '$lib/content';

	let { active = 'home', locale = 'en' } = $props<{ active?: string; locale?: Locale }>();
	let open = $state(false);

	const nav = $derived(getContent(locale).nav);
	const links = $derived(nav.links);
	const languageHref = $derived(switchLocalePath(page.url.pathname, locale === 'en' ? 'es' : 'en'));
</script>

<nav
	class="fixed top-0 z-50 w-full border-b border-[#4e4639]/30 bg-surface/90 px-6 py-4 backdrop-blur-xl md:px-12"
	class:h-dvh={open}
	class:flex={open}
	class:flex-col={open}
	class:md:h-auto={open}
	class:md:flex-none={open}
>
	<div class="flex items-center justify-between gap-4">
		<a
			href={localePath(locale, '/')}
			class="font-serif text-xl font-semibold tracking-tight text-gold md:text-2xl">Hand In Hand</a
		>

		<div class="hidden flex-1 items-center justify-center gap-6 md:flex lg:gap-8">
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

		<div class="hidden flex-col items-end gap-2.5 md:flex">
			<a
				href={localePath(locale, '/get-help')}
				class="rounded-full border border-gold/40 bg-gold px-6 py-2.5 text-xs font-extrabold uppercase tracking-[0.18em] text-gold-deep transition hover:bg-transparent hover:text-gold lg:px-8"
			>
				{nav.getHelpNow}
			</a>
			<a
				href={languageHref}
				class="rounded-full border border-gold/50 px-5 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-gold transition hover:bg-gold hover:text-gold-deep"
			>
				{nav.languageSwitch}
			</a>
		</div>

		<button
			onclick={() => (open = !open)}
			class="flex items-center justify-center md:hidden"
			aria-label="Toggle menu"
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
		<div class="mt-6 flex flex-1 flex-col justify-center gap-6 md:hidden">
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
				<a
					href={localePath(locale, '/get-help')}
					onclick={() => (open = false)}
					class="rounded-full border border-gold/40 bg-gold px-4 py-3 text-center text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-gold-deep transition hover:bg-transparent hover:text-gold"
				>
					{nav.getHelpNow}
				</a>
				<a
					href={languageHref}
					onclick={() => (open = false)}
					class="rounded-full border border-gold/50 px-4 py-2.5 text-center text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-gold transition hover:bg-gold hover:text-gold-deep"
				>
					{nav.languageSwitch}
				</a>
			</div>
		</div>
	{/if}
</nav>
