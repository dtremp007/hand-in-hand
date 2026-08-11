<script lang="ts">
	import type { Pathname } from '$app/types';
	import GoldButton from '$lib/components/GoldButton.svelte';
	import PageShell from '$lib/components/PageShell.svelte';
	import SectionFrame from '$lib/components/SectionFrame.svelte';
	import { getContent, type Locale } from '$lib/content';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';

	const content = $derived(getContent(getLocale() as Locale).zoomSchedule);
</script>

<PageShell active="zoom-schedule">
	<main class="flex-grow">
		<SectionFrame spacing="pt-44 pb-24 md:pt-56" innerClass="max-w-4xl">
			<h1 class="font-serif text-5xl leading-tight text-paper md:text-7xl">{content.title}</h1>
			<p class="mt-10 text-xl leading-relaxed text-muted md:text-2xl">{content.description}</p>
			<p class="mt-8 text-xl leading-relaxed text-muted">{content.hope}</p>
			<p class="mt-12 font-serif text-2xl italic text-gold">{content.noEvents}</p>
			<div class="mt-12">
				<GoldButton href={localizeHref('/contact') as Pathname}>{content.cta}</GoldButton>
			</div>
		</SectionFrame>
	</main>
</PageShell>
