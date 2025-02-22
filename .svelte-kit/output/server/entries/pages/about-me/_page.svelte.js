import { a7 as head } from "../../../chunks/index.js";
import "clsx";
import { T as Tabs, a as TabItem } from "../../../chunks/Tabs.js";
import { H as Heading, L as List, a as Li } from "../../../chunks/List.js";
import "../../../chunks/client.js";
import { N as Navbar, S as Socialbar } from "../../../chunks/Socialbar.js";
/* empty css                      */
function _page($$payload) {
  let activeTab = 0;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Will Lunden</title>`;
    $$payload2.out += `<meta name="description" content="Will Lunden Home Page">`;
  });
  Navbar($$payload, { activePage: "about-me" });
  $$payload.out += `<!----> <div class="text-align-lef light m-6 mx-auto flex min-h-screen max-w-5xl flex-col pr-5 pl-5 text-left"><h1 class="mb-4 text-4xl"><i class="fa fa-flask" aria-hidden="true"></i> Will Lunden, PhD</h1> `;
  Heading($$payload, {
    tag: "h2",
    customSize: "text-lg font-semibold",
    class: "mb-2 text-lg font-semibold text-black dark:text-black ",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Education`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  List($$payload, {
    tag: "ul",
    class: "space-y-1 text-gray-500 dark:text-gray-500",
    list: "none",
    children: ($$payload2) => {
      Li($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->Bachelor of Science in Physics and Astronomy, <a href="https://www.stonybrook.edu" target="_blank" class="text-blue-700 hover:underline">Stony Brook University</a>, 2013`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->PhD in Physics, <a href="https://web.mit.edu" target="_blank" class="text-blue-700 hover:underline">MIT</a>,
			2020`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Heading($$payload, {
    tag: "h2",
    customSize: "text-lg font-semibold",
    class: "mt-4 mb-2 text-lg font-semibold text-black dark:text-black ",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Professional Experience`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  List($$payload, {
    tag: "ul",
    class: "space-y-1 text-gray-500 dark:text-gray-500",
    list: "none",
    children: ($$payload2) => {
      Li($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->Research Assistant, Stony Brook University, 2010-2013`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->Software Developer, Edtech Startup, 2012-2013`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->Research Assistant, MIT, 2013-2019`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->Senior Physicist, <a href="https://vectoratomic.com" target="_blank" class="text-blue-700 hover:underline">Vector Atomic</a>, 2020-2023`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->Co-founder and CTO, Biomonadic, 2023-2024`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->CTO, Delfi Labs Inc., 2023-present`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Tabs($$payload, {
    style: "default",
    class: "text-blue mt-6",
    children: ($$payload2) => {
      TabItem($$payload2, {
        title: "Short Bio",
        open: activeTab === 0,
        class: "",
        children: ($$payload3) => {
          $$payload3.out += `<p>I am a former AMO physicist who worked on next-generation atomic clocks and degenerate
				quantum gases. I now focus on software development and machine learning research with
				applications to financial risk management and algorithmic hedging. <br><br> I am also a guitarist and composer, and have released several albums of original music in the
				progressive metal and death metal genres, including one featuring all-time bestselling instrumental
				guitarist Joe Satriani, and given lectures and masterclasses on guitar technique and the physics
				of the guitar. <br><br> In my free time, I have pursued photography and videography/computer animation. Most recently,
				I have been diving into the rich history and craft of whisk(e)y.</p>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      TabItem($$payload2, {
        title: "Long Bio",
        open: activeTab === 1,
        class: "bg-white",
        children: ($$payload3) => {
          $$payload3.out += `<p class="mb-5">As a teenager, I was obsessed with tinkering with circuits, building small guitar effects
				pedals and poring over schematics and electronics textbooks in an effort to learn how all
				the technology around me <i>worked</i>. <br><br> An initial decision to pursue a degree in electrical engineering quickly led me down the
				road of studying physics and astronomy, where mathematics is brought to bear against some of
				the most fundamental questions one can ask. I had the opportunity to operate, develop
				control software for, and prototype novel equipment for a particle accelerator during my
				undergraduate years at Stony Brook University . I also pursued what became my first original
				research publications under the incredible Professor Tom Weinacht, studying how high-energy
				"ultrafast" laser pulses interacted with molecules. During these years, I learned my
				programming and Unix fundamentals, cobbling together various PHP and C++ applications for
				friends (usually hosted on rogue servers in the Physics Department basement) to hone my
				skills, and eventually working as a software developer for an edtech startup. <br><br> I then moved up to Boston to pursue my PhD in atomic physics at MIT, under Nobel laureate
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
				metaheuristics such as genetic algorithms. <br><br> During my time in Boston, I began taking music more seriously. Having played guitar and
				dabbled in other instruments most of my life, I started practicing in earnest after meeting
				local musicians and discovering Boston's rich music community. I spent much of my free time
				writing, recording, and touring with <a href="https://www.thebeastofnod.com" target="_blank" class="text-blue-700 hover:underline">The Beast of Nod</a>, a technical/progressive death metal group. Through the band, I had the opportunity to
				welcome a few guitar legends as guest artists, including <a href="https://www.satriani.com" target="_blank" class="text-blue-700 hover:underline">Joe Satriani</a> and <a href="https://michaelangelobatio.com" target="_blank" class="text-blue-700 hover:underline">Michael Angelo Batio</a>, and to perform around the country, including at <a href="https://www.namm.org" target="_blank" class="text-blue-700 hover:underline">NAMM</a>. I also began giving lectures and masterclasses on guitar technique and the physics of
				the guitar, and developed a few pieces of <a href="https://www.guitarworld.com/news/scale-the-summit-jackhammer-ballet" target="_blank" class="text-blue-700 hover:underline">guitar-related technology.</a> <br><br> Following graduation, I moved to the Bay Area and joined <a href="https://vectoratomic.com" target="_blank" class="text-blue-700 hover:underline">Vector Atomic</a> as a scientist. For several years, I focused on R&amp;D for a suite of new optical atomic clocks.
				In collaboration with a team at <a href="https://www.nist.gov" target="_blank" class="text-blue-700 hover:underline">NIST Boulder</a>, we developed a low-power ultracold strontium clock platform that integrated
				metasurface optics. I also filed a patent for a novel approach to designing the
				electromagnetics for this platform, using a simulated annealing algorithm and a Monte Carlo
				simulation of strontium atom trajectories. On another project, we developed first-in-class
				iodine vapor clocks, ultimately deploying them on a <a href="https://www.nzdf.mil.nz/navy" target="_blank" class="text-blue-700 hover:underline">New Zealand Navy</a> vessel off the coast of Hawaii for the <a href="https://www.cpf.navy.mil/rimpac" target="_blank" class="text-blue-700 hover:underline">RIMPAC 2022</a> exercises. To ensure these complex systems remained locked and healthy without technical staff,
				I developed and deployed deep learning models to identify and correct for common issues in the
				clock systems. <br><br> Spending more time in the Bay Area, I began exploring startups and entrepreneurship. I
				co-founded Biomonadic, aiming to build a platform for manufacturing cell and gene therapies
				using reinforcement learning. Having self-studied machine learning for about a year, I
				looked for full-time roles combining ML and software development. I connected with the
				founding team at Delfi Labs, focused on financial risk management and algorithmic hedging. I
				joined as CTO, leading the technical development of the platform. We launched the company's
				first product during a five-month "incubation" sprint in Seoul, South Korea, and have been
				bringing it to market ever since. Though I relocated from the Bay Area to Las Vegas, I
				maintain a heavy travel schedule to the EU, Japan, and other global locations.</p>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> `;
  Socialbar($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
