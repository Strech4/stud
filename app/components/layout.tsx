import { ComponentsNavigation } from '@/components/componentsPage/ComponentsNavigation'
import React from 'react'


export const dynamic = "force-static";
export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <ComponentsNavigation>
            {children}
        </ComponentsNavigation>
    )
}
