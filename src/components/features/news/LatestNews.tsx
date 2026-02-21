import Link from 'next/link';
import Image from 'next/image';
import { news } from '@/types/mock';

export default function LatestNews() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="text-accent text-sm font-bold tracking-[0.2em] mb-2 uppercase">Fique por dentro</h2>
                        <h3 className="text-4xl md:text-5xl font-black italic">CONTEÚDO <span className="text-highlight">PESADO</span></h3>
                    </div>
                    <Link href="/noticias" className="text-sm font-bold uppercase tracking-widest border-b-2 border-highlight hover:text-highlight transition-all pb-1">
                        Ver todas
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Main Featured News */}
                    <Link href={`/noticias/${news[0].slug}`} className="group relative aspect-[16/9] overflow-hidden bg-muted">
                        <Image
                            src={news[0].coverImage}
                            alt={news[0].title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 p-8">
                            <span className="bg-highlight text-black px-3 py-1 text-xs font-bold uppercase mb-4 inline-block">
                                {news[0].category}
                            </span>
                            <h4 className="text-3xl md:text-4xl font-black group-hover:text-highlight transition-colors leading-tight mb-4">
                                {news[0].title}
                            </h4>
                            <p className="text-zinc-300 text-sm md:text-base max-w-lg line-clamp-2">
                                {news[0].excerpt}
                            </p>
                        </div>
                    </Link>

                    {/* Sidebar News */}
                    <div className="flex flex-col gap-6">
                        {/* Using a few more mock news if available, or just repeating for layout demo */}
                        {[1, 2, 3].map((i) => (
                            <Link key={i} href="#" className="flex gap-4 group">
                                <div className="relative h-24 w-32 flex-shrink-0 overflow-hidden bg-muted">
                                    <Image
                                        src={`https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&w=300&q=80&sig=${i}`}
                                        alt="News thumbnail"
                                        fill
                                        className="object-cover transition-transform group-hover:scale-110"
                                    />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <span className="text-accent text-xs font-bold uppercase mb-1 tracking-tighter">Eventos</span>
                                    <h5 className="font-bold text-lg group-hover:text-highlight transition-colors line-clamp-2 leading-snug">
                                        Resumo da Batalha do Tanque: Novos talentos surpreendem a plateia
                                    </h5>
                                    <span className="text-zinc-500 text-xs mt-2">20 Fev, 2026</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
