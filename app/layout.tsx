import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Syne } from "next/font/google";
import SiteHeader from "@/components/layout/SiteHeader"; // Imported
import SiteFooter from "@/components/layout/SiteFooter"; // Imported
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });
const syne = Syne({ subsets: ["latin"], variable: "--font-clash" });

export const metadata: Metadata = {
  title: "Agency Lab",
  description: "The Playbook for Funding Agencies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} ${syne.variable}`}>
      <body className="font-body bg-bg-primary text-text-primary antialiased selection:bg-accent-gold/30">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}