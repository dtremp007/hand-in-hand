<script lang="ts">
	let {
		items,
		class: className = '',
		itemClass = ''
	} = $props<{
		items: string[];
		class?: string;
		itemClass?: string;
	}>();
</script>

<ul class={className}>
	{#each items as item}
		<li class={`flex items-start gap-4 ${itemClass}`}>
			<span class="mt-[0.65em] h-1.5 w-1.5 shrink-0 bg-gold" aria-hidden="true"></span>
			<span>{item}</span>
		</li>
	{/each}
</ul>
