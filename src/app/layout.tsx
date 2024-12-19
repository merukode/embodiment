"use client"

import { ThemeProvider } from 'next-themes'
import { DarkModeToggle } from './components/DarkModeToggle'
import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased crt`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-[#FFE4B2] dark:bg-gray-900 transition-colors duration-200">
            <nav className="p-4">
              <DarkModeToggle />
            </nav>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

