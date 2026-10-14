<script lang="ts">
	let { id, title } = $props<{ id: string; title: string }>();
</script>

<iframe
	class="aspect-video w-full"
	src={`https://www.youtube-nocookie.com/embed/${id}?rel=0`}
	{title}
	loading="lazy"
	referrerpolicy="strict-origin-when-cross-origin"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	allowfullscreen
></iframe>
