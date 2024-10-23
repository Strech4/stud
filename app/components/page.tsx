import { getPosts } from '@/lib/post-helper'
import Link from 'next/link';
import React from 'react'

export default async function page() {
    const filenames = await getPosts();
    return (
        <ul>
            {filenames.map((fileName) => (
                <Link key={fileName.slug} href={`/components/${fileName.slug}`}>
                    <li>{fileName.title}</li>
                </Link>
            ))}
        </ul>
    )
}
