import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { ToastProvider } from "@/components/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rage",
  description: "Ragegg criamos sites exclusivos com performance extraordinária",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={twMerge(
          inter.className,
          "bg-white text-black antialiased overflow-x-hidden"
        )}
      >
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
