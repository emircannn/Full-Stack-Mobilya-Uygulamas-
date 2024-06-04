import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const font = Montserrat({ subsets: ['cyrillic'], weight: ['100', '200', '300', '400', '500', '600', '800', '900'] })

export const metadata: Metadata = {
  title: "беленай мебель",
  description: "беленай мебель",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={cn(font.className, "text-neutral-700 hideScrollRes")}>
        {children}
        </body>
    </html>
  );
}
