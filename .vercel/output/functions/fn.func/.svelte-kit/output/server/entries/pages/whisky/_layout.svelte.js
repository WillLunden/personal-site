import { X as copy_payload, Y as assign_payload, Z as bind_props, T as pop, Q as push, _ as slot, $ as ensure_array_like, W as escape_html } from "../../../chunks/index.js";
import "clsx";
import { D as Drawer, s as sineIn, S as Sidebar, a as SidebarGroup } from "../../../chunks/SidebarGroup.js";
import { N as Navbar, S as Socialbar } from "../../../chunks/Socialbar.js";
function _layout($$payload, $$props) {
  push();
  let data = $$props["data"];
  let isDrawerClosed = true;
  let transitionParams = { x: -320, duration: 200, easing: sineIn };
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Navbar($$payload2, { activePage: "whisky" });
    $$payload2.out += `<!----> <div class="flex min-h-screen svelte-mn3mrb"><main class="flex-1 p-4"><button class="mb-4 rounded bg-yellow-700 px-4 py-2 text-white"><i class="fa-solid fa-bars mr-2"></i> Menu</button> <!---->`;
    slot($$payload2, $$props, "default", {}, null);
    $$payload2.out += `<!----></main></div> `;
    Socialbar($$payload2);
    $$payload2.out += `<!----> `;
    Drawer($$payload2, {
      transitionType: "fly",
      id: "sidebar1",
      transitionParams,
      placement: "left",
      class: "m-0 bg-yellow-200  p-0 ",
      get hidden() {
        return isDrawerClosed;
      },
      set hidden($$value) {
        isDrawerClosed = $$value;
        $$settled = false;
      },
      children: ($$payload3) => {
        Sidebar($$payload3, {
          class: "w-full border-r border-yellow-400 bg-yellow-200 text-sm",
          children: ($$payload4) => {
            SidebarGroup($$payload4, {
              class: "mb-6",
              children: ($$payload5) => {
                const each_array = ensure_array_like(data.posts);
                $$payload5.out += `<div class="border-b border-yellow-700 p-4 text-lg font-bold svelte-mn3mrb"><i class="fa-solid fa-wine-glass mr-2"></i> Tasting Notes</div> <!--[-->`;
                for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                  let post = each_array[$$index];
                  $$payload5.out += `<div class="py-2 pl-2 svelte-mn3mrb"><div class="text-xs text-gray-600 italic svelte-mn3mrb">${escape_html(post.date)}</div> <div class="text-sm font-semibold text-gray-800 svelte-mn3mrb">${escape_html(post.title)}</div></div>`;
                }
                $$payload5.out += `<!--]-->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            SidebarGroup($$payload4, {
              children: ($$payload5) => {
                const each_array_1 = ensure_array_like(data.posts);
                $$payload5.out += `<div class="border-b p-4 text-lg font-bold svelte-mn3mrb"><i class="fa-solid fa-map-pin mr-2"></i> Distillery Visits</div> <!--[-->`;
                for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                  let post = each_array_1[$$index_1];
                  $$payload5.out += `<div class="py-2 pl-2 svelte-mn3mrb"><div class="text-xs text-gray-600 italic svelte-mn3mrb">${escape_html(post.date)}</div> <div class="text-sm font-semibold text-gray-800 svelte-mn3mrb">${escape_html(post.title)}</div></div>`;
                }
                $$payload5.out += `<!--]-->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            SidebarGroup($$payload4, {
              children: ($$payload5) => {
                const each_array_2 = ensure_array_like(data.posts);
                $$payload5.out += `<div class="border-b p-4 text-lg font-bold svelte-mn3mrb"><i class="fa-solid fa-lightbulb mr-2"></i> Blog</div> <!--[-->`;
                for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
                  let post = each_array_2[$$index_2];
                  $$payload5.out += `<div class="py-2 pl-2 svelte-mn3mrb"><div class="text-xs text-gray-600 italic svelte-mn3mrb">${escape_html(post.date)}</div> <div class="text-sm font-semibold text-gray-800 svelte-mn3mrb">${escape_html(post.title)}</div></div>`;
                }
                $$payload5.out += `<!--]-->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!---->`;
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { data });
  pop();
}
export {
  _layout as default
};
