import { a7 as head } from "../../../chunks/index.js";
import { N as Navbar, S as Socialbar } from "../../../chunks/Socialbar.js";
/* empty css                      */
import "clsx";
import { H as Heading, L as List, a as Li } from "../../../chunks/List.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Will Lunden</title>`;
    $$payload2.out += `<meta name="description" content="Will Lunden Home Page">`;
  });
  Navbar($$payload, { activePage: "music" });
  $$payload.out += `<!----> <div class="text-align-lef light m-6 mx-auto flex min-h-screen max-w-5xl flex-col pr-5 pl-5 text-left"><h1 class="mb-4 text-4xl"><i class="fa fa-music" aria-hidden="true"></i> My Musical Releases</h1> <p class="text-gray-500 dark:text-gray-500">I've been playing guitar for over 25 years and have written several albums of original music,
		primarily with my groups The Beast of Nod and Mimesis. I've also made guest appearances on
		several other albums. Here's a list of my original releases and guest appearances.</p> `;
  Heading($$payload, {
    tag: "h2",
    customSize: "text-lg font-semibold",
    class: "mb-2 text-lg font-semibold text-black dark:text-black ",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Original Releases`;
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
          $$payload3.out += `<!---->2022 / Mimesis <a href="https://mimesisprog.bandcamp.com/album/trilogy" target="_blank" class="text-blue-700 hover:underline">Trilogy (EP)</a>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->2021 / The Beast of Nod <a href="https://thebeastofnod.bandcamp.com/album/multiversal" target="_blank" class="text-blue-700 hover:underline">Multiversal (LP)</a> (Featuring Joe Satriani and Michael Angelo Batio)`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->2020 / Pariahblaster <a href="https://pariahblaster.bandcamp.com/track/episode-1-a-wizard-departs" target="_blank" class="text-blue-700 hover:underline">Episode 1 (Single)</a>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->2019 / Mimesis <a href="https://mimesisprog.bandcamp.com/album/mimesis" target="_blank" class="text-blue-700 hover:underline">Mimesis (EP)</a>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->2018 / The Beast of Nod <a href="https://thebeastofnod.bandcamp.com/album/vampira-disciple-of-chaos" target="_blank" class="text-blue-700 hover:underline">Vampira: Disciple of Chaos (LP)</a>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->2015 / The Beast of Nod <a href="https://thebeastofnod.bandcamp.com/album/cephalopod-of-doom-2" target="_blank" class="text-blue-700 hover:underline">Arrival (EP)</a>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->2014 / The Beast of Nod <a target="_blank" class="text-blue-700 hover:underline">Enter the Land of Nod (EP)</a>`;
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
      $$payload2.out += `<!---->Guest Appearances`;
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
          $$payload3.out += `<!---->2023 / Archaeologist <a href="https://open.spotify.com/track/3064UeTDC0w5kHVuKzhN2s" target="_blank" class="text-blue-700 hover:underline">Elements</a> (Guitar Solo on track Riftwalker)`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->2021 / The Last King <a href="https://open.spotify.com/track/01NIQVCIQItZN5KZ0NSFaa" target="_blank" class="text-blue-700 hover:underline">Chaos Theory (LP)</a> (Guitar Solo on track Gomorrah)`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->2021 / Mortem Obscuram <a href="https://open.spotify.com/track/5a9cyYixFgs7bO3kGUvWD2" target="_blank" class="text-blue-700 hover:underline">Eradication of the Human Endeavor (LP)</a> (Guitar Solo on track Tormented Sanity)`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->2021 / Mortem Obscuram <a href="https://open.spotify.com/track/2WaYY3igdyjZZIpIlpPWfa" target="_blank" class="text-blue-700 hover:underline">Eradication of the Human Endeavor (LP)</a> (Guitar Solo on track A Fallen Kingdom)`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->2019 / Eddie Shifflet <a href="https://open.spotify.com/album/379jEP3o7PX4kiLMdVzc6O" target="_blank" class="text-blue-700 hover:underline">Majesteon (Single)</a> (Guitar Solos on track Majesteon)`;
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
      $$payload2.out += `<!---->Some Video Highlights`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><iframe class="aspect-video w-full" src="https://www.youtube.com/embed/bR1KBHGUt9Y?si=VWuMT6fA4w7dJe57" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> <iframe class="aspect-video w-full" src="https://www.youtube.com/embed/22wQFXOskJw?si=jDmuUWLWhWy657Y6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> <iframe class="aspect-video w-full" src="https://www.youtube.com/embed/7frXnOl8TKA?si=ODZBaZg3KvmQ5Tip" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> <iframe class="aspect-video w-full" src="https://www.youtube.com/embed/1pHPo1kcxGY?si=NR4yWldry3YPSJpC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div></div> `;
  Socialbar($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
