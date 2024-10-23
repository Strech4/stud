import * as React from "react"
import { GalleryVerticalEnd } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarRail,
} from "@/components/ui/sidebar"
import { getPostByCategorie } from "@/lib/post-helper"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { SideNavLink } from "./NavLink"



export async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

    const startPosts = await getPostByCategorie("start")
    const categoriesPosts = await getPostByCategorie("component")

    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="/">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
                                    <Image
                                        src="/logo.svg"
                                        alt="Studio-Dev Logo"
                                        className="size-8"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <div className="flex flex-col gap-0.5 leading-none text-lg">
                                    <span className="font-semibold">Studio-dev</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>

                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <p className="font-medium cursor-default">
                                    Getting Started
                                </p>
                            </SidebarMenuButton>
                            {startPosts.length ? (
                                <SidebarMenuSub>
                                    {startPosts.map((item) => (
                                        <SidebarMenuSubItem key={item.slug}>
                                            <SideNavLink href={`/components/${item.slug}`}>
                                                {item.title}
                                            </SideNavLink>
                                        </SidebarMenuSubItem>
                                    ))}
                                </SidebarMenuSub>
                            ) : null}
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <p className="font-medium cursor-default">
                                    Components
                                </p>
                            </SidebarMenuButton>
                            {categoriesPosts.length ? (
                                <SidebarMenuSub>
                                    {categoriesPosts.map((item) => (
                                        <SidebarMenuSubItem key={item.slug}>
                                            <SideNavLink href={`/components/${item.slug}`}>
                                                {item.title}
                                            </SideNavLink>
                                        </SidebarMenuSubItem>
                                    ))}
                                </SidebarMenuSub>
                            ) : null}
                        </SidebarMenuItem>

                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}
