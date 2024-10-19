"use client"
import React, { ReactNode, useState } from 'react'
import Logo from "/public/logo.svg"
import Image from 'next/image'
import { buttonVariants } from '../ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { badgeVariants } from '../ui/badge'
import { SiteConfig } from '@/lib/SiteConfig'
import { useMotionValueEvent, useScroll, motion } from 'framer-motion';


const Links = ({
    name,
    link,
    tag,
}: {
    name: string;
    link: string;
    tag: ReactNode;
}) => {
    return (
        <Link
            href={link}
            className='relative text-muted-foreground text-sm hover:text-primary transition-colors duration-100'
        >
            {name}
            {tag}
        </Link>
    )
}

const LinksList = [
    {
        name: "Accueil",
        link: "/",
        tag: null,
    },
    {
        name: "Hébergement",
        link: "#hosting",
        tag: null,
    },
    {
        name: "Composants",
        link: "/components",
        tag: (
            <div className={cn(
                badgeVariants({ variant: "outline" }),
                'absolute -top-4 -right-8 -z-10 rotate-6',
                'text-black text-xs'
            )}>
                New
            </div>
        )
    },
]

export const Navigation = () => {

    const [hidden, setHidden] = useState(false)
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous: any = scrollY.getPrevious();
        if (latest > previous && latest > 50) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-x-0 z-50 flex h-16 w-screen shadow bg-background pl-5 md:pl-10 pr-5 justify-between items-center"
        >
            <div className='flex justify-center items-center space-x-2'>
                <Image
                    src={Logo}
                    alt='Studio-Dev Logo'
                    className='size-7'
                />
                <Link href="/" className='font-semibold'>
                    {SiteConfig.title}
                </Link>
            </div>
            <nav className='hidden md:flex space-x-5'>
                {LinksList.map((item, i) => (
                    <Links key={i} {...item} />
                ))}
            </nav>
            <div className='flex justify-center items-center space-x-10'>
                <Link
                    className={cn(buttonVariants({ variant: "outline" }))}
                    href="/contact"
                >
                    Contact
                </Link>
            </div>
        </motion.header>
    )
}
