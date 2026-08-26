<script lang="ts">
	import SiteFooter from './SiteFooter.svelte';
	import SiteNav from './SiteNav.svelte';

	let {
		active = 'home',
		children
	} = $props<{ active?: string; children: import('svelte').Snippet }>();
</script>

<div class="flex min-h-screen flex-col bg-surface text-paper">
	<div class="print:hidden">
		<SiteNav {active} />
	</div>
	{@render children()}
	<div class="print:hidden">
		<SiteFooter />
	</div>
</div>
