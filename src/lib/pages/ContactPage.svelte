<script lang="ts">
	import PageShell from '$lib/components/PageShell.svelte';
	import { getContent, type Locale } from '$lib/content';

	type FormResult = { success?: boolean; error?: string } | null | undefined;

	let { locale = 'en', form }: { locale?: Locale; form?: FormResult } = $props();

	const content = $derived(getContent(locale).contact);
</script>

<PageShell active="contact" {locale}>
	<main class="mx-auto w-full max-w-4xl flex-grow px-6 pt-36 pb-24 md:px-12 md:pt-44">
		<section class="mb-16">
			<h1 class="font-serif text-5xl leading-tight md:text-7xl">{content.title}</h1>
			<p class="mt-8 text-xl leading-relaxed text-muted">{content.subtitle}</p>
		</section>

		<section>
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
				<button
					class="bg-gold px-10 py-5 text-xs font-extrabold uppercase tracking-[0.22em] text-gold-deep"
					type="submit"
				>
					{content.form.submit}
				</button>
			</form>
		</section>
	</main>
</PageShell>
