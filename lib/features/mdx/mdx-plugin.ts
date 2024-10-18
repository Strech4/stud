import type { PluggableList } from "unified";
import rehypeShiki from "@shikijs/rehype";

const shikiPlugin = [
    rehypeShiki,
    {
        theme: "github-dark"
    },
] satisfies PluggableList[number];

export const rehypePlugins = [shikiPlugin] satisfies PluggableList