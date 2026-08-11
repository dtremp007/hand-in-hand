<script lang="ts">
	import SiteFooter from './SiteFooter.svelte';
	import SiteNav from './SiteNav.svelte';
	import type { Locale } from '$lib/content';

	let {
		active = 'home',
		locale = 'en',
		children
	} = $props<{ active?: string; locale?: Locale; children: import('svelte').Snippet }>();
</script>

<div class="flex min-h-screen flex-col bg-surface text-paper">
	<SiteNav {active} {locale} />
	{@render children()}
	<SiteFooter {locale} />
</div>
