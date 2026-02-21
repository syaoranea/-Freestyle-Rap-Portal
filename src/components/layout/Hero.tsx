import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative overflow-hidden py-24 lg:py-32">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

            <div className="container relative mx-auto px-4 text-center">
                <div className="inline-block bg-accent px-4 py-1 text-xs font-bold uppercase tracking-widest text-white mb-6">
                    A Cena não para
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9] lg:leading-[0.85]">
                    ONDE A RIMA <br />
                    <span className="text-accent underline decoration-highlight">GANHA VIDA</span>
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    Acompanhe os rankings, assista às melhores batalhas e fique por dentro de tudo que acontece no freestyle rap brasileiro.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/ranking"
                        className="w-full sm:w-auto bg-highlight px-10 py-4 text-black font-black uppercase tracking-tighter text-lg hover:bg-yellow-500 transition-all transform hover:scale-105 active:scale-95"
                    >
                        Ver Ranking Atual
                    </Link>
                    <Link
                        href="/batalhas"
                        className="w-full sm:w-auto border-2 border-white px-10 py-4 text-white font-black uppercase tracking-tighter text-lg hover:bg-white hover:text-black transition-all"
                    >
                        Próximas Batalhas
                    </Link>
                </div>
            </div>

            {/* Visual background element */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent opacity-10 blur-[100px] rounded-full" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-highlight opacity-5 blur-[100px] rounded-full" />
        </section>
    );
}
