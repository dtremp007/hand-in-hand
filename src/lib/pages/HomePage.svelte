<script lang="ts">
	import type { Pathname } from '$app/types';
	import GoldButton from '$lib/components/GoldButton.svelte';
	import PageShell from '$lib/components/PageShell.svelte';
	import ProcessSteps from '$lib/components/ProcessSteps.svelte';
	import SectionFrame from '$lib/components/SectionFrame.svelte';
	import { getContent, type Locale } from '$lib/content';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';

	const content = $derived(getContent(getLocale() as Locale).home);
</script>

<PageShell active="home">
	<main class="flex-grow">
		<SectionFrame spacing="pt-44 pb-24 md:pt-56">
			<h1
				class="max-w-5xl font-serif text-6xl leading-[0.98] tracking-tight text-paper md:text-8xl"
			>
				{content.hero.title}
			</h1>
			<p class="mt-10 max-w-2xl text-2xl leading-snug text-muted">
				{content.hero.subtitle}
			</p>
			<div class="mt-12 flex flex-wrap gap-6">
				<GoldButton href={localizeHref('/get-help') as Pathname}>{content.hero.getHelp}</GoldButton>
				<GoldButton href={localizeHref('/about') as Pathname} variant="outline"
					>{content.hero.learnMore}</GoldButton
				>
			</div>
		</SectionFrame>

		<SectionFrame spacing="py-24 text-center">
			<div class="grid gap-px bg-[#4e4639]/40 md:grid-cols-2">
				{#each content.phases as phase (phase.title)}
					<div class="bg-surface p-10 text-left md:p-14">
						<h3 class="font-serif text-3xl">{phase.title}</h3>
						<p class="mt-6 whitespace-pre-line text-muted">{phase.body}</p>
					</div>
				{/each}
			</div>
		</SectionFrame>

		<SectionFrame
			class="border-y border-[#2b2925] bg-ink"
			spacing="py-24 md:py-36"
			innerClass="grid items-center gap-16 md:grid-cols-[0.72fr_1.28fr]"
		>
			<div class="max-w-xl">
				<h2 class="font-serif text-5xl leading-[0.96] text-paper md:text-6xl">
					{content.testimony.title}
				</h2>
				<p class="mt-10 text-xl leading-relaxed text-muted md:text-2xl">
					{content.testimony.description}
				</p>
			</div>
			<div
				class="message-frame flex min-h-[22rem] items-center justify-center border border-[#2d2b27] bg-surface p-8 md:min-h-[30rem]"
			>
				<iframe
					class="aspect-video h-full w-full max-w-2xl"
					src="https://www.youtube.com/embed/d3D0xrlzUQU"
					title={content.testimony.title}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
		</SectionFrame>

		<SectionFrame
			class="border-b border-[#2b2925] bg-surface text-center"
			spacing="py-28 md:py-44"
			innerClass="max-w-4xl"
		>
			<p class="text-xs font-extrabold uppercase tracking-[0.42em] text-gold">
				{content.confidentiality.label}
			</p>
			<blockquote
				class="mt-12 font-serif text-2xl font-semibold italic leading-[1.08] text-paper md:text-4xl"
			>
				{content.confidentiality.quote}
			</blockquote>
		</SectionFrame>

		<SectionFrame
			class="bg-surface"
			spacing="py-20 md:py-8"
			innerClass="grid items-center gap-16 md:grid-cols-[0.98fr_1fr]"
		>
			<div
				class="unseen-panel min-h-[30rem] border border-[#2d2b27] bg-ink bg-cover bg-center md:min-h-[43rem]"
				style="background-image: url('/images/two-sidedoor.jpeg')"
			>
				<div class="vertical-mark" aria-hidden="true"></div>
			</div>
			<div class="max-w-3xl md:pl-20">
				<h2 class="font-serif text-5xl leading-[0.98] text-paper md:text-7xl">
					{content.unseen.title}
				</h2>
				<p class="mt-14 text-2xl leading-relaxed text-muted">
					{content.unseen.body}
				</p>
			</div>
		</SectionFrame>

		<SectionFrame class="bg-ink" spacing="py-32 md:py-40" innerClass="max-w-4xl space-y-12">
			<p class="text-xl leading-relaxed text-muted md:text-2xl">{content.statistics}</p>
			<p class="text-xl leading-relaxed text-muted md:text-2xl">{content.revelation}</p>
			<p class="text-xl leading-relaxed text-muted md:text-2xl">{content.romans}</p>
		</SectionFrame>

		<SectionFrame class="border-y border-[#2b2925] bg-surface-low" spacing="py-24 md:py-32">
			<ProcessSteps variant="featured" />
		</SectionFrame>

		<SectionFrame class="bg-surface-low" spacing="py-16" innerClass="max-w-4xl">
			<p class="text-sm text-muted">
				<strong>{content.references.label}</strong>
				<a class="text-gold underline" href={content.references.url} target="_blank" rel="noopener">
					{content.references.url}
				</a>
				{content.references.accessed}
			</p>
		</SectionFrame>

		<SectionFrame class="bg-ink text-center" spacing="py-24" innerClass="max-w-4xl">
			<p class="font-serif text-3xl italic md:text-5xl">
				{content.cta.quote}
			</p>
			<div class="mt-10">
				<GoldButton href={localizeHref('/get-help') as Pathname}>{content.cta.button}</GoldButton>
			</div>
		</SectionFrame>
	</main>
</PageShell>
