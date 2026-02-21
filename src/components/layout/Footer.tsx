export default function Footer() {
    return (
        <footer className="mt-auto border-t border-border bg-card py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-bold tracking-tighter mb-4">
                            <span className="text-foreground">BATALHA DE</span>
                            <span className="text-accent underline decoration-highlight">RIMA</span>
                        </h2>
                        <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                            O maior portal brasileiro dedicado à cultura das batalhas de rima e ao freestyle rap. Noticias, rankings e estatísticas em um só lugar.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-highlight mb-4">Links Úteis</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="/sobre" className="hover:text-foreground">Sobre Nós</a></li>
                            <li><a href="/anuncie" className="hover:text-foreground">Anuncie</a></li>
                            <li><a href="/contato" className="hover:text-foreground">Contato</a></li>
                            <li><a href="/privacidade" className="hover:text-foreground">Privacidade</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-highlight mb-4">Siga-nos</h3>
                        <div className="flex gap-4">
                            {/* Using text for icons for now */}
                            <a href="#" className="h-10 w-10 flex items-center justify-center bg-muted hover:bg-accent transition-colors">IG</a>
                            <a href="#" className="h-10 w-10 flex items-center justify-center bg-muted hover:bg-accent transition-colors">YT</a>
                            <a href="#" className="h-10 w-10 flex items-center justify-center bg-muted hover:bg-accent transition-colors">TW</a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-border text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Batalha de Rima. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
}
