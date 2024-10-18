"use server"

import { getPost, type Post } from "@/lib/post-helper";

export const getPostAction = async (slug: string) => {
    const post = await getPost(slug);

    return post;
}