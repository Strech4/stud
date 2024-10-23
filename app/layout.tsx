import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteConfig } from "@/lib/SiteConfig";
import NextTopLoader from 'nextjs-toploader';

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: SiteConfig.title,
    description: SiteConfig.description,
};

// Layout "/"
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className="scroll-smooth">
            <body className={cn(
                'bg-background antialiased',
                geistSans.className
            )}>
                <NextTopLoader
                    showSpinner={false}
                    color="hsl(var(--primary))"
                />
                <div className="flex min-h-dvh flex-col">
                    <main className="flex-1">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
