import { allPosts } from '$lib/posts';
import { error } from '@sveltejs/kit';

export function load({ params }) {
    const post = allPosts.find((p) => p.slug === params.slug);
    if (!post) {
        throw error(404, 'Post not found');
    }

    return { post };
}