export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20"
    >
      {/* FONDO ANIMADO */}

      <div className="hero-bg">
        {/* glow principal */}
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>

        {/* partículas */}
        <div className="hero-particles"></div>

        {/* círculos vivos */}
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>

        {/* anillos rotando */}
        <div className="hero-ring hero-ring-1"></div>
        <div className="hero-ring hero-ring-2"></div>
      </div>

      {/* CONTENIDO */}

      <div className="relative z-10 max-w-4xl text-center">
        <p className="text-sm uppercase tracking-widest text-[var(--accent)] mb-4">
          IA QUE TRANSFORMA CURSOS EN CONOCIMIENTO CONSULTABLE
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
          CourseMind <span className="title-gradient">AI</span>
        </h1>

        <p className="text-base md:text-lg text-[var(--text-dim)] max-w-xl md:max-w-2xl mx-auto mb-10 px-2">
          Convierte cualquier curso en una base de conocimiento con IA y crea un
          tutor inteligente capaz de responder preguntas utilizando el contenido
          real de las clases.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#demo"
            className="px-6 py-3 rounded-full bg-[var(--accent)] text-white font-medium hover:scale-105 transition"
          >
            Probar el tutor IA
          </a>

          <a
            href="#automation-demo"
            className="px-6 py-3 rounded-full border border-[var(--border)] hover:border-[var(--accent)] transition"
          >
            Ver cómo funciona
          </a>
        </div>
      </div>
    </section>
  );
}
