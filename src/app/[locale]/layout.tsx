import { AOSInit } from "@/components/common/animation/on-scroll-animation";
import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header/header";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { routing } from '@/i18n/routing';
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";

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
    icon: "/favicon.ico",
  }
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang="en">
      <AOSInit />
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
