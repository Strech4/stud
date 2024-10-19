import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "/public/logo.svg"
import { SiteConfig } from '@/lib/SiteConfig'
export const Footer = () => {
    return (
        <footer
            className='pl-5 md:pl-10 pr-5 mt-10 pt-16 pb-4 border-t grid grid-cols-12 gap-5 backdrop-blur-md'
        >
            <div className='col-span-12 md:col-span-5 flex space-x-3 justify-center md:justify-normal'>
                <Image
                    src={Logo}
                    alt='Studio-Dev Logo'
                    className='size-8'
                />
                <Link href="/" className='font-semibold text-2xl'>
                    {SiteConfig.title}
                </Link>
            </div>
            <div className='col-span-12 md:col-span-7 flex'>
                <div className='space-y-3 flex flex-col flex-1'>
                    <Link
                        className='text-muted-foreground text-base hover:text-primary transition-colors'
                        href="/"
                    >
                        Accueil
                    </Link>
                </div>
                <div className='space-y-3 flex flex-col flex-1'>
                    <Link
                        className='text-muted-foreground text-base hover:text-primary transition-colors'
                        href="#hosting"
                    >
                        Hébergement
                    </Link>
                    <Link
                        className='text-muted-foreground text-base hover:text-primary transition-colors'
                        href="/contact"
                    >
                        Prendre contact
                    </Link>
                </div>
                <div className='space-y-3 flex flex-col flex-1'>
                    <Link
                        className='text-muted-foreground text-base hover:text-primary transition-colors'
                        href="/"
                    >
                        Composants
                    </Link>
                    <Link
                        className='text-muted-foreground text-base hover:text-primary transition-colors'
                        href="/"
                    >
                        Mentions Légale
                    </Link>
                </div>
            </div>
            <div className='col-span-12 md:col-span-6 mt-7 md:text-left text-center'>
                <h2 className='text-xl font-semibold'>
                    Développeur Full-Stack
                </h2>
                <p className='text-muted-foreground text-sm'>
                    Conception sur mesure de sites vitrine, portfolios et e-commerce. Hébergement adapté à vos besoins pour assurer une présence en ligne optimale
                </p>
            </div>
            <div className='col-span-12 md:col-span-6 flex justify-center items-end'>
                <p className='text-muted-foreground text-sm'>
                    © Studio-dev. Tous droits réservés
                </p>
            </div>
        </footer>
    )
}
