import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { StructuredData } from "@/components/seo/StructuredData";
import { portfolioData } from "@/data/portfolio";
import type { Metadata, Viewport } from "next";
import { Fira_Code, Fira_Sans } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abishek-as-portfolio.vercel.app/"),
  title: {
    template: `%s | ${portfolioData.name}`,
    default: `${portfolioData.name} - Portfolio`,
  },
  description: portfolioData.about,
  keywords: [
    "Full Stack Developer",
    ".NET Developer",
    "ASP.NET Developer",
    "ASP.NET MVC Developer",
    "Next.js Portfolio",
    "Django Developer",
    "Backend Developer",
    "Frontend Developer",
    "Abishek A S",
  ],
  authors: [
    {
      name: portfolioData.name,
      url: "https://abishek-as-portfolio.vercel.app/",
    },
  ],
  creator: portfolioData.name,
  publisher: portfolioData.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abishek-as-portfolio.vercel.app/",
    title: `${portfolioData.name} - Portfolio`,
    description: portfolioData.about,
    siteName: `${portfolioData.name} Portfolio`,
    images: [
      {
        url: "https://abishek-as-portfolio.vercel.app/hero/DP.jpg",
        width: 1200,
        height: 630,
        alt: `${portfolioData.name} - Portfolio`,
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icons/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body
        suppressHydrationWarning
        className={`${firaSans.variable} ${firaCode.variable} font-sans antialiased bg-slate-950 text-slate-50 selection:bg-primary/30 selection:text-primary`}
      >
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
