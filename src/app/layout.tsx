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
  title: {
    default: "شبكة التميز للمقاولات العامة - الرياض | مظلات وسواتر وبرجولات",
    template: "%s | شبكة التميز للمقاولات",
  },
  description:
    "شبكة التميز للمقاولات العامة بالرياض: تنفيذ المظلات والسواتر والبرجولات والشبوك والخيام والدهانات والديكورات بضمان ممتد.",
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
