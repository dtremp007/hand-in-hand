<script lang="ts">
	import HelpSomeonePage from '$lib/pages/HelpSomeonePage.svelte';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<HelpSomeonePage locale="es" {form} />
