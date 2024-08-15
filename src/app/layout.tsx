import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NavBar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Error and 404 demo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="h-10 px-4 border-solid border-b-black shadow-md">
          <div className="container">
            <NavBar />
          </div>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}

