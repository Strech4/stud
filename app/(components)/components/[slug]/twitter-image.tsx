import type { Post } from "@/lib/post-helper";
import { ImageResponse } from "next/og";
import { OgImage } from "./OgImage";

const url = process.env.VERCEL_URL ?? "http://localhost:3000";
export const alt = "Studio-dev Components page preview"
export const size = {
    width: 1200,
    height: 730,
}
export const contentType = "image/png";
export default async function TwitterImagePage({
    params,
}: {
    params: {
        slug: string
    };
}) {
    const post = (await fetch(`${URL}/api/posts/ ${params.slug}`).then(res => res.json())) as Post

    return new ImageResponse(<OgImage post={post} url={url} />, {
        ...size,
    });
}