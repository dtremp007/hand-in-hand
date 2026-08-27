<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import AuthShell from '$lib/components/AuthShell.svelte';
	import type { ActionData, PageData } from './$types';

	let { data, form }: { data: PageData; form: ActionData } = $props();

	const inviteFromLink = $derived(Boolean(data.inviteCode));
	const loginQuery = $derived(
		page.url.searchParams.has('redirectTo')
			? `?redirectTo=${encodeURIComponent(page.url.searchParams.get('redirectTo') ?? '')}`
			: ''
	);
	const description = $derived(
		!data.registrationEnabled
			? 'Registration is not available until an administrator sets an invite code.'
			: inviteFromLink
				? 'This invite link is ready to use. Choose a name, email, and password.'
				: 'Create an admin account with the invite code shared by a current administrator.'
	);
</script>

<AuthShell eyebrow="Private Access" title="Register" {description}>
	{#if data.registrationEnabled}
		<form class="mt-12 space-y-8" method="post" action="?/signUpEmail" use:enhance>
			<label class="block">
				<span class="text-xs font-bold uppercase tracking-[0.2em] text-outline">Name</span>
				<input
					name="name"
					required
					autocomplete="name"
					class="mt-2 w-full border-0 border-b border-[#4e4639] bg-transparent py-4 text-paper outline-none focus:border-gold"
				/>
			</label>
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
					minlength="8"
					autocomplete="new-password"
					class="mt-2 w-full border-0 border-b border-[#4e4639] bg-transparent py-4 text-paper outline-none focus:border-gold"
				/>
			</label>

			{#if inviteFromLink}
				<input type="hidden" name="invite_code" value={data.inviteCode} />
				<p class="text-sm text-muted">This page was opened from an invite link.</p>
			{:else}
				<label class="block">
					<span class="text-xs font-bold uppercase tracking-[0.2em] text-outline">Invite code</span>
					<input
						type="password"
						name="invite_code"
						required
						autocomplete="off"
						spellcheck="false"
						class="mt-2 w-full border-0 border-b border-[#4e4639] bg-transparent py-4 text-paper outline-none focus:border-gold"
					/>
				</label>
			{/if}

			{#if form?.message}
				<p class="border border-red-400/40 bg-red-950/30 p-5 text-sm text-red-100">
					{form.message}
				</p>
			{/if}

			<button
				class="bg-gold px-10 py-5 text-xs font-extrabold uppercase tracking-[0.22em] text-gold-deep"
			>
				Create account
			</button>
		</form>
	{/if}

	<p class="mt-10 text-sm text-muted">
		Already have an account?
		<a
			href="{resolve('/login')}{loginQuery}"
			class="text-gold underline decoration-gold/40 underline-offset-4 transition hover:decoration-gold"
		>
			Login
		</a>
	</p>
</AuthShell>
