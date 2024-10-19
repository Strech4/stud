import Link from "next/link"
import {
    Menu,
    Package2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { PropsWithChildren } from "react"
import Logo from "/public/logo.svg"
import Image from "next/image"
import { SideNav } from './SideNav';
export const ComponentsNavigation = async (props: PropsWithChildren) => {
    return (
        <div className="flex flex-col h-full w-full md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] bg-background">
            {/* Sidebar (hidden on mobile) */}
            <div className="hidden md:block">
                <div className="fixed top-0 bottom-0 left-0 z-40 w-[220px] lg:w-[280px] bg-background overflow-y-auto">
                    <div className="flex h-full flex-col gap-2">
                        <div className="flex h-14 items-center px-4 lg:px-6">
                            <Link href="/" className="flex items-center gap-2 font-semibold">
                                <Image
                                    src={Logo}
                                    alt='Studio-Dev Logo'
                                    className='size-6'
                                />
                                <span className="text-lg">Studio-dev</span>
                            </Link>
                        </div>
                        <div className="flex-1">
                            <nav className="grid items-start">
                                <SideNav />
                            </nav>
                        </div>
                        <div className="mt-auto p-4">
                            something
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Content */}
            <div className="flex flex-col h-full">
                <header className="sticky top-0 z-50 flex h-14 items-center gap-4 bg-background px-4 lg:h-[60px] lg:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Basculer le menu de navigation</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col">
                            <nav className="grid gap-2 text-lg font-medium">
                                <Link
                                    href="#"
                                    className="flex items-center gap-2 text-lg font-semibold"
                                >
                                    <Package2 className="h-6 w-6" />
                                    <span>Balbo-Art</span>
                                    <span className="sr-only">Balbo-Art</span>
                                </Link>
                                <SideNav />
                            </nav>
                            <div className="mt-auto">
                                something
                            </div>
                        </SheetContent>
                    </Sheet>
                    <div className="w-full flex-1">
                    </div>
                    <div className="space-x-2 text-muted-foreground">
                        <Link href="/" className="hover:text-black transition-colors">
                            Accueil
                        </Link>
                        <Link href="/components" className="hover:text-black transition-colors">
                            Components
                        </Link>
                        <Link href="/contact" className="hover:text-black transition-colors">
                            Contact
                        </Link>
                    </div>
                </header>
                <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-6 h-full">
                    {props.children}
                </main>
            </div>
        </div>
    )
}
