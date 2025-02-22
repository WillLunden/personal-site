import { a0 as sanitize_props, a1 as rest_props, a2 as fallback, aa as element, Z as bind_props, T as pop, Q as push, _ as slot, a5 as spread_attributes, a4 as clsx } from "./index.js";
import { twMerge } from "tailwind-merge";
function Heading($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["tag", "color", "customSize"]);
  push();
  let tag = fallback($$props["tag"], "h1");
  let color = fallback($$props["color"], "text-gray-900 dark:text-white");
  let customSize = fallback($$props["customSize"], "");
  const textSizes = {
    h1: "text-5xl font-extrabold",
    h2: "text-4xl font-bold",
    h3: "text-3xl font-bold",
    h4: "text-2xl font-bold",
    h5: "text-xl font-bold",
    h6: "text-lg font-bold"
  };
  element(
    $$payload,
    tag,
    () => {
      $$payload.out += `${spread_attributes({
        ...$$restProps,
        class: clsx(twMerge(customSize ? customSize : textSizes[tag], color, "w-full", $$sanitized_props.class))
      })}`;
    },
    () => {
      $$payload.out += `<!---->`;
      slot($$payload, $$props, "default", {}, null);
      $$payload.out += `<!---->`;
    }
  );
  bind_props($$props, { tag, color, customSize });
  pop();
}
function Li($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["icon", "liClass"]);
  push();
  let icon = fallback($$props["icon"], false);
  let liClass = fallback($$props["liClass"], "");
  let classLi = twMerge(liClass, icon && "flex items-center", $$sanitized_props.class);
  $$payload.out += `<li${spread_attributes({ ...$$restProps, class: clsx(classLi) })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></li>`;
  bind_props($$props, { icon, liClass });
  pop();
}
function List($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["tag", "list", "position"]);
  push();
  let tag = fallback($$props["tag"], "ul");
  let list = fallback($$props["list"], () => void 0, true);
  let position = fallback($$props["position"], "inside");
  let lists = {
    disc: "list-disc",
    none: "list-none",
    decimal: "list-decimal"
  };
  let positions = {
    inside: "list-inside",
    outside: "list-outside"
  };
  let classList = twMerge(lists[list ?? (tag === "ul" ? "disc" : tag === "ol" ? "decimal" : "none")], positions[position], $$sanitized_props.class);
  element(
    $$payload,
    tag,
    () => {
      $$payload.out += `${spread_attributes({ ...$$restProps, class: clsx(classList) })}`;
    },
    () => {
      $$payload.out += `<!---->`;
      slot($$payload, $$props, "default", {}, null);
      $$payload.out += `<!---->`;
    }
  );
  bind_props($$props, { tag, list, position });
  pop();
}
export {
  Heading as H,
  List as L,
  Li as a
};
