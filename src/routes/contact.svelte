<script>
	let email = '';
	let message = '';
	let spam = false;

	function handleSubmit() {
		let payload = {
			email,
			message
		};
		email = '';
		message = '';
		console.log(payload);
	}
</script>

<form class="grid" on:submit|preventDefault={handleSubmit}>
	<label class="m-2 flex flex-wrap">
		<span class="w-20">Email:</span>
		<input class="border-2" type="email" bind:value={email} />
	</label>
	<label class="m-2 flex flex-wrap">
		<span class="w-20">Message:</span>
		<textarea class="border-2" bind:value={message} cols="30" rows="10" />
	</label>
	<input class="border-2" type="checkbox" bind:checked={spam} />
	<button type="submit">Send Message</button>
</form>
<p />
