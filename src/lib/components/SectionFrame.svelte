<script lang="ts">
	let {
		class: sectionClass = '',
		spacing = 'py-48',
		innerClass = '',
		children
	} = $props<{
		class?: string;
		spacing?: string;
		innerClass?: string;
		children: import('svelte').Snippet;
	}>();
</script>

<section class={`px-6 md:px-12 ${spacing} ${sectionClass}`}>
	<div class={`mx-auto max-w-7xl ${innerClass}`}>
		{@render children()}
	</div>
</section>
