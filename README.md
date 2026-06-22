# 🤖 CourseMind AI — Transforma cursos grabados en conocimiento consultable

CourseMind AI es una landing interactiva que presenta un sistema de inteligencia artificial capaz de convertir clases grabadas en contenido educativo estructurado y consultable mediante un tutor basado en arquitectura RAG.

El proyecto demuestra dos procesos principales:

* **Pipeline de automatización:** convierte un vídeo en transcripción, conceptos clave, documentos PDF, preguntas tipo test y publicaciones para LinkedIn o newsletter.
* **Tutor IA:** permite al estudiante consultar el contenido del curso mediante lenguaje natural, obteniendo respuestas generadas por un workflow RAG externo desplegado en n8n.

🌐 **Ver demo en producción**

👉 https://TU-URL-DEMO.com

---

# ✨ Funcionalidades

* Landing page responsive de una sola página con navegación por anclas.
* Demo animada del pipeline de procesamiento.
* Visualización progresiva de resultados mediante temporizadores.
* Visor embebido de PDF generado durante la demostración.
* Chat funcional con tutor IA conectado a n8n.
* Historial de conversación durante la sesión.
* Sección visual explicativa de arquitectura RAG.
* Fondo animado con partículas, globs, orbes y efecto de cursor.
* Diseño totalmente responsive para móvil, tablet y escritorio.

> **Nota:** La demo de automatización es una simulación frontend con contenido predefinido. El chat del tutor sí realiza peticiones reales al workflow externo de n8n.

---

# 🛠 Stack Tecnológico

| Tecnología     | Uso                                   |
| -------------- | ------------------------------------- |
| Next.js 15     | Framework principal, App Router y SSR |
| React 19       | Componentes, estado y efectos         |
| TypeScript 5   | Tipado estricto                       |
| Tailwind CSS 4 | Sistema de estilos y responsive       |
| Lucide React   | Iconografía                           |
| next/font      | Optimización tipográfica              |
| Fetch API      | Comunicación con n8n                  |

---

# 🧱 Arquitectura

## Estructura del Proyecto

```text
app/
├── layout.tsx          # Layout raíz, metadata y fondo global
├── page.tsx            # Página principal
└── globals.css         # Variables CSS y animaciones

components/
├── Navbar.tsx          # Navegación desktop y móvil
├── Hero.tsx            # Presentación principal
├── AutomationDemo.tsx  # Simulación del pipeline
├── TutorDemo.tsx       # Chat conectado a n8n
├── Architecture.tsx    # Diagrama visual RAG
├── CursorGlow.tsx      # Efecto de cursor
└── Footer.tsx          # Contacto y enlaces

public/
└── ejemplo-n8n.pdf     # Documento generado en la demo
```

## Decisiones Técnicas

| Decisión                                  | Beneficio                       |
| ----------------------------------------- | ------------------------------- |
| Server Components                         | Menor carga de JavaScript       |
| Client Components solo donde es necesario | Bundle más ligero               |
| Arquitectura desacoplada                  | Fácil mantenimiento             |
| Tailwind CSS                              | Desarrollo rápido y consistente |
| Componentización clara                    | Escalabilidad y reutilización   |

---

# 🔗 Integración con n8n y Arquitectura RAG

El chat del tutor realiza peticiones reales a un webhook de n8n desplegado externamente.

### Ejemplo de petición

```http
POST https://[webhook-n8n]/preguntar-curso
Content-Type: application/json
```

```json
{
  "question": "pregunta del usuario",
  "course": "n8n"
}
```

## Flujo de Procesamiento

```text
Frontend
    ↓
Webhook n8n
    ↓
Embeddings
    ↓
Vector Database (Supabase)
    ↓
RAG
    ↓
Respuesta al usuario
```

El frontend acepta distintos formatos de respuesta:

* `respuesta`
* `answer`
* `response`

Esto reduce el acoplamiento con la implementación interna del workflow.

> El sistema RAG, los embeddings y la base vectorial viven fuera de este repositorio y son gestionados por el workflow de n8n.

---

# 🚀 Instalación Local

## Prerrequisitos

* Node.js >= 18.x
* npm >= 9.x

## 1. Clonar e instalar

```bash
git clone https://github.com/BenitaPlata/coursemind-ai.git
cd coursemind-ai
npm install
```

## 2. Iniciar en desarrollo

```bash
npm run dev
```

Abrir en el navegador:

```text
http://localhost:3000
```

> El tutor IA requiere que el webhook de n8n esté disponible para responder consultas. La demo de automatización funciona sin conexión externa.

---

# 🎨 Experiencia de Usuario

## Elementos Destacados

* Simulación visual paso a paso del pipeline.
* Chat IA integrado.
* Arquitectura RAG explicada visualmente.
* Fondo interactivo animado.
* Navegación fluida mediante scroll.
* Diseño enfocado en comprensión y claridad.

## Principios Aplicados

| Principio       | Aplicación                                 |
| --------------- | ------------------------------------------ |
| Claridad Visual | Explicación sencilla de procesos complejos |
| Jerarquía       | Organización progresiva de la información  |
| Interactividad  | Participación activa del usuario           |
| Consistencia    | Diseño uniforme en toda la experiencia     |
| Escalabilidad   | Estructura preparada para futuras mejoras  |

---

# 📱 Estrategia Responsive

Desarrollado siguiendo un enfoque responsive para garantizar una experiencia consistente en todos los dispositivos.

| Resolución | Dispositivo |
| ---------- | ----------- |
| 375px      | Smartphone  |
| 768px+     | Tablet      |
| 1024px+    | Desktop     |

Características:

* Componentes adaptativos.
* Layout flexible.
* Navegación optimizada para pantallas táctiles.
* Escalado progresivo de contenidos.

---

# 🧩 Qué Demuestra Este Proyecto

* Integración de frontend con workflows de automatización e IA.
* Arquitectura RAG desacoplada.
* Uso correcto de Server y Client Components en Next.js.
* Diseño visual avanzado sin librerías de animación externas.
* Capacidad para transformar procesos técnicos complejos en experiencias intuitivas.
* Pensamiento orientado a producto digital y escalabilidad.

---

# 👩‍💻 Autora

**Benita Plata**

🔗 [GitHub](https://github.com/BenitaPlata) •
🌐 [Portfolio](https://portfolio-benitaplata.vercel.app) •
💼 [LinkedIn](https://www.linkedin.com/in/TU-USUARIO-LINKEDIN/)

---

# 📄 Licencia

MIT License


