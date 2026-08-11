<script lang="ts">
	import ContactPage from '$lib/pages/ContactPage.svelte';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<ContactPage locale="es" {form} />
