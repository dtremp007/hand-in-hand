<script lang="ts">
	import GoldButton from '$lib/components/GoldButton.svelte';
	import PageShell from '$lib/components/PageShell.svelte';
</script>

<PageShell active="home">
	<main class="flex-grow">
		<section class="px-6 pt-44 pb-24 md:px-12 md:pt-56">
			<div class="max-w-7xl">
				<h1 class="max-w-5xl font-serif text-6xl leading-[0.98] tracking-tight text-paper md:text-8xl">
					You don’t have to keep dealing with this alone
				</h1>
				<p class="mt-10 max-w-2xl text-2xl leading-snug text-muted">
					Something needs to change, and you don’t have to face it alone.
				</p>
				<div class="mt-12 flex flex-wrap gap-6">
					<GoldButton href="/get-help">Get Help Now</GoldButton>
					<GoldButton href="/about" variant="outline">Learn More</GoldButton>
				</div>
			</div>
		</section>

		<section class="grid border-y border-[#4e4639]/40 md:grid-cols-[1.15fr_0.85fr]">
			<div class="px-6 py-20 md:px-12">
				<p class="text-xs font-bold uppercase tracking-[0.24em] text-gold">A personal message from Bob</p>
				<h2 class="mt-6 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
					Hear why Hand In Hand exists and our commitment to your journey.
				</h2>
			</div>
			<div class="flex min-h-72 items-center justify-center bg-surface-low p-8">
				<div class="flex h-40 w-40 flex-col items-center justify-center border border-gold/40 text-center text-gold">
					<span class="text-4xl">play_arrow</span>
					<span class="mt-4 text-xs font-extrabold uppercase tracking-[0.22em]">Play Message</span>
				</div>
			</div>
		</section>

		<section class="px-6 py-24 md:px-12">
			<div class="grid gap-12 md:grid-cols-12">
				<div class="md:col-span-5">
					<p class="text-xs font-extrabold uppercase tracking-[0.24em] text-gold">
						Confidentiality First
					</p>
					<blockquote class="mt-8 font-serif text-3xl leading-tight text-paper md:text-5xl">
						“What you share is handled with care and confidentiality. You will be connected
						with a trusted person. This is taken seriously.”
					</blockquote>
				</div>
				<div class="space-y-10 md:col-span-7">
					<h2 class="font-serif text-4xl leading-tight">
						There are things people carry that no one else sees.
					</h2>
					<p class="max-w-2xl text-xl leading-relaxed text-muted">
						Things they don’t talk about. Deep down, they know it’s still there. The private
						struggle shouldn't have to be a permanent one.
					</p>
					<p class="border-l border-gold pl-6 text-xl text-paper">
						Hidden struggles do not disappear by being ignored.
					</p>
				</div>
			</div>
		</section>

		<section class="grid border-y border-[#4e4639]/40 md:grid-cols-2">
			<div class="p-10 md:p-16">
				<p class="font-serif text-7xl text-gold">1 in 4</p>
				<p class="mt-4 text-xs font-extrabold uppercase tracking-[0.24em] text-gray-500">
					Adults struggle in silence
				</p>
			</div>
			<div class="border-t border-[#4e4639]/40 p-10 md:border-t-0 md:border-l md:p-16">
				<p class="font-serif text-7xl text-gold">68%</p>
				<p class="mt-4 text-xs font-extrabold uppercase tracking-[0.24em] text-gray-500">
					Never reach out for help
				</p>
			</div>
		</section>

		<section class="px-6 py-24 md:px-12">
			<h2 class="max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
				Real change happens through a relationship with God and walking with another person.
			</h2>
			<div class="mt-16 grid gap-px bg-[#4e4639]/40 md:grid-cols-2">
				<div class="bg-surface p-10 md:p-14">
					<p class="text-xs uppercase tracking-[0.24em] text-gold">Spiritual</p>
					<h3 class="mt-5 font-serif text-3xl">The Path of Faith</h3>
					<p class="mt-6 text-muted">Rooting your identity in something larger than your struggle.</p>
				</div>
				<div class="bg-surface-low p-10 md:p-14">
					<p class="text-xs uppercase tracking-[0.24em] text-gold">Personal</p>
					<h3 class="mt-5 font-serif text-3xl">The Path of Presence</h3>
					<p class="mt-6 text-muted">Walking step-by-step with a guide who understands the weight.</p>
				</div>
			</div>
		</section>

		<section class="px-6 pb-28 md:px-12">
			<div class="grid gap-12 md:grid-cols-12">
				<h2 class="font-serif text-4xl md:col-span-4">The Path Forward</h2>
				<div class="space-y-10 md:col-span-8">
					{#each [
						['01.', 'Reach out', 'Simply send a message. No judgment, no complexity. Just the first step toward change.'],
						['02.', 'Get connected', 'We carefully match you with a trusted person who is equipped to walk this specific road with you.'],
						['03.', 'Walk with someone', 'Consistent, honest relationship building that focuses on sustainable growth and healing.']
					] as step}
						<div class="grid gap-4 border-t border-[#4e4639]/50 pt-8 md:grid-cols-[5rem_1fr]">
							<p class="font-serif text-2xl text-gold">{step[0]}</p>
							<div>
								<h3 class="font-serif text-3xl">{step[1]}</h3>
								<p class="mt-3 max-w-xl text-muted">{step[2]}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<section class="bg-ink px-6 py-24 text-center md:px-12">
			<p class="font-serif text-3xl italic md:text-5xl">
				This does not change on its own. Take the first step.
			</p>
			<div class="mt-10">
				<GoldButton href="/get-help">Take The First Step</GoldButton>
			</div>
		</section>
	</main>
</PageShell>
