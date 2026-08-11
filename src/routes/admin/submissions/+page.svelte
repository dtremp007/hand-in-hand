<script lang="ts">
	import PageShell from '$lib/components/PageShell.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const labels: Record<PageData['submissions'][number]['kind'], string> = {
		get_involved: 'Get Involved',
		get_help: 'Get Help',
		help_someone: 'Help Someone',
		contact: 'Contact'
	};
</script>

<PageShell>
	<main class="mx-auto w-full max-w-7xl flex-grow px-6 pt-36 pb-24 md:px-12 md:pt-44">
		<section class="mb-12">
			<p class="text-xs font-bold uppercase tracking-[0.24em] text-gold">Admin</p>
			<h1 class="mt-5 font-serif text-5xl leading-tight text-paper md:text-7xl">Submissions</h1>
			<p class="mt-6 max-w-2xl text-xl leading-relaxed text-muted">
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
							<th class="px-5 py-4 font-bold">Details</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-[#4e4639]/60">
						{#each data.submissions as item}
							<tr class="align-top">
								<td class="whitespace-nowrap px-5 py-5 text-muted">
									{item.createdAt.toLocaleDateString()}
								</td>
								<td class="whitespace-nowrap px-5 py-5 text-gold">{labels[item.kind]}</td>
								<td class="px-5 py-5 font-serif text-xl text-paper">{item.name}</td>
								<td class="px-5 py-5 text-paper">
									<div class="space-y-1">
										<p>{item.contactInfo}</p>
										{#if item.email}
											<p class="text-muted">{item.email}</p>
										{/if}
									</div>
								</td>
								<td class="max-w-xl px-5 py-5 text-muted">
									<div class="space-y-3">
										{#if item.role}
											<p><span class="text-outline">Role:</span> {item.role}</p>
										{/if}
										{#if item.age}
											<p><span class="text-outline">Age:</span> {item.age}</p>
										{/if}
										{#if item.language}
											<p><span class="text-outline">Language:</span> {item.language}</p>
										{/if}
										{#if item.location}
											<p><span class="text-outline">Location:</span> {item.location}</p>
										{/if}
										{#if item.churchName}
											<p><span class="text-outline">Church:</span> {item.churchName}</p>
										{/if}
										{#if item.partner}
											<p><span class="text-outline">Partner:</span> {item.partner}</p>
										{/if}
										{#if item.experience}
											<p><span class="text-outline">Experience:</span> {item.experience}</p>
										{/if}
										{#if item.readiness}
											<p><span class="text-outline">Readiness:</span> {item.readiness}</p>
										{/if}
										{#if item.prompt}
											<p><span class="text-outline">Prompt:</span> {item.prompt}</p>
										{/if}
										{#if item.message}
											<p><span class="text-outline">Message:</span> {item.message}</p>
										{/if}
									</div>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/if}
	</main>
</PageShell>
