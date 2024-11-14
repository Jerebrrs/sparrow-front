import type { Metadata } from "next";
import "./globals.css";
import { inter } from "../config/font/fonts";

export const metadata: Metadata = {
  title: "Sparrow Store",
  description: "Sparrow Store, E-comerce de ropa urbana en la ciudad de Paraná, Entre Rios, Argentina.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
