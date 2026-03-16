"use client";

import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (

    <nav className="fixed top-0 left-0 w-full bg-[var(--bg)] border-b border-[var(--border)] z-50">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#" className="font-semibold">
          CourseMind AI
        </a>

        {/* Botón móvil */}
        <button
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Links desktop */}
        <div className="hidden md:flex gap-8 text-sm">

          <a href="#automation-demo" className="hover:text-[var(--accent)]">
            Automatización
          </a>

          <a href="#demo" className="hover:text-[var(--accent)]">
            Tutor IA
          </a>

          <a href="#arquitectura" className="hover:text-[var(--accent)]">
            Arquitectura
          </a>

        </div>

      </div>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)]">

          <div className="flex flex-col px-6 py-4 gap-4 text-sm">

            <a href="#automation-demo">
              Automatización
            </a>

            <a href="#demo">
              Tutor IA
            </a>

            <a href="#arquitectura">
              Arquitectura
            </a>

          </div>

        </div>
      )}

    </nav>

  );

}