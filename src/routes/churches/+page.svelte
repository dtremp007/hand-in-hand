<script lang="ts">
	import GoldButton from '$lib/components/GoldButton.svelte';
	import PageShell from '$lib/components/PageShell.svelte';
</script>

<PageShell active="churches">
	<main class="flex-grow px-6 pt-36 pb-24 md:px-12 md:pt-44">
		<section class="mx-auto max-w-7xl space-y-24">
			<div class="grid gap-12 md:grid-cols-12">
				<p class="font-serif text-4xl leading-tight md:col-span-7 md:text-6xl">
					We recognize that churches are already carrying a great deal.
				</p>
				<div class="self-end text-2xl leading-relaxed text-muted md:col-span-5">
					<p>This ministry is not here to replace that.</p>
					<p>It exists to walk alongside it.</p>
				</div>
			</div>

			<div class="grid gap-px bg-[#4e4639]/40 md:grid-cols-2">
				<div class="bg-surface p-10 md:p-16">
					<h2 class="font-serif text-3xl text-gold">Focus</h2>
					<p class="mt-6 text-xl">One thing: walking with people one-on-one.</p>
					<p class="mt-8 whitespace-pre-line text-muted">— showing up consistently
— being honest, not harsh, but real
— staying connected over time</p>
				</div>
				<div class="bg-surface-low p-10 md:p-16">
					<h2 class="font-serif text-3xl text-gold">Boundaries</h2>
					<p class="mt-6 text-xl">What this is not.</p>
					<p class="mt-8 whitespace-pre-line text-muted">— not replacing leadership
— not taking authority
— not stepping outside the church</p>
				</div>
			</div>

			<section>
				<h2 class="font-serif text-4xl">How this can work</h2>
				<div class="mt-10 grid gap-8 md:grid-cols-3">
					{#each [
						'Leaders can refer individuals who need focused, long-term walking alongside.',
						'Support can happen quietly, without drawing unnecessary attention.',
						'Communication stays appropriate and agreed upon between all parties.'
					] as item}
						<p class="border-t border-[#4e4639] pt-8 text-xl leading-relaxed text-muted">{item}</p>
					{/each}
				</div>
			</section>

			<section class="grid gap-12 md:grid-cols-12">
				<div class="md:col-span-5">
					<h2 class="font-serif text-5xl">A Sacred Trust</h2>
				</div>
				<p class="text-2xl leading-relaxed text-muted md:col-span-7">
					We take confidentiality seriously. Conversations are handled carefully. Nothing is
					shared carelessly.
				</p>
			</section>

			<section class="bg-ink p-10 text-center md:p-16">
				<p class="mx-auto max-w-4xl font-serif text-4xl leading-tight">
					If you’d like to understand how this could work alongside your church, we’re open to that conversation.
				</p>
				<div class="mt-10">
					<GoldButton href="/contact">Start a Conversation</GoldButton>
				</div>
			</section>
		</section>
	</main>
</PageShell>
