import { W as escape_html, Z as bind_props, T as pop, Q as push } from "../../../../chunks/index.js";
import { h as html } from "../../../../chunks/html.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  $$payload.out += `<h1 class="mb-4 text-2xl font-bold">${escape_html(data.post.title)}</h1> <p class="mb-6 text-gray-600 italic">Published: ${escape_html(data.post.date)}</p> <div class="prose max-w-none">${html(data.post.content)}</div>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
