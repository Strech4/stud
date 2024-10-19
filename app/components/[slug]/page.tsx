import { Mdx } from '@/lib/features/mdx/Mdx';
import { getPost } from '@/lib/post-helper';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react'

export const generateMetadata = async (props: { params: { slug: string } }): Promise<Metadata> => {

    const post = await getPost(props.params.slug);
    if (!post) {
        return {
            title: "404 - Page introuvable",
            description: "Page introuvable",
        }
    }

    return {
        title: post.title,
        description: post.description
    }
}

export default async function RoutePage(props: { params: { slug: string } }) {

    const post = await getPost(props.params.slug);
    if (!post) {
        notFound()
    }

    return (
        <section className='flex flex-col'>
            <div className="flex justify-between text-xs text-muted-foreground border-b py-1 mb-10">
                <h1>{post.title}</h1>
                <p>
                    Last update: {new Date(post.publishedAt).toLocaleDateString()}
                </p>
            </div>
            <div className='prose prose-sm lg:prose-lg'>
                <Mdx>
                    {post.content}
                </Mdx>
            </div>
        </section >
    )
}
