// src/lib/posts/index.ts
const modules = import.meta.glob('./*.ts', { eager: true });


export interface Post {
    slug: string;
    title: string;
    date: string;
    content: string;
}

// Gather up all the posts, converting each module’s exports into a Post object.
export const allPosts: Post[] = Object.values(modules).map((mod: any) => ({
    slug: mod.slug,
    title: mod.title,
    date: mod.date,
    content: mod.content
}));

// Optionally, sort newest first: 
allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
