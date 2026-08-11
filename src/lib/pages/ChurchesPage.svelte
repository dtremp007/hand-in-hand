<script lang="ts">
	import type { Pathname } from '$app/types';
	import GoldButton from '$lib/components/GoldButton.svelte';
	import PageShell from '$lib/components/PageShell.svelte';
	import SquareList from '$lib/components/SquareList.svelte';
	import { getContent, type Locale } from '$lib/content';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';

	const content = $derived(getContent(getLocale() as Locale).churches);
</script>

<PageShell active="churches">
	<main class="flex-grow px-6 pt-36 pb-24 md:px-12 md:pt-44">
		<section class="mx-auto max-w-7xl space-y-24">
			<div>
				<h1
					class="max-w-5xl font-serif text-6xl leading-[0.98] tracking-tight text-paper md:text-8xl"
				>
					{content.title}
				</h1>
				<div class="mt-10 max-w-2xl text-2xl leading-snug text-muted">
					{#each content.subtitle as line (line)}
						<p>{line}</p>
					{/each}
				</div>
			</div>

			<div class="grid gap-px bg-[#4e4639]/40 md:grid-cols-2">
				<div class="bg-surface p-10 md:p-16">
					<h2 class="font-serif text-3xl text-gold">{content.focus.title}</h2>
					<p class="mt-6 text-xl">{content.focus.intro}</p>
					<SquareList class="mt-8 space-y-3 text-muted" items={content.focus.items} />
				</div>
				<div class="bg-surface-low p-10 md:p-16">
					<h2 class="font-serif text-3xl text-gold">{content.boundaries.title}</h2>
					<p class="mt-6 text-xl">{content.boundaries.intro}</p>
					<SquareList class="mt-8 space-y-3 text-muted" items={content.boundaries.items} />
				</div>
			</div>

			<section class="bg-surface-low py-32 px-12 md:px-24">
				<div class="mx-auto max-w-3xl text-center">
					<h3 class="mb-12 text-xs font-extrabold uppercase tracking-[0.3em] text-gold">
						{content.trust.label}
					</h3>
					<p class="font-serif text-3xl md:text-4xl">
						{content.trust.quote}
					</p>
				</div>
			</section>

			<section class="py-48 px-12 md:px-24">
				<div class="mx-auto max-w-5xl">
					<h2 class="mb-24 text-center font-serif text-5xl">{content.howItWorks.title}</h2>
					<div class="grid grid-cols-1 gap-16 md:grid-cols-3">
						{#each content.howItWorks.items as item (item)}
							<div class="border-l border-[#4e4639]/50 p-8 transition-colors hover:bg-surface-high">
								<p class="font-light leading-relaxed text-muted">{item}</p>
							</div>
						{/each}
					</div>
				</div>
			</section>

			<section class="bg-ink p-10 text-center md:p-16">
				<p class="mx-auto max-w-4xl font-serif text-4xl leading-tight">
					{content.cta.quote}
				</p>
				<div class="mt-10">
					<GoldButton href={localizeHref('/contact') as Pathname}>{content.cta.button}</GoldButton>
				</div>
			</section>
		</section>
	</main>
</PageShell>
