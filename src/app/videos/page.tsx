import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { featuredVideos } from "@/types/mock";

export const metadata = {
    title: "Vídeos | Batalha de Rima",
    description: "Assista às melhores batalhas de rima, compilados e documentários sobre a cena freestyle brasileira.",
};

export default function VideosPage() {
    return (
        <>
            <Header />
            <main className="flex-1 py-16">
                <div className="container mx-auto px-4">
                    <header className="mb-16">
                        <h1 className="text-6xl font-black uppercase italic mb-4">VÍDEOS</h1>
                        <p className="text-zinc-400 max-w-xl">Acompanhe os momentos mais pesados da cena diretamente do palco para sua tela.</p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                        {featuredVideos.map((video) => (
                            <div key={video.id} className="group bg-card border border-border overflow-hidden card-hover">
                                <div className="aspect-video bg-black relative">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="opacity-80 group-hover:opacity-100 transition-opacity"
                                    ></iframe>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="bg-accent px-3 py-1 text-[10px] font-bold uppercase text-white">
                                            {video.category}
                                        </span>
                                        <span className="text-zinc-500 text-[10px] font-bold uppercase">
                                            {video.date}
                                        </span>
                                    </div>
                                    <h2 className="text-2xl font-black uppercase italic mb-4 group-hover:text-highlight transition-colors">
                                        {video.title}
                                    </h2>
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        {video.description}
                                    </p>

                                    <div className="mt-8 pt-6 border-t border-border flex justify-between items-center">
                                        <a
                                            href={`https://youtube.com/watch?v=${video.youtubeId}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:text-highlight transition-all"
                                        >
                                            Assistir no YouTube <span>↗</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center p-12 bg-muted border border-border">
                        <h3 className="text-2xl font-black uppercase mb-4 italic">TEM UM CANAL DE BATALHAS?</h3>
                        <p className="text-zinc-400 mb-8 max-w-md mx-auto">Quer ver suas produções em destaque no maior portal de freestyle do país? Entre em contato com nossa equipe.</p>
                        <button className="bg-white text-black px-12 py-4 text-sm font-black uppercase tracking-widest hover:bg-highlight transition-all">
                            Enviar Sugestão
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
