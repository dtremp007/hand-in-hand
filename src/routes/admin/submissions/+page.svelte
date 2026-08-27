<script lang="ts">
	import { resolve } from '$app/paths';
	import { submissionKindLabels } from '$lib/submission-display';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<main class="mx-auto w-full max-w-7xl flex-grow px-6 py-12 md:px-12 md:py-16">
	<section class="mb-12">
		<h1 class="font-serif text-4xl leading-tight text-paper md:text-5xl">Submissions</h1>
		<p class="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
			New form responses from people getting involved or starting a church conversation.
		</p>
	</section>

	{#if data.submissions.length === 0}
		<p class="border border-[#4e4639]/60 bg-surface-low p-8 font-serif text-2xl text-muted">
			No submissions yet.
		</p>
	{:else}
		<div class="overflow-x-auto border border-[#4e4639]/60">
			<table class="min-w-full border-collapse bg-surface-low text-left text-sm">
				<thead class="border-b border-[#4e4639]/60 text-xs uppercase tracking-[0.2em] text-outline">
					<tr>
						<th class="px-5 py-4 font-bold">Received</th>
						<th class="px-5 py-4 font-bold">Type</th>
						<th class="px-5 py-4 font-bold">Name</th>
						<th class="px-5 py-4 font-bold">Contact</th>
						<th class="px-5 py-4 font-bold"><span class="sr-only">Open</span></th>
					</tr>
				</thead>
				<tbody class="divide-y divide-[#4e4639]/60">
					{#each data.submissions as item (item.id)}
						<tr class="align-top">
							<td class="whitespace-nowrap px-5 py-5 text-muted">
								{item.createdAt.toLocaleDateString()}
							</td>
							<td class="whitespace-nowrap px-5 py-5 text-gold"
								>{submissionKindLabels[item.kind]}</td
							>
							<td class="px-5 py-5 font-serif text-xl text-paper">{item.name}</td>
							<td class="px-5 py-5 text-paper">
								<div class="space-y-1">
									<p>{item.contactInfo}</p>
									{#if item.email}
										<p class="text-muted">{item.email}</p>
									{/if}
								</div>
							</td>
							<td class="whitespace-nowrap px-5 py-5">
								<a
									href={resolve(`/admin/submissions/${item.id}`)}
									class="text-xs font-extrabold uppercase tracking-[0.2em] text-gold transition hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
								>
									View
								</a>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/if}
</main>
