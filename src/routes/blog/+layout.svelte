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

<Navbar activePage="blog" />

<!-- MAIN LAYOUT -->
<div class="flex min-h-screen">
	<main class="flex-1 p-4">
		<!-- Button to open the drawer -->
		<button on:click={openDrawer} class="mb-4 rounded bg-gray-600 px-4 py-2 text-white">
			<i class="fa-solid fa-bars mr-2"></i>
			Blog Menu
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
	class="m-0 p-0"
>
	<Sidebar class="border-r text-sm w-full">
		<!-- Group 1: Tasting Notes -->
		<SidebarGroup class="mb-6">
			<div class="border-b border-yellow-700 p-4 text-lg font-bold">
				<i class="fa-solid fa-brain mr-2"></i>
				Machine Learning
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

		
	</Sidebar>
</Drawer>

