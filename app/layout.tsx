import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Whispers",
  description: "Send anonymous messages among friends, foes, and family",
};

export const viewport: Viewport = {
  themeColor: "black",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen min-h-[100dvh]`}>
        <div className="min-h-screen">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
