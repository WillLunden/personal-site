<script>
	// Components
	import Navbar from '../Navbar.svelte';
	import Socialbar from '../Socialbar.svelte';

	// Flowbite-Svelte components
	import { Tabs, TabItem, Gallery, Button } from 'flowbite-svelte';

	let photos = [
		{
			alt: 'Metal portrait',
			thumbnail: '/small/IMG_0024.jpg',
			large: '/small/IMG_0024.jpg',
			tags: ['portrait', 'music']
		},
		{
			alt: 'Whisky Bottle',
			thumbnail: '/small/IMG_0873.jpg',
			large: '/small/IMG_0873.jpg',
			tags: ['whisky']
		},
		{
			alt: 'Metal portrait',
			thumbnail: '/small/IMG_0028.jpg',
			large: '/small/IMG_0028.jpg',
			tags: ['portrait', 'music']
		},
		{
			alt: 'Metal portrait',
			thumbnail: '/small/IMG_9864.jpg',
			large: '/small/IMG_9864.jpg',
			tags: ['music', 'portrait']
		},
		{
			alt: 'Metal portrait',
			thumbnail: '/small/IMG_9857.jpg',
			large: '/small/IMG_9857.jpg',
			tags: ['music', 'portrait']
		},
		{
			alt: 'Iodine cells',
			thumbnail: '/small/IMG_0029.jpg',
			large: '/small/IMG_0029.jpg',
			tags: ['physics']
		},
		{
			alt: 'Iodine cell',
			thumbnail: '/small/IMG_0040.jpg',
			large: '/small/IMG_0040.jpg',
			tags: ['physics']
		},
		{
			alt: 'Metal portrait',
			thumbnail: '/small/IMG_0040-2.jpg',
			large: '/small/IMG_0040-2.jpg',
			tags: ['portrait', 'music']
		},
		{
			alt: 'Metal Portrait',
			thumbnail: '/small/IMG_0087.jpg',
			large: '/small/IMG_0087.jpg',
			tags: ['portrait', 'music']
		},
		{
			alt: 'Circuit',
			thumbnail: '/small/IMG_0127.jpg',
			large: '/small/IMG_0127.jpg',
			tags: ['physics']
		},
		{
			alt: 'Circuit',
			thumbnail: '/small/IMG_0138.jpg',
			large: '/small/IMG_0138.jpg',
			tags: ['physics']
		},
		{
			alt: 'Enclosure',
			thumbnail: '/small/IMG_0143.jpg',
			large: '/small/IMG_0143.jpg',
			tags: ['physics']
		},
		{
			alt: 'Enclosure',
			thumbnail: '/small/IMG_0145.jpg',
			large: '/small/IMG_0145.jpg',
			tags: ['physics']
		},
		{
			alt: 'Enclosure',
			thumbnail: '/small/IMG_0153.jpg',
			large: '/small/IMG_0153.jpg',
			tags: ['physics']
		},
		{
			alt: 'Metal Portrait',
			thumbnail: '/small/IMG_0158.jpg',
			large: '/small/IMG_0158.jpg',
			tags: ['portrait', 'music']
		},
		{
			alt: 'Metal Portrait',
			thumbnail: '/small/IMG_0163.jpg',
			large: '/small/IMG_0163.jpg',
			tags: ['portrait', 'music']
		},
		{
			alt: 'Metal Portrait',
			thumbnail: '/small/IMG_0205.jpg',
			large: '/small/IMG_0205.jpg',
			tags: ['portrait', 'music']
		},
		{
			alt: 'Atomic Clock',
			thumbnail: '/small/IMG_0246.jpg',
			large: '/small/IMG_0246.jpg',
			tags: ['physics']
		},
		{
			alt: 'Atomic Clock',
			thumbnail: '/small/IMG_0250.jpg',
			large: '/small/IMG_0250.jpg',
			tags: ['physics']
		},
		{
			alt: 'Atomic Clock',
			thumbnail: '/small/IMG_0252.jpg',
			large: '/small/IMG_0252.jpg',
			tags: ['physics']
		},
		{
			alt: 'Whisky Bottle',
			thumbnail: '/small/IMG_0858.jpg',
			large: '/small/IMG_0858.jpg',
			tags: ['whisky']
		},

		{
			alt: 'Whisky Bottle',
			thumbnail: '/small/IMG_0860.jpg',
			large: '/small/IMG_0860.jpg',
			tags: ['whisky']
		},

		{
			alt: 'Whisky Bottle',
			thumbnail: '/small/IMG_0864.jpg',
			large: '/small/IMG_0864.jpg',
			tags: ['whisky']
		},

		{
			alt: 'Whisky Bottle',
			thumbnail: '/small/IMG_0920.jpg',
			large: '/small/IMG_0920.jpg',
			tags: ['whisky']
		},
		{
			alt: 'Whisky Bottle',
			thumbnail: '/small/IMG_0932.jpg',
			large: '/small/IMG_0932.jpg',
			tags: ['whisky']
		},
		{
			alt: 'Whisky Bottle',
			thumbnail: '/small/IMG_0950.jpg',
			large: '/small/IMG_0950.jpg',
			tags: ['whisky']
		},
		{
			alt: 'Whisky Bottle',
			thumbnail: '/small/IMG_0964.jpg',
			large: '/small/IMG_0964.jpg',
			tags: ['whisky']
		},
		{
			alt: 'Whisky Bottle',
			thumbnail: '/small/IMG_0996.jpg',
			large: '/small/IMG_0996.jpg',
			tags: ['whisky']
		},
		{
			alt: 'Whisky Bottle',
			thumbnail: '/small/IMG_1004.jpg',
			large: '/small/IMG_1004.jpg',
			tags: ['whisky']
		},
		{
			alt: 'Whisky Bottle',
			thumbnail: '/small/IMG_1013.jpg',
			large: '/small/IMG_1013.jpg',
			tags: ['whisky']
		},
		{
			alt: 'Whisky Bottle',
			thumbnail: '/small/IMG_1018.jpg',
			large: '/small/IMG_1018.jpg',
			tags: ['whisky']
		},
		{
			alt: 'Whisky Sign',
			thumbnail: '/small/IMG_1025.jpg',
			large: '/small/IMG_1025.jpg',
			tags: ['whisky']
		},
		{
			alt: 'Pot Still',
			thumbnail: '/small/IMG_1028.jpg',
			large: '/small/IMG_1028.jpg',
			tags: ['whisky']
		},
		{
			alt: 'Whisky Bottles',
			thumbnail: '/small/IMG_1033.jpg',
			large: '/small/IMG_1033.jpg',
			tags: ['whisky']
		},
		{
			alt: 'Pot Stills',
			thumbnail: '/small/IMG_1039.jpg',
			large: '/small/IMG_1039.jpg',
			tags: ['whisky']
		},
		{
			alt: 'Whisky Barrel',
			thumbnail: '/small/IMG_1048.jpg',
			large: '/small/IMG_1048.jpg',
			tags: ['whisky']
		},
		{
			alt: 'Whisky Bottle',
			thumbnail: '/small/IMG_1077.jpg',
			large: '/small/IMG_1077.jpg',
			tags: ['whisky']
		},
		{
			alt: 'Pot Stills',
			thumbnail: '/small/IMG_1093.jpg',
			large: '/small/IMG_1093.jpg',
			tags: ['whisky']
		},
		{
			alt: 'Pot Stills',
			thumbnail: '/small/IMG_1094.jpg',
			large: '/small/IMG_1094.jpg',
			tags: ['whisky']
		},
		{
			alt: 'Pot Stills',
			thumbnail: '/small/IMG_1097.jpg',
			large: '/small/IMG_1097.jpg',
			tags: ['whisky']
		},
		{
			alt: 'Barrels',
			thumbnail: '/small/IMG_1100.jpg',
			large: '/small/IMG_1100.jpg',
			tags: ['whisky']
		},

		{
			alt: 'Barrels',
			thumbnail: '/small/IMG_1124.jpg',
			large: '/small/IMG_1124.jpg',
			tags: ['whisky']
		},

		{
			alt: 'Whisky',
			thumbnail: '/small/IMG_1165.jpg',
			large: '/small/IMG_1165.jpg',
			tags: ['whisky']
		},
		{
			alt: 'Distillery',
			thumbnail: '/small/IMG_1170.jpg',
			large: '/small/IMG_1170.jpg',
			tags: ['whisky']
		},
		{
			alt: 'Pot Stills',
			thumbnail: '/small/IMG_1182.jpg',
			large: '/small/IMG_1182.jpg',
			tags: ['whisky']
		},
		{
			alt: 'Barrels',
			thumbnail: '/small/IMG_1192.jpg',
			large: '/small/IMG_1192.jpg',
			tags: ['whisky']
		},
		{
			alt: 'Iodine cell',
			thumbnail: '/small/IMG_8946.jpg',
			large: '/small/IMG_8946.jpg',
			tags: ['physics']
		},
		{
			alt: 'Music gear',
			thumbnail: '/small/IMG_9634.jpg',
			large: '/small/IMG_9634.jpg',
			tags: ['music']
		},
		{
			alt: 'Metal shirt',
			thumbnail: '/small/IMG_9807.jpg',
			large: '/small/IMG_9807.jpg',
			tags: ['music']
		},
		{
			alt: 'Metal portrait',
			thumbnail: '/small/IMG_9842.jpg',
			large: '/small/IMG_9842.jpg',
			tags: ['music', 'portrait']
		},
		{
			alt: 'Metal portrait',
			thumbnail: '/small/IMG_9856.jpg',
			large: '/small/IMG_9856.jpg',
			tags: ['music', 'portrait']
		},

		{
			alt: 'Metal portrait',
			thumbnail: '/small/IMG_9932.jpg',
			large: '/small/IMG_9932.jpg',
			tags: ['music', 'portrait']
		},
		{
			alt: 'Metal portrait',
			thumbnail: '/small/IMG_9937.jpg',
			large: '/small/IMG_9937.jpg',
			tags: ['music', 'portrait']
		},
		{
			alt: 'Metal portrait',
			thumbnail: '/small/IMG_9995.jpg',
			large: '/small/IMG_9995.jpg',
			tags: ['music', 'portrait']
		},
		{
			alt: 'Enclosure',
			thumbnail: '/small/IMG_9975.jpg',
			large: '/small/IMG_9975.jpg',
			tags: ['physics']
		}
	];

	let videos = [
		{
			title: 'As I Am - Dream Theater Guitar Solo Cover',
			url: 'https://www.youtube.com/watch?v=OBeQtlYjT0A',
			thumbnail: 'https://img.youtube.com/vi/OBeQtlYjT0A/0.jpg'
		},
		{
			title: 'Contemporary Calamity - Guitar Playthrough',
			url: 'https://www.youtube.com/watch?v=7frXnOl8TKA',
			thumbnail: 'https://img.youtube.com/vi/7frXnOl8TKA/0.jpg'
		},
		{
			title: 'The Captain - Music Video',
			url: 'https://www.youtube.com/watch?v=bR1KBHGUt9Y',
			thumbnail: 'https://img.youtube.com/vi/bR1KBHGUt9Y/0.jpg'
		},
		{
			title: 'Guardians of the Multiverse - Guitar Playthrough',
			url: 'https://www.youtube.com/watch?v=z4w5TxZ3iiw',
			thumbnail: 'https://img.youtube.com/vi/z4w5TxZ3iiw/0.jpg'
		},
		{
			title: 'A Wizard Departs - Music Video',
			url: 'https://www.youtube.com/watch?v=lUv0DMid4m0',
			thumbnail: 'https://img.youtube.com/vi/lUv0DMid4m0/0.jpg'
		},
		{
			title: 'Equilibrium Guitars FT 8 Demo and Rundown',
			url: 'https://www.youtube.com/watch?v=y9jM5k8DCh8',
			thumbnail: 'https://img.youtube.com/vi/y9jM5k8DCh8/0.jpg'
		},
		{
			title: 'TCTWADMLC - Guitar Playthrough',
			url: 'https://www.youtube.com/watch?v=3p1N2yRG3rE',
			thumbnail: 'https://img.youtube.com/vi/3p1N2yRG3rE/0.jpg'
		},
		{
			title: 'Flight of the Quetzalcoatlus - Guitar Playthrough',
			url: 'https://www.youtube.com/watch?v=QyvERmmC62o',
			thumbnail: 'https://img.youtube.com/vi/QyvERmmC62o/0.jpg'
		},
		{
			title: 'A Prison of Ice - Guitar Playthrough',
			url: 'https://www.youtube.com/watch?v=kKHj4TcpGlA',
			thumbnail: 'https://img.youtube.com/vi/kKHj4TcpGlA/0.jpg'
		},
		{
			title: 'Flight of the Quetzalcoatlus - Livestream Performance',
			url: 'https://www.youtube.com/watch?v=R8qBNRUh1_A',
			thumbnail: 'https://img.youtube.com/vi/R8qBNRUh1_A/0.jpg'
		},
		{
			title: 'Potroast the Rhinoman - Guitar Playthrough',
			url: 'https://www.youtube.com/watch?v=61ssx8YXQbM',
			thumbnail: 'https://img.youtube.com/vi/61ssx8YXQbM/0.jpg'
		},
		{
			title: 'When a Meganeura Flies - Guitar Playthrough',
			url: 'https://www.youtube.com/watch?v=hKMGHjR-mDg',
			thumbnail: 'https://img.youtube.com/vi/hKMGHjR-mDg/0.jpg'
		}
	];

	let activeTab = 0; // to control which tab is active

	let selectedTag = 'all'; // Start with 'all' or any default
	let currentPage = 1;
	let pageSize = 9;

	$: filteredPhotos =
		selectedTag === 'all' ? photos : photos.filter((p) => p.tags.includes(selectedTag));

	// Total pages based on how many photos match the selected tag
	$: totalPages = Math.ceil(filteredPhotos.length / pageSize);

	$: pagedPhotos = filteredPhotos.slice((currentPage - 1) * pageSize, currentPage * pageSize);

	// Map these paged photos to the structure the <Gallery> expects
	$: galleryItems = pagedPhotos.map((p) => ({
		src: p.thumbnail,
		alt: p.alt,
		large: p.large
	}));

	// Helper functions
	/**
	 * @param {string} tag
	 */
	function setFilter(tag) {
		selectedTag = tag;
		currentPage = 1; // reset to page 1 whenever filter changes
	}

	/**
	 * @param {number} page
	 */
	function goToPage(page) {
		currentPage = page;
	}
</script>

<svelte:head>
	<title>Photos &amp; Videos</title>
	<meta name="description" content="Photo and video gallery" />
</svelte:head>

<Navbar activePage="photo-video" />

<div class="m-6 mx-auto flex max-w-5xl flex-col justify-center text-center">
	<h1 class="mb-4 text-4xl">
		<i class="fa fa-camera" aria-hidden="true"></i>
		Photos &amp; Videos
	</h1>
	<p class="text-lg">
		Photography, videography, and animation have been hobbies of mine for years. While I mostly do
		it for fun, I've also shot for live bands, scientific journals, product features, and more. I
		primarily use a Canon 6D DSLR.
	</p>

	<Tabs style="default" class="mt-4">
		<TabItem title="Photos" open={activeTab === 0} on:click={() => (activeTab = 0)}>
			<div class="mx-auto mt-4 mb-3 flex flex-wrap items-center justify-center gap-3">
				<Button
					pill
					size="xl"
					outline={selectedTag !== 'all'}
					on:click={() => setFilter('all')}
					class={selectedTag === 'all' ? 'bg-blue-500 text-white' : ''}
				>
					All Items
				</Button>
				<Button
					pill
					size="xl"
					outline={selectedTag !== 'physics'}
					on:click={() => setFilter('physics')}
					class={selectedTag === 'physics' ? 'bg-blue-500 text-white' : ''}
				>
					Physics
				</Button>
				<Button
					pill
					size="xl"
					outline={selectedTag !== 'portrait'}
					on:click={() => setFilter('portrait')}
					class={selectedTag === 'portrait' ? 'bg-blue-500 text-white' : ''}
				>
					Portraits
				</Button>
				<Button
					pill
					size="xl"
					outline={selectedTag !== 'music'}
					on:click={() => setFilter('music')}
					class={selectedTag === 'music' ? 'bg-blue-500 text-white' : ''}
				>
					Music
				</Button>
				<Button
					pill
					size="xl"
					outline={selectedTag !== 'whisky'}
					on:click={() => setFilter('whisky')}
					class={selectedTag === 'whisky' ? 'bg-blue-500 text-white' : ''}
				>
					Whisky
				</Button>
				<!-- <Button
					pill
					size="xl"
					outline={selectedTag !== 'other'}
					on:click={() => setFilter('other')}
					class={selectedTag === 'other' ? 'bg-blue-500 text-white' : ''}
				>
					Other
				</Button> -->
			</div>

			<Gallery
				items={galleryItems}
				class="min-h-5xlmax-w-5xl m-auto grid-cols-2 flex-col items-center justify-center gap-4 text-center md:grid-cols-3"
			>
				{#each galleryItems as item, index}
					<a href={item.large} target="_blank" rel="noopener noreferrer" class="block">
						<img src={item.src} alt={item.alt} class="rounded shadow-md" />
					</a>
				{/each}
			</Gallery>

			{#if totalPages > 1}
				<div class="mt-4 mb-6 flex flex-wrap items-center justify-center gap-2">
					{#each Array(totalPages) as _, index}
						<!-- index starts at 0, so page is index+1 -->
						<Button
							color={currentPage === index + 1 ? 'dark' : 'none'}
							on:click={() => goToPage(index + 1)}
						>
							{index + 1}
						</Button>
					{/each}
				</div>
			{/if}
		</TabItem>

		<!-- Videos Tab -->
		<TabItem title="Videos" on:click={() => (activeTab = 1)}>
			<h2 class="mt-4 mb-6 text-2xl font-semibold">Videos</h2>
			<p class="mb-6 text-lg">
				Here are some videos I've produced and/or performed in over the years. Most of them are
				guitar playthroughs, but there are also music videos and gear demos.
			</p>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
				{#each videos as vid}
					<div class="flex flex-col items-center justify-center">
						<a href={vid.url} target="_blank" rel="noopener noreferrer">
							<img src={vid.thumbnail} alt={vid.title} class="mb-2 rounded shadow-md" />
						</a>
						<p class="text-center text-gray-800">{vid.title}</p>
					</div>
				{/each}
			</div>
		</TabItem>
	</Tabs>
</div>

<!-- Social bar at the bottom -->
<Socialbar />
