<script>
	// @ts-ignore
	import Navbar from '../Navbar.svelte';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import { List, Li, Heading, Tabs, TabItem } from 'flowbite-svelte';
	import Socialbar from '../Socialbar.svelte';

	let activeTab = 0;
</script>

<svelte:head>
	<title>Will Lunden</title>
	<meta name="description" content="Will Lunden Home Page" />
</svelte:head>

<Navbar activePage="music" />

<!-- MAIN CONTENT CENTERED -->
<div
	class="text-align-lef light m-6 mx-auto flex min-h-screen max-w-5xl flex-col pr-5 pl-5 text-left"
>
	<h1 class="mb-4 text-4xl">
		<i class="fa fa-music" aria-hidden="true"></i>
		My Musical Releases
	</h1>

	<p class="text-gray-500 dark:text-gray-500">
		I've been playing guitar for over 25 years and have written several albums of original music,
		primarily with my groups The Beast of Nod and Mimesis. I've also made guest appearances on
		several other albums. Here's a list of my original releases and guest appearances.
	</p>

	<Heading
		tag="h2"
		customSize="text-lg font-semibold"
		class="mb-2 text-lg font-semibold text-black dark:text-black ">Original Releases</Heading
	>

	<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-500" list="none">
		<Li>
			2022 / Mimesis
			<a
				href="https://mimesisprog.bandcamp.com/album/trilogy"
				target="_blank"
				class="text-blue-700 hover:underline"
			>
				Trilogy (EP)
			</a>
		</Li>
		<Li>
			2021 / The Beast of Nod
			<a
				href="https://thebeastofnod.bandcamp.com/album/multiversal"
				target="_blank"
				class="text-blue-700 hover:underline"
			>
				Multiversal (LP)
			</a>
			(Featuring Joe Satriani and Michael Angelo Batio)
		</Li>
		<Li>
			2020 / Pariahblaster
			<a
				href="https://pariahblaster.bandcamp.com/track/episode-1-a-wizard-departs"
				target="_blank"
				class="text-blue-700 hover:underline"
			>
				Episode 1 (Single)
			</a>
		</Li>
		<Li>
			2019 / Mimesis
			<a
				href="https://mimesisprog.bandcamp.com/album/mimesis"
				target="_blank"
				class="text-blue-700 hover:underline"
			>
				Mimesis (EP)
			</a>
		</Li>
		<Li>
			2018 / The Beast of Nod
			<a
				href="https://thebeastofnod.bandcamp.com/album/vampira-disciple-of-chaos"
				target="_blank"
				class="text-blue-700 hover:underline"
			>
				Vampira: Disciple of Chaos (LP)
			</a>
		</Li>
		<Li>
			2015 / The Beast of Nod
			<a
				href="https://thebeastofnod.bandcamp.com/album/cephalopod-of-doom-2"
				target="_blank"
				class="text-blue-700 hover:underline"
			>
				Arrival (EP)
			</a>
		</Li>
		<Li>
			2014 / The Beast of Nod
			<a target="_blank" class="text-blue-700 hover:underline"> Enter the Land of Nod (EP) </a>
		</Li>
	</List>

	<Heading
		tag="h2"
		customSize="text-lg font-semibold"
		class="mt-4 mb-2 text-lg font-semibold text-black dark:text-black ">Guest Appearances</Heading
	>

	<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-500" list="none">
		<Li>
			2023 / Archaeologist
			<a
				href="https://open.spotify.com/track/3064UeTDC0w5kHVuKzhN2s"
				target="_blank"
				class="text-blue-700 hover:underline"
			>
				Elements
			</a>
			(Guitar Solo on track Riftwalker)
		</Li>

		<Li>
			2021 / The Last King
			<a
				href="https://open.spotify.com/track/01NIQVCIQItZN5KZ0NSFaa"
				target="_blank"
				class="text-blue-700 hover:underline"
			>
				Chaos Theory (LP)
			</a>
			(Guitar Solo on track Gomorrah)
		</Li>

		<Li>
			2021 / Mortem Obscuram
			<a
				href="https://open.spotify.com/track/5a9cyYixFgs7bO3kGUvWD2"
				target="_blank"
				class="text-blue-700 hover:underline"
			>
				Eradication of the Human Endeavor (LP)
			</a>
			(Guitar Solo on track Tormented Sanity)
		</Li>

		<Li>
			2021 / Mortem Obscuram
			<a
				href="https://open.spotify.com/track/2WaYY3igdyjZZIpIlpPWfa"
				target="_blank"
				class="text-blue-700 hover:underline"
			>
				Eradication of the Human Endeavor (LP)
			</a>
			(Guitar Solo on track A Fallen Kingdom)
		</Li>

		<Li>
			2019 / Eddie Shifflet
			<a
				href="https://open.spotify.com/album/379jEP3o7PX4kiLMdVzc6O"
				target="_blank"
				class="text-blue-700 hover:underline"
			>
				Majesteon (Single)
			</a>
			(Guitar Solos on track Majesteon)
		</Li>
	</List>

	<Heading
		tag="h2"
		customSize="text-lg font-semibold"
		class="mt-4 mb-2 text-lg font-semibold text-black dark:text-black "
		>Some Video Highlights</Heading
	>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
		<iframe
			class="aspect-video w-full"
			src="https://www.youtube.com/embed/bR1KBHGUt9Y?si=VWuMT6fA4w7dJe57"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>

		<iframe
			class="aspect-video w-full"
			src="https://www.youtube.com/embed/22wQFXOskJw?si=jDmuUWLWhWy657Y6"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>

		<iframe
			class="aspect-video w-full"
			src="https://www.youtube.com/embed/7frXnOl8TKA?si=ODZBaZg3KvmQ5Tip"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>

		<iframe
			class="aspect-video w-full"
			src="https://www.youtube.com/embed/1pHPo1kcxGY?si=NR4yWldry3YPSJpC"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
	</div>
</div>

<Socialbar />
