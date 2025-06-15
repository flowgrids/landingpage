import type { Metadata } from "next";
import { Exo, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./rsc/navbar";
import Footer from "./rsc/footer";

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
    <html lang="en">
      <body className={`${exoSans.variable} ${geistMono.variable} antialiased`}>
        <>
          {" "}
          <Navbar />
          {children}
          <div className="bg-gray-100 text-center py-4">
            <Footer />
          </div>
        </>
      </body>
    </html>
  );
}
