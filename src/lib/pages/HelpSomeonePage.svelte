<script lang="ts">
	import PageShell from '$lib/components/PageShell.svelte';
	import ProcessSteps from '$lib/components/ProcessSteps.svelte';
	import SquareList from '$lib/components/SquareList.svelte';
	import { getContent, type Locale } from '$lib/content';

	type FormResult = { success?: boolean; error?: string } | null | undefined;

	let { locale = 'en', form }: { locale?: Locale; form?: FormResult } = $props();

	const content = $derived(getContent(locale).helpSomeone);
</script>

<PageShell active="help-someone" {locale}>
	<main class="mx-auto w-full max-w-7xl flex-grow px-6 pt-36 pb-24 md:px-12 md:pt-44">
		<section class="mb-24">
			<h1
				class="max-w-5xl font-serif text-6xl leading-[0.98] tracking-tight text-paper md:text-8xl"
			>
				{content.title}
			</h1>
			<p class="mt-10 max-w-2xl text-2xl leading-snug text-gold">{content.subtitle}</p>
			<p class="mt-10 max-w-3xl text-xl leading-relaxed text-muted md:text-2xl">
				{content.victorIntro}
			</p>
		</section>

		<section
			class="mb-24 grid gap-14 border-y border-[#4e4639]/50 bg-surface-low px-8 py-14 md:grid-cols-12 md:px-14 md:py-20"
		>
			<div class="md:col-span-5">
				<h2 class="max-w-md font-serif text-3xl leading-tight text-paper md:text-4xl">
					{content.guidelines.title}
				</h2>
			</div>
			<SquareList
				class="space-y-7 md:col-span-7"
				itemClass="border-b border-[#4e4639]/50 pb-7 font-serif text-xl leading-snug text-paper last:border-0 last:pb-0"
				items={content.guidelines.items}
			/>
		</section>

		<ProcessSteps class="mb-24" />

		<section class="mx-auto max-w-2xl">
			<div class="mb-10 text-center">
				<p class="text-xs font-bold uppercase tracking-[0.24em] text-gold">
					{content.form.expectation}
				</p>
				<h2 class="mt-4 font-serif text-5xl">{content.form.title}</h2>
			</div>
			<form class="space-y-8" method="post">
				{#if form?.success}
					<p
						class="border border-gold/40 bg-gold/10 p-5 text-center font-serif text-2xl text-paper"
					>
						{content.form.success}
					</p>
				{:else if form?.error}
					<p class="border border-red-400/40 bg-red-950/30 p-5 text-center text-sm text-red-100">
						{form.error}
					</p>
				{/if}
				{#each content.form.fields as field (field.name)}
					<label class="block">
						<span class="text-xs font-bold uppercase tracking-[0.2em] text-outline"
							>{field.label}</span
						>
						<textarea
							name={field.name}
							rows={field.rows}
							required={field.required}
							class="mt-2 w-full resize-none border-0 border-b border-[#4e4639] bg-transparent py-4 text-paper outline-none focus:border-gold"
						></textarea>
					</label>
				{/each}
				<label class="flex gap-4 text-sm text-muted">
					<input class="mt-1 h-5 w-5 accent-gold" name="confirmed" type="checkbox" required />
					<span>{content.form.checkbox}</span>
				</label>
				<button
					class="w-full bg-gold px-10 py-5 text-xs font-extrabold uppercase tracking-[0.22em] text-gold-deep"
					type="submit"
				>
					{content.form.submit}
				</button>
			</form>
		</section>
	</main>
</PageShell>
