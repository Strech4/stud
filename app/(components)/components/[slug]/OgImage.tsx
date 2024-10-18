/* eslint-disable react/no-unknown-property */
import { Post } from "@/lib/post-helper";

export type OgImageProps = {
    post: Post;
    url: string;
};

export const OgImage = ({ post, url }: OgImageProps) => {
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",

                position: "relative",
                gap: 16,

                color: "white",
                backgroundColor: "#090910",
                opacity: "1",
            }}
        >
            <img
                src={`${url}/og.png`}
                alt="bg"
                tw="absolute flex top-0 left-0 right-0 bottom-0"
            />
            <div
                tw="flex flex-col justify-start items-start h-full flex-1 px-16 py-24"
                style={{ gap: 16 }}
            >
                <p
                    style={{
                        fontFamily: "Space Grotesk",
                    }}
                    tw="text-3xl font-bold m-0"
                >
                    Codelynx
                </p>
                <p tw="text-xl m-0 mt-12">
                    {new Date(post.publishedAt).toLocaleDateString()}
                </p>
                <p tw="text-6xl m-0 mt-0">{post.title}</p>
            </div>
        </div>
    );
};