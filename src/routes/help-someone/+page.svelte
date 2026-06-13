<script lang="ts">
	import PageShell from '$lib/components/PageShell.svelte';
</script>

<PageShell active="help-someone">
	<main class="mx-auto w-full max-w-7xl flex-grow px-6 pt-36 pb-24 md:px-12 md:pt-44">
		<section class="mb-24 grid gap-12 md:grid-cols-12">
			<div class="md:col-span-8">
				<h1 class="font-serif text-5xl leading-tight md:text-7xl">
					Some people are looking for help. Others are ready to walk with them.
				</h1>
			</div>
			<p class="self-end text-xl leading-relaxed text-muted md:col-span-4">
				If you’ve already walked through something yourself, you probably understand what that takes.
			</p>
		</section>

		<section class="mb-24 max-w-3xl border-l border-gold pl-8">
			<p class="text-xs font-bold uppercase tracking-[0.24em] text-gold">Intent</p>
			<p class="mt-6 font-serif text-3xl leading-tight">
				This isn’t about giving advice. It’s not about fixing someone. And it’s not just talking.
			</p>
			<p class="mt-5 text-xl text-muted">This is about walking with someone. Showing up. And staying there.</p>
		</section>

		<section class="mb-24 grid gap-px bg-[#4e4639]/40 md:grid-cols-4">
			{#each [
				'You have walked through something real yourself.',
				'You show up when it is not easy or convenient.',
				'You are willing to stay present in the silence.',
				'You take the weight of another person seriously.'
			] as item}
				<div class="bg-surface-low p-8">
					<p class="text-xs font-bold uppercase tracking-[0.24em] text-gold">The Person</p>
					<p class="mt-8 font-serif text-2xl leading-tight">{item}</p>
				</div>
			{/each}
		</section>

		<section class="mb-24 grid gap-12 md:grid-cols-12">
			<h2 class="font-serif text-4xl md:col-span-4">The Path</h2>
			<div class="space-y-8 md:col-span-8">
				{#each [
					'Reach out to us through this page.',
					'We sit down and talk together.',
					'We get to know your story and your capacity.',
					'We connect you with someone if it makes sense.',
					'You start walking with them.'
				] as item, i}
					<div class="grid grid-cols-[4rem_1fr] border-t border-[#4e4639]/50 pt-6">
						<p class="font-serif text-2xl text-gold">{String(i + 1).padStart(2, '0')}</p>
						<p class="text-xl text-muted">{item}</p>
					</div>
				{/each}
			</div>
		</section>

		<section class="mx-auto max-w-2xl">
			<div class="mb-10 text-center">
				<p class="text-xs font-bold uppercase tracking-[0.24em] text-gold">Expectation</p>
				<h2 class="mt-4 font-serif text-5xl">This isn’t casual.</h2>
				<div class="mt-8 flex flex-wrap justify-center gap-4 text-xs uppercase tracking-[0.22em] text-muted">
					<span>Consistency</span><span>Honesty</span><span>Responsibility</span>
				</div>
			</div>
			<form class="space-y-8">
				{#each ['Name *', 'Contact Info *', 'Location (Optional)', 'Have you walked through something you can now help someone else with?', 'Why do you feel ready to walk with someone?', 'Anything else you want us to know (Optional)'] as label}
					<label class="block">
						<span class="text-xs font-bold uppercase tracking-[0.2em] text-outline">{label}</span>
						<textarea
							rows={label.length > 32 ? 3 : 1}
							class="mt-2 w-full resize-none border-0 border-b border-[#4e4639] bg-transparent py-4 text-paper outline-none focus:border-gold"
						></textarea>
					</label>
				{/each}
				<label class="flex gap-4 text-sm text-muted">
					<input class="mt-1 h-5 w-5 accent-gold" type="checkbox" />
					<span>I understand this is a responsibility, not something casual. I am committing to showing up and being present for someone else.</span>
				</label>
				<button class="w-full bg-gold px-10 py-5 text-xs font-extrabold uppercase tracking-[0.22em] text-gold-deep" type="button">
					Start Here
				</button>
			</form>
		</section>
	</main>
</PageShell>
