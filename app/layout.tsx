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
  manifest: "/manifest.webmanifest",
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
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/apple-touch-icon.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.webmanifest" />

        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} h-screen min-h-[100dvh]`}>
        <div className="min-h-screen">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
