<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	let {
		href,
		variant = 'solid',
		stretch = false,
		class: className = '',
		children,
		type = 'button',
		...rest
	}: {
		href?: string;
		variant?: 'solid' | 'outline';
		stretch?: boolean;
		class?: string;
		children: Snippet;
		type?: HTMLButtonAttributes['type'];
	} & Omit<
		HTMLButtonAttributes & HTMLAnchorAttributes,
		'class' | 'children' | 'href' | 'type'
	> = $props();

	const classes = $derived(
		[
			'header-pill inline-flex items-center justify-center rounded-full border transition',
			'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold',
			stretch ? 'h-11 w-full px-5' : 'h-9 px-5',
			variant === 'solid'
				? 'border-gold/40 bg-gold text-gold-deep hover:bg-transparent hover:text-gold'
				: 'border-gold/50 bg-transparent text-gold hover:bg-gold hover:text-gold-deep',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

{#if href}
	<a {href} class={classes} {...rest}>{@render children()}</a>
{:else}
	<button {type} class={classes} {...rest}>{@render children()}</button>
{/if}

<style>
	.header-pill {
		appearance: none;
		font-family: var(--font-sans);
		font-size: 0.75rem;
		font-weight: 800;
		letter-spacing: 0.18em;
		line-height: 1;
		text-transform: uppercase;
	}
</style>
