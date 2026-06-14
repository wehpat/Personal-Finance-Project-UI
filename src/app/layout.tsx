import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@iso/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    /* Will Change this if I have thought a nicer title and description 😅 */
  title: "My Random Project for Personal and Couple Finance",
  description: "Managing my personal finances and dynamic goals while upskilling myself as a software engineer.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
          lang="en"
          className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
      <body className="h-full">
      <Navbar>
        {children}
      </Navbar>
      </body>
      </html>
  );
}