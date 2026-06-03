import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EstateNaija — Nigeria's Premium Real Estate Platform",
  description:
    "Buy, rent, and invest in verified Nigerian properties across Lagos, Abuja, Port Harcourt and beyond.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
