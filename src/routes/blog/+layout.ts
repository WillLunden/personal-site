import { allPosts } from '$lib/posts';

export function load() {
    return {
        posts: allPosts
    };
}