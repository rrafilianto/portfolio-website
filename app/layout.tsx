import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import ThemeProvider from "@/components/providers/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ryan Rafilianto — Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer with 8+ years of experience building high-performance web applications with React, TypeScript, Next.js, and Angular.",
  openGraph: {
    title: "Ryan Rafilianto — Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with 8+ years of experience building scalable web ecosystems.",
    type: "website",
  },
  keywords: [
    "Ryan Rafilianto",
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
