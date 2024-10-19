import React from 'react'
import { Button, buttonVariants } from '../ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Block } from '../base/Block'
import HeroImage from './HeroImage'

export const HeroSection = () => {
    return (
        <div
            className='grid grid-cols-12 space-y-5 px-5 md:h-screen justify-center items-center md:pt-0 pt-16'
            id='home'
        >
            <Block
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                className='col-span-12 md:px-5 md:col-span-6 flex flex-col space-y-5 text-center md:text-left'
            >
                <div className='text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-nowrap'>
                    <h1>
                        Solutions et
                    </h1>
                    <h1 className='mx-auto md:mx-0 border border-black relative p-1 pr-2 w-fit'>
                        Conceptions web
                        <span className='absolute -top-1 -left-1 size-2 bg-black rounded-sm'></span>
                        <span className='absolute -bottom-1 -left-1 size-2 bg-black rounded-sm'></span>
                        <span className='absolute -top-1 -right-1 size-2 bg-black rounded-sm'></span>
                        <span className='absolute -bottom-1 -right-1 size-2 bg-black rounded-sm'></span>
                    </h1>
                    <h1>
                        créatives
                    </h1>
                </div>
                <p className='max-w-3xl md:max-w-4xl mx-auto text-lg sm:text-lg md:text-xl lg:text-2xl text-muted-foreground'>
                    Développeur web autodidacte depuis 3 ans, je conçois des sites interactifs avec NextJS, Framer Motion et taillwindcss, alliant performance et design moderne.
                </p>
                <div className='space-x-5 space-y-3'>
                    <Link
                        className={cn(buttonVariants({
                            variant: "default"
                        }))}
                        href="#about"
                    >
                        En savoir plus
                    </Link>
                    <Button variant={"outline"}>
                        Prendre contact
                    </Button>
                </div>
            </Block>
            <HeroImage />
        </div>
    )
}
