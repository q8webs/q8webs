import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://q8webs.com"),
  title: "Q8WEBS | كويت ويبس — تصميم وتطوير المواقع والتطبيقات",
  description: "كويت ويبس: استوديو كويتي لتصميم وتطوير المواقع والتطبيقات والمتاجر الإلكترونية. نحوّل الأفكار إلى تجارب رقمية بهوية خاصة، بالعربية والإنجليزية.",
  keywords: [
    "تصميم مواقع الكويت",
    "برمجة تطبيقات الكويت",
    "متاجر إلكترونية كي نت",
    "web design kuwait",
    "app development kuwait",
    "q8webs",
    "KNET integration",
    "digital agency gcc"
  ],
  authors: [{ name: "Q8WEBS Web Solutions" }],
  creator: "Q8WEBS",
  publisher: "Q8WEBS",
  formatDetection: {
    email: true,
    telephone: true,
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Q8WEBS | Premier Web & Mobile App Engineering • Kuwait",
    description: "Architecting high-impact bespoke digital experiences for visionary brands in Kuwait and the GCC.",
    url: "https://q8webs.com",
    siteName: "Q8WEBS",
    locale: "ar_KW",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "/images/editorial/hero.webp",
        width: 1600,
        height: 914,
        alt: "Q8WEBS — Digital experiences from Kuwait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Q8WEBS | استوديو تصميم وتطوير المواقع والتطبيقات الفاخرة",
    description: "حلول رقمية برمجية متكاملة للشركات والمشاريع الطموحة في الكويت والخليج.",
    images: ["/images/editorial/hero.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#181b1d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="h-full antialiased">
      <body className="min-h-full">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
