import path from "path";
import fs from "fs/promises";
import { z } from "zod";
import matter from "gray-matter";


const postDirectory = path.join(process.cwd(), "content");

const PostSchema = z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.string(),
    published: z.boolean().optional().default(false),
    categorie: z.string(),
});

export type Post = z.infer<typeof PostSchema> & {
    slug: string;
    content: string;
};

export const getPosts = async () => {
    const files = await fs.readdir(postDirectory);
    const fileNames = files.filter((f) => f.endsWith(".mdx"));

    const posts: Post[] = []
    for await (const fileName of fileNames) {
        const fullPath = path.join(postDirectory, fileName);
        const fileContent = await fs.readFile(fullPath, "utf-8");
        const frontMatter = matter(fileContent);

        const safeData = PostSchema.safeParse(frontMatter.data);
        if (!safeData.success) {
            console.error(`Failed to parse ${fileName}`);
            safeData.error.issues.forEach((issue) => {
                console.error(` - ${issue.path.join(' -> ')}: ${issue.message}`);
            });
            continue;
        }

        if (!safeData.data.published && process.env.NODE_ENV !== "development") {
            continue;
        }

        posts.push({
            ...safeData.data,
            slug: fileName.replace(/^\d+-/, "").replace(".mdx", ""),
            content: frontMatter.content,
        })
    }
    return posts
}


export const getPost = async (slug: string) => {
    const posts = await getPosts();
    return posts.find((post) => post.slug === slug);
}

export const getPostByCategorie = async (categorie: string) => {
    const posts = await getPosts();
    return posts.filter((post) => post.categorie === categorie);
}