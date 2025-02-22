const slug = "whisky-exchange-ds-1";
const title = "Some Simple Data Science with Whisky Exchange Data";
const date = "2025-02-01";
const content = `
<h2>Welcome to My First Post</h2>
<p>This is just a quick example of storing a blog post as TypeScript.</p>
<p>We can include <strong>HTML</strong> or inline styles if we want.</p>
`;
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content,
  date,
  slug,
  title
}, Symbol.toStringTag, { value: "Module" }));
const modules = /* @__PURE__ */ Object.assign({ "./my-first-post.ts": __vite_glob_0_0 });
const allPosts = Object.values(modules).map((mod) => ({
  slug: mod.slug,
  title: mod.title,
  date: mod.date,
  content: mod.content
}));
allPosts.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
export {
  allPosts as a
};
