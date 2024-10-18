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
                width: "1200px",  // Assurez-vous que ces dimensions correspondent bien à l'image générée
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
            {/* Background Image */}
            <img
                src={`${url}/og.png`}
                alt="bg"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            />

            {/* Content */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "start",
                    height: "100%",
                    flex: 1,
                    padding: "24px 16px",
                    gap: "16px",
                }}
            >
                <p
                    style={{
                        fontFamily: "Space Grotesk",
                        fontSize: "24px",
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
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginTop: "auto",
                    }}
                >
                    <img
                        alt="x"
                        src={"https://melvynx.com/images/my-face.png"}
                        width={64}
                        height={64}
                        style={{ borderRadius: "50%" }} // Arrondi pour l'image de profil
                    />
                    <p style={{ fontSize: "32px", margin: 0 }}>Melvynx</p>
                </div>
            </div>
        </div>
    );
};
