import { a0 as sanitize_props, a1 as rest_props, Q as push, a2 as fallback, a3 as attr, a4 as clsx, a5 as spread_attributes, _ as slot, Z as bind_props, T as pop, S as setContext } from "./index.js";
import { twMerge } from "tailwind-merge";
import { w as writable } from "./index3.js";
function Drawer($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "activateClickOutside",
    "hidden",
    "position",
    "leftOffset",
    "rightOffset",
    "topOffset",
    "bottomOffset",
    "width",
    "backdrop",
    "bgColor",
    "bgOpacity",
    "placement",
    "id",
    "divClass",
    "transitionParams",
    "transitionType"
  ]);
  push();
  let activateClickOutside = fallback($$props["activateClickOutside"], true);
  let hidden = fallback($$props["hidden"], true);
  let position = fallback($$props["position"], "fixed");
  let leftOffset = fallback($$props["leftOffset"], "inset-y-0 start-0");
  let rightOffset = fallback($$props["rightOffset"], "inset-y-0 end-0");
  let topOffset = fallback($$props["topOffset"], "inset-x-0 top-0");
  let bottomOffset = fallback($$props["bottomOffset"], "inset-x-0 bottom-0");
  let width = fallback($$props["width"], "w-80");
  let backdrop = fallback($$props["backdrop"], true);
  let bgColor = fallback($$props["bgColor"], "bg-gray-900");
  let bgOpacity = fallback($$props["bgOpacity"], "bg-opacity-75");
  let placement = fallback($$props["placement"], "left");
  let id = fallback($$props["id"], "drawer-example");
  let divClass = fallback($$props["divClass"], "overflow-y-auto z-50 p-4 bg-white dark:bg-gray-800");
  let transitionParams = fallback($$props["transitionParams"], () => ({}), true);
  let transitionType = fallback($$props["transitionType"], "fly");
  const placements = {
    left: leftOffset,
    right: rightOffset,
    top: topOffset,
    bottom: bottomOffset
  };
  let backdropDivClass = twMerge("fixed top-0 start-0 z-50 w-full h-full", backdrop && bgColor, backdrop && bgOpacity);
  if (!hidden) {
    $$payload.out += "<!--[-->";
    if (backdrop && activateClickOutside) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div role="presentation"${attr("class", clsx(backdropDivClass))}></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      if (backdrop && !activateClickOutside) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<div role="presentation"${attr("class", clsx(backdropDivClass))}></div>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]--> <div${spread_attributes({
      id,
      ...$$restProps,
      class: clsx(twMerge(divClass, width, position, placements[placement], $$sanitized_props.class)),
      tabindex: "-1",
      "aria-controls": id,
      "aria-labelledby": id
    })}><!---->`;
    slot($$payload, $$props, "default", { hidden }, null);
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    activateClickOutside,
    hidden,
    position,
    leftOffset,
    rightOffset,
    topOffset,
    bottomOffset,
    width,
    backdrop,
    bgColor,
    bgOpacity,
    placement,
    id,
    divClass,
    transitionParams,
    transitionType
  });
  pop();
}
function sineIn(t) {
  const v = Math.cos(t * Math.PI * 0.5);
  if (Math.abs(v) < 1e-14) return 1;
  else return 1 - v;
}
function Sidebar($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "activeUrl",
    "asideClass",
    "nonActiveClass",
    "activeClass",
    "ariaLabel"
  ]);
  push();
  let activeUrl = fallback($$props["activeUrl"], "");
  let asideClass = fallback($$props["asideClass"], "w-64");
  let nonActiveClass = fallback($$props["nonActiveClass"], "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700");
  let activeClass = fallback($$props["activeClass"], "flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700");
  let ariaLabel = fallback($$props["ariaLabel"], "Sidebar");
  const activeUrlStore = writable("");
  setContext("sidebarContext", { activeClass, nonActiveClass });
  setContext("activeUrl", activeUrlStore);
  {
    activeUrlStore.set(activeUrl);
  }
  $$payload.out += `<aside${spread_attributes({
    ...$$restProps,
    class: clsx(twMerge(asideClass, $$sanitized_props.class)),
    "aria-label": ariaLabel
  })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></aside>`;
  bind_props($$props, {
    activeUrl,
    asideClass,
    nonActiveClass,
    activeClass,
    ariaLabel
  });
  pop();
}
function SidebarGroup($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["ulClass", "borderClass", "border"]);
  push();
  let ulClass = fallback($$props["ulClass"], "space-y-2");
  let borderClass = fallback($$props["borderClass"], "pt-4 mt-4 border-t border-gray-200 dark:border-gray-700");
  let border = fallback($$props["border"], false);
  if (border) {
    ulClass += " " + borderClass;
  }
  $$payload.out += `<ul${spread_attributes({
    ...$$restProps,
    class: clsx(twMerge(ulClass, $$sanitized_props.class))
  })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></ul>`;
  bind_props($$props, { ulClass, borderClass, border });
  pop();
}
export {
  Drawer as D,
  Sidebar as S,
  SidebarGroup as a,
  sineIn as s
};
