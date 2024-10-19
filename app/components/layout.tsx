import { ComponentsNavigation } from '@/components/componentsPage/ComponentsNavigation'
import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <ComponentsNavigation>
            {children}
        </ComponentsNavigation>
    )
}
