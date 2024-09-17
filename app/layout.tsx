import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

const description = "Send anonymous messages among friends, foes, and family";

export const metadata: Metadata = {
  title: "Whispers",
  description: description,
  applicationName: "whispers",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "whispers",
  },
  formatDetection: {
    telephone: false,
  },
  manifest: "/manifest.json",
  icons: {
    apple: "/apple-touch-icon.png",
    icon: "/favicon.ico",
  },
  twitter: {
    card: "summary",
    // url: 'https://beastmood.vercel.app',
    title: "whispers",
    description: description,
    images: ["/android-chrome-192x192.png"],
    creator: "@_whisper",
  },
  openGraph: {
    type: "website",
    title: "whispers",
    description: description,
    siteName: "whispers",
    url: "https://whispers-gray.vercel.app",
    images: [
      {
        url: "/apple-touch-icon.png",
      },
    ],
  },
  other: {
    "mobile-web-app-capable": "yes",
    "msapplication-config": "/browserconfig.xml",
    "msapplication-TileColor": "#2B5797",
    "msapplication-tap-highlight": "no",
  },
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
