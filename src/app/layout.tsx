import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { MobileDock } from "@/components/layout/MobileDock";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Conquista Market | O Ecossistema de VCA",
  description: "Plataforma hiperlocal de comércio, serviços, imóveis e veículos de Vitória da Conquista.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-1 pb-16 md:pb-0 relative z-0">
            {children}
          </main>
          <MobileDock />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
