<script lang="ts">
	import type { Pathname } from '$app/types';
	import GoldButton from '$lib/components/GoldButton.svelte';
	import PageShell from '$lib/components/PageShell.svelte';
	import SectionFrame from '$lib/components/SectionFrame.svelte';
	import { getContent, type Locale } from '$lib/content';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';

	const content = $derived(getContent(getLocale() as Locale).howItWorks);
</script>

<PageShell active="how-it-works">
	<main class="flex-grow">
		<SectionFrame
			spacing="pt-40 pb-20 md:pt-52 md:pb-28"
			innerClass="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]"
		>
			<div>
				<p class="text-xs font-extrabold uppercase tracking-[0.42em] text-gold">{content.label}</p>
				<h1 class="mt-6 font-serif text-6xl leading-[0.98] tracking-tight md:text-8xl">
					{content.title}
				</h1>
				<p class="mt-8 max-w-xl text-2xl leading-snug text-muted">{content.subtitle}</p>
			</div>
			<figure>
				<img
					src={content.image.src}
					alt={content.image.alt}
					width={content.image.width}
					height={content.image.height}
					class="h-auto w-full border border-[#4e4639]/50"
				/>
				<figcaption class="mt-4 text-xs font-extrabold uppercase tracking-[0.22em] text-outline">
					{content.image.caption}
				</figcaption>
			</figure>
		</SectionFrame>

		<SectionFrame
			class="border-y border-[#2b2925] bg-ink"
			spacing="py-20 md:py-28"
			innerClass="grid gap-16 lg:grid-cols-[1.2fr_1fr]"
		>
			<p class="max-w-2xl font-serif text-3xl leading-snug text-paper md:text-4xl">
				{content.intro}
			</p>
			<dl class="divide-y divide-[#4e4639]/50 border-y border-[#4e4639]/50">
				{#each content.rhythm as beat (beat.when)}
					<div class="grid grid-cols-[7rem_1fr] gap-6 py-6">
						<dt class="text-xs font-extrabold uppercase tracking-[0.22em] text-gold">
							{beat.when}
						</dt>
						<dd class="text-lg leading-relaxed text-muted">{beat.what}</dd>
					</div>
				{/each}
			</dl>
		</SectionFrame>

		{#each content.roles as role, i (role.name)}
			<SectionFrame spacing="py-20 md:py-28" class={i > 0 ? 'border-t border-[#2b2925]' : ''}>
				<div class="grid gap-12 lg:grid-cols-[20rem_1fr]">
					<header class="lg:sticky lg:top-32 lg:self-start">
						<p class="text-xs font-extrabold uppercase tracking-[0.22em] text-outline">
							{role.count}
						</p>
						<h2 class="mt-4 font-serif text-5xl text-gold md:text-6xl">{role.name}</h2>
						<p class="mt-6 text-lg leading-relaxed text-muted">{role.summary}</p>
					</header>
					<ol class="grid gap-x-12 gap-y-8 md:grid-cols-2">
						{#each role.duties as duty, n (duty)}
							<li class="flex gap-5 border-t border-[#4e4639]/50 pt-5">
								<span class="font-serif text-2xl text-gold/70 tabular-nums">
									{String(n + 1).padStart(2, '0')}
								</span>
								<span class="text-lg leading-relaxed text-paper">{duty}</span>
							</li>
						{/each}
					</ol>
				</div>
			</SectionFrame>
		{/each}

		<SectionFrame class="bg-surface-low" spacing="py-20 md:py-28">
			<p class="text-xs font-extrabold uppercase tracking-[0.42em] text-gold">
				{content.questions.label}
			</p>
			<h2 class="mt-5 font-serif text-4xl text-paper md:text-5xl">{content.questions.title}</h2>
			<ol class="mt-14 grid gap-px bg-[#4e4639]/50 md:grid-cols-3">
				{#each content.questions.items as question, n (question)}
					<li class="bg-surface-low p-8 md:p-10">
						<span class="font-serif text-5xl text-gold/60">{n + 1}</span>
						<p class="mt-6 font-serif text-2xl leading-snug text-paper md:text-3xl">{question}</p>
					</li>
				{/each}
			</ol>
		</SectionFrame>

		<SectionFrame spacing="py-20 md:py-28">
			<div class="grid gap-12 bg-surface-low p-10 md:p-16 lg:grid-cols-[20rem_1fr]">
				<header>
					<p class="text-xs font-extrabold uppercase tracking-[0.22em] text-outline">
						{content.ambassador.label} · {content.ambassador.count}
					</p>
					<h2 class="mt-4 font-serif text-4xl text-paper md:text-5xl">
						{content.ambassador.name}
					</h2>
					<p class="mt-6 text-lg leading-relaxed text-muted">{content.ambassador.summary}</p>
				</header>
				<ol class="space-y-5">
					{#each content.ambassador.duties as duty, n (duty)}
						<li class="flex gap-5 text-lg leading-relaxed text-muted">
							<span class="w-6 shrink-0 text-gold/70 tabular-nums">{n + 1}</span>
							<span>{duty}</span>
						</li>
					{/each}
				</ol>
			</div>
		</SectionFrame>

		<SectionFrame spacing="pb-28 md:pb-40" innerClass="text-center">
			<div class="vertical-mark mx-auto"></div>
			<p class="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-outline">
				{content.confidentiality}
			</p>
			<h2 class="mt-14 font-serif text-4xl text-paper md:text-5xl">{content.cta.title}</h2>
			<p class="mx-auto mt-6 max-w-xl text-xl leading-relaxed text-muted">{content.cta.body}</p>
			<div class="mt-10">
				<GoldButton href={localizeHref('/get-involved') as Pathname}
					>{content.cta.button}</GoldButton
				>
			</div>
		</SectionFrame>
	</main>
</PageShell>
