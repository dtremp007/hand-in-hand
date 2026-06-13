<script lang="ts">
	import SiteFooter from './SiteFooter.svelte';
	import SiteNav from './SiteNav.svelte';

	let { active = 'home', children } = $props<{ active?: string; children: import('svelte').Snippet }>();
</script>

<svelte:head>
	<title>Hand In Hand Ministry</title>
	<meta
		name="description"
		content="Hand In Hand connects people with steady, confidential support through hard seasons."
	/>
</svelte:head>

<div class="flex min-h-screen flex-col bg-surface text-paper">
	<SiteNav {active} />
	{@render children()}
	<SiteFooter />
</div>
