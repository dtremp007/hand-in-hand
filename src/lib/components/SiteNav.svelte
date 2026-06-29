<script lang="ts">
	let { active = 'home' } = $props<{ active?: string }>();
	let open = $state(false);

	const links = [
		{ href: '/', label: 'Home', key: 'home' },
		{ href: '/get-help', label: 'Get Help', key: 'get-help' },
		{ href: '/help-someone', label: 'Help Someone', key: 'help-someone' },
		{ href: '/churches', label: 'Churches', key: 'churches' },
		{ href: '/about', label: 'About', key: 'about' }
	];
</script>

<nav class="fixed top-0 z-50 w-full border-b border-[#4e4639]/30 bg-surface/90 px-6 py-4 backdrop-blur-xl md:px-12" class:h-dvh={open} class:flex={open} class:flex-col={open} class:md:h-auto={open} class:md:flex-none={open}>
	<div class="flex items-center justify-between">
		<a href="/" class="font-serif text-xl font-semibold tracking-tight text-gold md:text-2xl">Hand In Hand</a>

		<div class="hidden items-center gap-10 md:flex">
			{#each links as link}
				<a
					href={link.href}
					class={`font-serif text-xs font-semibold uppercase tracking-[0.22em] transition-colors ${
						active === link.key
							? 'border-b border-gold pb-1 text-gold'
							: 'text-gray-500 hover:text-paper'
					}`}
				>
					{link.label}
				</a>
			{/each}
		</div>

		<a
			href="/get-help"
			class="hidden border border-gold/40 bg-gold px-8 py-3 text-xs font-extrabold uppercase tracking-[0.18em] text-gold-deep transition hover:bg-transparent hover:text-gold md:inline-block"
		>
			Get Help Now
		</a>

		<button
			onclick={() => (open = !open)}
			class="flex items-center justify-center md:hidden"
			aria-label="Toggle menu"
			aria-expanded={open}
		>
			{#if open}
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			{/if}
		</button>
	</div>

	{#if open}
		<div class="mt-6 flex flex-1 flex-col justify-center gap-6 md:hidden">
			{#each links as link}
				<a
					href={link.href}
					onclick={() => (open = false)}
					class={`font-serif text-lg font-semibold uppercase tracking-[0.18em] transition-colors ${
						active === link.key ? 'text-gold' : 'text-gray-500 hover:text-paper'
					}`}
				>
					{link.label}
				</a>
			{/each}
			<a
				href="/get-help"
				onclick={() => (open = false)}
				class="mt-4 block border border-gold/40 bg-gold px-4 py-3 text-center text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-gold-deep transition hover:bg-transparent hover:text-gold"
			>
				Get Help Now
			</a>
		</div>
	{/if}
</nav>
