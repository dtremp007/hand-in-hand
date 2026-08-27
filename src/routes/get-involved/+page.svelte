<script lang="ts">
	import GetInvolvedPage from '$lib/pages/GetInvolvedPage.svelte';

	let { data, form } = $props();
</script>

<GetInvolvedPage
	{form}
	formStartedAt={data.formStartedAt}
	turnstileSiteKey={data.turnstileSiteKey}
/>
