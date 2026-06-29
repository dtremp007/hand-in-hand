<script lang="ts">
	let { class: className = '', title = 'The Path Forward' } = $props<{
		class?: string;
		title?: string;
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

<section class={`grid gap-12 md:grid-cols-12 ${className}`}>
	<h2 class="font-serif text-4xl md:col-span-4">{title}</h2>
	<div class="space-y-10 md:col-span-8">
		{#each steps as step, index}
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
