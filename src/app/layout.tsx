import type { Metadata } from "next";
import { Open_Sans, Merriweather, Bebas_Neue } from "next/font/google";
import "@styles/globals.scss";
import { Analytics } from "@vercel/analytics/next";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-openSans",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-merriweather",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-bebas",
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
    url: "https://tamiresmarketing.com/",
    title: "Tamires Souza | Especialista em Marketing de Saúde",
    description:
      "Estratégias de marketing digital para profissionais e clínicas de saúde.",
    images: [
      {
        url: "https://tamiresmarketing.com/images/og-image.png",
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
        <link rel="canonical" href="https://tamiresmarketing.com/" />
      </head>
      <body
        className={`${openSans.variable} ${merriweather.variable} ${bebas.variable}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
