<script lang="ts">
	import { resolve } from '$app/paths';
	import { submissionDetailRows, submissionKindLabels } from '$lib/submission-display';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const item = $derived(data.submission);
	const rows = $derived(submissionDetailRows(item));
	const received = $derived(
		item.createdAt.toLocaleString(undefined, {
			dateStyle: 'long',
			timeStyle: 'short'
		})
	);

	function printSubmission() {
		window.print();
	}
</script>

<svelte:head>
	<title>{item.name} · {submissionKindLabels[item.kind]}</title>
</svelte:head>

<main
	class="mx-auto w-full max-w-4xl flex-grow px-6 py-12 md:px-12 md:py-16 print:max-w-none print:px-0 print:py-0"
>
	<section class="mb-12 print:mb-8">
		<p class="hidden print:block text-xs font-bold uppercase tracking-[0.24em] text-gold-deep">
			Hand In Hand · Form submission
		</p>
		<h1
			class="text-balance font-serif text-4xl leading-tight text-paper md:text-5xl print:text-4xl print:text-ink"
		>
			{item.name}
		</h1>
		<p class="mt-4 text-lg leading-relaxed text-muted print:mt-3 print:text-base print:text-ink">
			{submissionKindLabels[item.kind]} · {received}
		</p>
		<div class="mt-8 flex flex-wrap gap-4 print:hidden">
			<a
				href={resolve('/admin/submissions')}
				class="border border-[#4e4639] px-8 py-4 text-xs font-extrabold uppercase tracking-[0.22em] text-paper transition hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
			>
				Back to list
			</a>
			<button
				type="button"
				class="bg-gold px-8 py-4 text-xs font-extrabold uppercase tracking-[0.22em] text-gold-deep transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
				onclick={printSubmission}
			>
				Print
			</button>
		</div>
	</section>

	<dl
		class="divide-y divide-[#4e4639]/60 border-y border-[#4e4639]/60 bg-surface-low print:bg-transparent"
	>
		{#each rows as row (row.key)}
			<div class="grid gap-2 px-6 py-6 md:grid-cols-12 md:gap-8 md:px-8 print:px-0 print:py-4">
				<dt
					class="text-xs font-bold uppercase tracking-[0.2em] text-outline md:col-span-4 print:text-ink"
				>
					{row.label}
				</dt>
				<dd class="text-lg leading-relaxed text-paper md:col-span-8 print:text-base print:text-ink">
					{row.value}
				</dd>
			</div>
		{/each}
	</dl>
</main>

<style>
	@media print {
		:global(html),
		:global(body) {
			background: #e5e2e1;
			color: #0e0e0e;
		}
	}
</style>
