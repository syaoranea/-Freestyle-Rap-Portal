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

    const relatedNews = news.filter(n => n.category === article.category && n.slug !== article.slug).slice(0, 3);

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
                    <nav className="flex items-center text-[10px] uppercase font-black tracking-[0.2em] text-zinc-500 mb-10 gap-2 border-b border-border pb-4">
                        <Link href="/" className="hover:text-highlight transition-colors">Home</Link>
                        <span className="text-zinc-700">/</span>
                        <Link href="/noticias" className="hover:text-highlight transition-colors">Notícias</Link>
                        <span className="text-zinc-700">/</span>
                        <span className="text-accent truncate max-w-[200px] md:max-w-none">{article.title}</span>
                    </nav>

                    <header className="mb-16">
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <span className="bg-highlight text-black px-4 py-1 text-[10px] font-black uppercase tracking-widest">
                                {article.category}
                            </span>
                            <div className="flex items-center gap-2 group">
                                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-[10px] font-black text-white italic">BR</div>
                                <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
                                    Por <span className="text-white group-hover:text-accent transition-colors cursor-pointer">{article.author}</span>
                                </span>
                            </div>
                            <span className="hidden md:inline text-zinc-700 mx-2">•</span>
                            <time className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                                {new Date(article.createdAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                            </time>
                        </div>

                        <h1 className="text-4xl md:text-7xl font-black uppercase italic leading-[0.9] mb-10 tracking-tighter">
                            {article.title}
                        </h1>

                        <div className="relative aspect-[21/9] w-full border-b-8 border-accent overflow-hidden group">
                            <Image src={article.coverImage} alt={article.title} fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" priority />
                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                        </div>
                    </header>

                    <div
                        className="prose prose-invert prose-zinc max-w-none text-zinc-300 leading-relaxed text-lg lg:text-xl selection:bg-highlight selection:text-black mb-16
                        prose-headings:uppercase prose-headings:font-black prose-headings:italic prose-h2:text-4xl prose-h2:tracking-tighter prose-h2:border-l-4 prose-h2:border-accent prose-h2:pl-6 prose-h2:mb-8
                        prose-p:mb-6 prose-blockquote:border-accent prose-blockquote:bg-muted/30 prose-blockquote:py-2 prose-blockquote:px-8 prose-blockquote:italic"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />

                    {/* Social Share Placeholder */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 py-8 border-y border-border mb-20">
                        <div className="flex gap-4">
                            <button className="h-10 px-6 bg-[#1877F2] text-white text-[10px] font-black uppercase tracking-widest hover:brightness-110 transition-all">Compartilhar no Facebook</button>
                            <button className="h-10 px-6 bg-[#1DA1F2] text-white text-[10px] font-black uppercase tracking-widest hover:brightness-110 transition-all">Twitter / X</button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {article.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-muted border border-border text-[10px] font-bold uppercase transition-colors hover:border-highlight cursor-pointer">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Related Content */}
                    {relatedNews.length > 0 && (
                        <section className="mt-20">
                            <h3 className="text-2xl font-black uppercase italic mb-8 flex items-center gap-4">
                                <span className="w-8 h-1 bg-highlight"></span>
                                Leia Também
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {relatedNews.map((item) => (
                                    <Link key={item.id} href={`/noticias/${item.slug}`} className="group flex flex-col gap-4">
                                        <div className="relative aspect-video overflow-hidden border border-border group-hover:border-highlight transition-all">
                                            <Image src={item.coverImage} alt={item.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-black text-accent uppercase tracking-widest mb-1 block">{item.category}</span>
                                            <h4 className="font-bold text-sm group-hover:text-highlight transition-colors line-clamp-2 uppercase leading-snug">
                                                {item.title}
                                            </h4>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}
                </article>
            </main>
            <Footer />
        </>
    );
}
