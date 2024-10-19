import { Mdx } from '@/lib/features/mdx/Mdx';
import { getPost, getPosts } from '@/lib/post-helper'; // Assure-toi que getPosts est disponible pour récupérer tous les articles
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';

// Pour forcer le mode statique avec une réactualisation ISR toutes les 60 secondes
export const revalidate = 60;

// Génération des chemins statiques pour chaque article
export async function getStaticPaths() {
    const posts = await getPosts(); // Récupère tous les posts
    const paths = posts.map((post) => ({
        params: { slug: post.slug }, // Génère un chemin pour chaque article avec son slug
    }));

    return { paths, fallback: 'blocking' }; // ISR : si la page n'existe pas, elle sera générée à la demande
}

// Génération des props statiques pour chaque article
export async function getStaticProps({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug); // Récupère le post correspondant au slug

    if (!post) {
        return { notFound: true }; // Renvoie une 404 si le post n'existe pas
    }

    return {
        props: { post }, // Envoie les données du post en tant que props
        revalidate: 60,  // Réactualisation ISR
    };
}

// Génération des métadonnées (title, description) pour chaque article
export const generateMetadata = async (props: { params: { slug: string } }): Promise<Metadata> => {
    const post = await getPost(props.params.slug);

    if (!post) {
        return {
            title: "404 - Page introuvable",
            description: "Page introuvable",
        };
    }

    return {
        title: post.title,
        description: post.description,
    };
};

// Composant de page qui affiche le contenu de l'article
export default function RoutePage({ post }: { post: any }) {
    return (
        <section className='flex flex-col'>
            <div className="flex justify-between text-xs text-muted-foreground border-b py-1 mb-10">
                <h1>{post.title}</h1>
                <p>
                    Last update: {new Date(post.publishedAt).toLocaleDateString()}
                </p>
            </div>
            <div className='prose prose-sm lg:prose-lg'>
                <Mdx>
                    {post.content}
                </Mdx>
            </div>
        </section>
    );
}
