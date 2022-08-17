<script>
	import Nav from '$comp/Nav.svelte';
	import '../app.css';
</script>

<main class="grid sm:grid-cols-[auto_240px]">
	<Nav />
	<div class="grow p-4 bg-yellow-200 max-w-3xl mx-auto">
		<slot />
	</div>
</main>
