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
    Navbar($$payload2, { activePage: "blog" });
    $$payload2.out += `<!----> <div class="flex min-h-screen"><main class="flex-1 p-4"><button class="mb-4 rounded bg-gray-600 px-4 py-2 text-white"><i class="fa-solid fa-bars mr-2"></i> Blog Menu</button> <!---->`;
    slot($$payload2, $$props, "default", {}, null);
    $$payload2.out += `<!----></main></div> `;
    Socialbar($$payload2);
    $$payload2.out += `<!----> `;
    Drawer($$payload2, {
      transitionType: "fly",
      id: "sidebar1",
      transitionParams,
      placement: "left",
      class: "m-0 p-0",
      get hidden() {
        return isDrawerClosed;
      },
      set hidden($$value) {
        isDrawerClosed = $$value;
        $$settled = false;
      },
      children: ($$payload3) => {
        Sidebar($$payload3, {
          class: "border-r text-sm w-full",
          children: ($$payload4) => {
            SidebarGroup($$payload4, {
              class: "mb-6",
              children: ($$payload5) => {
                const each_array = ensure_array_like(data.posts);
                $$payload5.out += `<div class="border-b border-yellow-700 p-4 text-lg font-bold"><i class="fa-solid fa-brain mr-2"></i> Machine Learning</div> <!--[-->`;
                for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                  let post = each_array[$$index];
                  $$payload5.out += `<div class="py-2 pl-2"><div class="text-xs text-gray-600 italic">${escape_html(post.date)}</div> <div class="text-sm font-semibold text-gray-800">${escape_html(post.title)}</div></div>`;
                }
                $$payload5.out += `<!--]-->`;
              },
              $$slots: { default: true }
            });
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
