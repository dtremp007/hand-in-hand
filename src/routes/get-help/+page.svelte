<script lang="ts">
	import GoldButton from '$lib/components/GoldButton.svelte';
	import PageShell from '$lib/components/PageShell.svelte';
</script>

<PageShell active="get-help">
	<main class="mx-auto w-full max-w-7xl flex-grow px-6 pt-36 pb-24 md:px-12 md:pt-44">
		<section class="mb-28 max-w-4xl">
			<h1 class="font-serif text-5xl leading-tight text-paper md:text-7xl">
				You’re not signing up for something complicated.
				<span class="italic text-gold">You’re taking a first step.</span>
			</h1>
			<p class="mt-8 max-w-2xl text-xl leading-relaxed text-muted">
				Walking through life’s hardest seasons shouldn't be a solitary journey. We are here to
				listen, stay present, and move forward alongside you.
			</p>
		</section>

		<section class="mb-28 grid gap-12 md:grid-cols-12">
			<div class="md:col-span-4">
				<h2 class="font-serif text-2xl uppercase tracking-[0.3em] text-gold/70">The Process</h2>
				<p class="mt-4 text-sm uppercase tracking-[0.22em] text-outline">What happens next</p>
			</div>
			<div class="space-y-16 md:col-span-8">
				{#each [
					['01', 'You reach out', 'Simply fill out the form below. No elaborate history required, just a way for us to connect.'],
					['02', 'We respond', 'A member of our team will review your message and reach out to you directly and discreetly.'],
					['03', 'You are connected with someone', 'We match you with a dedicated individual who understands the gravity of your situation.'],
					['04', 'You begin walking through this together', 'Real change happens in the presence of consistent, grounded support. We start there.']
				] as step}
					<div>
						<p class="mb-4 text-xs font-bold text-gold">{step[0]}</p>
						<h3 class="font-serif text-3xl">{step[1]}</h3>
						<p class="mt-4 max-w-md leading-relaxed text-muted">{step[2]}</p>
					</div>
				{/each}
			</div>
		</section>

		<section class="mb-28 grid gap-px bg-[#4e4639]/40 md:grid-cols-2">
			<div class="bg-surface p-10 md:p-16">
				<h3 class="font-serif text-3xl text-gold">Confidentiality</h3>
				<p class="mt-8 text-xl leading-relaxed">What you share is handled with care and confidentiality.</p>
				<ul class="mt-10 space-y-5 text-sm uppercase tracking-[0.2em] text-muted">
					<li class="flex items-center gap-4"><span class="h-1.5 w-1.5 bg-gold"></span>You will not be exposed</li>
					<li class="flex items-center gap-4"><span class="h-1.5 w-1.5 bg-gold"></span>You will be taken seriously</li>
				</ul>
			</div>
			<div class="bg-surface-low p-10 md:p-16">
				<h3 class="font-serif text-3xl text-gold">Expectation</h3>
				<p class="mt-8 text-xl leading-relaxed text-muted">
					This is not passive. It takes honesty and willingness. We provide the support, but
					the journey requires your active presence.
				</p>
			</div>
		</section>

		<section class="mx-auto max-w-2xl py-12" id="get-help-form">
			<div class="mb-14 text-center">
				<h2 class="font-serif text-5xl">Request Connection</h2>
				<p class="mt-4 font-serif text-xl italic text-muted">Taking the first step toward real change.</p>
			</div>
			<form class="space-y-10">
				{#each [
					['full_name', 'Name (Required)', 'Your full name', 'text'],
					['contact_info', 'Contact Information (Phone or Email, Required)', 'How can we reach you?', 'text'],
					['location', 'Location (Optional)', 'City or Region', 'text']
				] as field}
					<label class="block">
						<span class="text-xs font-bold uppercase tracking-[0.22em] text-outline">{field[1]}</span>
						<input
							id={field[0]}
							name={field[0]}
							type={field[3]}
							placeholder={field[2]}
							class="mt-2 w-full border-0 border-b border-[#4e4639] bg-transparent px-0 py-4 text-lg text-paper outline-none transition placeholder:text-[#5f5850] focus:border-gold"
						/>
					</label>
				{/each}
				<label class="block">
					<span class="text-xs font-bold uppercase tracking-[0.22em] text-outline">Short Message (Optional)</span>
					<textarea
						name="message"
						rows="4"
						placeholder="Briefly, how can we help?"
						class="mt-2 w-full resize-none border-0 border-b border-[#4e4639] bg-transparent px-0 py-4 text-lg text-paper outline-none transition placeholder:text-[#5f5850] focus:border-gold"
					></textarea>
				</label>
				<label class="flex items-start gap-4 text-sm text-muted">
					<input class="mt-1 h-5 w-5 border-[#4e4639] bg-transparent accent-gold" type="checkbox" />
					<span>I understand this is a step toward real change</span>
				</label>
				<div class="pt-8 text-center">
					<p class="mx-auto mb-10 max-w-md font-serif text-2xl italic">
						"If you’re here, something in you already knows. Take the first step."
					</p>
					<button
						class="w-full bg-gold px-10 py-5 text-xs font-extrabold uppercase tracking-[0.22em] text-gold-deep transition hover:opacity-90 md:w-auto"
						type="button"
					>
						Take The First Step
					</button>
				</div>
			</form>
		</section>
	</main>
</PageShell>
