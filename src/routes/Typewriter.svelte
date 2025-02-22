<script>
	import { onMount, createEventDispatcher } from 'svelte';

	// Text to be typed and speed of typing.
	export let text = '';
	export let typingSpeed = 40; // milliseconds per character

	const dispatch = createEventDispatcher();

	let displayed = ''; // What’s currently shown on screen
	let currentIndex = 0; // Which character we’re on

	onMount(() => {
		const timer = setInterval(() => {
			displayed += text[currentIndex];
			currentIndex++;

			// If we’ve reached the end, stop and let the parent know we're done
			if (currentIndex >= text.length) {
				clearInterval(timer);
				dispatch('done');
			}
		}, typingSpeed);
	});
</script>

<!-- Just display typed text -->
<p class="mb-2">{displayed}</p>
