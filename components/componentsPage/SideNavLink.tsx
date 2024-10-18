"use client"

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

export const SideNavLink = ({ children, href, className }: PropsWithChildren<{ href: string, className?: string }>) => {

    const pathname = usePathname();
    const isActive = pathname === href;


    return (
        <Link
            href={href}
            className={cn(
                'text-muted-foreground hover:pl-2 transition-all',
                isActive ? 'text-primary pl-2' : ' hover:text-black', // Classe spéciale si le lien est actif
                className
            )}
        >
            {children}
        </Link>
    )
}