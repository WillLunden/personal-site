import { V as getContext, a2 as fallback, W as escape_html, Z as bind_props, T as pop, Q as push, a6 as store_get, $ as ensure_array_like, a7 as head, a8 as unsubscribe_stores } from "../../chunks/index.js";
import "clsx";
import "../../chunks/client.js";
import { N as Navbar, S as Socialbar } from "../../chunks/Socialbar.js";
/* empty css                   */
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Typewriter($$payload, $$props) {
  push();
  let text = fallback($$props["text"], "");
  let typingSpeed = fallback($$props["typingSpeed"], 40);
  let displayed = "";
  $$payload.out += `<p class="mb-2">${escape_html(displayed)}</p>`;
  bind_props($$props, { text, typingSpeed });
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const paragraphs = [
    "Hi there.",
    "I am a technical professional with over 15 years of experience in physics research, AI/ML, and software development. Currently, I lead technical development at Delfi Labs as CTO.",
    "I am also a musician, frequent traveler, whisky collector, and hobbyist photographer.",
    "Feel free to take a look around."
  ];
  let currentParagraph = 0;
  store_get($$store_subs ??= {}, "$page", page).url.pathname;
  const each_array = ensure_array_like(paragraphs);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Will Lunden</title>`;
    $$payload2.out += `<meta name="description" content="Will Lunden Home Page">`;
  });
  Navbar($$payload, { activePage: "home" });
  $$payload.out += `<!----> <div class="m-6 flex min-h-screen flex-col items-center justify-center text-center"><h1 class="mb-4 text-4xl my-name"><i class="fa fa-flask" aria-hidden="true"></i> Will Lunden, PhD</h1> <!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let paragraph = each_array[index];
    if (index <= currentParagraph) {
      $$payload.out += "<!--[-->";
      Typewriter($$payload, { text: paragraph });
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> `;
  Socialbar($$payload);
  $$payload.out += `<!---->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
