import type { Metadata } from "next";
import { Lato, Poppins } from "next/font/google";
import "./globals.css";
import "./animations.css";
import "./hamburger.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const latoSans = Lato({
  variable: "--font-lato-sans",
  subsets: ["latin"],
  weight: ["700", "900"],
});

const popinsSans = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "MC Disenio - Mirian Camisar",
  description:
    "Trabaje en una variedad de proyectos, desde branding y diseño editorial hasta web y animaciones en 2D. Tuve la oportunidad de experimentar tanto en el mundo analógico de libros y revistas como en el digital, y ahora estoy explorando las posibilidades de la inteligencia artificial.",
  icons: {
    icon: "https://mcdisenio.com.ar/assets/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://mcdisenio.com.ar",
    title: "MC Disenio - Mirian Camisar",
    description:
      "Trabaje en una variedad de proyectos, desde branding y diseño editorial hasta web y animaciones en 2D. Tuve la oportunidad de experimentar tanto en el mundo analógico de libros y revistas como en el digital, y ahora estoy explorando las posibilidades de la inteligencia artificial.",
    images: [
      {
        url: "https://mcdisenio.com.ar/images/bio.jpg",
        width: 800,
        height: 800,
        alt: "Mirian Camisar",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${latoSans.variable} ${popinsSans.variable} antialiased`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
