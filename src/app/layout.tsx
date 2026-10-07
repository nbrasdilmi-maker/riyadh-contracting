import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./lab.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://riyadh-contracting.vercel.app"
  ),
  title: {
    default: "شبكة التميز للمقاولات العامة - الرياض | مظلات وسواتر وبرجولات",
    template: "%s | شبكة التميز للمقاولات",
  },
  description:
    "شبكة التميز للمقاولات العامة بالرياض: تنفيذ المظلات والسواتر والبرجولات والشبوك والخيام والدهانات والديكورات بضمان ممتد. اتصل 0551215610.",
  keywords: [
    "مقاولات الرياض",
    "مظلات سيارات الرياض",
    "سواتر الرياض",
    "برجولات الرياض",
    "شبوك الرياض",
    "خيام وبيوت شعر",
    "ساندوتش بانل",
    "ترميم مباني الرياض",
    "دهانات الرياض",
    "تنسيق حدائق الرياض",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    siteName: "شبكة التميز للمقاولات",
    title: "شبكة التميز للمقاولات العامة - الرياض",
    description:
      "تنفيذ المظلات والسواتر والبرجولات والشبوك والخيام والدهانات والديكورات بضمان ممتد.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
