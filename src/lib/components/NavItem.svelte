<script>
	export let navItem;
</script>

<a href={navItem.path}>
	<button class="w-16 hover:bg-slate-900 p-1 transition-all">{navItem.title}</button>
</a>
