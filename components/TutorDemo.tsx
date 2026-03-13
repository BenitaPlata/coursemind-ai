"use client";

import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function TutorDemo() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const askTutor = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!question.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: question,
    };

    const newMessages: Message[] = [...messages, userMessage];

    setMessages(newMessages);
    setQuestion("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://primeros-pasos-n8n-curso-n8n.hbtrfg.easypanel.host/webhook/preguntar-curso",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question,
            course: "n8n",
          }),
        },
      );

      const data = await res.json();
      console.log("RESPUESTA WEBHOOK:", data);

      const assistantMessage: Message = {
        role: "assistant",
       content: data.respuesta || data.answer || data.response || "No se pudo generar respuesta."
      };

      setMessages([...newMessages, assistantMessage]);
    } catch {
      const errorMessage: Message = {
        role: "assistant",
        content: "Error al consultar el tutor.",
      };

      setMessages([...newMessages, errorMessage]);
    }

    setLoading(false);
  };

  return (
    <section id="demo" className="section">
      <div className="section-inner">
        <p className="text-sm uppercase tracking-widest text-[var(--accent)] mb-4 text-center">
          Demo
        </p>

        <h2 className="text-3xl font-bold text-center mb-6">
          Tutor IA del curso
        </h2>

        <p className="text-[var(--text-dim)] text-center max-w-2xl mx-auto mb-10">
          Pregunta algo relacionado con el contenido del curso y el tutor IA
          responderá utilizando el conocimiento generado automáticamente a
          partir de las clases.
        </p>

        <div className="max-w-2xl mx-auto bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6">
          <div className="space-y-4 mb-6 max-h-[350px] overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg text-sm ${
                  msg.role === "user"
                    ? "bg-[var(--accent)] text-white ml-auto max-w-[75%]"
                    : "bg-gray-100 text-black max-w-[75%]"
                }`}
              >
                {msg.content}
              </div>
            ))}

            {loading && (
              <div className="text-xs text-[var(--text-dim)]">
                Analizando contenido del curso...
              </div>
            )}
          </div>

          <form onSubmit={askTutor} className="flex gap-3">
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ej: ¿Qué es n8n o cómo funciona un workflow?"
              className="flex-1 border border-[var(--border)] rounded-lg px-4 py-2 text-sm outline-none focus:border-[var(--accent)]"
            />

            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-[var(--accent)] text-white text-sm hover:opacity-90 transition"
            >
              Preguntar
            </button>
          </form>

          <div className="text-xs text-[var(--text-dim)] mt-3 text-center">
            Ejemplos: ¿Qué es n8n?, ¿Cuál es la diferencia entre cloud y
            self-hosted?
          </div>
        </div>
      </div>
    </section>
  );
}
