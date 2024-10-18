/* eslint-disable react/no-unknown-property */
import type { Post } from "@/lib/post-helper";

export type OgImageProps = {
    post: Post;
    url: string;
};

export const OgImage = ({ post, url }: OgImageProps) => {
    return (
        <div
            style={{
                width: "1200px",  // Dimensions de l'image générée
                height: "630px",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                gap: "16px",
                color: "white",
                backgroundColor: "#090910",
                opacity: "1",
            }}
        >
            {/* Image de fond */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${url}/og.png)`, // Remplacez par l'URL appropriée
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.5, // Ajustez l'opacité selon vos besoins
                }}
            ></div>

            {/* Contenu */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start", // Utilisation de "flex-start" au lieu de "start"
                    alignItems: "flex-start", // Utilisation de "flex-start" au lieu de "start"
                    height: "100%",
                    flex: 1,
                    padding: "24px 16px",
                    gap: "16px",
                }}
            >
                <p
                    style={{
                        fontFamily: "Space Grotesk",
                        fontSize: "48px",
                        fontWeight: "bold",
                        margin: 0,
                    }}
                >
                    Studio-dev
                </p>
                <p style={{ fontSize: "18px", margin: 0, marginTop: "12px" }}>
                    {new Date(post.publishedAt).toLocaleDateString()}
                </p>
                <p style={{ fontSize: "48px", margin: 0, marginTop: "0" }}>
                    {post.title}
                </p>
            </div>
        </div>
    );
};
