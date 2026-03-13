import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TutorDemo from "../components/TutorDemo";
import Architecture from "../components/Architecture";
import Footer from "../components/Footer";
import AutomationDemo from "../components/AutomationDemo";

export default function Home() {
  return (
    <main>

      <Navbar />

      {/* HERO */}
      <Hero />


      {/* DEMO DE AUTOMATIZACIÓN */}
      <AutomationDemo />


      {/* DEMO DEL TUTOR IA */}
      <TutorDemo />

      {/* ARQUITECTURA TÉCNICA */}
      <Architecture />

      {/* FOOTER */}
      <Footer />

    </main>
  );
}