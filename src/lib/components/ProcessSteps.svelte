<script lang="ts">
	let {
		class: className = '',
		title = 'The Path Forward',
		variant = 'default'
	} = $props<{
		class?: string;
		title?: string;
		variant?: 'default' | 'featured';
	}>();

	const steps = [
		[
			'You reach out',
			'Simply fill out the form below. No elaborate history required, just a way for us to connect.'
		],
		[
			'We respond',
			'A member of our team will review your message and reach out to you directly and discreetly.'
		],
		[
			'You are connected with someone',
			'We match you with a dedicated individual who understands the gravity of your situation.'
		],
		[
			'You begin walking through this together',
			'Real change happens in the presence of consistent, grounded support. We start there.'
		]
	];
</script>

{#if variant === 'featured'}
	<section class={className}>
		<div class="mx-auto mb-16 max-w-2xl text-center md:mb-20">
			<h2 class="font-serif text-4xl leading-tight text-paper md:text-6xl">{title}</h2>
		</div>
		<div class="grid gap-px bg-[#4e4639]/40 md:grid-cols-2">
			{#each steps as step, index (step[0])}
				<article class="bg-surface p-10 md:p-14">
					<div class="flex items-start gap-6">
						<p
							class="font-serif text-4xl leading-none text-gold/80 md:text-5xl"
							aria-hidden="true"
						>
							{String(index + 1).padStart(2, '0')}
						</p>
						<div>
							<h3 class="font-serif text-2xl leading-snug text-paper md:text-3xl">{step[0]}</h3>
							<p class="mt-4 max-w-md text-base leading-relaxed text-muted md:text-lg">
								{step[1]}
							</p>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</section>
{:else}
	<section class={`grid gap-12 md:grid-cols-12 ${className}`}>
		<h2 class="font-serif text-4xl md:col-span-4">{title}</h2>
		<div class="space-y-10 md:col-span-8">
			{#each steps as step, index (step[0])}
				<div class="grid gap-4 border-t border-[#4e4639]/50 pt-8 md:grid-cols-[5rem_1fr]">
					<p class="font-serif text-2xl text-gold">{String(index + 1).padStart(2, '0')}.</p>
					<div>
						<h3 class="font-serif text-3xl">{step[0]}</h3>
						<p class="mt-3 max-w-xl text-muted">{step[1]}</p>
					</div>
				</div>
			{/each}
		</div>
	</section>
{/if}
