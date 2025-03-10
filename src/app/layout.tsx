import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = Plus_Jakarta_Sans({

  subsets: ["latin"],
  weight:["300","400","500",'600','700'],
  variable: "--font-sans",
});


export const metadata: Metadata = {
  title: "Medy Care",
  description: "A Healt care system",
};

export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn('min-h-screen bg-[#131619] font-sans antialiased',fontSans.variable)}
      >
        {children}
      </body>
    </html>
  );
}
