import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const workSans = localFont({
  variable: "--font-workSans",
  src: [
    {
      path: "../../public/fonts/workSans/WorkSans-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/workSans/WorkSans-ExtraLightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/workSans/WorkSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/workSans/WorkSans-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/workSans/WorkSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/workSans/WorkSans-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/workSans/WorkSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/workSans/WorkSans-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/workSans/WorkSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/workSans/WorkSans-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/workSans/WorkSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/workSans/WorkSans-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/workSans/WorkSans-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/workSans/WorkSans-ExtraBoldItalic.woff2",
      weight: "800",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Marc Abadie - Web Creative",
  description: "Marc Abadie - Web Creative",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${workSans.variable} font-sans`}>
      <body className="background">{children}</body>
    </html>
  );
}
