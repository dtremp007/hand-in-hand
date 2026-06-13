<script lang="ts">
	import GoldButton from '$lib/components/GoldButton.svelte';
	import PageShell from '$lib/components/PageShell.svelte';
</script>

<PageShell active="about">
	<main class="mx-auto w-full max-w-7xl flex-grow px-6 pt-36 pb-24 md:px-12 md:pt-44">
		<section class="mb-24">
			<h1 class="max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
				This ministry is built on something simple: walking with people.
			</h1>
			<p class="mt-10 max-w-2xl text-2xl leading-relaxed text-muted">
				Real change doesn’t happen in isolation. It happens when someone is known, and not left alone in it.
			</p>
		</section>

		<section class="mb-24 border-y border-[#4e4639]/40 py-16 text-center">
			<blockquote class="font-serif text-4xl italic text-gold md:text-6xl">“Carry each other’s burdens.”</blockquote>
			<p class="mt-5 text-sm uppercase tracking-[0.24em] text-gray-500">Galatians 6:2</p>
		</section>

		<section class="mb-24 grid gap-px bg-[#4e4639]/40 md:grid-cols-3">
			{#each [
				['The Principle', 'consistency over intensity'],
				['The Action', 'showing up over quick solutions'],
				['The Standard', 'honesty over appearance']
			] as item}
				<div class="bg-surface-low p-10">
					<p class="text-xs font-bold uppercase tracking-[0.22em] text-gold">{item[0]}</p>
					<p class="mt-6 font-serif text-3xl">{item[1]}</p>
				</div>
			{/each}
		</section>

		<section class="mb-24 grid gap-12 md:grid-cols-12">
			<h2 class="font-serif text-4xl md:col-span-5">
				This ministry focuses on one thing: connecting people with someone who will walk with them.
			</h2>
			<div class="space-y-12 md:col-span-7">
				<div>
					<h3 class="font-serif text-3xl text-gold">The Need</h3>
					<p class="mt-4 text-xl leading-relaxed text-muted">
						There are struggles people don’t talk about. Not because they don’t want help, but because they don’t know how to begin.
					</p>
				</div>
				<div>
					<h3 class="font-serif text-3xl text-gold">The Integration</h3>
					<p class="mt-4 text-xl leading-relaxed text-muted">
						This ministry doesn’t replace the church. It doesn’t replace leadership. It exists to walk alongside what is already in place.
					</p>
				</div>
			</div>
		</section>

		<section class="mb-24 grid gap-10 bg-ink p-10 md:grid-cols-[12rem_1fr] md:p-16">
			<div class="flex h-32 w-32 items-center justify-center border border-gold font-serif text-4xl text-gold">H|H</div>
			<div>
				<h2 class="font-serif text-4xl">Bob</h2>
				<p class="mt-5 max-w-2xl text-xl leading-relaxed text-muted">
					This work is led by Bob, who has spent time walking with individuals directly and understands the weight of it.
				</p>
			</div>
		</section>

		<section class="text-center">
			<p class="font-serif text-4xl leading-tight">This is simple. People walking with people. That’s where it starts.</p>
			<div class="mt-10"><GoldButton href="/contact">Contact Us</GoldButton></div>
		</section>
	</main>
</PageShell>
