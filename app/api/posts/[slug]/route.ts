import { getPost } from "@/lib/post-helper";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
export const maxDuration = 25

export const GET = async (
    request: NextRequest,
    props: { params: { slug: string } }
) => {
    const { slug } = props.params;

    const post = await getPost(slug);

    return NextResponse.json(post);
};