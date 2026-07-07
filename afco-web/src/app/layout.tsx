import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SiteEnhancements from "@/components/SiteEnhancements";
import { club } from "@/data/content";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${club.name} | ${club.fullName}`,
    template: `%s | ${club.name}`,
  },
  description: `${club.mission} ${club.motto}.`,
  icons: {
    icon: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <SiteEnhancements />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
