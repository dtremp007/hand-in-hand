<script lang="ts">
	import PageShell from '$lib/components/PageShell.svelte';
	import type { Snippet } from 'svelte';

	let {
		eyebrow,
		title,
		description,
		children
	}: {
		eyebrow: string;
		title: string;
		description: string;
		children: Snippet;
	} = $props();
</script>

<PageShell>
	<main
		class="mx-auto flex w-full max-w-xl flex-grow flex-col justify-center px-6 pt-36 pb-24 md:px-12 md:pt-44"
	>
		<section>
			<p class="text-xs font-bold uppercase tracking-[0.24em] text-gold">{eyebrow}</p>
			<h1 class="mt-5 font-serif text-5xl leading-tight text-paper md:text-6xl">{title}</h1>
			<p class="mt-6 text-lg leading-relaxed text-muted">{description}</p>
		</section>

		{@render children()}
	</main>
</PageShell>
