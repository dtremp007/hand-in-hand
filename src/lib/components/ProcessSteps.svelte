<script lang="ts">
	let {
		class: className = '',
		title,
		steps
	} = $props<{
		class?: string;
		title: string;
		steps: { title: string; body: string }[];
	}>();
</script>

<section class={className}>
	<div class="mx-auto mb-16 max-w-2xl text-center md:mb-20">
		<h2 class="font-serif text-4xl leading-tight text-paper md:text-6xl">{title}</h2>
	</div>
	<div class="grid gap-px bg-[#4e4639]/40 md:grid-cols-2">
		{#each steps as step, index (step.title)}
			<article class="bg-surface p-10 md:p-14">
				<div class="flex items-start gap-6">
					<p
						class="font-serif text-4xl leading-none text-gold/80 md:text-5xl"
						aria-hidden="true"
					>
						{String(index + 1).padStart(2, '0')}
					</p>
					<div>
						<h3 class="font-serif text-2xl leading-snug text-paper md:text-3xl">{step.title}</h3>
						<p class="mt-4 max-w-md text-base leading-relaxed text-muted md:text-lg">
							{step.body}
						</p>
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>
