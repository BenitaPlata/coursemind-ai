export default function Architecture() {

  const steps = [
    "Landing (Next.js)",
    "Webhook",
    "Workflow n8n",
    "Embeddings",
    "Vector DB (Supabase)",
    "RAG",
    "Respuesta del tutor"
  ];

  return (

    <section id="arquitectura" className="section">

      <div className="section-inner text-center">

        <p className="text-sm uppercase tracking-widest text-[var(--accent)] mb-4">
          Arquitectura del sistema
        </p>

        <h2 className="text-3xl font-bold mb-6">
          Cómo funciona el tutor IA
        </h2>

        <p className="text-[var(--text-dim)] max-w-xl mx-auto mb-12">
          El tutor utiliza una arquitectura basada en RAG que permite
          responder preguntas utilizando el contenido real del curso.
        </p>

        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4">

          {steps.map((step, index) => (

            <div
              key={index}
               className="p-6 card-hover"
            >
              {step}
            </div>

          ))}

        </div>

      </div>

    </section>

  );

}