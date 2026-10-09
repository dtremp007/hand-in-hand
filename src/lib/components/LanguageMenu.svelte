<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import HeaderPill from '$lib/components/HeaderPill.svelte';
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages';
	import { getLocale, locales, localizeHref } from '$lib/paraglide/runtime';

	let { stretch = false }: { stretch?: boolean } = $props();

	let open = $state(false);
	let root: HTMLDivElement | undefined;

	const locale = $derived(getLocale());
	const currentLabel = $derived(languageLabel(locale));

	function languageLabel(loc: string) {
		if (loc === 'es') return m.nav_language_to_es();
		if (loc === 'de') return m.nav_language_to_de();
		return m.nav_language_to_en();
	}

	function close() {
		open = false;
	}

	function toggle() {
		open = !open;
	}

	$effect(() => {
		if (!open) return;

		const onPointerDown = (event: PointerEvent) => {
			if (root && !root.contains(event.target as Node)) close();
		};
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') close();
		};

		document.addEventListener('pointerdown', onPointerDown);
		document.addEventListener('keydown', onKeyDown);
		return () => {
			document.removeEventListener('pointerdown', onPointerDown);
			document.removeEventListener('keydown', onKeyDown);
		};
	});
</script>

<div bind:this={root} class="relative {stretch ? 'w-full' : ''}">
	<HeaderPill
		variant="outline"
		{stretch}
		onclick={toggle}
		aria-expanded={open}
		aria-haspopup="menu"
		aria-label={m.nav_language_menu()}
	>
		<span class="flex items-center gap-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				class="h-4 w-4"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
				/>
			</svg>
			<span>{currentLabel}</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2.5"
				stroke="currentColor"
				class="h-3 w-3 transition-transform {open ? 'rotate-180' : ''}"
				aria-hidden="true"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
			</svg>
		</span>
	</HeaderPill>

	{#if open}
		<ul
			role="menu"
			aria-label={m.nav_language_menu()}
			class="absolute top-[calc(100%+0.5rem)] left-0 z-50 min-w-full overflow-hidden rounded-sm border border-gold/40 bg-surface py-1 shadow-[0_12px_40px_rgba(0,0,0,0.45)] {stretch
				? 'w-full'
				: 'right-0 left-auto'}"
		>
			{#each locales as loc (loc)}
				<li role="none">
					<a
						href={resolve(localizeHref(page.url.pathname, { locale: loc }) as Pathname)}
						data-sveltekit-reload
						role="menuitem"
						aria-current={loc === locale ? 'true' : undefined}
						class="block px-4 py-2.5 text-center text-[0.65rem] font-extrabold uppercase tracking-[0.18em] transition {loc ===
						locale
							? 'bg-gold/15 text-gold'
							: 'text-muted hover:bg-gold hover:text-gold-deep'}"
					>
						{languageLabel(loc)}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>
