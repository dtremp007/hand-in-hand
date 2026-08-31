<script lang="ts">
	import { enhance } from '$app/forms';
	import PageShell from '$lib/components/PageShell.svelte';
	import ProcessSteps from '$lib/components/ProcessSteps.svelte';
	import PublicFormGuard from '$lib/components/PublicFormGuard.svelte';
	import SquareList from '$lib/components/SquareList.svelte';
	import SubmitButton from '$lib/components/SubmitButton.svelte';
	import { getContent, type Locale } from '$lib/content';
	import { withPending } from '$lib/form-pending';
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';

	type FormResult = { error?: string } | null | undefined;

	let {
		form,
		formStartedAt,
		turnstileSiteKey
	}: {
		form?: FormResult;
		formStartedAt: number;
		turnstileSiteKey: string;
	} = $props();

	const site = $derived(getContent(getLocale() as Locale));
	const content = $derived(site.getInvolved);
	const processSteps = $derived(site.processSteps);
	const locale = $derived(getLocale());
	let resetTurnstile = $state(() => {});
	let submitting = $state(false);
</script>

<PageShell active="get-involved">
	<main class="mx-auto w-full max-w-7xl flex-grow px-6 pt-36 pb-24 md:px-12 md:pt-44">
		<section class="mb-24">
			<h1
				class="max-w-5xl text-balance font-serif text-6xl leading-[0.98] tracking-tight text-paper md:text-8xl"
			>
				{content.title}
			</h1>
			<p class="mt-10 max-w-2xl text-2xl leading-snug text-gold">{content.subtitle}</p>
			<div class="mt-10 grid max-w-4xl gap-8 text-xl leading-relaxed text-muted md:text-2xl">
				<p class="text-pretty">{content.victorIntro}</p>
				<p class="text-pretty">{content.seekerIntro}</p>
			</div>
		</section>

		<section
			class="mb-24 grid gap-14 border-y border-[#4e4639]/50 bg-surface-low px-8 py-14 md:grid-cols-12 md:px-14 md:py-20"
		>
			<div class="md:col-span-5">
				<h2 class="max-w-md text-balance font-serif text-3xl leading-tight text-paper md:text-4xl">
					{content.guidelines.title}
				</h2>
			</div>
			<SquareList
				class="space-y-7 md:col-span-7"
				itemClass="border-b border-[#4e4639]/50 pb-7 font-serif text-xl leading-snug text-paper last:border-0 last:pb-0"
				items={content.guidelines.items}
			/>
		</section>

		<ProcessSteps class="mb-24" title={processSteps.title} steps={processSteps.steps} />

		<section class="mx-auto max-w-2xl" id="get-involved-form">
			<div class="mb-14 text-center">
				<h2 class="font-serif text-5xl text-balance">{content.form.title}</h2>
				<p class="mt-4 font-serif text-xl italic text-muted">{content.form.subtitle}</p>
			</div>

			<form
				class="relative space-y-10"
				method="post"
				use:enhance={withPending(
					(pending) => {
						submitting = pending;
					},
					() => {
						return async ({ result, update }) => {
							try {
								await update();
							} finally {
								if (result.type !== 'redirect') {
									resetTurnstile();
								}
							}
						};
					}
				)}
			>
				{#if form?.error}
					<p class="border border-red-400/40 bg-red-950/30 p-5 text-center text-sm text-red-100">
						{form.error}
					</p>
				{/if}

				<div class="grid gap-10 md:grid-cols-2">
					<label class="block">
						<span class="text-xs font-bold uppercase tracking-[0.22em] text-outline"
							>{content.form.firstName}</span
						>
						<input
							name="first_name"
							type="text"
							required
							autocomplete="given-name"
							class="mt-2 w-full border-0 border-b border-[#4e4639] bg-transparent px-0 py-4 text-lg text-paper outline-none transition placeholder:text-[#5f5850] focus:border-gold"
						/>
					</label>
					<label class="block">
						<span class="text-xs font-bold uppercase tracking-[0.22em] text-outline"
							>{content.form.lastName}</span
						>
						<input
							name="last_name"
							type="text"
							required
							autocomplete="family-name"
							class="mt-2 w-full border-0 border-b border-[#4e4639] bg-transparent px-0 py-4 text-lg text-paper outline-none transition placeholder:text-[#5f5850] focus:border-gold"
						/>
					</label>
				</div>

				<div>
					<label class="block" for="whatsapp">
						<span class="text-xs font-bold uppercase tracking-[0.22em] text-outline"
							>{content.form.whatsapp}</span
						>
						<input
							id="whatsapp"
							name="whatsapp"
							type="tel"
							required
							autocomplete="tel"
							aria-describedby="whatsapp-hint"
							class="mt-2 w-full border-0 border-b border-[#4e4639] bg-transparent px-0 py-4 text-lg text-paper outline-none transition placeholder:text-[#5f5850] focus:border-gold"
						/>
					</label>
					<p id="whatsapp-hint" class="mt-3 text-sm text-muted">{content.form.whatsappHint}</p>
				</div>

				<label class="block" for="email">
					<span class="text-xs font-bold uppercase tracking-[0.22em] text-outline"
						>{content.form.email}</span
					>
					<input
						id="email"
						name="email"
						type="email"
						required
						autocomplete="email"
						class="mt-2 w-full border-0 border-b border-[#4e4639] bg-transparent px-0 py-4 text-lg text-paper outline-none transition placeholder:text-[#5f5850] focus:border-gold"
					/>
				</label>

				<label class="block" for="age">
					<span class="text-xs font-bold uppercase tracking-[0.22em] text-outline"
						>{content.form.age}</span
					>
					<input
						id="age"
						name="age"
						type="text"
						inputmode="numeric"
						required
						class="mt-2 w-full border-0 border-b border-[#4e4639] bg-transparent px-0 py-4 text-lg text-paper outline-none transition placeholder:text-[#5f5850] focus:border-gold"
					/>
				</label>

				<div>
					<label class="block" for="location">
						<span class="text-xs font-bold uppercase tracking-[0.22em] text-outline"
							>{content.form.location}</span
						>
						<input
							id="location"
							name="location"
							type="text"
							required
							aria-describedby="location-hint"
							class="mt-2 w-full border-0 border-b border-[#4e4639] bg-transparent px-0 py-4 text-lg text-paper outline-none transition placeholder:text-[#5f5850] focus:border-gold"
						/>
					</label>
					<p id="location-hint" class="mt-3 text-sm text-muted">{content.form.locationHint}</p>
				</div>

				<div>
					<label class="block" for="language">
						<span class="text-xs font-bold uppercase tracking-[0.22em] text-outline"
							>{content.form.language}</span
						>
						<input
							id="language"
							name="language"
							type="text"
							required
							aria-describedby="language-hint"
							class="mt-2 w-full border-0 border-b border-[#4e4639] bg-transparent px-0 py-4 text-lg text-paper outline-none transition placeholder:text-[#5f5850] focus:border-gold"
						/>
					</label>
					<p id="language-hint" class="mt-3 text-sm text-muted">{content.form.languageHint}</p>
				</div>

				<label class="block">
					<span class="text-xs font-bold uppercase tracking-[0.22em] text-outline"
						>{content.form.situation}</span
					>
					<textarea
						name="situation"
						rows="4"
						required
						class="mt-2 w-full resize-none border-0 border-b border-[#4e4639] bg-transparent px-0 py-4 text-lg text-paper outline-none transition placeholder:text-[#5f5850] focus:border-gold"
					></textarea>
				</label>

				<fieldset class="space-y-5">
					<legend class="text-xs font-bold uppercase tracking-[0.22em] text-outline">
						{content.form.roleLabel}
					</legend>
					<div class="flex flex-wrap gap-8 pt-2">
						<label class="flex items-center gap-3 text-paper">
							<input
								class="h-5 w-5 border-[#4e4639] bg-transparent accent-gold"
								name="role"
								type="radio"
								value="victor"
								required
							/>
							<span>{content.form.victor}</span>
						</label>
						<label class="flex items-center gap-3 text-paper">
							<input
								class="h-5 w-5 border-[#4e4639] bg-transparent accent-gold"
								name="role"
								type="radio"
								value="seeker"
								required
							/>
							<span>{content.form.seeker}</span>
						</label>
					</div>
				</fieldset>

				<div>
					<label class="block" for="partner">
						<span class="text-xs font-bold uppercase tracking-[0.22em] text-outline"
							>{content.form.partner}</span
						>
						<input
							id="partner"
							name="partner"
							type="text"
							aria-describedby="partner-hint"
							class="mt-2 w-full border-0 border-b border-[#4e4639] bg-transparent px-0 py-4 text-lg text-paper outline-none transition placeholder:text-[#5f5850] focus:border-gold"
						/>
					</label>
					<p id="partner-hint" class="mt-3 text-sm text-muted">{content.form.partnerHint}</p>
				</div>

				<label class="flex items-start gap-4 text-sm text-muted">
					<input
						class="mt-1 h-5 w-5 shrink-0 border-[#4e4639] bg-transparent accent-gold"
						name="confirmed"
						type="checkbox"
						required
					/>
					<span>
						<span class="mb-2 block text-xs font-bold uppercase tracking-[0.22em] text-outline"
							>{content.form.confidentialityTitle}</span
						>
						{content.form.confidentiality}
						<span class="mt-2 block text-paper">{content.form.checkbox}</span>
					</span>
				</label>

				<PublicFormGuard
					action="get-involved"
					siteKey={turnstileSiteKey}
					{formStartedAt}
					language={locale}
					bind:reset={resetTurnstile}
				/>

				<div class="pt-4 text-center">
					<SubmitButton {submitting} busyLabel={m.form_sending()} class="w-full md:w-auto">
						{content.form.submit}
					</SubmitButton>
				</div>
			</form>
		</section>
	</main>
</PageShell>
