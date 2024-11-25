import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  display: "swap",
  subsets: ["latin"],
});

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adquest | Aplikasi Penghasil Uang dari Mobile Games",
  description: "AdQuest adalah aplikasi penghasil uang dan penyedia mobile games seru yang disediakan gratis dan mudah untuk dimainkan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
