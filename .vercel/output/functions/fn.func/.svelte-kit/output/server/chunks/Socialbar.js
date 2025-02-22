import { a2 as fallback, a3 as attr, a4 as clsx, Z as bind_props, ab as stringify } from "./index.js";
/* empty css        */
function Navbar($$payload, $$props) {
  let navBorderColor = fallback($$props["navBorderColor"], "border-gray-200");
  let navBgColor = fallback($$props["navBgColor"], "bg-gray-900");
  let navBgDarkColor = fallback($$props["navBgDarkColor"], "bg-gray-900");
  let linkDarkTextColor = fallback($$props["linkDarkTextColor"], "text-gray-300");
  let hoverDarkBgColor = fallback($$props["hoverDarkBgColor"], "hover:bg-gray-700");
  let activeBgColor = fallback($$props["activeBgColor"], "bg-gray-700");
  let activeTextColor = fallback($$props["activeTextColor"], "text-white");
  let activeTextDarkColor = fallback($$props["activeTextDarkColor"], "md:text-orange-500");
  let buttonTextColor = fallback($$props["buttonTextColor"], "text-gray-300");
  let buttonHoverBgColor = fallback($$props["buttonHoverBgColor"], "hover:bg-gray-700");
  let buttonFocusRingColor = fallback($$props["buttonFocusRingColor"], "focus:ring-2 focus:ring-gray-600");
  let activePage = fallback($$props["activePage"], "home");
  function getLinkClass(page) {
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
  $$payload.out += `<nav${attr("class", `${stringify(navBorderColor)} ${stringify(navBgColor)} ${stringify(navBgDarkColor)}`)}><div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4"><a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"><span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Will Lunden</span></a> <button type="button"${attr("class", `inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm ${stringify(buttonTextColor)} ${stringify(buttonHoverBgColor)} ${stringify(buttonFocusRingColor)} focus:outline-none md:hidden`)} aria-controls="navbar-default"${attr("aria-expanded", "false")}><span class="sr-only">Open main menu</span> <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg></button>  <div id="navbar-default"${attr("class", `w-full md:block md:w-auto ${stringify(["hidden"].filter(Boolean).join(" "))}`)}><ul class="mt-4 flex flex-col rounded-lg border border-gray-100 border-gray-700 bg-gray-50 bg-gray-800 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-gray-900 md:p-0 rtl:space-x-reverse"><li><a href="/"${attr("class", clsx(getLinkClass("home")))}${attr("aria-current", activePage === "home" ? "page" : void 0)}><i class="fa-solid fa-home mr-2"></i> Home</a></li> <li><a href="/about-me"${attr("class", clsx(getLinkClass("about-me")))}${attr("aria-current", activePage === "about-me" ? "page" : void 0)}><i class="fa-solid fa-person mr-2"></i> About Me</a></li> <li><a href="/publications"${attr("class", clsx(getLinkClass("publications")))}${attr("aria-current", activePage === "publications" ? "page" : void 0)}><i class="fa-solid fa-feather mr-2"></i> Publications</a></li> <li><a href="/blog"${attr("class", clsx(getLinkClass("blog")))}${attr("aria-current", activePage === "blog" ? "page" : void 0)}><i class="fa-solid fa-blog mr-2"></i> Blog</a></li> <li><a href="/photo-video"${attr("class", clsx(getLinkClass("photo-video")))}${attr("aria-current", activePage === "photo-video" ? "page" : void 0)}><i class="fa-solid fa-camera mr-2"></i> Photo/Video</a></li> <li><a href="music"${attr("class", clsx(getLinkClass("music")))}${attr("aria-current", activePage === "music" ? "page" : void 0)}><i class="fa-solid fa-music mr-2"></i> Music</a></li> <li><a href="whisky"${attr("class", clsx(getLinkClass("whisky")))}${attr("aria-current", activePage === "whisky" ? "page" : void 0)}><i class="fa-solid fa-whiskey-glass mr-2"></i> Whisky</a></li></ul></div></div></nav>`;
  bind_props($$props, {
    navBorderColor,
    navBgColor,
    navBgDarkColor,
    linkDarkTextColor,
    hoverDarkBgColor,
    activeBgColor,
    activeTextColor,
    activeTextDarkColor,
    buttonTextColor,
    buttonHoverBgColor,
    buttonFocusRingColor,
    activePage
  });
}
function Socialbar($$payload) {
  const githubLink = "https://github.com/WillLunden";
  const linkedInLink = "https://linkedin.com/in/will-lunden";
  const emailLink = "mailto:lundenwill@gmail.com";
  $$payload.out += `<footer class="fixed bottom-0 w-full border-t border-gray-200 py-2 border-gray-700 bg-gray-900"><div class="mx-auto flex max-w-screen-xl justify-center space-x-6 text-xl text-gray-300"><a${attr("href", githubLink)} target="_blank" rel="noopener noreferrer" class="hover:text-gray-900 dark:hover:text-white"><i class="fab fa-github"></i></a> <a${attr("href", linkedInLink)} target="_blank" rel="noopener noreferrer" class="hover:text-gray-900 dark:hover:text-white"><i class="fab fa-linkedin"></i></a> <a${attr("href", emailLink)} class="hover:text-gray-900 dark:hover:text-white"><i class="fas fa-envelope"></i></a></div></footer>`;
}
export {
  Navbar as N,
  Socialbar as S
};
