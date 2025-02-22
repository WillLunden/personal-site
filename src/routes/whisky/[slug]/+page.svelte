<script>
	export let data;
	// data.post contains { slug, title, date, content }
</script>

<h1 class="mb-4 text-2xl font-bold">{data.post.title}</h1>
<p class="mb-6 text-gray-600 italic">Published: {data.post.date}</p>

<div class="prose max-w-none">
	{@html data.post.content}
</div>
