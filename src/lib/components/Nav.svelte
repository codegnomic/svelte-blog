<script>
	import NavItem from './NavItem.svelte';

	let menu = [
		{ path: '/', title: 'Home' },
		{ path: '/blog', title: 'Blog' },
		{ path: '/contact', title: 'Contact' }
	];
</script>

<nav
	class="sm:col-start-2 sm:row-start-1  sm:sticky sm:top-0 h-screen min-w-[240px] self-start  bg-slate-800  border-b-8 sm:border-b-0 sm:border-l-8 border-fuchsia-600"
>
	<div class="w-full text-center p-2">
		<a href="/">🏠</a>
	</div>
	<div class="grid h-[90%] w-full place-content-center text-fuchsia-300">
		{#each menu as navItem}
			<NavItem {navItem} />
		{/each}
	</div>
</nav>
