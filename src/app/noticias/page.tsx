import { news } from "@/types/mock";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
    title: "Notícias | Batalha de Rima",
    description: "As últimas notícias sobre as batalhas de rima, lançamentos de músicas e novidades da cena hip-hop.",
};

export default function NewsListPage() {
    return (
        <>
            <Header />
            <main className="flex-1 py-16">
                <div className="container mx-auto px-4">
                    <header className="mb-16">
                        <h1 className="text-6xl font-black uppercase italic mb-4">Notícias</h1>
                        <p className="text-zinc-400 max-w-xl">Fique por dentro de tudo que rola na cena. Eventos, tretas, lançamentos e rankings.</p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {news.map((item) => (
                            <Link key={item.id} href={`/noticias/${item.slug}`} className="group card-hover flex flex-col h-full bg-card border border-border">
                                <div className="relative aspect-video overflow-hidden">
                                    <Image
                                        src={item.coverImage}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-accent px-3 py-1 text-[10px] font-bold uppercase text-white">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <span className="text-zinc-500 text-xs font-medium uppercase mb-2">
                                        {new Date(item.createdAt).toLocaleDateString('pt-BR')}
                                    </span>
                                    <h2 className="text-2xl font-bold mb-4 group-hover:text-highlight transition-colors flex-1">
                                        {item.title}
                                    </h2>
                                    <p className="text-zinc-400 text-sm line-clamp-3 mb-6">
                                        {item.excerpt}
                                    </p>
                                    <span className="text-highlight text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                        Ler matéria <span className="text-lg">→</span>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
