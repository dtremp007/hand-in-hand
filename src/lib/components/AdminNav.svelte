<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	const links = [
		{ href: '/admin/submissions' as const, label: 'Submissions', key: 'submissions' as const },
		{ href: '/admin/settings' as const, label: 'Notification emails', key: 'settings' as const }
	];

	const current = $derived(
		page.url.pathname.startsWith('/admin/settings') ? 'settings' : 'submissions'
	);
</script>

<header
	class="sticky top-0 z-50 border-b border-[#4e4639]/40 bg-surface/95 px-6 py-4 backdrop-blur-xl md:px-12"
>
	<div
		class="mx-auto flex w-full max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
	>
		<a
			href={resolve('/admin/submissions')}
			class="font-serif text-xl font-semibold tracking-tight text-gold"
		>
			Hand In Hand
			<span
				class="ml-2 font-sans text-[0.65rem] font-extrabold uppercase tracking-[0.22em] text-outline"
			>
				Admin
			</span>
		</a>

		<div class="flex flex-wrap items-center gap-x-8 gap-y-3">
			<nav class="flex flex-wrap gap-x-8 gap-y-3 text-xs font-bold uppercase tracking-[0.2em]">
				{#each links as link (link.key)}
					<a
						href={resolve(link.href)}
						class={current === link.key
							? 'border-b border-gold pb-1 text-gold'
							: 'text-outline transition hover:text-paper'}
						aria-current={current === link.key ? 'page' : undefined}
					>
						{link.label}
					</a>
				{/each}
			</nav>
			<form method="post" action={resolve('/logout')}>
				<button
					type="submit"
					class="text-xs font-bold uppercase tracking-[0.2em] text-outline transition hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
				>
					Sign out
				</button>
			</form>
		</div>
	</div>
</header>
