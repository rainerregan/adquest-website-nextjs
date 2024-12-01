import { AOSInit } from "@/components/common/animation/on-scroll-animation";
import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header/header";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  display: "swap",
  subsets: ["latin"],
  variable: '--font-montserrat',
});

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "AdQuest | Aplikasi Penghasil Uang dari Mobile Games",
  description: "AdQuest adalah aplikasi penghasil uang dan penyedia mobile games seru yang disediakan gratis dan mudah untuk dimainkan.",
  icons: {
    icon: "/egg.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
