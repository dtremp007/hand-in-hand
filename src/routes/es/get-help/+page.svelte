<script lang="ts">
	import GetHelpPage from '$lib/pages/GetHelpPage.svelte';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<GetHelpPage locale="es" {form} />
