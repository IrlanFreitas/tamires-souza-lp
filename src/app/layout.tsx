import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.scss";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tamires Souza | Especialista em Marketing de Saúde",
  description:
    "Estratégias de marketing digital para profissionais e clínicas de saúde. Aumente sua visibilidade online e atinja mais pacientes.",
  keywords: [
    "marketing de saúde",
    "marketing médico",
    "marketing odontológico",
    "estratégia digital",
    "SEO para saúde",
  ],
  authors: [{ name: "Tamires Souza" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://tamires-souza-lp.com",
    title: "Tamires Souza | Especialista em Marketing de Saúde",
    description:
      "Estratégias de marketing digital para profissionais e clínicas de saúde.",
    images: [
      {
        url: "https://tamires-souza-lp.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tamires Souza",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tamires Souza | Especialista em Marketing de Saúde",
    description:
      "Estratégias de marketing digital para profissionais e clínicas de saúde.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://tamires-souza-lp.com" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
