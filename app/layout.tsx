import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { faqData } from "@/lib/faq-data";
import { generateFAQSchema } from "@/lib/generate-faq-schema";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SupportBot Factory - AI Customer Support Built From Your Docs",
  description: "Build production-ready AI customer support from your documentation. Upload your docs, deploy intelligent chatbots, and automate support in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema(faqData))
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
