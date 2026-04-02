import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ryan Rafilianto — Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer with 8+ years of experience building high-performance web applications with React, TypeScript, Next.js, and Angular. Skilled in fintech, logistics, and e-commerce product development.",
  openGraph: {
    title: "Ryan Rafilianto — Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with 8+ years of experience building scalable web applications with React, TypeScript, and Next.js.",
    type: "website",
    url: "https://ryanrafilianto.com",
    siteName: "Ryan Rafilianto Portfolio",
    images: [
      {
        url: "/pp.svg",
        width: 400,
        height: 400,
        alt: "Ryan Rafilianto",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Ryan Rafilianto — Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with 8+ years of experience building scalable web applications with React, TypeScript, and Next.js.",
    images: ["/pp.svg"],
  },
  keywords: [
    "Ryan Rafilianto",
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Angular",
    "Portfolio",
    "Senior Frontend Engineer",
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
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
