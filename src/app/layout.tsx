import type { Metadata } from "next";
import { Newsreader, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ContentProvider } from "@/lib/content-provider";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asifahamed11.github.io/asif-ahamed-portfolio"),
  title: "Asif Ahamed | Software Engineer & AI Researcher",
  description:
    "Portfolio of Asif Ahamed, an undergraduate researcher and software engineer working on deep learning for bioinformatics and medical imaging.",
  keywords: [
    "Asif Ahamed",
    "AI Researcher",
    "Software Engineer",
    "Deep Learning",
    "Bioinformatics",
    "Portfolio",
    "Varendra University",
  ],
  authors: [{ name: "Asif Ahamed", url: "https://asifahamed11.github.io/" }],
  creator: "Asif Ahamed",
  alternates: {
    canonical: "https://asifahamed11.github.io/asif-ahamed-portfolio",
  },
  openGraph: {
    title: "Asif Ahamed | Software Engineer & AI Researcher",
    description:
      "Undergraduate researcher and software engineer working on deep learning for bioinformatics and medical imaging.",
    url: "https://asifahamed11.github.io/asif-ahamed-portfolio",
    siteName: "Asif Ahamed",
    type: "website",
    images: [
      {
        url: "/asif-sm.jpg",
        width: 800,
        height: 800,
        alt: "Asif Ahamed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asif Ahamed | Software Engineer & AI Researcher",
    description:
      "Undergraduate researcher and software engineer working on deep learning for bioinformatics and medical imaging.",
    images: ["/asif-sm.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Asif Ahamed",
  jobTitle: "Software Engineer & AI Researcher",
  url: "https://asifahamed11.github.io/asif-ahamed-portfolio",
  sameAs: [
    "https://github.com/asifahamed11",
    "https://www.linkedin.com/in/asifahamed112/",
    "https://scholar.google.com/citations?user=ciEQlLEAAAAJ&hl=en",
    "https://codeforces.com/profile/asif_112",
    "https://leetcode.com/u/asifahamedstudent/",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Varendra University, Rajshahi",
  },
  award: "Honourable Mention Award (UCICS 2026)",
  knowsAbout: [
    "Artificial Intelligence",
    "Deep Learning",
    "Bioinformatics",
    "Software Engineering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#FAFAF7] text-[#1C1917] selection:bg-amber-100 selection:text-amber-950`}
      >
        <ContentProvider>{children}</ContentProvider>
      </body>
    </html>
  );
}
