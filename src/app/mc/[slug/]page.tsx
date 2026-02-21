import { mcs } from "@/types/mock";
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
    const mc = mcs.find((m) => m.slug === params.slug);
    if (!mc) return { title: "MC Não Encontrado" };

    return {
        title: `${mc.stageName} | Perfil do MC | Batalha de Rima`,
        description: `Conheça ${mc.stageName}, MC de ${mc.city}. Veja estatísticas, vitórias, vídeos das melhores rimas e biografia completa.`,
        openGraph: {
            title: `${mc.stageName} - Estatísticas e Vídeos`,
            images: [mc.photoUrl],
        },
    };
}

export default function MCPage({ params }: Props) {
    const mc = mcs.find((m) => m.slug === params.slug);
    if (!mc) notFound();

    return (
        <>
            <Header />
            <main className="flex-1">
                {/* Profile Header */}
                <section className="relative pt-32 pb-24 overflow-hidden">
                    <div className="absolute inset-0 grayscale opacity-30 bg-cover bg-center" style={{ backgroundImage: `url(${mc.photoUrl})` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent" />

                    <div className="container relative mx-auto px-4">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-highlight rounded-none blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative w-64 h-64 md:w-80 md:h-80 border-4 border-highlight overflow-hidden">
                                    <Image src={mc.photoUrl} alt={mc.stageName} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute bottom-0 left-0 bg-accent text-white px-8 py-3 font-black italic text-3xl skew-x-[-12deg] -translate-x-2 translate-y-2 border-r-4 border-highlight">
                                        #{mc.rank}
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 text-center md:text-left">
                                <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 px-3 py-1 mb-6">
                                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                                    <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-accent">Top {mc.rank} Nacional</span>
                                </div>
                                <h1 className="text-7xl md:text-9xl font-black uppercase italic leading-[0.8] mb-6 tracking-tighter">
                                    {mc.stageName}
                                </h1>
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10">
                                    <span className="bg-white/5 backdrop-blur-md px-6 py-2 text-sm font-bold uppercase tracking-widest border border-white/10">
                                        <span className="text-highlight mr-2">ORIGEM:</span> {mc.city}, {mc.state}
                                    </span>
                                    <span className="text-zinc-500 font-bold uppercase text-xs tracking-[0.2em] border-l border-zinc-700 pl-4">
                                        Freestyle Rap Elite
                                    </span>
                                </div>

                                <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto md:mx-0">
                                    <div className="bg-card/50 border border-border p-6 backdrop-blur-sm card-hover">
                                        <span className="block text-accent font-black text-4xl mb-1 italic tracking-tighter">{mc.stats.wins}</span>
                                        <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Vitórias</span>
                                    </div>
                                    <div className="bg-card/50 border border-highlight/50 p-6 backdrop-blur-sm card-hover">
                                        <span className="block text-highlight font-black text-4xl mb-1 italic tracking-tighter">{mc.stats.titles}</span>
                                        <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Títulos</span>
                                    </div>
                                    <div className="bg-card/50 border border-border p-6 backdrop-blur-sm card-hover">
                                        <span className="block text-white font-black text-4xl mb-1 italic tracking-tighter">{mc.stats.losses}</span>
                                        <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Derrotas</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Sections */}
                <section className="py-24 bg-background border-t border-border/50">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                            {/* Left Column: Bio & Socials */}
                            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                                <div className="mb-12">
                                    <h2 className="text-3xl font-black uppercase mb-8 italic flex items-center gap-4">
                                        <span className="w-12 h-1 bg-accent"></span>
                                        Biografia
                                    </h2>
                                    <div className="text-zinc-400 leading-relaxed text-lg space-y-4">
                                        {mc.bio}
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <h3 className="font-bold text-xs uppercase tracking-[0.3em] text-zinc-500 border-b border-border pb-2">Onde Acompanhar</h3>
                                    <div className="flex flex-wrap gap-4">
                                        {mc.socials.instagram && (
                                            <a href={mc.socials.instagram} target="_blank" className="flex-1 min-w-[140px] bg-muted hover:bg-accent hover:text-white border border-border px-6 py-4 text-xs font-bold uppercase tracking-widest text-center transition-all">
                                                Instagram
                                            </a>
                                        )}
                                        {mc.socials.youtube && (
                                            <a href={mc.socials.youtube} target="_blank" className="flex-1 min-w-[140px] bg-muted hover:bg-red-600 hover:text-white border border-border px-6 py-4 text-xs font-bold uppercase tracking-widest text-center transition-all">
                                                YouTube
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Spotify Section */}
                                {mc.slug === 'mc-kant' && (
                                    <div className="mt-16">
                                        <h3 className="font-bold text-xs uppercase tracking-[0.3em] text-highlight border-b border-border pb-2 mb-6 text-center lg:text-left">Top Tracks no Spotify</h3>
                                        <div className="rounded-none overflow-hidden bg-zinc-900 border border-green-500/30">
                                            <iframe
                                                src="https://open.spotify.com/embed/artist/3y9939DRE1vO6zSyr3kXqM?utm_source=generator&theme=0"
                                                width="100%"
                                                height="352"
                                                frameBorder="0"
                                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                                loading="lazy"
                                                className="grayscale hover:grayscale-0 transition-all duration-700"
                                            ></iframe>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Right Column: Videos & More */}
                            <div className="lg:col-span-8">
                                <div className="mb-20">
                                    <h2 className="text-3xl font-black uppercase mb-12 italic flex items-center gap-4">
                                        <span className="w-12 h-1 bg-highlight"></span>
                                        Melhores Momentos
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {mc.videos.map((vidId, index) => (
                                            <div key={vidId} className={`group relative ${index === 0 ? 'md:col-span-2' : ''}`}>
                                                <div className="aspect-video bg-muted border-2 border-border group-hover:border-highlight transition-all overflow-hidden relative">
                                                    <iframe
                                                        width="100%"
                                                        height="100%"
                                                        src={`https://www.youtube.com/embed/${vidId}?autoplay=0&showinfo=0&controls=1`}
                                                        title={`${mc.stageName} Best Moments`}
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                        className="z-10 relative saturate-[0.8] group-hover:saturate-100 transition-all"
                                                    ></iframe>
                                                    <div className="absolute inset-x-0 top-0 h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-20"></div>
                                                </div>
                                                {index === 0 && (
                                                    <div className="mt-4 flex justify-between items-center">
                                                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent font-bold">Vídeo em Destaque</span>
                                                        <span className="text-zinc-500 text-[10px] uppercase font-bold">Final Nacional</span>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Placeholder for History/Achievements */}
                                <div className="bg-card border-l-8 border-highlight p-12">
                                    <h3 className="text-2xl font-black uppercase italic mb-6">Histórico de Conquistas</h3>
                                    <ul className="space-y-4">
                                        <li className="flex gap-4 items-start">
                                            <span className="text-highlight font-black">2025</span>
                                            <p className="text-zinc-400"><span className="text-white font-bold uppercase text-xs">Campeão:</span> Final Nacional de Batalha de Rima em BH.</p>
                                        </li>
                                        <li className="flex gap-4 items-start">
                                            <span className="text-highlight font-black">2024</span>
                                            <p className="text-zinc-400"><span className="text-white font-bold uppercase text-xs">Vencedor:</span> Edição Comemorativa Batalha da Aldeia #400.</p>
                                        </li>
                                        <li className="flex gap-4 items-start">
                                            <span className="text-highlight font-black">2023</span>
                                            <p className="text-zinc-400"><span className="text-white font-bold uppercase text-xs">MVP:</span> Maior número de vitórias no semestre (SP).</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
