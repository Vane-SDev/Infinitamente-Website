import HeroTech from "../../components/HeroTech";
import TemarioTech from "../../components/TemarioTech";
import WaitlistTech from "../../components/WaitlistTech";

export const metadata = {
  title: "Clases de Programación y POO | Infinitamente STEM",
  description:
    "Clases de apoyo en lógica computacional, desarrollo web y Programación Orientada a Objetos.",
};

export default function ProgramacionPage() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white font-sans selection:bg-brand-primary/30">
      <HeroTech />
      <TemarioTech />
      <WaitlistTech />
    </main>
  );
}
