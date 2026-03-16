import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";

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
    <body className={`${font.className} bg-transparent text-[#111827] antialiased`}>

        {/* FONDO GLOBAL ANIMADO */}

        <div className="site-bg">

          <div className="bg-glow bg-glow-1"></div>
          <div className="bg-glow bg-glow-2"></div>

          <div className="bg-orb bg-orb-1"></div>
          <div className="bg-orb bg-orb-2"></div>

          <div className="bg-ring bg-ring-1"></div>
          <div className="bg-ring bg-ring-2"></div>

          <div className="bg-grid"></div>

        </div>

        <CursorGlow />


        {children}

      </body>
    </html>
  );
}