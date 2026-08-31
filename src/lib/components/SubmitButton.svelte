<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	let {
		submitting = false,
		busyLabel,
		class: className = '',
		children,
		type = 'submit',
		disabled = false,
		...rest
	}: {
		submitting?: boolean;
		busyLabel: string;
		class?: string;
		children: Snippet;
	} & Omit<HTMLButtonAttributes, 'class' | 'children'> = $props();
</script>

<button
	{...rest}
	{type}
	disabled={disabled || submitting}
	aria-busy={submitting}
	aria-label={submitting ? busyLabel : undefined}
	class="relative inline-flex items-center justify-center bg-gold px-10 py-5 text-xs font-extrabold uppercase tracking-[0.22em] text-gold-deep transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-deep disabled:cursor-wait disabled:opacity-80 {className}"
>
	<span class={['inline-flex items-center justify-center', submitting && 'invisible']}>
		{@render children()}
	</span>
	{#if submitting}
		<span class="absolute inset-0 flex items-center justify-center gap-3" aria-hidden="true">
			<span class="submit-mark"></span>
			{busyLabel}
		</span>
	{/if}
</button>

<style>
	button {
		appearance: none;
		font-family: var(--font-sans);
		font-size: 0.75rem;
		font-weight: 800;
		letter-spacing: 0.22em;
		line-height: 1;
		text-transform: uppercase;
	}

	.submit-mark {
		width: 0.65rem;
		height: 0.65rem;
		border: 1px solid currentColor;
		animation: submit-mark 1.2s steps(4, end) infinite;
	}

	@keyframes submit-mark {
		to {
			transform: rotate(360deg);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.submit-mark {
			animation: submit-mark-pulse 1.4s ease-in-out infinite;
		}

		@keyframes submit-mark-pulse {
			0%,
			100% {
				opacity: 0.35;
			}
			50% {
				opacity: 1;
			}
		}
	}
</style>
