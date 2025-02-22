<script>
	import { GradientButton } from 'flowbite-svelte';
	import { page } from '$app/stores';
	// @ts-ignore
	import Navbar from '../Navbar.svelte';
	import Typewriter from '../Typewriter.svelte';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import { Timeline, TimelineItem, Button, Tabs, TabItem } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import { List, Li, Heading } from 'flowbite-svelte';
	import Socialbar from '../Socialbar.svelte';

	let activeTab = 0;
</script>

<svelte:head>
	<title>Will Lunden</title>
	<meta name="description" content="Will Lunden Home Page" />
</svelte:head>

<Navbar activePage="about-me" />

<!-- MAIN CONTENT CENTERED -->
<div
	class="text-align-lef light m-6 mx-auto flex min-h-screen max-w-5xl flex-col pr-5 pl-5 text-left"
>
	<h1 class="mb-4 text-4xl">
		<i class="fa fa-flask" aria-hidden="true"></i>
		Will Lunden, PhD
	</h1>

	<Heading
		tag="h2"
		customSize="text-lg font-semibold"
		class="mb-2 text-lg font-semibold text-black dark:text-black ">Education</Heading
	>
	<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-500" list="none">
		<Li>
			Bachelor of Science in Physics and Astronomy,
			<a href="https://www.stonybrook.edu" target="_blank" class="text-blue-700 hover:underline">
				Stony Brook University
			</a>, 2013
		</Li>
		<Li>
			PhD in Physics,
			<a href="https://web.mit.edu" target="_blank" class="text-blue-700 hover:underline"> MIT </a>,
			2020
		</Li>
	</List>

	<Heading
		tag="h2"
		customSize="text-lg font-semibold"
		class="mt-4 mb-2 text-lg font-semibold text-black dark:text-black "
		>Professional Experience</Heading
	>

	<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-500" list="none">
		<Li>Research Assistant, Stony Brook University, 2010-2013</Li>
		<Li>Software Developer, Edtech Startup, 2012-2013</Li>
		<Li>Research Assistant, MIT, 2013-2019</Li>
		<Li>
			Senior Physicist,
			<a href="https://vectoratomic.com" target="_blank" class="text-blue-700 hover:underline">
				Vector Atomic
			</a>, 2020-2023
		</Li>
		<Li>Co-founder and CTO, Biomonadic, 2023-2024</Li>
		<Li>CTO, Delfi Labs Inc., 2023-present</Li>
	</List>

	<!-- TABBED BIO SECTION -->
	<Tabs style="default" class="text-blue mt-6">
		<TabItem
			title="Short Bio"
			open={activeTab === 0}
			on:click={() => (activeTab = 0)}
			class=""
		>
			<p class="">
				I am a former AMO physicist who worked on next-generation atomic clocks and degenerate
				quantum gases. I now focus on software development and machine learning research with
				applications to financial risk management and algorithmic hedging.
				<br /><br />
				I am also a guitarist and composer, and have released several albums of original music in the
				progressive metal and death metal genres, including one featuring all-time bestselling instrumental
				guitarist Joe Satriani, and given lectures and masterclasses on guitar technique and the physics
				of the guitar.
				<br /><br />
				In my free time, I have pursued photography and videography/computer animation. Most recently,
				I have been diving into the rich history and craft of whisk(e)y.
			</p>
		</TabItem>

		<TabItem
			title="Long Bio"
			open={activeTab === 1}
			on:click={() => (activeTab = 1)}
			class="bg-white"
		>
			<p class="mb-5">
				As a teenager, I was obsessed with tinkering with circuits, building small guitar effects
				pedals and poring over schematics and electronics textbooks in an effort to learn how all
				the technology around me <i>worked</i>.
				<br /><br />

				An initial decision to pursue a degree in electrical engineering quickly led me down the
				road of studying physics and astronomy, where mathematics is brought to bear against some of
				the most fundamental questions one can ask. I had the opportunity to operate, develop
				control software for, and prototype novel equipment for a particle accelerator during my
				undergraduate years at Stony Brook University . I also pursued what became my first original
				research publications under the incredible Professor Tom Weinacht, studying how high-energy
				"ultrafast" laser pulses interacted with molecules. During these years, I learned my
				programming and Unix fundamentals, cobbling together various PHP and C++ applications for
				friends (usually hosted on rogue servers in the Physics Department basement) to hone my
				skills, and eventually working as a software developer for an edtech startup.
				<br /><br />

				I then moved up to Boston to pursue my PhD in atomic physics at MIT, under Nobel laureate
				Wolfgang Ketterle. I spent the first several years helping to bring up a new lab studying
				the properties of interacting quantum systems using quantum degenerate lithium gases—dilute
				gases of lithium atoms cooled to near absolute zero. After a few years and several
				interesting results, I joined a newly formed team within Ketterle's group building another
				lab to study quantum degenerate dysprosium. By late 2019, we were creating our first
				Bose-Einstein condensates of dysprosium. Identifying some of the recurring challenges in the
				field of ultracold atomic physics, I spent a portion of my PhD exploring novel technologies;
				most significantly, I developed a high-bandwidth FPGA-based analog voltage control system
				for our experiments that delivered low noise and roughly 1 ppm voltage stability. Another
				highlight was control software that allowed for online optimization of our experiments using
				metaheuristics such as genetic algorithms.
				<br /><br />

				During my time in Boston, I began taking music more seriously. Having played guitar and
				dabbled in other instruments most of my life, I started practicing in earnest after meeting
				local musicians and discovering Boston's rich music community. I spent much of my free time
				writing, recording, and touring with
				<a
					href="https://www.thebeastofnod.com"
					target="_blank"
					class="text-blue-700 hover:underline"
				>
					The Beast of Nod
				</a>, a technical/progressive death metal group. Through the band, I had the opportunity to
				welcome a few guitar legends as guest artists, including
				<a href="https://www.satriani.com" target="_blank" class="text-blue-700 hover:underline">
					Joe Satriani
				</a>
				and
				<a
					href="https://michaelangelobatio.com"
					target="_blank"
					class="text-blue-700 hover:underline"
				>
					Michael Angelo Batio
				</a>, and to perform around the country, including at
				<a href="https://www.namm.org" target="_blank" class="text-blue-700 hover:underline">
					NAMM
				</a>. I also began giving lectures and masterclasses on guitar technique and the physics of
				the guitar, and developed a few pieces of 
				<a
					href="https://www.guitarworld.com/news/scale-the-summit-jackhammer-ballet"
					target="_blank"
					class="text-blue-700 hover:underline">
				guitar-related technology.
				</a>
				<br /><br />

				Following graduation, I moved to the Bay Area and joined
				<a href="https://vectoratomic.com" target="_blank" class="text-blue-700 hover:underline">
					Vector Atomic
				</a>
				as a scientist. For several years, I focused on R&D for a suite of new optical atomic clocks.
				In collaboration with a team at
				<a href="https://www.nist.gov" target="_blank" class="text-blue-700 hover:underline">
					NIST Boulder
				</a>, we developed a low-power ultracold strontium clock platform that integrated
				metasurface optics. I also filed a patent for a novel approach to designing the
				electromagnetics for this platform, using a simulated annealing algorithm and a Monte Carlo
				simulation of strontium atom trajectories. On another project, we developed first-in-class
				iodine vapor clocks, ultimately deploying them on a
				<a
					href="https://www.nzdf.mil.nz/navy"
					target="_blank"
					class="text-blue-700 hover:underline"
				>
					New Zealand Navy
				</a>
				vessel off the coast of Hawaii for the
				<a
					href="https://www.cpf.navy.mil/rimpac"
					target="_blank"
					class="text-blue-700 hover:underline"
				>
					RIMPAC 2022
				</a>
				exercises. To ensure these complex systems remained locked and healthy without technical staff,
				I developed and deployed deep learning models to identify and correct for common issues in the
				clock systems.
				<br /><br />

				Spending more time in the Bay Area, I began exploring startups and entrepreneurship. I
				co-founded Biomonadic, aiming to build a platform for manufacturing cell and gene therapies
				using reinforcement learning. Having self-studied machine learning for about a year, I
				looked for full-time roles combining ML and software development. I connected with the
				founding team at Delfi Labs, focused on financial risk management and algorithmic hedging. I
				joined as CTO, leading the technical development of the platform. We launched the company's
				first product during a five-month "incubation" sprint in Seoul, South Korea, and have been
				bringing it to market ever since. Though I relocated from the Bay Area to Las Vegas, I
				maintain a heavy travel schedule to the EU, Japan, and other global locations.
			</p>
		</TabItem>
	</Tabs>
</div>

<Socialbar />