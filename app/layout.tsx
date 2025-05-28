import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FitLifePower - Sua Loja de Produtos Fitness",
  description: "Encontre os melhores produtos fitness com as melhores ofertas",
  generator: "Next.js",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
