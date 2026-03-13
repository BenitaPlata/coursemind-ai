import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const font = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
});

export const metadata: Metadata = {
  title: "CourseMind AI",
  description: "Sistema de inteligencia artificial para cursos online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${font.className} bg-[#f6f7fb] text-[#111827] antialiased`}>
        {children}
      </body>
    </html>
  );
}