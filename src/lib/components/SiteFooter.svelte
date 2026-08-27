<script lang="ts">
	import type { Pathname } from '$app/types';
	import { m } from '$lib/paraglide/messages';
	import { localizeHref } from '$lib/paraglide/runtime';
</script>

<footer
	class="mt-auto flex w-full flex-col gap-8 bg-ink px-6 py-14 md:flex-row md:items-start md:justify-between md:px-12"
>
	<div class="space-y-4">
		<a
			href={localizeHref('/') as Pathname}
			class="inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
		>
			<img
				src="/images/logo-gold.webp"
				alt="Hand In Hand Ministry"
				width="849"
				height="208"
				class="h-10 w-auto md:h-12"
			/>
		</a>
		<p class="max-w-md text-xs uppercase tracking-[0.18em] text-gray-500">
			{m.footer_tagline()}
		</p>
	</div>

	<div
		class="flex flex-col gap-4 text-xs uppercase tracking-[0.18em] text-gray-500 md:flex-row md:gap-8"
	>
		<a
			class="transition hover:text-gold hover:underline hover:underline-offset-8"
			href={localizeHref('/about') as Pathname}>{m.footer_mission()}</a
		>
		<a
			class="transition hover:text-gold hover:underline hover:underline-offset-8"
			href={localizeHref('/churches') as Pathname}>{m.footer_churches()}</a
		>
		<a
			class="transition hover:text-gold hover:underline hover:underline-offset-8"
			href={localizeHref('/zoom-schedule') as Pathname}>{m.footer_zoom_schedule()}</a
		>
		<a
			class="transition hover:text-gold hover:underline hover:underline-offset-8"
			href={localizeHref('/contact') as Pathname}>{m.footer_contact()}</a
		>
		<a
			class="transition hover:text-gold hover:underline hover:underline-offset-8"
			href={localizeHref('/get-involved') as Pathname}>{m.footer_connect()}</a
		>
	</div>
</footer>
