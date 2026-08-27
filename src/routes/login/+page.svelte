<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import AuthShell from '$lib/components/AuthShell.svelte';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<AuthShell
	eyebrow="Private Access"
	title="Login"
	description="Access the private admin area for Hand In Hand."
>
	<form class="mt-12 space-y-8" method="post" action="?/signInEmail" use:enhance>
		<label class="block">
			<span class="text-xs font-bold uppercase tracking-[0.2em] text-outline">Email</span>
			<input
				type="email"
				name="email"
				required
				autocomplete="email"
				class="mt-2 w-full border-0 border-b border-[#4e4639] bg-transparent py-4 text-paper outline-none focus:border-gold"
			/>
		</label>
		<label class="block">
			<span class="text-xs font-bold uppercase tracking-[0.2em] text-outline">Password</span>
			<input
				type="password"
				name="password"
				required
				autocomplete="current-password"
				class="mt-2 w-full border-0 border-b border-[#4e4639] bg-transparent py-4 text-paper outline-none focus:border-gold"
			/>
		</label>

		{#if form?.message}
			<p class="border border-red-400/40 bg-red-950/30 p-5 text-sm text-red-100">
				{form.message}
			</p>
		{/if}

		<button
			class="bg-gold px-10 py-5 text-xs font-extrabold uppercase tracking-[0.22em] text-gold-deep"
		>
			Login
		</button>
	</form>

	<p class="mt-10 text-sm text-muted">
		Need an admin account?
		<a
			href="{resolve('/register')}{page.url.search}"
			class="text-gold underline decoration-gold/40 underline-offset-4 transition hover:decoration-gold"
		>
			Register with an invite code
		</a>
	</p>
</AuthShell>
