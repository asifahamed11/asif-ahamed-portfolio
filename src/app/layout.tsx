import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Asif Ahamed | Software Engineer & AI Researcher",
  description:
    "Portfolio of Asif Ahamed - CSE student at Varendra University, specializing in AI research, deep learning, and software engineering. UCICS 2026 Award Winner.",
  keywords: [
    "Asif Ahamed",
    "AI Researcher",
    "Software Engineer",
    "Deep Learning",
    "Bioinformatics",
    "Portfolio",
  ],
  authors: [{ name: "Asif Ahamed" }],
  openGraph: {
    title: "Asif Ahamed | Software Engineer & AI Researcher",
    description:
      "Bridging Software Engineering & AI Research. UCICS 2026 Award Winner.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
