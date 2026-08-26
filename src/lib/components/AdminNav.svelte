<script lang="ts">
	let { current }: { current: 'submissions' | 'settings' } = $props();

	const links = [
		{ href: '/admin/submissions', label: 'Submissions', key: 'submissions' as const },
		{ href: '/admin/settings', label: 'Notification emails', key: 'settings' as const }
	];
</script>

<nav class="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-xs font-bold uppercase tracking-[0.2em]">
	{#each links as link}
		<a
			href={link.href}
			class={current === link.key ? 'text-gold' : 'text-outline transition hover:text-paper'}
			aria-current={current === link.key ? 'page' : undefined}
		>
			{link.label}
		</a>
	{/each}
</nav>
