<script lang="ts">
	import { enhance } from '$app/forms';
	import SubmitButton from '$lib/components/SubmitButton.svelte';
	import { withPending } from '$lib/form-pending';
	import { m } from '$lib/paraglide/messages';
	import type { ActionData, PageData } from './$types';

	let { data, form }: { data: PageData; form: ActionData } = $props();

	const emailsValue = $derived(form?.notificationEmails ?? data.notificationEmails);
	const emailsPlaceholder = 'person@example.com\nanother@example.com';
	let submitting = $state(false);
</script>

<main class="mx-auto w-full max-w-7xl flex-grow px-6 py-12 md:px-12 md:py-16">
	<section class="mb-12">
		<h1 class="font-serif text-4xl leading-tight text-paper md:text-5xl">Notification emails</h1>
		<p class="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
			These addresses receive a message whenever someone submits a form. One email per line.
		</p>
	</section>

	<form
		class="max-w-2xl space-y-8"
		method="post"
		use:enhance={withPending((pending) => {
			submitting = pending;
		})}
	>
		{#if form?.success}
			<p class="border border-gold/40 bg-gold/10 p-5 font-serif text-2xl text-paper">
				Notification emails saved.
			</p>
		{:else if form?.error}
			<p class="border border-red-400/40 bg-red-950/30 p-5 text-sm text-red-100">
				{form.error}
			</p>
		{/if}

		<label class="block">
			<span class="text-xs font-bold uppercase tracking-[0.2em] text-outline">Recipients</span>
			<textarea
				name="notification_emails"
				rows="8"
				value={emailsValue}
				class="mt-2 w-full resize-y border-0 border-b border-[#4e4639] bg-transparent py-4 font-mono text-sm leading-relaxed text-paper outline-none focus:border-gold"
				placeholder={emailsPlaceholder}
			></textarea>
		</label>

		<SubmitButton {submitting} busyLabel={m.form_saving()}>Save</SubmitButton>
	</form>
</main>
