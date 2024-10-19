import { Code, Code2, FileTextIcon, Share2Icon, User } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { BorderBeam } from '../uicomponents/border-beam'
import { Skeleton } from '../ui/skeleton'
import { BentoCard, BentoGrid } from '../uicomponents/bento-grid'
import { buttonVariants } from '../ui/button'
import { Icons } from '../base/icons'
import { Techno } from './Techno'
import { Compare } from '../uicomponents/compare'

export const ComponentsSection = () => {

    const features = [
        {
            Icon: User,
            name: "Pour les développeurs",
            description: "Crée pour partager mes composants avec d'autres développeurs. Pour simplifier votre développement",
            secondDesc: "",
            className: "col-span-3 lg:col-span-1",
            background: (
                <div className="p-3 grid grid-cols-2 gap-2 absolute transform translate-x-1/2 right-1/2 top-4 w-[100%] h-full transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]">
                    <Compare
                        firstImage="https://assets.aceternity.com/code-problem.png"
                        secondImage="https://assets.aceternity.com/code-solution.png"
                        firstImageClassName="object-cover object-left-top"
                        secondImageClassname="object-cover object-left-top"
                        className=""
                        slideMode="hover"
                    />
                </div>
            )
        },
        {
            Icon: Code2,
            name: "Composants Next.js",
            description: "Profitez de composants Next.js prêts à l'utilisation, facilement intégrables grâce à un simple copier-coller.",
            secondDesc: "",
            className: "col-span-3 lg:col-span-1",
            background: (
                <div className="-z-20 absolute translate-x-1/2 right-1/2 top-4 h-[300px] w-[100%] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105">
                    <Techno className='border-none' />
                </div>
            )
        },
        {
            Icon: FileTextIcon,
            name: "Title",
            description: "Here sub text description",
            secondDesc: "",
            className: "col-span-3 lg:col-span-1",
            background: (
                <div className="p-3 grid grid-cols-2 gap-2 absolute translate-x-1/2 right-1/2 top-4 w-[100%] transition-all duration-300 ease-out">

                </div>
            )
        },
    ];

    return (
        <div
            className='w-full grid grid-cols-12 gap-5 my-10 relative scroll-mt-24'
            id='template'
        >
            <div className='col-span-12 flex flex-col justify-center space-y-5 px-5 mt-5'>
                <h1 className='relative border max-w-3xl mx-auto text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-center '>
                    Ma bibliotheque de  composants
                    <span className='absolute -top-1 -left-1 size-2 bg-black rounded-sm'></span>
                    <span className='absolute -bottom-1 -left-1 size-2 bg-black rounded-sm'></span>
                    <span className='absolute -top-1 -right-1 size-2 bg-black rounded-sm'></span>
                    <span className='absolute -bottom-1 -right-1 size-2 bg-black rounded-sm'></span>
                    <BorderBeam />
                </h1>
                <p className='mx-auto text-center max-w-4xl text-lg sm:text-lg md:text-xl lg:text-2xl text-muted-foreground'>
                    Découvrez mes composants créés avec Next.js, Framer Motion et TailwindCSS. Intégrez-les facilement pour des interfaces modernes et dynamiques !
                </p>
                <div className='w-fit mx-auto'>
                    <Link
                        href="/components"
                        className={cn(
                            buttonVariants({
                                variant: "default"
                            })
                        )}
                    >
                        Explorer les composants
                    </Link>
                </div>
            </div>
            <div className='col-span-12'>
                <BentoGrid>
                    {features.map((feature, idx) => (
                        <BentoCard key={idx} {...feature} />
                    ))}
                </BentoGrid>
            </div>
        </div>
    )
}
