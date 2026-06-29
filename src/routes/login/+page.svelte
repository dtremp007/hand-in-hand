<script lang="ts">
	import { enhance } from '$app/forms';
	import PageShell from '$lib/components/PageShell.svelte';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<PageShell>
	<main
		class="mx-auto flex w-full max-w-xl flex-grow flex-col justify-center px-6 pt-36 pb-24 md:px-12 md:pt-44"
	>
		<section>
			<p class="text-xs font-bold uppercase tracking-[0.24em] text-gold">Private Access</p>
			<h1 class="mt-5 font-serif text-5xl leading-tight text-paper md:text-6xl">Login</h1>
			<p class="mt-6 text-lg leading-relaxed text-muted">
				Access the private admin area for Hand In Hand.
			</p>
		</section>

		<form class="mt-12 space-y-8" method="post" action="?/signInEmail" use:enhance>
			<label class="block">
				<span class="text-xs font-bold uppercase tracking-[0.2em] text-outline">Email</span>
				<input
					type="email"
					name="email"
					required
					class="mt-2 w-full border-0 border-b border-[#4e4639] bg-transparent py-4 text-paper outline-none focus:border-gold"
				/>
			</label>
			<label class="block">
				<span class="text-xs font-bold uppercase tracking-[0.2em] text-outline">Password</span>
				<input
					type="password"
					name="password"
					required
					class="mt-2 w-full border-0 border-b border-[#4e4639] bg-transparent py-4 text-paper outline-none focus:border-gold"
				/>
			</label>
			<label class="block">
				<span class="text-xs font-bold uppercase tracking-[0.2em] text-outline">
					Name for registration
				</span>
				<input
					name="name"
					class="mt-2 w-full border-0 border-b border-[#4e4639] bg-transparent py-4 text-paper outline-none focus:border-gold"
				/>
			</label>

			{#if form?.message}
				<p class="border border-red-400/40 bg-red-950/30 p-5 text-sm text-red-100">
					{form.message}
				</p>
			{/if}

			<div class="flex flex-col gap-4 sm:flex-row">
				<button
					class="bg-gold px-10 py-5 text-xs font-extrabold uppercase tracking-[0.22em] text-gold-deep"
				>
					Login
				</button>
				<button
					formaction="?/signUpEmail"
					class="border border-gold px-10 py-5 text-xs font-extrabold uppercase tracking-[0.22em] text-gold"
				>
					Register
				</button>
			</div>
		</form>
	</main>
</PageShell>
