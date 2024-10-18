import Link from "next/link";

export default async function RoutePage() {

    return (
        <section className='flex min-h-screen flex-col items-center justify-center'>
            <h1 className="text-4xl font-bold text-destructive">404 - Page introuvable</h1>
            <p className="text-lg mt-4">Le post n'existe pas</p>
            <p className="mt-2 text-primary">
                <Link
                    href="/components"
                >
                    Retourner à l'accueil
                </Link>
            </p>
        </section>
    )
}
