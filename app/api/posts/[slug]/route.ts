import { getPost } from "@/lib/post-helper";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
    request: NextRequest,
    props: { params: { slug: string } }
) => {
    const { slug } = props.params;

    const post = getPost(slug);

    return NextResponse.json(post);
}