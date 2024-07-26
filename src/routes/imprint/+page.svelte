<script>
	import { html as imprintContent } from '$lib/content/imprint.md';
	import SvelteMarkdown from 'svelte-markdown';
</script>

<main class="prose prose-invert p-4 max-w-5xl w-full pt-16">
	<SvelteMarkdown source={imprintContent} />
</main>
