import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Whisper",
  description: "Send anonymous messages among friend, foes, and family",
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
      </body>
    </html>
  );
}
