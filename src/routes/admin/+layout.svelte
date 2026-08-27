<script lang="ts">
	import AdminNav from '$lib/components/AdminNav.svelte';

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col bg-surface text-paper">
	<div class="print:hidden">
		<AdminNav />
	</div>
	<div class="flex-grow">
		{@render children()}
	</div>
</div>
