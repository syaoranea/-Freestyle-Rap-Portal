import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import LatestNews from "@/components/features/news/LatestNews";
import FeaturedMCs from "@/components/features/mcs/FeaturedMCs";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <LatestNews />
        <FeaturedMCs />

        {/* Weekly Ranking Summary Section */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="bg-card p-1 border-l-4 border-accent">
              <div className="p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-3xl font-black mb-2 uppercase italic tracking-tighter">O MELHOR <span className="gold-text">DA SEMANA</span></h3>
                  <p className="text-muted-foreground max-w-md">O MC que mais pontuou nas batalhas oficiais desta semana.</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <span className="block text-xs font-bold text-accent uppercase tracking-[0.2em] mb-1">Destaque Semanal</span>
                    <span className="block text-4xl font-black uppercase italic">KANT</span>
                  </div>
                  <div className="h-20 w-20 rounded-full bg-accent flex items-center justify-center text-4xl font-black italic">
                    1º
                  </div>
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
