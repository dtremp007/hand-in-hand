<script lang="ts">
	import GoldButton from '$lib/components/GoldButton.svelte';
	import PageShell from '$lib/components/PageShell.svelte';
	import SectionFrame from '$lib/components/SectionFrame.svelte';
	import { getContent, localePath, type Locale } from '$lib/content';

	let { locale = 'en' }: { locale?: Locale } = $props();

	const content = $derived(getContent(locale).zoomSchedule);
</script>

<PageShell active="zoom-schedule" {locale}>
	<main class="flex-grow">
		<SectionFrame spacing="pt-44 pb-24 md:pt-56" innerClass="max-w-4xl">
			<h1 class="font-serif text-5xl leading-tight text-paper md:text-7xl">{content.title}</h1>
			<p class="mt-10 text-xl leading-relaxed text-muted md:text-2xl">{content.description}</p>
			<p class="mt-8 text-xl leading-relaxed text-muted">{content.hope}</p>
			<p class="mt-12 font-serif text-2xl italic text-gold">{content.noEvents}</p>
			<div class="mt-12">
				<GoldButton href={localePath(locale, '/contact')}>{content.cta}</GoldButton>
			</div>
		</SectionFrame>
	</main>
</PageShell>
