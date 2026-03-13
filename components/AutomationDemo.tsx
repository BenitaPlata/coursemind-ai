"use client";

import { useState } from "react";
import {
  Video,
  Mic,
  Brain,
  FileText,
  Database
} from "lucide-react";

export default function AutomationDemo() {

  const [step, setStep] = useState(0);

  const runDemo = async () => {

    setStep(1);

    await new Promise(r => setTimeout(r, 1200));
    setStep(2);

    await new Promise(r => setTimeout(r, 1200));
    setStep(3);

    await new Promise(r => setTimeout(r, 1200));
    setStep(4);

    await new Promise(r => setTimeout(r, 1200));
    setStep(5);
  };

  return (

    <section id="automation-demo" className="section">

      <div className="section-inner">

        <p className="text-sm uppercase tracking-widest text-[var(--accent)] mb-4 text-center">
          Automatización del curso
        </p>

        <h2 className="text-3xl font-bold text-center mb-6">
          De una clase grabada a conocimiento estructurado
        </h2>

        <p className="text-[var(--text-dim)] text-center max-w-2xl mx-auto mb-10">
          El sistema procesa automáticamente una clase del curso,
          genera contenido educativo estructurado y crea material reutilizable.
        </p>

        <div className="text-center mb-10">

          <button
            onClick={runDemo}
            className="px-6 py-3 rounded-full bg-[var(--accent)] text-white font-medium hover:scale-105 transition"
          >
            Ejecutar automatización
          </button>

        </div>

        {/* barra pipeline */}

        <div className="flex justify-center items-center gap-3 text-sm mb-12 flex-wrap">

          <span className={`${step >= 1 ? "text-[var(--accent)] font-medium" : "text-[var(--text-dim)]"}`}>
            Video
          </span>

          <span className="text-[var(--text-dim)]">→</span>

          <span className={`${step >= 2 ? "text-[var(--accent)] font-medium" : "text-[var(--text-dim)]"}`}>
            Transcripción
          </span>

          <span className="text-[var(--text-dim)]">→</span>

          <span className={`${step >= 3 ? "text-[var(--accent)] font-medium" : "text-[var(--text-dim)]"}`}>
            Contenido
          </span>

          <span className="text-[var(--text-dim)]">→</span>

          <span className={`${step >= 4 ? "text-[var(--accent)] font-medium" : "text-[var(--text-dim)]"}`}>
            Documento
          </span>

          <span className="text-[var(--text-dim)]">→</span>

          <span className={`${step >= 5 ? "text-[var(--accent)] font-medium" : "text-[var(--text-dim)]"}`}>
            Conocimiento
          </span>

        </div>

        <div className="space-y-6 max-w-2xl mx-auto">

          {step >= 1 && (
            <div className="card-hover p-6 flex gap-4">
              <Video className="text-[var(--accent)]" />
              <div>
                <p className="font-medium mb-2">
                  Clase procesada
                </p>
                <p className="text-sm text-[var(--text-dim)]">
                  Introducción a N8n: Automatización de Flujos de Trabajo
                </p>
              </div>
            </div>
          )}

          {step >= 2 && (
            <div className="card-hover p-6 flex gap-4">
              <Mic className="text-[var(--accent)]" />
              <div>
                <p className="font-medium mb-2">
                  Transcripción
                </p>
                <p className="text-sm text-[var(--text-dim)]">
                  n8n es una herramienta de automatización que permite crear
                  integraciones entre aplicaciones mediante workflows basados
                  en nodos...
                </p>
              </div>
            </div>
          )}

          {step >= 3 && (
            <div className="card-hover p-6 flex gap-4">
              <Brain className="text-[var(--accent)]" />
              <div>
                <p className="font-medium mb-2">
                  Contenido educativo generado
                </p>
                <p className="text-sm text-[var(--text-dim)]">
                  Idea principal: N8n permite automatizar flujos de trabajo
                  conectando aplicaciones mediante nodos sin necesidad de
                  programación extensa.
                </p>
              </div>
            </div>
          )}

          {step >= 4 && (
            <div className="card-hover p-6 flex gap-4">
              <FileText className="text-[var(--accent)]" />
              <div>
                <p className="font-medium mb-2">
                  Conceptos clave
                </p>
                <ul className="text-sm text-[var(--text-dim)] list-disc ml-5">
                  <li>N8n</li>
                  <li>Workflows</li>
                  <li>Integración de aplicaciones</li>
                  <li>Self-hosted vs Cloud</li>
                  <li>Automatización de procesos</li>
                </ul>
              </div>
            </div>
          )}

        </div>

        {/* RESULTADO FINAL */}

        {step >= 5 && (

          <div className="mt-12 card-hover p-8 flex flex-col items-center text-center">

            <Database className="text-[var(--accent)] mb-3" size={28} />

            <p className="font-medium mb-2">
              Documento generado
            </p>

            <p className="text-sm text-[var(--text-dim)] mb-6">
              ✔ PDF educativo generado <br/>
              ✔ Preguntas tipo test <br/>
              ✔ Contenido para LinkedIn <br/>
              ✔ Newsletter
            </p>

            {/* barra generación */}

            <div className="w-full max-w-md mb-8">

              <div className="text-xs text-[var(--text-dim)] mb-2">
                Generando documento...
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div className="h-2 bg-[var(--accent)] animate-progress"></div>
              </div>

            </div>

            {/* preview pdf */}

            <div className="w-full max-w-4xl border border-[var(--border)] rounded-xl overflow-hidden shadow-sm">

              <iframe
                src="/ejemplo-n8n.pdf"
                className="w-full h-[650px]"
              />

            </div>

          </div>

        )}

      </div>

    </section>

  );
}