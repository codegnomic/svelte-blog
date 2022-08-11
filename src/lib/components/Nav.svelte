<script>
	import NavItem from './NavItem.svelte';

	let menu = [
		{ path: '/', title: 'Home' },
		{ path: '/blog', title: 'Blog' },
		{ path: '/contact', title: 'Contact' }
	];
</script>

<nav
	class="sm:w-3/12 sm:max-w-xs sm:sticky sm:top-0 bg-slate-800 sm:shrink-0 border-l-8 border-fuchsia-600"
>
	<div class="w-full text-center p-2">
		<a href="/">🏠</a>
	</div>
	<div class="grid w-full h-full place-content-center text-fuchsia-300">
		{#each menu as navItem}
			<NavItem {navItem} />
		{/each}
	</div>
</nav>
