<script lang="ts">
	import GoldButton from '$lib/components/GoldButton.svelte';
	import PageShell from '$lib/components/PageShell.svelte';
	import ProcessSteps from '$lib/components/ProcessSteps.svelte';
	import SquareList from '$lib/components/SquareList.svelte';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<PageShell active="get-help">
	<main class="mx-auto w-full max-w-7xl flex-grow px-6 pt-36 pb-24 md:px-12 md:pt-44">
		<section class="mb-28 max-w-4xl">
			<h1 class="font-serif text-5xl leading-tight text-paper md:text-7xl">
				You’re not signing up for something complicated.
				<span class="italic text-gold">You’re taking a first step.</span>
			</h1>
			<p class="mt-8 max-w-2xl text-xl leading-relaxed text-muted">
				Walking through life’s hardest seasons shouldn't be a solitary journey. We are here to
				listen, stay present, and move forward alongside you.
			</p>
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
				<h2 class="font-serif text-5xl">Request Connection</h2>
				<p class="mt-4 font-serif text-xl italic text-muted">
					Taking the first step toward real change.
				</p>
			</div>
			<form class="space-y-10" method="post">
				{#if form?.success}
					<p class="border border-gold/40 bg-gold/10 p-5 text-center font-serif text-2xl text-paper">
						Thank you. We received your request and will follow up with care.
					</p>
				{:else if form?.error}
					<p class="border border-red-400/40 bg-red-950/30 p-5 text-center text-sm text-red-100">
						{form.error}
					</p>
				{/if}
				{#each [['full_name', 'Name (Required)', 'Your full name', 'text'], ['contact_info', 'Contact Information (Phone or Email, Required)', 'How can we reach you?', 'text'], ['location', 'Location (Optional)', 'City or Region', 'text']] as field}
					<label class="block">
						<span class="text-xs font-bold uppercase tracking-[0.22em] text-outline"
							>{field[1]}</span
						>
						<input
							id={field[0]}
							name={field[0]}
							type={field[3]}
							placeholder={field[2]}
							required={field[0] !== 'location'}
							class="mt-2 w-full border-0 border-b border-[#4e4639] bg-transparent px-0 py-4 text-lg text-paper outline-none transition placeholder:text-[#5f5850] focus:border-gold"
						/>
					</label>
				{/each}
				<label class="block">
					<span class="text-xs font-bold uppercase tracking-[0.22em] text-outline"
						>Short Message (Optional)</span
					>
					<textarea
						name="message"
						rows="4"
						placeholder="Briefly, how can we help?"
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
					<span>I understand this is a step toward real change</span>
				</label>
				<div class="pt-8 text-center">
					<p class="mx-auto mb-10 max-w-md font-serif text-2xl italic">
						"If you’re here, something in you already knows. Take the first step."
					</p>
					<button
						class="w-full bg-gold px-10 py-5 text-xs font-extrabold uppercase tracking-[0.22em] text-gold-deep transition hover:opacity-90 md:w-auto"
						type="submit"
					>
						Take The First Step
					</button>
				</div>
			</form>
		</section>
	</main>
</PageShell>
