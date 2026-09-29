import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { headers } from "next/headers";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Adarsh Jha — Applied AI / GenAI Engineer",
    template: "%s",
  },
  description:
    "Applied AI engineer building AI applications with LLMs, agents, multimodal workflows, Python, TypeScript, and Next.js.",
  keywords: [
    "Applied AI Engineer",
    "AI Product Engineer",
    "Software Engineer",
    "LLM Engineer",
    "Next.js",
    "TypeScript",
    "Python",
  ],
  authors: [{ name: "Adarsh Jha" }],
  openGraph: {
    type: "website",
    title: "Adarsh Jha — Applied AI / GenAI Engineer",
    description:
      "Reliable AI products, from multimodal and agentic workflows to secure APIs and full-stack interfaces.",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "Adarsh Jha — Applied AI / GenAI Engineer",
    description:
      "Reliable AI products, from multimodal and agentic workflows to secure APIs and full-stack interfaces.",
    images: [],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script src="/theme-init.js" strategy="beforeInteractive" nonce={nonce} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
