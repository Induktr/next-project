'use client';

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { useThemeStore } from "@/store/themeStore";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const { theme } = useThemeStore();
  return (
    <html lang="en">
      <body
        className={clsx(
          theme, {
          'light-theme': theme === 'light',
        })}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
