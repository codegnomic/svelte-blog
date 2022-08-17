<script type="ts">
	import { onMount } from 'svelte';

	let i = 0;
	export let txt: String;
	let typed = '';
	let lastTyped = '';
	export let speed = 50;
	export let classes: string;

	onMount(async () => typeWriter());

	function typeWriter() {
		if (i < txt.length) {
			typed += lastTyped;
			lastTyped = txt.charAt(i);
			i++;
			setTimeout(typeWriter, speed);
		}
	}
</script>

<span class={classes}>{typed}</span><span class={`blink ${classes}`}>{lastTyped}</span>

<style>
	.blink {
		animation: blink 0.5s step-end infinite alternate;
	}

	@keyframes blink {
		50% {
			background-color: red;
		}
	}
</style>
