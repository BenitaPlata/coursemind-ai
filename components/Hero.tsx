export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-transparent"
    >
      {/* Fondo glow */}

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-pink-300 rounded-full opacity-40 blur-[160px]"></div>

        <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-rose-300 rounded-full opacity-40 blur-[160px]"></div>
      </div>

      {/* Contenido */}

      <div className="relative z-10 max-w-4xl text-center">
        <p className="text-sm uppercase tracking-widest text-[var(--accent)] mb-4">
         IA que transforma cursos en conocimiento consultable 
        </p>

        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
          CourseMind <span className="text-[var(--accent)]">AI</span>
        </h1>

        <p className="text-lg text-[var(--text-dim)] max-w-2xl mx-auto mb-10">
          Convierte cualquier curso en una base de conocimiento con IA y crea un
          tutor inteligente capaz de responder preguntas utilizando el contenido
          real de las clases.
        </p>

        <p className="text-sm text-[var(--accent)] font-medium mb-10">
          Transcripción automática · Generación de contenido · Tutor IA
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#demo"
            className="px-6 py-3 rounded-full bg-[var(--accent)] text-white font-medium hover:scale-105 transition"
          >
            Probar el tutor IA
          </a>

          <a
            href="#arquitectura"
            className="px-6 py-3 rounded-full border border-[var(--border)] hover:border-[var(--accent)] transition"
          >
            Ver cómo funciona
          </a>
        </div>
      </div>
    </section>
  );
}
