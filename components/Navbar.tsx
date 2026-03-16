"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (

    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-[var(--bg)]/80 border-b border-[var(--border)] z-50">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#" className="font-semibold">
          CourseMind AI
        </a>

        {/* Botón móvil */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Menú desktop */}
        <div className="hidden md:flex gap-8 text-sm">

          <a
            href="#automation-demo"
            className="hover:text-[var(--accent)] transition-colors"
          >
            Automatización
          </a>

          <a
            href="#demo"
            className="hover:text-[var(--accent)] transition-colors"
          >
            Tutor IA
          </a>

          <a
            href="#arquitectura"
            className="hover:text-[var(--accent)] transition-colors"
          >
            Arquitectura
          </a>

        </div>

      </div>

      {/* Menú móvil */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >

        <div className="border-t border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-md">

          <div className="flex flex-col px-6 py-4 gap-4 text-sm">

            <a
              href="#automation-demo"
              onClick={() => setOpen(false)}
              className="hover:text-[var(--accent)] transition-colors"
            >
              Automatización
            </a>

            <a
              href="#demo"
              onClick={() => setOpen(false)}
              className="hover:text-[var(--accent)] transition-colors"
            >
              Tutor IA
            </a>

            <a
              href="#arquitectura"
              onClick={() => setOpen(false)}
              className="hover:text-[var(--accent)] transition-colors"
            >
              Arquitectura
            </a>

          </div>

        </div>

      </div>

    </nav>

  );
}