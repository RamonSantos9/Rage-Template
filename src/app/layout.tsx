import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landing Page - Template Moderno",
  description:
    "Uma landing page moderna e elegante construída com Next.js, Tailwind CSS e Framer Motion",
  keywords: [
    "landing page",
    "next.js",
    "tailwind css",
    "framer motion",
    "template",
  ],
  authors: [{ name: "Ramon" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased overflow-x-hidden bg-white font-switzer-regular">
        <div className="min-h-screen bg-white">{children}</div>
      </body>
    </html>
  );
}
