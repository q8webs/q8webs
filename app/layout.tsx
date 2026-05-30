import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Q8WEBS | شركة تصميم مواقع وتطبيقات في الكويت والخليج",
  description: "نحن في Q8WEBS نصمم ونطور مواقع إلكترونية، تطبيقات جوال، ومتاجر إلكترونية احترافية بأحدث التقنيات وأفضل أداء في الكويت والخليج.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
