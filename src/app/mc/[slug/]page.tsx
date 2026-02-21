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
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 grayscale opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${mc.photoUrl})` }} />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background" />

                    <div className="container relative mx-auto px-4">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="relative w-64 h-64 md:w-80 md:h-80 border-4 border-highlight">
                                <Image src={mc.photoUrl} alt={mc.stageName} fill className="object-cover" />
                                <div className="absolute -bottom-4 -right-4 bg-accent text-white px-6 py-2 font-black italic text-2xl skew-x-[-10deg]">
                                    RANK #{mc.rank}
                                </div>
                            </div>

                            <div className="flex-1 text-center md:text-left">
                                <h1 className="text-6xl md:text-8xl font-black uppercase italic leading-none mb-4">
                                    {mc.stageName}
                                </h1>
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
                                    <span className="bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-widest border border-white/20">
                                        {mc.city}, {mc.state}
                                    </span>
                                    <span className="text-highlight font-bold uppercase text-xs tracking-[0.2em]">
                                        Freestyle Rap Elite
                                    </span>
                                </div>

                                <div className="grid grid-cols-3 gap-8 max-w-md mx-auto md:mx-0 border-y border-border py-6">
                                    <div className="text-center md:text-left">
                                        <span className="block text-accent font-black text-3xl">{mc.stats.wins}</span>
                                        <span className="text-[10px] uppercase font-bold text-zinc-500">Vitórias</span>
                                    </div>
                                    <div className="text-center md:text-left border-x border-border px-4">
                                        <span className="block text-highlight font-black text-3xl">{mc.stats.titles}</span>
                                        <span className="text-[10px] uppercase font-bold text-zinc-500">Títulos</span>
                                    </div>
                                    <div className="text-center md:text-left">
                                        <span className="block text-white font-black text-3xl">{mc.stats.losses}</span>
                                        <span className="text-[10px] uppercase font-bold text-zinc-500">Derrotas</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bio & Media */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                            <div className="lg:col-span-1">
                                <h2 className="text-2xl font-black uppercase mb-6 italic underline decoration-accent underline-offset-8">Biografia</h2>
                                <p className="text-zinc-400 leading-relaxed mb-8">
                                    {mc.bio}
                                </p>
                                <div className="space-y-4">
                                    <h3 className="font-bold text-xs uppercase tracking-widest text-zinc-500">Redes Sociais</h3>
                                    <div className="flex gap-4">
                                        {mc.socials.instagram && <a href={mc.socials.instagram} className="hover:text-highlight">Instagram</a>}
                                        {mc.socials.youtube && <a href={mc.socials.youtube} className="hover:text-highlight">YouTube</a>}
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <h2 className="text-2xl font-black uppercase mb-8 italic underline decoration-accent underline-offset-8">Melhores Batalhas</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {mc.videos.map((vidId) => (
                                        <div key={vidId} className="aspect-video bg-muted border border-border">
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src={`https://www.youtube.com/embed/${vidId}`}
                                                title="YouTube video player"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
