import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://deivisan.github.io/DeiviTech-Monte-Seu-Notebook";

export const metadata: Metadata = {
  title: "DeiviTech • Monte Seu Notebook Inteligente",
  description:
    "Configuração modular, consultoria Kelly IA e fluxo centralizado via WhatsApp — tudo pronto para o próximo salto da DeiviTech.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "DeiviTech | Configurador Inteligente",
    description:
      "Construa notebooks sob medida, simule serviços e acione a Kelly direto no WhatsApp.",
    url: baseUrl,
    siteName: "DeiviTech",
    locale: "pt_BR",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
