import { getPostByCategorie } from '@/lib/post-helper'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { PropsWithChildren } from 'react'
import { SideNavLink } from './SideNavLink'

export const SideNav = async () => {

    const startPost = await getPostByCategorie("start")
    const componentsPost = await getPostByCategorie("component")

    return (
        <div className='px-4 lg:px-6 flex flex-col space-y-2'>
            <div className='flex flex-col space-y-1'>
                <p className='text-base font-semibold'>Getting Started</p>
                {startPost.map((post) => (
                    <SideNavLink key={post.slug} href={`/components/${post.slug}`}>
                        {post.title}
                    </SideNavLink>
                ))}
            </div>
            <div className='flex flex-col space-y-1'>
                <p className='text-base font-semibold'>Components</p>
                {componentsPost.map((post) => (
                    <SideNavLink key={post.slug} href={`/components/${post.slug}`}>
                        {post.title}
                    </SideNavLink>
                ))}
            </div>
        </div>
    )
}