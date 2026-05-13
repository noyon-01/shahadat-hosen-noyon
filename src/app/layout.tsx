import type { Metadata } from "next";
import { Outfit, Sora } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";
import CursorFollower from "@/components/ui/CursorFollower";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["100", "300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Noyon.dev | Front-End Developer",
  description: "Professional portfolio of Shahadat Hosen Noyon, a Front-End developer specializing in React & Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${sora.variable} font-sora antialiased selection-purple overflow-x-hidden`}>
        <SmoothScrollProvider>
          <CursorFollower />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>

  );
}
