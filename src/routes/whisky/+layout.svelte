<script>
	import { Drawer, Sidebar, SidebarGroup, SidebarItem } from 'flowbite-svelte';
	import Navbar from '../Navbar.svelte';
	import Socialbar from '../Socialbar.svelte';
	import { sineIn } from 'svelte/easing';

	// "data" is passed in with data.posts, unchanged:
	// each post = { slug, date, title, ... }
	export let data;

	let isDrawerClosed = true;
	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};

	function openDrawer() {
		isDrawerClosed = false;
	}

	function closeDrawer() {
		isDrawerClosed = false;
	}
</script>

<Navbar activePage="whisky" />

<!-- MAIN LAYOUT -->
<div class="flex min-h-screen">
	<main class="flex-1 p-4">
		<!-- Button to open the drawer -->
		<button on:click={openDrawer} class="mb-4 rounded bg-yellow-700 px-4 py-2 text-white">
			<i class="fa-solid fa-bars mr-2"></i>
			Menu
		</button>

		<slot />
	</main>
</div>

<!-- Social bar at the bottom of the screen -->
<Socialbar />

<!-- DRAWER replaces the fixed Sidebar -->
<Drawer
	transitionType="fly"
	bind:hidden={isDrawerClosed}
	id="sidebar1"
	{transitionParams}
	on:close={closeDrawer}
	placement="left"
	class="m-0 bg-yellow-200  p-0 "
>
	<Sidebar class="w-full border-r border-yellow-400 bg-yellow-200 text-sm">
		<!-- Group 1: Tasting Notes -->
		<SidebarGroup class="mb-6">
			<div class="border-b border-yellow-700 p-4 text-lg font-bold">
				<i class="fa-solid fa-wine-glass mr-2"></i>
				Tasting Notes
			</div>
			{#each data.posts as post}
				<!-- Instead of label prop, same custom HTML -->
				<div class="py-2 pl-2">
					<div class="text-xs text-gray-600 italic">
						{post.date}
					</div>
					<div class="text-sm font-semibold text-gray-800">
						{post.title}
					</div>
				</div>
			{/each}
		</SidebarGroup>

		<!-- Group 2: Visits -->
		<SidebarGroup>
			<div class="border-b p-4 text-lg font-bold">
				<i class="fa-solid fa-map-pin mr-2"></i>
				Distillery Visits
			</div>
			{#each data.posts as post}
				<div class="py-2 pl-2">
					<div class="text-xs text-gray-600 italic">
						{post.date}
					</div>
					<div class="text-sm font-semibold text-gray-800">
						{post.title}
					</div>
				</div>
			{/each}
		</SidebarGroup>

		<!-- Group 3: Blog -->
		<SidebarGroup>
			<div class="border-b p-4 text-lg font-bold">
				<i class="fa-solid fa-lightbulb mr-2"></i>
				Blog
			</div>
			{#each data.posts as post}
				<div class="py-2 pl-2">
					<div class="text-xs text-gray-600 italic">
						{post.date}
					</div>
					<div class="text-sm font-semibold text-gray-800">
						{post.title}
					</div>
				</div>
			{/each}
		</SidebarGroup>
	</Sidebar>
</Drawer>

<style>
	/* Rustic font for the sidebar */
	@import url('https://fonts.googleapis.com/css2?family=Rye&display=swap');

	/* Apply 'Rye' font to the drawer & sidebar text */
	div {
		font-family: 'Rye', serif;
		font-weight: 400;
		font-style: normal;
	}
</style>
