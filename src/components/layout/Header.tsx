import Link from 'next/link';
import GlobalSearch from '../features/GlobalSearch';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-20 items-center justify-between px-4">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold tracking-tighter sm:text-3xl">
                            <span className="text-foreground">BATALHA DE</span>
                            <span className="text-accent underline decoration-highlight">RIMA</span>
                        </span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <Link href="/noticias" className="transition-colors hover:text-highlight">Notícias</Link>
                        <Link href="/ranking" className="transition-colors hover:text-highlight">Ranking MCs</Link>
                        <Link href="/batalhas" className="transition-colors hover:text-highlight">Batalhas</Link>
                        <Link href="/videos" className="transition-colors hover:text-highlight">Vídeos</Link>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden lg:block">
                        <GlobalSearch />
                    </div>
                    <button className="bg-accent px-6 py-2 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-red-700">
                        Entrar
                    </button>
                </div>
            </div>
        </header>
    );
}
