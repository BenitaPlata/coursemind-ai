import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-20">

      <div className="section-inner py-10 text-center">

        <h3 className="font-semibold mb-2">
          CourseMind AI
        </h3>

        <p className="text-sm text-[var(--text-dim)] mb-6">
          Sistema de inteligencia artificial para cursos online.
        </p>

        <div className="flex justify-center gap-6 text-sm mb-6">

          <a
            href="https://github.com/BenitaPlata"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)]"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/benita-plata/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)]"
          >
            LinkedIn
          </a>

          <Link
            href="https://portfolio-benitaplata.vercel.app/"
            className="hover:text-[var(--accent)]"
          >
            Portfolio
          </Link>

        </div>

        <p className="text-xs text-[var(--text-dim)]">
          Proyecto desarrollado por Benita Plata
        </p>

      </div>

    </footer>
  );
}