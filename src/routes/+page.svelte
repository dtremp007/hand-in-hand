<script lang="ts">
	import GoldButton from '$lib/components/GoldButton.svelte';
	import PageShell from '$lib/components/PageShell.svelte';
	import ProcessSteps from '$lib/components/ProcessSteps.svelte';
	import SectionFrame from '$lib/components/SectionFrame.svelte';
</script>

<PageShell active="home">
	<main class="flex-grow">
		<SectionFrame spacing="pt-44 pb-24 md:pt-56">
			<h1
				class="max-w-5xl font-serif text-6xl leading-[0.98] tracking-tight text-paper md:text-8xl"
			>
				You don’t have to keep dealing with this alone
			</h1>
			<p class="mt-10 max-w-2xl text-2xl leading-snug text-muted">
				Something needs to change, and you don’t have to face it alone.
			</p>
			<div class="mt-12 flex flex-wrap gap-6">
				<GoldButton href="/get-help">Get Help Now</GoldButton>
				<GoldButton href="/about" variant="outline">Learn More</GoldButton>
			</div>
		</SectionFrame>

		<SectionFrame
			class="border-y border-[#2b2925] bg-ink"
			spacing="py-24 md:py-36"
			innerClass="grid items-center gap-16 md:grid-cols-[0.72fr_1.28fr]"
		>
			<div class="max-w-xl">
				<h2 class="font-serif text-5xl leading-[0.96] text-paper md:text-6xl">
					A personal message from Bob
				</h2>
				<p class="mt-10 text-xl leading-relaxed text-muted md:text-2xl">
					Hear from our founder about why Hand In Hand exists and our commitment to your journey.
				</p>
			</div>
			<div
				class="message-frame flex min-h-[22rem] items-center justify-center border border-[#2d2b27] bg-surface p-8 md:min-h-[30rem]"
			>
				<a
					href="/about"
					aria-label="Play Bob's message"
					class="group flex flex-col items-center gap-7 text-gold"
				>
					<span
						class="flex h-28 w-28 items-center justify-center rounded-full border border-gold/25 transition group-hover:border-gold/70 md:h-36 md:w-36"
					>
						<span
							class="ml-1 h-0 w-0 border-y-[1rem] border-l-[1.35rem] border-y-transparent border-l-gold md:border-y-[1.25rem] md:border-l-[1.7rem]"
						></span>
					</span>
					<span
						class="text-xs font-extrabold uppercase tracking-[0.36em] text-gold/65 transition group-hover:text-gold"
					>
						Play Message
					</span>
				</a>
			</div>
		</SectionFrame>

		<SectionFrame
			class="border-b border-[#2b2925] bg-surface text-center"
			spacing="py-28 md:py-44"
			innerClass="max-w-4xl"
		>
			<p class="text-xs font-extrabold uppercase tracking-[0.42em] text-gold">
				Confidentiality First
			</p>
			<blockquote
				class="mt-12 font-serif text-2xl font-semibold italic leading-[1.08] text-paper md:text-4xl"
			>
				“What you share is handled with care and confidentiality. You will be connected with a
				trusted person. This is taken seriously.”
			</blockquote>
		</SectionFrame>

		<SectionFrame
			class="bg-surface"
			spacing="py-20 md:py-8"
			innerClass="grid items-center gap-16 md:grid-cols-[0.98fr_1fr]"
		>
			<div class="unseen-panel min-h-[30rem] border border-[#2d2b27] bg-ink md:min-h-[43rem]">
				<div class="vertical-mark" aria-hidden="true"></div>
			</div>
			<div class="max-w-3xl md:pl-20">
				<h2 class="font-serif text-5xl leading-[0.98] text-paper md:text-7xl">
					There are things people carry that no one else sees.
				</h2>
				<p class="mt-14 text-2xl leading-relaxed text-muted">
					Things they don’t talk about. Deep down, they know it’s still there. The private struggle
					shouldn’t have to be a permanent one.
				</p>
			</div>
		</SectionFrame>

		<SectionFrame class="bg-ink" spacing="py-32 md:py-40">
			<div class="flex flex-col items-start justify-between gap-16 md:flex-row">
				<h2 class="max-w-3xl font-serif text-4xl leading-tight text-paper md:text-6xl">
					Hidden struggles do not disappear by being ignored.
				</h2>
				<div class="h-px w-full self-center bg-[#4e4639]/30 md:h-32 md:w-px"></div>
				<div class="flex flex-col gap-12">
					<div>
						<span class="mb-3 block font-serif text-6xl text-gold">1 in 4</span>
						<p class="text-[10px] font-extrabold uppercase tracking-[0.24em] text-gray-500">
							Adults struggle in silence
						</p>
					</div>
					<div>
						<span class="mb-3 block font-serif text-6xl text-gold">68%</span>
						<p class="text-[10px] font-extrabold uppercase tracking-[0.24em] text-gray-500">
							Never reach out for help
						</p>
					</div>
				</div>
			</div>
		</SectionFrame>

		<SectionFrame spacing="py-24 text-center">
			<h2 class="font-headline text-3xl md:text-5xl mb-24 max-w-4xl mx-auto">
				Real change happens through a relationship with God and walking with another person.
			</h2>
			<div class="mt-16 grid gap-px bg-[#4e4639]/40 md:grid-cols-2">
				<div class="bg-surface p-10 md:p-14">
					<p class="text-xs uppercase tracking-[0.24em] text-gold">Spiritual</p>
					<h3 class="mt-5 font-serif text-3xl">The Path of Faith</h3>
					<p class="mt-6 text-muted">
						Rooting your identity in something larger than your struggle.
					</p>
				</div>
				<div class="bg-surface-low p-10 md:p-14">
					<p class="text-xs uppercase tracking-[0.24em] text-gold">Personal</p>
					<h3 class="mt-5 font-serif text-3xl">The Path of Presence</h3>
					<p class="mt-6 text-muted">
						Walking step-by-step with a guide who understands the weight.
					</p>
				</div>
			</div>
		</SectionFrame>

		<SectionFrame spacing="pt-0 pb-28">
			<ProcessSteps />
		</SectionFrame>

		<SectionFrame class="bg-ink text-center" spacing="py-24" innerClass="max-w-4xl">
			<p class="font-serif text-3xl italic md:text-5xl">
				This does not change on its own. Take the first step.
			</p>
			<div class="mt-10">
				<GoldButton href="/get-help">Take The First Step</GoldButton>
			</div>
		</SectionFrame>
	</main>
</PageShell>
