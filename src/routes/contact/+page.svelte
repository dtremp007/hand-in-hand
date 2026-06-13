<script lang="ts">
	import PageShell from '$lib/components/PageShell.svelte';
</script>

<PageShell active="churches">
	<main class="mx-auto w-full max-w-4xl flex-grow px-6 pt-36 pb-24 md:px-12 md:pt-44">
		<section class="mb-16">
			<h1 class="font-serif text-5xl leading-tight md:text-7xl">
				This doesn’t need to be complicated. Just a conversation to start.
			</h1>
			<p class="mt-8 text-xl leading-relaxed text-muted">
				You don’t need to have everything figured out. If something here resonates, this is simply
				a place to begin.
			</p>
			<p class="mt-4 text-xl leading-relaxed text-muted">
				This is not a formal process. But it is intentional. We take these conversations seriously,
				and we approach them with care.
			</p>
		</section>

		<section>
			<h2 class="mb-10 font-serif text-3xl text-gold">Share a few details, and we’ll follow up.</h2>
			<form class="space-y-8">
				{#each ['Name (required)', 'Church Name (required)', 'Role (required)', 'Contact Information (required)', 'What prompted you to reach out?'] as label}
					<label class="block">
						<span class="text-xs font-bold uppercase tracking-[0.2em] text-outline">{label}</span>
						<textarea
							rows={label.startsWith('What') ? 4 : 1}
							class="mt-2 w-full resize-none border-0 border-b border-[#4e4639] bg-transparent py-4 text-paper outline-none focus:border-gold"
						></textarea>
					</label>
				{/each}
				<p class="font-serif text-2xl italic">No pressure. Just a starting point.</p>
				<button class="bg-gold px-10 py-5 text-xs font-extrabold uppercase tracking-[0.22em] text-gold-deep" type="button">
					Start the Conversation
				</button>
			</form>
		</section>
	</main>
</PageShell>
