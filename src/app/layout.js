import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PixelSnow from "@/components/PixelSnow";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "skibi.di - url shortener",
  description: "url shortener",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed inset-0 z-10 pointer-events-none">
          <PixelSnow pixelResolution={500} />
        </div>
        <main className="relative z-20">
          <Navbar />
        {children}
        </main>
      </body>
    </html>
  );
}
