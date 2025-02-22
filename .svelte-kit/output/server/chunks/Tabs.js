import { a0 as sanitize_props, a1 as rest_props, Q as push, a2 as fallback, V as getContext, a3 as attr, a5 as spread_attributes, a4 as clsx, _ as slot, W as escape_html, Z as bind_props, T as pop, S as setContext } from "./index.js";
import { w as writable } from "./index3.js";
import { twMerge } from "tailwind-merge";
function TabItem($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "open",
    "title",
    "activeClasses",
    "inactiveClasses",
    "defaultClass",
    "divClass"
  ]);
  push();
  let open = fallback($$props["open"], false);
  let title = fallback($$props["title"], "Tab title");
  let activeClasses = fallback($$props["activeClasses"], () => void 0, true);
  let inactiveClasses = fallback($$props["inactiveClasses"], () => void 0, true);
  let defaultClass = fallback($$props["defaultClass"], "inline-block text-sm font-medium text-center disabled:cursor-not-allowed");
  let divClass = fallback($$props["divClass"], "");
  const ctx = getContext("ctx") ?? {};
  ctx.selected ?? writable();
  let buttonClass;
  buttonClass = twMerge(defaultClass, open ? activeClasses ?? ctx.activeClasses : inactiveClasses ?? ctx.inactiveClasses, open && "active");
  $$payload.out += `<li${attr("class", clsx(twMerge("group", $$sanitized_props.class)))} role="presentation"><button${spread_attributes({
    type: "button",
    role: "tab",
    ...$$restProps,
    class: clsx(buttonClass)
  })}><!---->`;
  slot($$payload, $$props, "title", {}, () => {
    $$payload.out += `${escape_html(title)}`;
  });
  $$payload.out += `<!----></button> `;
  if (open) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="hidden tab_content_placeholder"><div${attr("class", clsx(divClass))}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></li>`;
  bind_props($$props, {
    open,
    title,
    activeClasses,
    inactiveClasses,
    defaultClass,
    divClass
  });
  pop();
}
function Tabs($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "tabStyle",
    "defaultClass",
    "contentClass",
    "divider",
    "activeClasses",
    "inactiveClasses"
  ]);
  push();
  let ulClass;
  let tabStyle = fallback($$props["tabStyle"], "none");
  let defaultClass = fallback($$props["defaultClass"], "flex flex-wrap space-x-2 rtl:space-x-reverse");
  let contentClass = fallback($$props["contentClass"], "p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4");
  let divider = fallback($$props["divider"], true);
  let activeClasses = fallback($$props["activeClasses"], "p-4 text-primary-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-primary-500");
  let inactiveClasses = fallback($$props["inactiveClasses"], "p-4 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300");
  const styledActiveClasses = {
    full: "p-4 w-full group-first:rounded-s-lg group-last:rounded-e-lg text-gray-900 bg-gray-100 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:bg-gray-700 dark:text-white",
    pill: "py-3 px-4 text-white bg-primary-600 rounded-lg",
    underline: "p-4 text-primary-600 border-b-2 border-primary-600 dark:text-primary-500 dark:border-primary-500",
    none: ""
  };
  const styledInactiveClasses = {
    full: "p-4 w-full group-first:rounded-s-lg group-last:rounded-e-lg text-gray-500 dark:text-gray-400 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",
    pill: "py-3 px-4 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",
    underline: "p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400",
    none: ""
  };
  const ctx = {
    activeClasses: styledActiveClasses[tabStyle] || activeClasses,
    inactiveClasses: styledInactiveClasses[tabStyle] || inactiveClasses,
    selected: writable()
  };
  setContext("ctx", ctx);
  divider = ["full", "pill"].includes(tabStyle) ? false : divider;
  ulClass = twMerge(defaultClass, tabStyle === "underline" && "-mb-px", $$sanitized_props.class);
  $$payload.out += `<ul${spread_attributes({ ...$$restProps, class: clsx(ulClass) })}><!---->`;
  slot($$payload, $$props, "default", { tabStyle }, null);
  $$payload.out += `<!----></ul> `;
  if (divider) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "divider", {}, () => {
      $$payload.out += `<div class="h-px bg-gray-200 dark:bg-gray-700"></div>`;
    });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div${attr("class", clsx(contentClass))} role="tabpanel" aria-labelledby="id-tab"></div>`;
  bind_props($$props, {
    tabStyle,
    defaultClass,
    contentClass,
    divider,
    activeClasses,
    inactiveClasses
  });
  pop();
}
export {
  Tabs as T,
  TabItem as a
};
