<script>
	import { GradientButton } from 'flowbite-svelte';
	import { page } from '$app/stores';
	// @ts-ignore
	import Navbar from './Navbar.svelte';
	import Typewriter from './Typewriter.svelte';
	import Socialbar from './Socialbar.svelte';
	$: activeUrl = $page.url.pathname;
	import '@fortawesome/fontawesome-free/css/all.min.css';

	// Put your paragraphs into an array
	const paragraphs = [
		'Hi there.',
		'I am a technical professional with over 15 years of experience in physics research, AI/ML, and software development. Currently, I lead technical development at Delfi Labs as CTO.',
		'I am also a musician, frequent traveler, whisky collector, and hobbyist photographer.',
		'Feel free to take a look around.'
	];

	// Which paragraph is currently being typed?
	let currentParagraph = 0;
	let showButton = false;

	// Increment when we get the 'done' event from Typewriter
	function handleDone() {
		if (currentParagraph < paragraphs.length - 1) {
			setTimeout(() => {
				currentParagraph++;
			}, 1000);
		} else if (currentParagraph === paragraphs.length - 1) {
			showButton = true;
		}
	}
</script>

<svelte:head>
	<title>Will Lunden</title>
	<meta name="description" content="Will Lunden Home Page" />
</svelte:head>

<Navbar activePage="home" />

<!-- MAIN CONTENT CENTERED -->
<div class="m-6 flex min-h-screen flex-col items-center justify-center text-center">
	<h1 class="mb-4 text-4xl my-name ">
		<i class="fa fa-flask" aria-hidden="true"></i>
		Will Lunden, PhD
	</h1>
	<!-- Loop through paragraphs and only start typing the next one when the previous is done -->
	{#each paragraphs as paragraph, index}
		{#if index <= currentParagraph}
			<!-- 
      Each Typewriter will show once we’re at or past its index. 
      on:done calls handleDone() so the next paragraph can start. 
    -->
			<Typewriter text={paragraph} on:done={handleDone} />
		{/if}
	{/each}
	{#if showButton}
		<GradientButton color="pinkToOrange" class="mt-4 mb-4">More About Me</GradientButton>
	{/if}
</div>

<Socialbar />

<style>
	/* h1.my-name {
		font-weight: 700;
		background-image: linear-gradient(90deg, #44c409, #c616e9);
		background-clip: text;
		color: transparent;
		border: 1px solid;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	} */
</style>
