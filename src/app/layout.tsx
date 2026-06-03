import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Estate Naija — Nigerian Real Estate Marketplace",
  description:
    "Discover, buy, rent, and invest in Nigerian real estate through a trusted platform. Properties in Lagos, Abuja, Port Harcourt, and across Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
