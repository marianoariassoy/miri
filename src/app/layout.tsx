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
  title: "",
  description: "",
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
