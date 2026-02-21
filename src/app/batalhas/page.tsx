import { battles } from "@/types/mock";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Batalhas de Rima | Circuito Nacional",
    description: "Descubra as principais batalhas de rima do Brasil, locais de ocorrência e histórico de vencedores.",
};

export default function BattlesPage() {
    return (
        <>
            <Header />
            <main className="flex-1 py-16">
                <div className="container mx-auto px-4">
                    <header className="mb-16">
                        <h1 className="text-6xl font-black uppercase italic mb-4">BATALHAS</h1>
                        <p className="text-zinc-400 max-w-xl">Conheça os templos do freestyle brasileiro. Onde a magia acontece semanalmente.</p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {battles.map((battle) => (
                            <div key={battle.id} className="group flex flex-col bg-card border-l-8 border-accent">
                                <div className="relative aspect-video overflow-hidden">
                                    <Image src={battle.logoUrl} alt={battle.name} fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                                    <div className="absolute bottom-6 left-6">
                                        <h2 className="text-4xl font-black uppercase italic group-hover:text-highlight transition-colors">
                                            {battle.name}
                                        </h2>
                                        <p className="text-zinc-300 font-bold uppercase text-xs tracking-widest">
                                            {battle.location}
                                        </p>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <p className="text-zinc-400 mb-8 leading-relaxed">
                                        {battle.description}
                                    </p>

                                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-border pt-6">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 flex items-center justify-center bg-highlight text-black font-black italic">
                                                1º
                                            </div>
                                            <div className="text-left">
                                                <span className="block text-[10px] uppercase font-bold text-zinc-500">Destaque</span>
                                                <span className="block font-black uppercase text-sm">{battle.ranking[0].mcName}</span>
                                            </div>
                                        </div>
                                        <button className="w-full sm:w-auto bg-muted border border-border px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors">
                                            Ver Calendário
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
