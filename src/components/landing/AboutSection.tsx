import React from 'react'
import WordRotate from '../uicomponents/word-rotate'
import { Techno } from './Techno'

export const AboutSection = () => {
    return (
        <div
            className='grid grid-cols-12 w-full px-5 mt-10 md:mt-0 gap-5 scroll-mt-24'
            id='about'
        >

            <Techno />

            <div className='col-span-12 md:col-span-7 flex flex-col space-y-5 justify-center items-left md:p-5'>
                <div className='max-w-2xl flex flex-col text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter'>
                    <h1>
                        Création sur mesure de projet web
                    </h1>
                    <WordRotate
                        className=""
                        words={["Vitrine", "E-commerce", "Portfolio",]}
                    />
                </div>
                <p className='text-lg sm:text-lg md:text-xl lg:text-2xl text-muted-foreground'>
                    Que ce soit pour créer, repenser ou maintenir votre site web, je suis là pour vous. Que vous ayez besoin d'une vitrine élégante, d'un portfolio pro ou d'une boutique en ligne dynamique, Studio-dev transforme vos projets en réalité sur le web.
                </p>
            </div>

        </div>
    )
}
