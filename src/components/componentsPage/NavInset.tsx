"use client"
import React from 'react'
import { SidebarTrigger } from '../ui/sidebar'
import { Separator } from '../ui/separator'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export const NavInset = () => {

    const pathname = usePathname()


    const data = [
        { name: 'Home', href: '/' },
        { name: 'Components', href: '/components' },
        { name: 'Contact', href: '/contact' },
    ]

    return (
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-3">
            <div className='flex items-center gap-2 px-3'>
                <SidebarTrigger />
                <Separator orientation="vertical" className="mr-2 h-4" />
            </div>
            <div className='flex ml-auto gap-5'>
                {data.map(item => (
                    <Link
                        href={item.href}
                        key={item.name}
                        className={cn(
                            "text-muted-foreground",
                            pathname === item.href ? 'text-black' : ""
                        )}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </header>
    )
}
