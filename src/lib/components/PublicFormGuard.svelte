<script lang="ts">
	import Turnstile from '$lib/components/Turnstile.svelte';

	let {
		action,
		siteKey,
		formStartedAt,
		language,
		reset = $bindable(() => {})
	}: {
		action: string;
		siteKey: string;
		formStartedAt: number;
		language: string;
		reset?: () => void;
	} = $props();
</script>

<div class="pointer-events-none absolute -left-[10000px] h-0 w-0 overflow-hidden opacity-0" aria-hidden="true">
	<label>
		Website
		<input name="website" type="text" tabindex="-1" autocomplete="off" />
	</label>
</div>
<input name="form_started_at" type="hidden" value={String(formStartedAt)} />
{#if siteKey}
	<div class="pt-2">
		<Turnstile {action} {siteKey} {language} bind:reset />
	</div>
{/if}
