import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KBK Laktaši — Kik Boks Klub",
  description: "Kik boks klub Laktaši — prvaci Bosne, Evrope i svijeta. Treninzi, rezultati, takmičari.",
  keywords: ["kickboxing", "kik boks", "Laktaši", "KBK Laktaši", "Igor Grbić", "David Mudrinić"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
