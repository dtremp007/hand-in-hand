<script lang="ts">
	import type { Pathname } from '$app/types';
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
	<button
		type="button"
		onclick={toggle}
		aria-expanded={open}
		aria-haspopup="menu"
		aria-label={m.nav_language_menu()}
		class="rounded-full border border-gold/50 px-5 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-gold transition hover:bg-gold hover:text-gold-deep {stretch
			? 'w-full px-4 py-2.5'
			: ''}"
	>
		{currentLabel}
	</button>

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
						href={localizeHref(page.url.pathname, { locale: loc }) as Pathname}
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
