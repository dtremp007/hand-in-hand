<script lang="ts">
	import type { Pathname } from '$app/types';
	import GoldButton from '$lib/components/GoldButton.svelte';
	import PageShell from '$lib/components/PageShell.svelte';
	import SquareList from '$lib/components/SquareList.svelte';
	import { getContent, type Locale } from '$lib/content';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';

	const content = $derived(getContent(getLocale() as Locale).about);
</script>

<PageShell active="about">
	<main class="mx-auto w-full max-w-7xl flex-grow px-6 pt-36 pb-24 md:px-12 md:pt-44">
		<section class="mb-24 text-center">
			<h1 class="font-serif text-5xl leading-tight text-gold md:text-7xl">
				{content.mission.title}
			</h1>
			<p class="mt-4 font-serif text-4xl leading-tight md:text-6xl">{content.mission.subtitle}</p>
		</section>

		<section class="mb-24 space-y-10">
			{#each content.mission.paragraphs as paragraph, index (index)}
				<p class="text-xl leading-relaxed text-muted md:text-2xl">{paragraph}</p>
			{/each}
		</section>

		<section class="mb-24 border-y border-[#4e4639]/40 py-16">
			<h2 class="font-serif text-4xl text-gold md:text-5xl">{content.whoWeAre.title}</h2>
			<p class="mt-8 max-w-3xl text-xl leading-relaxed text-muted">{content.whoWeAre.intro}</p>
			<p class="mt-6 max-w-3xl text-xl leading-relaxed text-muted">{content.whoWeAre.dedication}</p>
		</section>

		<section class="mb-24 grid gap-10 bg-ink p-10 md:grid-cols-[12rem_1fr] md:p-16">
			<img
				src="/images/bob-fife.jpg"
				alt={content.bob.name}
				class="h-48 w-48 border border-gold object-cover md:h-52 md:w-52"
			/>
			<div>
				<h2 class="font-serif text-4xl">{content.bob.name}</h2>
				<p class="mt-2 text-sm uppercase tracking-[0.24em] text-gold">{content.bob.role}</p>
				<p class="mt-5 max-w-2xl text-xl leading-relaxed text-muted">{content.bob.bio}</p>
			</div>
		</section>

		<section class="mb-24">
			<h2 class="font-serif text-4xl text-gold md:text-5xl">{content.acknowledgements.title}</h2>
			<p class="mt-8 max-w-3xl text-xl leading-relaxed text-muted">
				{content.acknowledgements.intro}
			</p>
			<SquareList
				class="mt-10 space-y-5 text-lg leading-relaxed text-muted"
				items={content.acknowledgements.items}
			/>
		</section>

		<section class="text-center">
			<div class="mt-10">
				<GoldButton href={localizeHref('/contact') as Pathname}>{content.cta.button}</GoldButton>
			</div>
		</section>
	</main>
</PageShell>
