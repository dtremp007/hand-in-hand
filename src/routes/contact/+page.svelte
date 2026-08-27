<script lang="ts">
	import ContactPage from '$lib/pages/ContactPage.svelte';

	let { data, form } = $props();
</script>

<ContactPage {form} formStartedAt={data.formStartedAt} turnstileSiteKey={data.turnstileSiteKey} />
