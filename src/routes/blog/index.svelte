<script type="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		// Runs before the component is created
		const posts = await fetch('/api/posts.json');
		const allPosts = await posts.json();

		return {
			props: {
				posts: allPosts
			}
		};
	};
</script>

<script>
	// this is the normal client-side script
	import img from '$lib/assets/bookshelf.jpg';
	export let posts;
</script>

<div class="grid sm:grid-cols-2 gap-10 max-w-xl mx-auto">
	{#each posts as post}
		<article class="bg-slate-400">
			<img class="w-full h-32" src={img} alt="post pic" />
			<div class="p-2 border-t-2 border-fuchsia-400">
				<h2>
					<a href={post.path}>{post.meta.title}</a>
				</h2>
				<span class="text-xs">Published {post.meta.date}</span>
			</div>
		</article>
	{/each}
</div>
