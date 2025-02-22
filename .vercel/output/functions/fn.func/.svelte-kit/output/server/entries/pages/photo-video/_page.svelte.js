import { a0 as sanitize_props, a1 as rest_props, Q as push, V as getContext, a2 as fallback, a5 as spread_attributes, a4 as clsx, _ as slot, aa as element, Z as bind_props, T as pop, $ as ensure_array_like, a3 as attr, a7 as head, W as escape_html } from "../../../chunks/index.js";
import { N as Navbar, S as Socialbar } from "../../../chunks/Socialbar.js";
import { twMerge } from "tailwind-merge";
import { T as Tabs, a as TabItem } from "../../../chunks/Tabs.js";
function Button($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "pill",
    "outline",
    "size",
    "href",
    "type",
    "color",
    "shadow",
    "tag",
    "checked",
    "disabled"
  ]);
  push();
  const group = getContext("group");
  let pill = fallback($$props["pill"], false);
  let outline = fallback($$props["outline"], false);
  let size = fallback($$props["size"], group ? "sm" : "md");
  let href = fallback($$props["href"], () => void 0, true);
  let type = fallback($$props["type"], "button");
  let color = fallback($$props["color"], group ? outline ? "dark" : "alternative" : "primary");
  let shadow = fallback($$props["shadow"], false);
  let tag = fallback($$props["tag"], "button");
  let checked = fallback($$props["checked"], () => void 0, true);
  let disabled = fallback($$props["disabled"], false);
  const colorClasses = {
    alternative: "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 hover:text-primary-700 focus-within:text-primary-700 dark:focus-within:text-white dark:hover:text-white dark:hover:bg-gray-700",
    blue: "text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700",
    dark: "text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700",
    green: "text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700",
    light: "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600",
    primary: "text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700",
    purple: "text-white bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700",
    red: "text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700",
    yellow: "text-white bg-yellow-400 hover:bg-yellow-500 ",
    none: ""
  };
  const colorCheckedClasses = {
    alternative: "text-primary-700 border dark:text-primary-500 bg-gray-100 dark:bg-gray-700 border-gray-300 shadow-gray-300 dark:shadow-gray-800 shadow-inner",
    blue: "text-blue-900 bg-blue-400 dark:bg-blue-500 shadow-blue-700 dark:shadow-blue-800 shadow-inner",
    dark: "text-white bg-gray-500 dark:bg-gray-600 shadow-gray-800 dark:shadow-gray-900 shadow-inner",
    green: "text-green-900 bg-green-400 dark:bg-green-500 shadow-green-700 dark:shadow-green-800 shadow-inner",
    light: "text-gray-900 bg-gray-100 border border-gray-300 dark:bg-gray-500 dark:text-gray-900 dark:border-gray-700 shadow-gray-300 dark:shadow-gray-700 shadow-inner",
    primary: "text-primary-900 bg-primary-400 dark:bg-primary-500 shadow-primary-700 dark:shadow-primary-800 shadow-inner",
    purple: "text-purple-900 bg-purple-400 dark:bg-purple-500 shadow-purple-700 dark:shadow-purple-800 shadow-inner",
    red: "text-red-900 bg-red-400 dark:bg-red-500 shadow-red-700 dark:shadow-red-800 shadow-inner",
    yellow: "text-yellow-900 bg-yellow-300 dark:bg-yellow-400 shadow-yellow-500 dark:shadow-yellow-700 shadow-inner",
    none: ""
  };
  const coloredFocusClasses = {
    alternative: "focus-within:ring-gray-200 dark:focus-within:ring-gray-700",
    blue: "focus-within:ring-blue-300 dark:focus-within:ring-blue-800",
    dark: "focus-within:ring-gray-300 dark:focus-within:ring-gray-700",
    green: "focus-within:ring-green-300 dark:focus-within:ring-green-800",
    light: "focus-within:ring-gray-200 dark:focus-within:ring-gray-700",
    primary: "focus-within:ring-primary-300 dark:focus-within:ring-primary-800",
    purple: "focus-within:ring-purple-300 dark:focus-within:ring-purple-900",
    red: "focus-within:ring-red-300 dark:focus-within:ring-red-900",
    yellow: "focus-within:ring-yellow-300 dark:focus-within:ring-yellow-900",
    none: ""
  };
  const coloredShadowClasses = {
    alternative: "shadow-gray-500/50 dark:shadow-gray-800/80",
    blue: "shadow-blue-500/50 dark:shadow-blue-800/80",
    dark: "shadow-gray-500/50 dark:shadow-gray-800/80",
    green: "shadow-green-500/50 dark:shadow-green-800/80",
    light: "shadow-gray-500/50 dark:shadow-gray-800/80",
    primary: "shadow-primary-500/50 dark:shadow-primary-800/80",
    purple: "shadow-purple-500/50 dark:shadow-purple-800/80",
    red: "shadow-red-500/50 dark:shadow-red-800/80 ",
    yellow: "shadow-yellow-500/50 dark:shadow-yellow-800/80 ",
    none: ""
  };
  const outlineClasses = {
    alternative: "text-gray-900 dark:text-gray-400 hover:text-white border border-gray-800 hover:bg-gray-900 focus-within:bg-gray-900 focus-within:text-white focus-within:ring-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus-within:ring-gray-800",
    blue: "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600",
    dark: "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus-within:bg-gray-900 focus-within:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600",
    green: "text-green-700 hover:text-white border border-green-700 hover:bg-green-800 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600",
    light: "text-gray-500 hover:text-gray-900 bg-white border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600",
    primary: "text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-700 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-600",
    purple: "text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500",
    red: "text-red-700 hover:text-white border border-red-700 hover:bg-red-800 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600",
    yellow: "text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400",
    none: ""
  };
  const sizeClasses = {
    xs: "px-3 py-2 text-xs",
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-5 py-3 text-base",
    xl: "px-6 py-3.5 text-base"
  };
  const hasBorder = () => outline || color === "alternative" || color === "light";
  let buttonClass;
  buttonClass = twMerge("text-center font-medium", group ? "focus-within:ring-2" : "focus-within:ring-4", group && "focus-within:z-10", group || "focus-within:outline-none", "inline-flex items-center justify-center " + sizeClasses[size], outline && checked && "border dark:border-gray-900", outline && checked && colorCheckedClasses[color], outline && !checked && outlineClasses[color], !outline && checked && colorCheckedClasses[color], !outline && !checked && colorClasses[color], color === "alternative" && (group && !checked ? "dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600" : "dark:bg-transparent dark:border-gray-600 dark:hover:border-gray-600"), outline && color === "dark" && (group ? checked ? "bg-gray-900 border-gray-800 dark:border-white dark:bg-gray-600" : "dark:text-white border-gray-800 dark:border-white" : "dark:text-gray-400 dark:border-gray-700"), coloredFocusClasses[color], hasBorder() && group && "[&:not(:first-child)]:-ms-px", group ? pill && "first:rounded-s-full last:rounded-e-full" || "first:rounded-s-lg last:rounded-e-lg" : pill && "rounded-full" || "rounded-lg", shadow && "shadow-lg", shadow && coloredShadowClasses[color], disabled && "cursor-not-allowed opacity-50", $$sanitized_props.class);
  if (href && !disabled) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes({
      href,
      ...$$restProps,
      class: clsx(buttonClass),
      role: "button"
    })}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    if (tag === "label") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<label${spread_attributes({
        ...$$restProps,
        class: clsx(buttonClass)
      })}><!---->`;
      slot($$payload, $$props, "default", {}, null);
      $$payload.out += `<!----></label>`;
    } else {
      $$payload.out += "<!--[!-->";
      if (tag === "button") {
        $$payload.out += "<!--[-->";
        $$payload.out += `<button${spread_attributes({
          type,
          ...$$restProps,
          disabled,
          class: clsx(buttonClass)
        })}><!---->`;
        slot($$payload, $$props, "default", {}, null);
        $$payload.out += `<!----></button>`;
      } else {
        $$payload.out += "<!--[!-->";
        element(
          $$payload,
          tag,
          () => {
            $$payload.out += `${spread_attributes({
              ...$$restProps,
              class: clsx(buttonClass)
            })}`;
          },
          () => {
            $$payload.out += `<!---->`;
            slot($$payload, $$props, "default", {}, null);
            $$payload.out += `<!---->`;
          }
        );
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    pill,
    outline,
    size,
    href,
    type,
    color,
    shadow,
    tag,
    checked,
    disabled
  });
  pop();
}
function Gallery($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["items", "imgClass"]);
  push();
  let divClass;
  let items = fallback($$props["items"], () => [], true);
  let imgClass = fallback($$props["imgClass"], "h-auto max-w-full rounded-lg");
  divClass = twMerge("grid", $$sanitized_props.class);
  const each_array = ensure_array_like(items);
  $$payload.out += `<div${spread_attributes({ ...$$restProps, class: clsx(divClass) })}>`;
  if (each_array.length !== 0) {
    $$payload.out += "<!--[-->";
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$payload.out += `<!---->`;
      slot($$payload, $$props, "default", { item }, () => {
        $$payload.out += `<div><img${attr("src", item.src)}${attr("alt", item.alt)}${attr("class", clsx(twMerge(imgClass, $$sanitized_props.classImg)))}></div>`;
      });
      $$payload.out += `<!---->`;
    }
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "default", { item: items[0] }, null);
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { items, imgClass });
  pop();
}
function _page($$payload) {
  let filteredPhotos, totalPages, pagedPhotos, galleryItems;
  let photos = [
    {
      alt: "Metal portrait",
      thumbnail: "/small/IMG_0024.jpg",
      large: "/small/IMG_0024.jpg",
      tags: ["portrait", "music"]
    },
    {
      alt: "Whisky Bottle",
      thumbnail: "/small/IMG_0873.jpg",
      large: "/small/IMG_0873.jpg",
      tags: ["whisky"]
    },
    {
      alt: "Metal portrait",
      thumbnail: "/small/IMG_0028.jpg",
      large: "/small/IMG_0028.jpg",
      tags: ["portrait", "music"]
    },
    {
      alt: "Metal portrait",
      thumbnail: "/small/IMG_9864.jpg",
      large: "/small/IMG_9864.jpg",
      tags: ["music", "portrait"]
    },
    {
      alt: "Metal portrait",
      thumbnail: "/small/IMG_9857.jpg",
      large: "/small/IMG_9857.jpg",
      tags: ["music", "portrait"]
    },
    {
      alt: "Iodine cells",
      thumbnail: "/small/IMG_0029.jpg",
      large: "/small/IMG_0029.jpg",
      tags: ["physics"]
    },
    {
      alt: "Iodine cell",
      thumbnail: "/small/IMG_0040.jpg",
      large: "/small/IMG_0040.jpg",
      tags: ["physics"]
    },
    {
      alt: "Metal portrait",
      thumbnail: "/small/IMG_0040-2.jpg",
      large: "/small/IMG_0040-2.jpg",
      tags: ["portrait", "music"]
    },
    {
      alt: "Metal Portrait",
      thumbnail: "/small/IMG_0087.jpg",
      large: "/small/IMG_0087.jpg",
      tags: ["portrait", "music"]
    },
    {
      alt: "Circuit",
      thumbnail: "/small/IMG_0127.jpg",
      large: "/small/IMG_0127.jpg",
      tags: ["physics"]
    },
    {
      alt: "Circuit",
      thumbnail: "/small/IMG_0138.jpg",
      large: "/small/IMG_0138.jpg",
      tags: ["physics"]
    },
    {
      alt: "Enclosure",
      thumbnail: "/small/IMG_0143.jpg",
      large: "/small/IMG_0143.jpg",
      tags: ["physics"]
    },
    {
      alt: "Enclosure",
      thumbnail: "/small/IMG_0145.jpg",
      large: "/small/IMG_0145.jpg",
      tags: ["physics"]
    },
    {
      alt: "Enclosure",
      thumbnail: "/small/IMG_0153.jpg",
      large: "/small/IMG_0153.jpg",
      tags: ["physics"]
    },
    {
      alt: "Metal Portrait",
      thumbnail: "/small/IMG_0158.jpg",
      large: "/small/IMG_0158.jpg",
      tags: ["portrait", "music"]
    },
    {
      alt: "Metal Portrait",
      thumbnail: "/small/IMG_0163.jpg",
      large: "/small/IMG_0163.jpg",
      tags: ["portrait", "music"]
    },
    {
      alt: "Metal Portrait",
      thumbnail: "/small/IMG_0205.jpg",
      large: "/small/IMG_0205.jpg",
      tags: ["portrait", "music"]
    },
    {
      alt: "Atomic Clock",
      thumbnail: "/small/IMG_0246.jpg",
      large: "/small/IMG_0246.jpg",
      tags: ["physics"]
    },
    {
      alt: "Atomic Clock",
      thumbnail: "/small/IMG_0250.jpg",
      large: "/small/IMG_0250.jpg",
      tags: ["physics"]
    },
    {
      alt: "Atomic Clock",
      thumbnail: "/small/IMG_0252.jpg",
      large: "/small/IMG_0252.jpg",
      tags: ["physics"]
    },
    {
      alt: "Whisky Bottle",
      thumbnail: "/small/IMG_0858.jpg",
      large: "/small/IMG_0858.jpg",
      tags: ["whisky"]
    },
    {
      alt: "Whisky Bottle",
      thumbnail: "/small/IMG_0860.jpg",
      large: "/small/IMG_0860.jpg",
      tags: ["whisky"]
    },
    {
      alt: "Whisky Bottle",
      thumbnail: "/small/IMG_0864.jpg",
      large: "/small/IMG_0864.jpg",
      tags: ["whisky"]
    },
    {
      alt: "Whisky Bottle",
      thumbnail: "/small/IMG_0920.jpg",
      large: "/small/IMG_0920.jpg",
      tags: ["whisky"]
    },
    {
      alt: "Whisky Bottle",
      thumbnail: "/small/IMG_0932.jpg",
      large: "/small/IMG_0932.jpg",
      tags: ["whisky"]
    },
    {
      alt: "Whisky Bottle",
      thumbnail: "/small/IMG_0950.jpg",
      large: "/small/IMG_0950.jpg",
      tags: ["whisky"]
    },
    {
      alt: "Whisky Bottle",
      thumbnail: "/small/IMG_0964.jpg",
      large: "/small/IMG_0964.jpg",
      tags: ["whisky"]
    },
    {
      alt: "Whisky Bottle",
      thumbnail: "/small/IMG_0996.jpg",
      large: "/small/IMG_0996.jpg",
      tags: ["whisky"]
    },
    {
      alt: "Whisky Bottle",
      thumbnail: "/small/IMG_1004.jpg",
      large: "/small/IMG_1004.jpg",
      tags: ["whisky"]
    },
    {
      alt: "Whisky Bottle",
      thumbnail: "/small/IMG_1013.jpg",
      large: "/small/IMG_1013.jpg",
      tags: ["whisky"]
    },
    {
      alt: "Whisky Bottle",
      thumbnail: "/small/IMG_1018.jpg",
      large: "/small/IMG_1018.jpg",
      tags: ["whisky"]
    },
    {
      alt: "Whisky Sign",
      thumbnail: "/small/IMG_1025.jpg",
      large: "/small/IMG_1025.jpg",
      tags: ["whisky"]
    },
    {
      alt: "Pot Still",
      thumbnail: "/small/IMG_1028.jpg",
      large: "/small/IMG_1028.jpg",
      tags: ["whisky"]
    },
    {
      alt: "Whisky Bottles",
      thumbnail: "/small/IMG_1033.jpg",
      large: "/small/IMG_1033.jpg",
      tags: ["whisky"]
    },
    {
      alt: "Pot Stills",
      thumbnail: "/small/IMG_1039.jpg",
      large: "/small/IMG_1039.jpg",
      tags: ["whisky"]
    },
    {
      alt: "Whisky Barrel",
      thumbnail: "/small/IMG_1048.jpg",
      large: "/small/IMG_1048.jpg",
      tags: ["whisky"]
    },
    {
      alt: "Whisky Bottle",
      thumbnail: "/small/IMG_1077.jpg",
      large: "/small/IMG_1077.jpg",
      tags: ["whisky"]
    },
    {
      alt: "Pot Stills",
      thumbnail: "/small/IMG_1093.jpg",
      large: "/small/IMG_1093.jpg",
      tags: ["whisky"]
    },
    {
      alt: "Pot Stills",
      thumbnail: "/small/IMG_1094.jpg",
      large: "/small/IMG_1094.jpg",
      tags: ["whisky"]
    },
    {
      alt: "Pot Stills",
      thumbnail: "/small/IMG_1097.jpg",
      large: "/small/IMG_1097.jpg",
      tags: ["whisky"]
    },
    {
      alt: "Barrels",
      thumbnail: "/small/IMG_1100.jpg",
      large: "/small/IMG_1100.jpg",
      tags: ["whisky"]
    },
    {
      alt: "Barrels",
      thumbnail: "/small/IMG_1124.jpg",
      large: "/small/IMG_1124.jpg",
      tags: ["whisky"]
    },
    {
      alt: "Whisky",
      thumbnail: "/small/IMG_1165.jpg",
      large: "/small/IMG_1165.jpg",
      tags: ["whisky"]
    },
    {
      alt: "Distillery",
      thumbnail: "/small/IMG_1170.jpg",
      large: "/small/IMG_1170.jpg",
      tags: ["whisky"]
    },
    {
      alt: "Pot Stills",
      thumbnail: "/small/IMG_1182.jpg",
      large: "/small/IMG_1182.jpg",
      tags: ["whisky"]
    },
    {
      alt: "Barrels",
      thumbnail: "/small/IMG_1192.jpg",
      large: "/small/IMG_1192.jpg",
      tags: ["whisky"]
    },
    {
      alt: "Iodine cell",
      thumbnail: "/small/IMG_8946.jpg",
      large: "/small/IMG_8946.jpg",
      tags: ["physics"]
    },
    {
      alt: "Music gear",
      thumbnail: "/small/IMG_9634.jpg",
      large: "/small/IMG_9634.jpg",
      tags: ["music"]
    },
    {
      alt: "Metal shirt",
      thumbnail: "/small/IMG_9807.jpg",
      large: "/small/IMG_9807.jpg",
      tags: ["music"]
    },
    {
      alt: "Metal portrait",
      thumbnail: "/small/IMG_9842.jpg",
      large: "/small/IMG_9842.jpg",
      tags: ["music", "portrait"]
    },
    {
      alt: "Metal portrait",
      thumbnail: "/small/IMG_9856.jpg",
      large: "/small/IMG_9856.jpg",
      tags: ["music", "portrait"]
    },
    {
      alt: "Metal portrait",
      thumbnail: "/small/IMG_9932.jpg",
      large: "/small/IMG_9932.jpg",
      tags: ["music", "portrait"]
    },
    {
      alt: "Metal portrait",
      thumbnail: "/small/IMG_9937.jpg",
      large: "/small/IMG_9937.jpg",
      tags: ["music", "portrait"]
    },
    {
      alt: "Metal portrait",
      thumbnail: "/small/IMG_9995.jpg",
      large: "/small/IMG_9995.jpg",
      tags: ["music", "portrait"]
    },
    {
      alt: "Enclosure",
      thumbnail: "/small/IMG_9975.jpg",
      large: "/small/IMG_9975.jpg",
      tags: ["physics"]
    }
  ];
  let videos = [
    {
      title: "As I Am - Dream Theater Guitar Solo Cover",
      url: "https://www.youtube.com/watch?v=OBeQtlYjT0A",
      thumbnail: "https://img.youtube.com/vi/OBeQtlYjT0A/0.jpg"
    },
    {
      title: "Contemporary Calamity - Guitar Playthrough",
      url: "https://www.youtube.com/watch?v=7frXnOl8TKA",
      thumbnail: "https://img.youtube.com/vi/7frXnOl8TKA/0.jpg"
    },
    {
      title: "The Captain - Music Video",
      url: "https://www.youtube.com/watch?v=bR1KBHGUt9Y",
      thumbnail: "https://img.youtube.com/vi/bR1KBHGUt9Y/0.jpg"
    },
    {
      title: "Guardians of the Multiverse - Guitar Playthrough",
      url: "https://www.youtube.com/watch?v=z4w5TxZ3iiw",
      thumbnail: "https://img.youtube.com/vi/z4w5TxZ3iiw/0.jpg"
    },
    {
      title: "A Wizard Departs - Music Video",
      url: "https://www.youtube.com/watch?v=lUv0DMid4m0",
      thumbnail: "https://img.youtube.com/vi/lUv0DMid4m0/0.jpg"
    },
    {
      title: "Equilibrium Guitars FT 8 Demo and Rundown",
      url: "https://www.youtube.com/watch?v=y9jM5k8DCh8",
      thumbnail: "https://img.youtube.com/vi/y9jM5k8DCh8/0.jpg"
    },
    {
      title: "TCTWADMLC - Guitar Playthrough",
      url: "https://www.youtube.com/watch?v=3p1N2yRG3rE",
      thumbnail: "https://img.youtube.com/vi/3p1N2yRG3rE/0.jpg"
    },
    {
      title: "Flight of the Quetzalcoatlus - Guitar Playthrough",
      url: "https://www.youtube.com/watch?v=QyvERmmC62o",
      thumbnail: "https://img.youtube.com/vi/QyvERmmC62o/0.jpg"
    },
    {
      title: "A Prison of Ice - Guitar Playthrough",
      url: "https://www.youtube.com/watch?v=kKHj4TcpGlA",
      thumbnail: "https://img.youtube.com/vi/kKHj4TcpGlA/0.jpg"
    },
    {
      title: "Flight of the Quetzalcoatlus - Livestream Performance",
      url: "https://www.youtube.com/watch?v=R8qBNRUh1_A",
      thumbnail: "https://img.youtube.com/vi/R8qBNRUh1_A/0.jpg"
    },
    {
      title: "Potroast the Rhinoman - Guitar Playthrough",
      url: "https://www.youtube.com/watch?v=61ssx8YXQbM",
      thumbnail: "https://img.youtube.com/vi/61ssx8YXQbM/0.jpg"
    },
    {
      title: "When a Meganeura Flies - Guitar Playthrough",
      url: "https://www.youtube.com/watch?v=hKMGHjR-mDg",
      thumbnail: "https://img.youtube.com/vi/hKMGHjR-mDg/0.jpg"
    }
  ];
  let activeTab = 0;
  let selectedTag = "all";
  let currentPage = 1;
  let pageSize = 9;
  filteredPhotos = photos;
  totalPages = Math.ceil(filteredPhotos.length / pageSize);
  pagedPhotos = filteredPhotos.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  galleryItems = pagedPhotos.map((p) => ({ src: p.thumbnail, alt: p.alt, large: p.large }));
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Photos &amp; Videos</title>`;
    $$payload2.out += `<meta name="description" content="Photo and video gallery">`;
  });
  Navbar($$payload, { activePage: "photo-video" });
  $$payload.out += `<!----> <div class="m-6 mx-auto flex max-w-5xl flex-col justify-center text-center"><h1 class="mb-4 text-4xl"><i class="fa fa-camera" aria-hidden="true"></i> Photos &amp; Videos</h1> <p class="text-lg">Photography, videography, and animation have been hobbies of mine for years. While I mostly do
		it for fun, I've also shot for live bands, scientific journals, product features, and more. I
		primarily use a Canon 6D DSLR.</p> `;
  Tabs($$payload, {
    style: "default",
    class: "mt-4",
    children: ($$payload2) => {
      TabItem($$payload2, {
        title: "Photos",
        open: activeTab === 0,
        children: ($$payload3) => {
          $$payload3.out += `<div class="mx-auto mt-4 mb-3 flex flex-wrap items-center justify-center gap-3">`;
          Button($$payload3, {
            pill: true,
            size: "xl",
            outline: selectedTag !== "all",
            class: "bg-blue-500 text-white",
            children: ($$payload4) => {
              $$payload4.out += `<!---->All Items`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            pill: true,
            size: "xl",
            outline: selectedTag !== "physics",
            class: "",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Physics`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            pill: true,
            size: "xl",
            outline: selectedTag !== "portrait",
            class: "",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Portraits`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            pill: true,
            size: "xl",
            outline: selectedTag !== "music",
            class: "",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Music`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            pill: true,
            size: "xl",
            outline: selectedTag !== "whisky",
            class: "",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Whisky`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> `;
          Gallery($$payload3, {
            items: galleryItems,
            class: "min-h-5xlmax-w-5xl m-auto grid-cols-2 flex-col items-center justify-center gap-4 text-center md:grid-cols-3",
            children: ($$payload4) => {
              const each_array = ensure_array_like(galleryItems);
              $$payload4.out += `<!--[-->`;
              for (let index = 0, $$length = each_array.length; index < $$length; index++) {
                let item = each_array[index];
                $$payload4.out += `<a${attr("href", item.large)} target="_blank" rel="noopener noreferrer" class="block"><img${attr("src", item.src)}${attr("alt", item.alt)} class="rounded shadow-md"></a>`;
              }
              $$payload4.out += `<!--]-->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          if (totalPages > 1) {
            $$payload3.out += "<!--[-->";
            const each_array_1 = ensure_array_like(Array(totalPages));
            $$payload3.out += `<div class="mt-4 mb-6 flex flex-wrap items-center justify-center gap-2"><!--[-->`;
            for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
              each_array_1[index];
              Button($$payload3, {
                color: currentPage === index + 1 ? "dark" : "none",
                children: ($$payload4) => {
                  $$payload4.out += `<!---->${escape_html(index + 1)}`;
                },
                $$slots: { default: true }
              });
            }
            $$payload3.out += `<!--]--></div>`;
          } else {
            $$payload3.out += "<!--[!-->";
          }
          $$payload3.out += `<!--]-->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      TabItem($$payload2, {
        title: "Videos",
        children: ($$payload3) => {
          const each_array_2 = ensure_array_like(videos);
          $$payload3.out += `<h2 class="mt-4 mb-6 text-2xl font-semibold">Videos</h2> <p class="mb-6 text-lg">Here are some videos I've produced and/or performed in over the years. Most of them are
				guitar playthroughs, but there are also music videos and gear demos.</p> <div class="grid grid-cols-1 gap-6 md:grid-cols-3"><!--[-->`;
          for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
            let vid = each_array_2[$$index_2];
            $$payload3.out += `<div class="flex flex-col items-center justify-center"><a${attr("href", vid.url)} target="_blank" rel="noopener noreferrer"><img${attr("src", vid.thumbnail)}${attr("alt", vid.title)} class="mb-2 rounded shadow-md"></a> <p class="text-center text-gray-800">${escape_html(vid.title)}</p></div>`;
          }
          $$payload3.out += `<!--]--></div>`;
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
