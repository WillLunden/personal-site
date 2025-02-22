import { a as allPosts } from "../../../../chunks/index4.js";
import { e as error } from "../../../../chunks/index2.js";
function load({ params }) {
  const post = allPosts.find((p) => p.slug === params.slug);
  if (!post) {
    throw error(404, "Post not found");
  }
  return { post };
}
export {
  load
};
