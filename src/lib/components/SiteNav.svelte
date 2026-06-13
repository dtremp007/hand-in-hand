<script lang="ts">
	let { active = 'home' } = $props<{ active?: string }>();

	const links = [
		{ href: '/', label: 'Home', key: 'home' },
		{ href: '/get-help', label: 'Get Help', key: 'get-help' },
		{ href: '/help-someone', label: 'Help Someone', key: 'help-someone' },
		{ href: '/churches', label: 'Churches', key: 'churches' },
		{ href: '/about', label: 'About', key: 'about' }
	];
</script>

<nav class="fixed top-0 z-50 w-full border-b border-[#4e4639]/30 bg-surface/90 px-6 py-4 backdrop-blur-xl md:px-12">
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
			class="border border-gold/40 bg-gold px-4 py-2 text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-gold-deep transition hover:bg-transparent hover:text-gold md:px-8 md:py-3 md:text-xs"
		>
			Get Help Now
		</a>
	</div>

	<div class="mt-4 flex gap-5 overflow-x-auto pb-1 md:hidden">
		{#each links as link}
			<a
				href={link.href}
				class={`shrink-0 font-serif text-[0.65rem] font-semibold uppercase tracking-[0.18em] ${
					active === link.key ? 'text-gold' : 'text-gray-500'
				}`}
			>
				{link.label}
			</a>
		{/each}
	</div>
</nav>
