import type { Metadata } from "next";
import { Exo, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./rsc/navbar";
import Footer from "./rsc/footer";
import { HEADER_HEIGHT } from "@/lib/constants";
import { ThemeProvider } from "@/components/client/theme-provider";

const exoSans = Exo({
  variable: "--font-exo-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flowgrids",
  description: "AI-powered grid optimization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${exoSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="sticky top-0 z-50 bg-background/50 backdrop-blur-md">
            <Navbar height={HEADER_HEIGHT} />
          </div>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
