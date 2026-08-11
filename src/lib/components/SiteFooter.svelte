<script lang="ts">
	import { getContent, localePath, type Locale } from '$lib/content';

	let { locale = 'en' } = $props<{ locale?: Locale }>();

	const footer = $derived(getContent(locale).footer);
</script>

<footer
	class="mt-auto flex w-full flex-col gap-8 bg-ink px-6 py-14 md:flex-row md:items-start md:justify-between md:px-12"
>
	<div class="space-y-4">
		<a href={localePath(locale, '/')} class="font-serif text-xl text-gold">Hand In Hand Ministry</a>
		<p class="max-w-md text-xs uppercase tracking-[0.18em] text-gray-500">
			{footer.tagline}
		</p>
	</div>

	<div
		class="flex flex-col gap-4 text-xs uppercase tracking-[0.18em] text-gray-500 md:flex-row md:gap-8"
	>
		<a
			class="transition hover:text-gold hover:underline hover:underline-offset-8"
			href={localePath(locale, '/about')}>{footer.mission}</a
		>
		<a
			class="transition hover:text-gold hover:underline hover:underline-offset-8"
			href={localePath(locale, '/churches')}>{footer.churches}</a
		>
		<a
			class="transition hover:text-gold hover:underline hover:underline-offset-8"
			href={localePath(locale, '/zoom-schedule')}>{footer.zoomSchedule}</a
		>
		<a
			class="transition hover:text-gold hover:underline hover:underline-offset-8"
			href={localePath(locale, '/contact')}>{footer.contact}</a
		>
		<a
			class="transition hover:text-gold hover:underline hover:underline-offset-8"
			href={localePath(locale, '/get-help')}>{footer.connect}</a
		>
	</div>
</footer>
