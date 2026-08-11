<script lang="ts">
	import PageShell from '$lib/components/PageShell.svelte';
	import ProcessSteps from '$lib/components/ProcessSteps.svelte';
	import SquareList from '$lib/components/SquareList.svelte';
	import { getContent, type Locale } from '$lib/content';
	import { getLocale } from '$lib/paraglide/runtime';

	type FormResult = { success?: boolean; error?: string } | null | undefined;

	let { form }: { form?: FormResult } = $props();

	const content = $derived(getContent(getLocale() as Locale).getHelp);
</script>

<PageShell active="get-help">
	<main class="mx-auto w-full max-w-7xl flex-grow px-6 pt-36 pb-24 md:px-12 md:pt-44">
		<section class="mb-28 max-w-4xl">
			<p class="text-xl leading-relaxed text-muted md:text-2xl">{content.intro}</p>
		</section>

		<ProcessSteps class="mb-28" />

		<section class="mb-28 grid gap-px bg-[#4e4639]/40 md:grid-cols-2">
			<div class="bg-surface p-10 md:p-16">
				<h3 class="font-serif text-3xl text-gold">Confidentiality</h3>
				<p class="mt-8 text-xl leading-relaxed">
					What you share is handled with care and confidentiality.
				</p>
				<SquareList
					class="mt-10 space-y-5 text-sm uppercase tracking-[0.2em] text-muted"
					items={['You will not be exposed', 'You will be taken seriously']}
				/>
			</div>
			<div class="bg-surface-low p-10 md:p-16">
				<h3 class="font-serif text-3xl text-gold">Expectation</h3>
				<p class="mt-8 text-xl leading-relaxed text-muted">
					This is not passive. It takes honesty and willingness. We provide the support, but the
					journey requires your active presence.
				</p>
			</div>
		</section>

		<section class="mx-auto max-w-2xl py-12" id="get-help-form">
			<div class="mb-14 text-center">
				<h2 class="font-serif text-5xl">{content.form.title}</h2>
				<p class="mt-4 font-serif text-xl italic text-muted">{content.form.subtitle}</p>
			</div>
			<form class="space-y-10" method="post">
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
						<span class="text-xs font-bold uppercase tracking-[0.22em] text-outline"
							>{field.label}</span
						>
						<input
							id={field.id}
							name={field.name}
							type={field.type}
							placeholder={field.placeholder}
							required={field.required}
							class="mt-2 w-full border-0 border-b border-[#4e4639] bg-transparent px-0 py-4 text-lg text-paper outline-none transition placeholder:text-[#5f5850] focus:border-gold"
						/>
					</label>
				{/each}
				<label class="block">
					<span class="text-xs font-bold uppercase tracking-[0.22em] text-outline"
						>{content.form.messageLabel}</span
					>
					<textarea
						name="message"
						rows="4"
						placeholder={content.form.messagePlaceholder}
						class="mt-2 w-full resize-none border-0 border-b border-[#4e4639] bg-transparent px-0 py-4 text-lg text-paper outline-none transition placeholder:text-[#5f5850] focus:border-gold"
					></textarea>
				</label>
				<label class="flex items-start gap-4 text-sm text-muted">
					<input
						class="mt-1 h-5 w-5 border-[#4e4639] bg-transparent accent-gold"
						name="confirmed"
						type="checkbox"
						required
					/>
					<span>{content.form.checkbox}</span>
				</label>
				<div class="pt-8 text-center">
					<p class="mx-auto mb-10 max-w-md font-serif text-2xl italic">
						"{content.form.quote}"
					</p>
					<button
						class="w-full bg-gold px-10 py-5 text-xs font-extrabold uppercase tracking-[0.22em] text-gold-deep transition hover:opacity-90 md:w-auto"
						type="submit"
					>
						{content.form.submit}
					</button>
				</div>
			</form>
		</section>
	</main>
</PageShell>
