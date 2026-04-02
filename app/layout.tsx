import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-headline",
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

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
        url: "/pp.png",
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
    images: ["/pp.png"],
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
    <html lang={locale} className={`${spaceGrotesk.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <body className="font-body antialiased" suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

