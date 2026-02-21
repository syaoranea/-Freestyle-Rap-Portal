import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Batalha de Rima | O Maior Portal de Freestyle Rap do Brasil",
  description: "Notícias, rankings, vídeos e tudo sobre a cena de batalha de rima no Brasil. Kant, Jhony, Batalha da Aldeia e muito mais.",
  keywords: ["batalha de rima", "batalha de rap", "freestyle", "MCs brasileiros", "ranking de mcs"],
  authors: [{ name: "Equipe Batalha" }],
  openGraph: {
    title: "Batalha de Rima | Freestyle Rap Brasil",
    description: "O maior portal brasileiro sobre batalhas de rima.",
    type: "website",
    locale: "pt_BR",
    siteName: "Batalha de Rima",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} antialiased urban-gradient min-h-screen`}
      >
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
