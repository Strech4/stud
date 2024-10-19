import { Rocket, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import HostingImage from "@/public/hosting.png";
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';

export const HostingSection = () => {
    return (
        <div
            className='grid grid-cols-12 w-full px-5 my-24 gap-5 scroll-mt-24'
            id='hosting'
        >
            <div className='col-span-12 md:col-span-6 space-y-5 justify-left items-center'>
                <h1 className=' text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter'>
                    Performance assurée, hébergement sur mesure
                </h1>
                <p className='max-w-2xl text-lg sm:text-lg md:text-xl lg:text-2xl text-muted-foreground'>
                    Assurez la stabilité de n'importe lequel de vos projets web grâce à un hébergement adapté, Une infrastructure robuste pour garantir des performances optimales. Offrez à vos idées le support qu'elles méritent.
                </p>
                <Link
                    className={cn(buttonVariants({
                        variant: "outline"
                    }))}
                    href="/contact"
                >
                    Prendre Contact
                </Link>
            </div>

            <div className='grid grid-cols-12 col-span-12 md:col-span-6 gap-5'>

                <div className='col-span-12 flex p-5 bg-background shadow-xl border rounded-xl space-x-2 max-w-lg ml-auto'>
                    <div>
                        <Rocket className='size-8' />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-xl font-semibold'>
                            Hébergement
                        </h1>
                        <p className='py-2 text-base md:text-lg text-muted-foreground'>
                            Flexible pour tous les sites, quels que soient leur taille ou leur complexité, offrant une solution efficace pour chaque besoin.
                        </p>
                    </div>
                </div>

                <div className='col-span-12 flex p-5 bg-background shadow-xl border rounded-xl space-x-2 max-w-lg ml-auto'>
                    <div>
                        <ShieldCheck className='size-8' />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-xl font-semibold'>
                            Sécurité
                        </h1>
                        <p className='py-2 text-base md:text-lg text-muted-foreground'>
                            Sécurité maximale pour votre site web grâce à notre hébergement, protégeant ansi vos données comme il le faudrais
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}
