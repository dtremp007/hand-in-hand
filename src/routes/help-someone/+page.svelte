<script lang="ts">
	import PageShell from '$lib/components/PageShell.svelte';
	import ProcessSteps from '$lib/components/ProcessSteps.svelte';
	import SquareList from '$lib/components/SquareList.svelte';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();

	const fields = [
		['name', 'Name *', 1, true],
		['contact_info', 'Contact Info *', 1, true],
		['location', 'Location (Optional)', 1, false],
		['experience', 'Have you walked through something you can now help someone else with?', 3, true],
		['readiness', 'Why do you feel ready to walk with someone?', 3, true],
		['message', 'Anything else you want us to know (Optional)', 3, false]
	] as const;
</script>

<PageShell active="help-someone">
	<main class="mx-auto w-full max-w-7xl flex-grow px-6 pt-36 pb-24 md:px-12 md:pt-44">
		<section class="mb-24">
			<h1
				class="max-w-5xl font-serif text-6xl leading-[0.98] tracking-tight text-paper md:text-8xl"
			>
				Some people are looking for help. Others are ready to walk with them.
			</h1>
			<p class="mt-10 max-w-2xl text-2xl leading-snug text-muted">
				If you’ve already walked through something yourself, you probably understand what that
				takes.
			</p>
		</section>

		<section class="mb-24 max-w-3xl border-l border-gold pl-8">
			<p class="text-xs font-bold uppercase tracking-[0.24em] text-gold">Intent</p>
			<p class="mt-6 font-serif text-3xl leading-tight">
				This isn’t about giving advice. It’s not about fixing someone. And it’s not just talking.
			</p>
			<p class="mt-5 text-xl text-muted">
				This is about walking with someone. Showing up. And staying there.
			</p>
		</section>

		<section
			class="mb-24 grid gap-14 border-y border-[#4e4639]/50 bg-surface-low px-8 py-14 md:grid-cols-12 md:px-14 md:py-20"
		>
			<div class="md:col-span-5">
				<h2 class="max-w-md font-serif text-4xl leading-tight text-paper md:text-5xl">
					What readiness looks like
				</h2>
				<p class="mt-7 max-w-md text-lg leading-relaxed text-muted">
					You do not need perfect words or every answer. What matters is the steadiness to make room
					for someone else’s story.
				</p>
			</div>
			<SquareList
				class="space-y-7 md:col-span-7"
				itemClass="border-b border-[#4e4639]/50 pb-7 font-serif text-2xl leading-snug text-paper last:border-0 last:pb-0"
				items={[
					'You have walked through something real yourself.',
					'You show up when it is not easy or convenient.',
					'You are willing to stay present in the silence.',
					'You take the weight of another person seriously.'
				]}
			/>
		</section>

		<ProcessSteps class="mb-24" />

		<section class="mx-auto max-w-2xl">
			<div class="mb-10 text-center">
				<p class="text-xs font-bold uppercase tracking-[0.24em] text-gold">Expectation</p>
				<h2 class="mt-4 font-serif text-5xl">This isn’t casual.</h2>
				<div
					class="mt-8 flex flex-wrap justify-center gap-4 text-xs uppercase tracking-[0.22em] text-muted"
				>
					<span>Consistency</span><span>Honesty</span><span>Responsibility</span>
				</div>
			</div>
			<form class="space-y-8" method="post">
				{#if form?.success}
					<p class="border border-gold/40 bg-gold/10 p-5 text-center font-serif text-2xl text-paper">
						Thank you. We received your response and will follow up thoughtfully.
					</p>
				{:else if form?.error}
					<p class="border border-red-400/40 bg-red-950/30 p-5 text-center text-sm text-red-100">
						{form.error}
					</p>
				{/if}
				{#each fields as field}
					<label class="block">
						<span class="text-xs font-bold uppercase tracking-[0.2em] text-outline">{field[1]}</span>
						<textarea
							name={field[0]}
							rows={field[2]}
							required={field[3]}
							class="mt-2 w-full resize-none border-0 border-b border-[#4e4639] bg-transparent py-4 text-paper outline-none focus:border-gold"
						></textarea>
					</label>
				{/each}
				<label class="flex gap-4 text-sm text-muted">
					<input class="mt-1 h-5 w-5 accent-gold" name="confirmed" type="checkbox" required />
					<span
						>I understand this is a responsibility, not something casual. I am committing to showing
						up and being present for someone else.</span
					>
				</label>
				<button
					class="w-full bg-gold px-10 py-5 text-xs font-extrabold uppercase tracking-[0.22em] text-gold-deep"
					type="submit"
				>
					Start Here
				</button>
			</form>
		</section>
	</main>
</PageShell>
