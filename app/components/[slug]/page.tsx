import { ComponentsNavigation } from "@/components/componentsPage/ComponentsNavigation";
import { Mdx } from "@/lib/features/mdx/Mdx";
import { getPost } from "@/lib/post-helper";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getUrl } from "./getUrl";

export const dynamic = "force-static";

export const generateMetadata = async (props: {
    params: { slug: string };
}): Promise<Metadata> => {
    const post = await getPost(props.params.slug);
    const url = getUrl();

    if (!post) {
        return {
            title: "404 - Page Not Found",
            description: "Page not found",
            metadataBase: new URL(url),
        };
    }

    return {
        title: post.title,
        description: post.description,
        metadataBase: new URL(url),
    };
};

export default async function RoutePage(props: { params: { slug: string } }) {

    const post = await getPost(props.params.slug);

    if (!post) {
        notFound()
    }

    return (
        <ComponentsNavigation>
            <div className="flex justify-between text-xs text-muted-foreground border-b py-1 mb-10">
                <h1>{post.title}</h1>
                <p>
                    Last update: {new Date(post.publishedAt).toLocaleDateString()}
                </p>
            </div>
            <div className="prose prose-sm lg:prose-lg ">
                <Mdx>{post.content}</Mdx>
            </div>
        </ComponentsNavigation>
    )
}
