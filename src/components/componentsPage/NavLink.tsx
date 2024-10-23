"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import { SidebarMenuSubButton } from "../ui/sidebar";

export const SideNavLink = ({ children, href, className }: PropsWithChildren<{ href: string, className?: string }>) => {

    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <SidebarMenuSubButton
            className={cn(
                isActive ? 'text-primary bg-sidebar-accent' : '',
                className
            )}
            asChild
        >
            <a href={href}>{children}</a>
        </SidebarMenuSubButton>
    )
}