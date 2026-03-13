export default function Navbar() {
  return (

    <nav className="fixed top-0 left-0 w-full bg-[var(--bg)] border-b border-[var(--border)] z-50">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <a href="#" className="font-semibold">
          CourseMind AI
        </a>

        <div className="flex gap-6 text-sm">

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

    </nav>

  );
}