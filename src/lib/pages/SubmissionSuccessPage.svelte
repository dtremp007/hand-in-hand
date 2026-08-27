<script lang="ts">
	import type { Pathname } from '$app/types';
	import { page } from '$app/state';
	import GoldButton from '$lib/components/GoldButton.svelte';
	import PageShell from '$lib/components/PageShell.svelte';
	import { getContent, type Locale } from '$lib/content';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';

	const content = $derived(getContent(getLocale() as Locale).submissionSuccess);
	const from = $derived(page.url.searchParams.get('from'));
	const body = $derived(
		from === 'contact'
			? content.contactBody
			: from === 'get-involved'
				? content.getInvolvedBody
				: content.body
	);
</script>

<PageShell>
	<main class="flex flex-grow items-center justify-center px-6 pt-36 pb-24 md:px-12 md:pt-44">
		<section
			class="success-panel message-frame w-full max-w-3xl border border-[#2d2b27] px-8 py-16 text-center md:px-16 md:py-24"
		>
			<p class="success-brand font-serif text-sm tracking-[0.28em] text-gold uppercase">
				Hand In Hand
			</p>
			<h1
				class="success-title mt-8 text-balance font-serif text-5xl leading-[0.98] tracking-tight text-paper md:text-7xl"
			>
				{content.title}
			</h1>
			<p class="success-body mx-auto mt-10 max-w-xl text-pretty text-xl leading-relaxed text-muted md:text-2xl">
				{body}
			</p>
			<div class="success-cta mt-14">
				<GoldButton href={localizeHref('/') as Pathname}>{content.homeCta}</GoldButton>
			</div>
		</section>
	</main>
</PageShell>

<style>
	.success-brand,
	.success-title,
	.success-body,
	.success-cta {
		animation: success-rise 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
	}

	.success-title {
		animation-delay: 0.08s;
	}

	.success-body {
		animation-delay: 0.16s;
	}

	.success-cta {
		animation-delay: 0.28s;
	}

	@keyframes success-rise {
		from {
			opacity: 0;
			transform: translateY(0.85rem);
			filter: blur(4px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
			filter: blur(0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.success-brand,
		.success-title,
		.success-body,
		.success-cta {
			animation: none;
		}
	}
</style>
