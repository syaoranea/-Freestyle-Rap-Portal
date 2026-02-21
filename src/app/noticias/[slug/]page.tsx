import { news } from "@/types/mock";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface Props {
    params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const article = news.find((n) => n.slug === params.slug);
    if (!article) return { title: "Artigo não encontrado" };

    return {
        title: `${article.title} | Batalha de Rima`,
        description: article.seoDescription,
        openGraph: {
            title: article.title,
            description: article.excerpt,
            images: [article.coverImage],
            type: "article",
            publishedTime: article.createdAt,
            authors: [article.author],
        },
    };
}

export default function NewsArticlePage({ params }: Props) {
    const article = news.find((n) => n.slug === params.slug);
    if (!article) notFound();

    // Structured Data (JSON-LD)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": article.title,
        "image": [article.coverImage],
        "datePublished": article.createdAt,
        "author": [{
            "@type": "Person",
            "name": article.author
        }]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />
            <main className="flex-1 py-12">
                <article className="container mx-auto px-4 max-w-4xl">
                    {/* Breadcrumb */}
                    <nav className="flex text-xs uppercase font-bold tracking-widest text-zinc-500 mb-8 gap-2">
                        <Link href="/" className="hover:text-highlight">Home</Link>
                        <span>/</span>
                        <Link href="/noticias" className="hover:text-highlight">Notícias</Link>
                        <span>/</span>
                        <span className="text-accent truncate">{article.title}</span>
                    </nav>

                    <header className="mb-12">
                        <div className="flex gap-4 mb-4">
                            <span className="bg-highlight text-black px-3 py-1 text-[10px] font-extrabold uppercase">
                                {article.category}
                            </span>
                            <span className="text-zinc-500 text-[10px] font-bold uppercase self-center">
                                Por {article.author} • {new Date(article.createdAt).toLocaleDateString('pt-BR')}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-tight mb-8">
                            {article.title}
                        </h1>
                        <div className="relative aspect-video w-full border-4 border-muted overflow-hidden">
                            <Image src={article.coverImage} alt={article.title} fill className="object-cover" priority />
                        </div>
                    </header>

                    <div
                        className="prose prose-invert prose-zinc max-w-none text-zinc-300 leading-relaxed text-lg"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />

                    <div className="mt-16 pt-8 border-t border-border">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {article.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-muted border border-border text-[10px] font-bold uppercase transition-colors hover:border-highlight cursor-pointer">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
