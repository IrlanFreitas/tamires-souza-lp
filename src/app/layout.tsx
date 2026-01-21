import type { Metadata } from "next";
import { Open_Sans, Merriweather } from "next/font/google";
import "@styles/globals.scss";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-merriweather",
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
        <link rel="icon" href="/images/logos/LOGO-Tamires-Souza-Branco.svg" />
        <link rel="canonical" href="https://tamires-souza-lp.com" />
      </head>
      <body className={`${openSans.variable} ${merriweather.variable}`}>
        {children}
      </body>
    </html>
  );
}
