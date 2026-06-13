<script lang="ts">
	let {
		href = '/get-help',
		variant = 'solid',
		children
	} = $props<{ href?: string; variant?: 'solid' | 'outline'; children: import('svelte').Snippet }>();
</script>

<a
	{href}
	class={`inline-flex items-center justify-center px-8 py-4 text-xs font-extrabold uppercase tracking-[0.22em] transition ${
		variant === 'solid'
			? 'bg-gold text-gold-deep hover:opacity-90'
			: 'border border-[#4e4639] text-paper hover:border-gold hover:text-gold'
	}`}
>
	{@render children()}
</a>
