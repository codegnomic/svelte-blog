<script>
	import { faker } from '@faker-js/faker';
	import Typewriter from '$comp/Typewriter.svelte';
</script>

<div class="p-8">
	<Typewriter classes="text-xl" txt={'frontend development'} speed={100} />
</div>

{faker.lorem.paragraphs(20, '\n\n')}
