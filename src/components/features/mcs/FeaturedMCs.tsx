import Link from 'next/link';
import Image from 'next/image';
import { mcs } from '@/types/mock';

export default function FeaturedMCs() {
    return (
        <section className="py-20 bg-muted">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-accent text-sm font-bold tracking-[0.2em] mb-2 uppercase">Elite do Freestyle</h2>
                    <h3 className="text-4xl md:text-6xl font-black">OS BRABOS <span className="text-highlight">DO MOMENTO</span></h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                    {mcs.map((mc) => (
                        <Link key={mc.id} href={`/mc/${mc.slug}`} className="group flex flex-col items-center">
                            <div className="relative aspect-square w-full overflow-hidden border-2 border-border group-hover:border-highlight transition-all">
                                <Image
                                    src={mc.photoUrl}
                                    alt={mc.stageName}
                                    fill
                                    className="object-cover transition-all duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="flex justify-between items-center text-[10px] font-bold uppercase text-highlight">
                                        <span>Rank #{mc.rank}</span>
                                        <span>{mc.city}</span>
                                    </div>
                                </div>
                            </div>
                            <h4 className="mt-4 text-xl font-black uppercase italic group-hover:text-highlight tracking-tighter transition-all">
                                {mc.stageName}
                            </h4>
                            <p className="text-zinc-500 text-xs font-medium uppercase tracking-widest">{mc.state}</p>
                        </Link>
                    ))}

                    {/* Add more placeholders to fill the grid if mock is short */}
                    {[3, 4].map((i) => (
                        <div key={i} className="flex flex-col items-center opacity-40">
                            <div className="relative aspect-square w-full bg-zinc-900 border-2 border-dashed border-zinc-700 flex items-center justify-center">
                                <span className="text-zinc-700 font-bold uppercase text-xs">Aguardando...</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link href="/ranking" className="inline-block bg-white text-black px-12 py-4 text-sm font-black uppercase tracking-widest hover:bg-highlight transition-all">
                        Ver Ranking Completo
                    </Link>
                </div>
            </div>
        </section>
    );
}
