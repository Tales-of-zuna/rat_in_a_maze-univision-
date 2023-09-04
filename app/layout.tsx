import { GiftsProvider } from "@/providers/giftsProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hello Maze",
  description: "Maze game for promotion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GiftsProvider>{children}</GiftsProvider>
      </body>
    </html>
  );
}
