import React from 'react';
import { ThemeProvider } from 'next-themes';
import { DarkModeToggle } from './components/DarkModeToggle';
import { Poppins } from 'next/font/google';
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});

const GridBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-[#FFE4B2] dark:bg-[#171818] transition-colors duration-200
          [background-size:50px_50px]
          [background-image:linear-gradient(to_right,rgb(0_0_0/0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgb(0_0_0/0.1)_1px,transparent_1px)]
          dark:[background-image:linear-gradient(to_right,rgb(255_255_255/0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.1)_1px,transparent_1px)]
          animate-[grid_20s_linear_infinite]">
        </div>
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased crt crt-dark`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <GridBackground>
            <div className="min-h-screen">
              <nav className="p-4">
                <DarkModeToggle />
              </nav>
              {children}
            </div>
          </GridBackground>
        </ThemeProvider>
      </body>
    </html>
  );
}