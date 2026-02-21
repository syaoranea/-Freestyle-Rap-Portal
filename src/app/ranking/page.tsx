import { mcs } from "@/types/mock";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Ranking de MCs | Batalha de Rima",
    description: "O ranking oficial dos melhores MCs de freestyle rap do Brasil. Veja quem está no topo da cena.",
};

export default function RankingPage() {
    const sortedMcs = [...mcs].sort((a, b) => a.rank - b.rank);

    return (
        <>
            <Header />
            <main className="flex-1 py-16">
                <div className="container mx-auto px-4">
                    <header className="mb-16 text-center">
                        <h1 className="text-6xl md:text-8xl font-black uppercase italic mb-4">RANKING <span className="text-highlight">NACIONAL</span></h1>
                        <p className="text-zinc-400 max-w-2xl mx-auto uppercase text-sm tracking-widest font-bold">Os maiores rimadores do país em um só lugar</p>
                    </header>

                    <div className="max-w-5xl mx-auto space-y-4">
                        {sortedMcs.map((mc, index) => (
                            <Link
                                key={mc.id}
                                href={`/mc/${mc.slug}`}
                                className="group flex flex-col md:flex-row items-center gap-6 bg-card border border-border p-6 card-hover transition-all"
                            >
                                <div className="text-4xl md:text-6xl font-black italic text-zinc-800 group-hover:text-accent transition-colors w-20 text-center">
                                    {index + 1}º
                                </div>

                                <div className="relative h-24 w-24 flex-shrink-0 border-2 border-border group-hover:border-highlight overflow-hidden">
                                    <Image src={mc.photoUrl} alt={mc.stageName} fill className="object-cover" />
                                </div>

                                <div className="flex-1 text-center md:text-left">
                                    <h2 className="text-3xl font-black uppercase italic group-hover:text-highlight transition-colors">
                                        {mc.stageName}
                                    </h2>
                                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
                                        {mc.city} - {mc.state}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-8 text-center bg-muted/50 p-4 md:px-8 border border-border/50">
                                    <div>
                                        <span className="block text-xl font-black italic">{mc.stats.wins}</span>
                                        <span className="text-[10px] uppercase font-bold text-zinc-500">Wins</span>
                                    </div>
                                    <div>
                                        <span className="block text-xl font-black italic text-highlight">{mc.stats.titles}</span>
                                        <span className="text-[10px] uppercase font-bold text-zinc-500">Títulos</span>
                                    </div>
                                </div>

                                <div className="hidden md:block">
                                    <span className="text-xs font-black bg-white text-black px-4 py-2 uppercase tracking-tighter">Ver Perfil</span>
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
