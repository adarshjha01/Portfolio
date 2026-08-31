import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Adarsh Jha — Applied AI / Software Engineer',
    template: '%s',
  },
  description: 'Applied AI and software engineer building reliable AI products with LLMs, agents, multimodal workflows, Python, TypeScript, and Next.js.',
  keywords: ['Applied AI Engineer', 'AI Product Engineer', 'Software Engineer', 'LLM Engineer', 'Next.js', 'TypeScript', 'Python'],
  authors: [{ name: 'Adarsh Jha' }],
  openGraph: {
    type: 'website',
    title: 'Adarsh Jha — Applied AI / Software Engineer',
    description: 'Reliable AI products, from multimodal and agentic workflows to secure APIs and full-stack interfaces.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Adarsh Jha — Applied AI / Software Engineer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adarsh Jha — Applied AI / Software Engineer',
    description: 'Reliable AI products, from multimodal and agentic workflows to secure APIs and full-stack interfaces.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
