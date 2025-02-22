<script>
	import { GradientButton } from 'flowbite-svelte';
	// @ts-ignore
	import Navbar from './Navbar.svelte';
	import Typewriter from './Typewriter.svelte';
	import Socialbar from './Socialbar.svelte';
	import '@fortawesome/fontawesome-free/css/all.min.css';


	const paragraphs = [
		'Hi there.',
		'I am a technical professional with over 15 years of experience in physics research, AI/ML, and software development. Currently, I lead technical development at Delfi Labs as CTO.',
		'I am also a musician, frequent traveler, whisky collector, and hobbyist photographer.',
		'Feel free to take a look around.'
	];


	let currentParagraph = 0;
	let showButton = false;


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


<div class="m-6 flex min-h-screen flex-col items-center justify-center text-center">
	<h1 class="mb-4 text-4xl my-name ">
		<i class="fa fa-flask" aria-hidden="true"></i>
		Will Lunden, PhD
	</h1>
	{#each paragraphs as paragraph, index}
		{#if index <= currentParagraph}
			<Typewriter text={paragraph} on:done={handleDone} />
		{/if}
	{/each}
	{#if showButton}
		<GradientButton color="pinkToOrange" class="mt-4 mb-4" href='/about-me'>More About Me</GradientButton>
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
