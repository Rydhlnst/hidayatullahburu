import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Pondok Pesantren Hidayatullah Kabupaten Buru | Kampus Miniatur Peradaban Islam",
  description: "Pondok Pesantren Hidayatullah Kabupaten Buru, Maluku. Menyelenggarakan Pendidikan Integral Berbasis Tauhid, Dakwah, dan Pemberdayaan Ummat.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={cn("h-full", "antialiased", plusJakartaSans.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
