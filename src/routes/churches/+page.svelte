<script lang="ts">
	import GoldButton from '$lib/components/GoldButton.svelte';
	import PageShell from '$lib/components/PageShell.svelte';
	import SquareList from '$lib/components/SquareList.svelte';
</script>

<PageShell active="churches">
	<main class="flex-grow px-6 pt-36 pb-24 md:px-12 md:pt-44">
		<section class="mx-auto max-w-7xl space-y-24">
			<div>
				<h1
					class="max-w-5xl font-serif text-6xl leading-[0.98] tracking-tight text-paper md:text-8xl"
				>
					We recognize that churches are already carrying a great deal.
				</h1>
				<div class="mt-10 max-w-2xl text-2xl leading-snug text-muted">
					<p>This ministry is not here to replace that.</p>
					<p>It exists to walk alongside it.</p>
				</div>
			</div>

			<div class="grid gap-px bg-[#4e4639]/40 md:grid-cols-2">
				<div class="bg-surface p-10 md:p-16">
					<h2 class="font-serif text-3xl text-gold">Focus</h2>
					<p class="mt-6 text-xl">One thing: walking with people one-on-one.</p>
					<SquareList
						class="mt-8 space-y-3 text-muted"
						items={[
							'showing up consistently',
							'being honest, not harsh, but real',
							'staying connected over time'
						]}
					/>
				</div>
				<div class="bg-surface-low p-10 md:p-16">
					<h2 class="font-serif text-3xl text-gold">Boundaries</h2>
					<p class="mt-6 text-xl">What this is not.</p>
					<SquareList
						class="mt-8 space-y-3 text-muted"
						items={[
							'not replacing leadership',
							'not taking authority',
							'not stepping outside the church'
						]}
					/>
				</div>
			</div>

			<section class="bg-surface-low py-32 px-12 md:px-24">
				<div class="mx-auto max-w-3xl text-center">
					<h3 class="mb-12 text-xs font-extrabold uppercase tracking-[0.3em] text-gold">
						A Sacred Trust
					</h3>
					<p class="font-serif text-3xl md:text-4xl">
						We take confidentiality seriously. Conversations are handled carefully. Nothing is
						shared carelessly.
					</p>
				</div>
			</section>

			<section class="py-48 px-12 md:px-24">
				<div class="mx-auto max-w-5xl">
					<h2 class="mb-24 text-center font-serif text-5xl">How this can work</h2>
					<div class="grid grid-cols-1 gap-16 md:grid-cols-3">
						{#each ['Leaders can refer individuals who need focused, long-term walking alongside.', 'Support can happen quietly, without drawing unnecessary attention.', 'Communication stays appropriate and agreed upon between all parties.'] as item}
							<div class="border-l border-[#4e4639]/50 p-8 transition-colors hover:bg-surface-high">
								<p class="font-light leading-relaxed text-muted">{item}</p>
							</div>
						{/each}
					</div>
				</div>
			</section>

			<section class="bg-ink p-10 text-center md:p-16">
				<p class="mx-auto max-w-4xl font-serif text-4xl leading-tight">
					If you’d like to understand how this could work alongside your church, we’re open to that
					conversation.
				</p>
				<div class="mt-10">
					<GoldButton href="/contact">Start a Conversation</GoldButton>
				</div>
			</section>
		</section>
	</main>
</PageShell>
