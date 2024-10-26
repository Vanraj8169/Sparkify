import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sparkify",
  description:
    "Ignite your creativity with Sparkify, the AI-powered image generator that brings your ideas to life.",
  keywords: "AI, image generator, creativity, art, design, graphics",
  robots: "index, follow",
  themeColor: "#FF5733", // You can change this to your preferred theme color
  openGraph: {
    title: "Sparkify",
    description:
      "Ignite your creativity with Sparkify, the AI-powered image generator that brings your ideas to life.",
    url: "https://www.yourwebsite.com", // Change to your actual website URL
    // site_name: "Sparkify",
    type: "website",
    images: [
      {
        url: "https://www.yourwebsite.com/sparkify-image.png", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Sparkify AI Image Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle", // Replace with your Twitter handle
    title: "Sparkify",
    description:
      "Ignite your creativity with Sparkify, the AI-powered image generator that brings your ideas to life.",
    images: "https://www.yourwebsite.com/sparkify-image.png", // Replace with your actual image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
