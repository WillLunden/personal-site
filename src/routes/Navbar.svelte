<script lang="ts">
	// -------------------
	// Exported color props
	// -------------------
	export let navBorderColor = 'border-gray-200';
	export let navBgColor = 'bg-gray-900';
	export let navBgDarkColor = 'bg-gray-900';

	export let linkDarkTextColor = 'text-gray-300';
	export let hoverDarkBgColor = 'hover:bg-gray-700';

	// Active (highlighted) link
	export let activeBgColor = 'bg-gray-700';
	export let activeTextColor = 'text-white';
	export let activeTextDarkColor = 'md:text-orange-500';

	// Hamburger button
	export let buttonTextColor = 'text-gray-300';
	export let buttonHoverBgColor = 'hover:bg-gray-700';
	export let buttonFocusRingColor = 'focus:ring-2 focus:ring-gray-600';

	// Which page is currently active? (e.g., "home", "about-me", "publications", etc.)
	export let activePage = 'home';

	// Control mobile nav open/close
	let showMobileNav = false;

	function toggleMobileNav() {
		showMobileNav = !showMobileNav;
	}

	// Helper function for link classes
	function getLinkClass(page: string) {
		if (page === activePage) {
			return `
        block rounded-sm px-3 py-2 
        ${activeBgColor} ${activeTextColor}
        md:bg-transparent md:p-0 md:text-gray-700
        text-white ${activeTextDarkColor}
      `;
		} else {
			return `
        block rounded-sm px-3 py-2 

        md:border-0 md:p-0
        ${linkDarkTextColor} ${hoverDarkBgColor}
        hover:text-white md:hover:bg-transparent md:hover:text-gray-00
      `;
		}
	}

	import '@fortawesome/fontawesome-free/css/all.min.css';
</script>

<nav class="{navBorderColor} {navBgColor} {navBgDarkColor}">
	<div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
		<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
			<span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
				Will Lunden
			</span>
		</a>

		<!-- Mobile Nav Toggle Button -->
		<button
			type="button"
			class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm
				{buttonTextColor} {buttonHoverBgColor} {buttonFocusRingColor}
				focus:outline-none md:hidden"
			aria-controls="navbar-default"
			aria-expanded={showMobileNav ? 'true' : 'false'}
			on:click={toggleMobileNav}
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class="h-5 w-5"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 17 14"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M1 1h15M1 7h15M1 13h15"
				/>
			</svg>
		</button>

		<!-- Nav Links Container -->
		<!-- If 'showMobileNav' is false on small screens, this is hidden. -->
		<div id="navbar-default" class="w-full md:block md:w-auto" class:hidden={!showMobileNav}>
			<ul
				class="mt-4 flex flex-col rounded-lg border
				border-gray-100 border-gray-700 bg-gray-50 bg-gray-800 p-4 font-medium
				md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-gray-900 md:p-0 rtl:space-x-reverse"
			>
				<!-- Home -->
				<li>
					<a
						href="/"
						class={getLinkClass('home')}
						aria-current={activePage === 'home' ? 'page' : undefined}
					>
						<i class="fa-solid fa-home mr-2"></i>
						Home
					</a>
				</li>

				<!-- About Me -->
				<li>
					<a
						href="/about-me"
						class={getLinkClass('about-me')}
						aria-current={activePage === 'about-me' ? 'page' : undefined}
					>
						<i class="fa-solid fa-person mr-2"></i>
						About Me
					</a>
				</li>

				<!-- Publications -->
				<li>
					<a
						href="/publications"
						class={getLinkClass('publications')}
						aria-current={activePage === 'publications' ? 'page' : undefined}
					>
						<i class="fa-solid fa-feather mr-2"></i>
						Publications
					</a>
				</li>

				<!-- Blog -->
				<li>
					<a
						href="/blog"
						class={getLinkClass('blog')}
						aria-current={activePage === 'blog' ? 'page' : undefined}
					>
						<i class="fa-solid fa-blog mr-2"></i>
						Blog
					</a>
				</li>

				<!-- Photo -->
				<li>
					<a
						href="/photo-video"
						class={getLinkClass('photo-video')}
						aria-current={activePage === 'photo-video' ? 'page' : undefined}
					>
						<i class="fa-solid fa-camera mr-2"></i>
						Photo/Video
					</a>
				</li>

				<!-- Music -->
				<li>
					<a
						href="music"
						class={getLinkClass('music')}
						aria-current={activePage === 'music' ? 'page' : undefined}
					>
						<i class="fa-solid fa-music mr-2"></i>
						Music
					</a>
				</li>

				<!-- Whisky -->
				<li>
					<a
						href="whisky"
						class={getLinkClass('whisky')}
						aria-current={activePage === 'whisky' ? 'page' : undefined}
					>
						<i class="fa-solid fa-whiskey-glass mr-2"></i>
						Whisky
					</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
