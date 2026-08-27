<script lang="ts" module>
	let turnstileReady: Promise<void> | undefined;

	function loadTurnstileApi() {
		if (typeof window === 'undefined') {
			return Promise.resolve();
		}

		if (window.turnstile) {
			return Promise.resolve();
		}

		if (turnstileReady) {
			return turnstileReady;
		}

		turnstileReady = new Promise((resolve, reject) => {
			const existing = document.querySelector<HTMLScriptElement>(
				'script[data-turnstile="explicit"]'
			);

			const onReady = () => resolve();

			if (window.turnstile) {
				onReady();
				return;
			}

			window.__onTurnstileLoad = onReady;

			if (existing) {
				existing.addEventListener('load', onReady, { once: true });
				existing.addEventListener('error', () => reject(new Error('Turnstile failed to load')), {
					once: true
				});
				return;
			}

			const script = document.createElement('script');
			script.src =
				'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=__onTurnstileLoad&render=explicit';
			script.async = true;
			script.dataset.turnstile = 'explicit';
			script.addEventListener('error', () => reject(new Error('Turnstile failed to load')), {
				once: true
			});
			document.head.appendChild(script);
		});

		return turnstileReady;
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	let {
		action,
		siteKey,
		language,
		reset = $bindable(() => {})
	}: {
		action: string;
		siteKey: string;
		language: string;
		reset?: () => void;
	} = $props();

	let container: HTMLDivElement | undefined = $state();

	onMount(() => {
		let cancelled = false;
		let widgetId: string | undefined;

		loadTurnstileApi()
			.then(() => {
				if (cancelled || !container || !siteKey || !window.turnstile) return;

				widgetId = window.turnstile.render(container, {
					sitekey: siteKey,
					action,
					theme: 'dark',
					language
				});

				reset = () => {
					if (widgetId !== undefined) {
						window.turnstile?.reset(widgetId);
					}
				};
			})
			.catch(() => {});

		return () => {
			cancelled = true;
			if (widgetId !== undefined) {
				window.turnstile?.remove(widgetId);
			}
		};
	});
</script>

<div bind:this={container}></div>
