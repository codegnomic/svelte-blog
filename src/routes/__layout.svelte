<script>
	import Nav from '$comp/Nav.svelte';
	import '../app.css';
</script>

<main class="sm:flex sm:flex-row-reverse overflow-auto h-screen w-screen">
	<Nav />
	<div class="h-64 grow p-4">
		<slot />
	</div>
</main>
