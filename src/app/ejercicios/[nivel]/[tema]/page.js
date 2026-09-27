import { notFound } from "next/navigation";
import MigasEjercicios from "@/components/ejercicios/MigasEjercicios";
import PracticaTema from "@/components/ejercicios/PracticaTema";
import { getNivel, getTema, getTemas, nivelesDisponibles } from "@/data/ejercicios";

// Genera todas las combinaciones nivel + tema en el build.
export function generateStaticParams() {
  return nivelesDisponibles.flatMap((nivel) =>
    getTemas(nivel.slug).map((tema) => ({ nivel: nivel.slug, tema: tema.slug })),
  );
}

async function buscar(params) {
  const { nivel: nivelSlug, tema: temaSlug } = await params;
  const nivel = getNivel(nivelSlug);
  const tema = nivel && getTema(nivel.slug, temaSlug);
  return { nivel, tema };
}

export async function generateMetadata({ params }) {
  const { nivel, tema } = await buscar(params);
  if (!tema) return {};

  const nombreTema = tema.nombre.toLowerCase();
  const nombreNivel = nivel.nombre.toLowerCase();
  return {
    title: `Ejercicios de ${nombreTema} para ${nombreNivel}`,
    description: `Practicá ${nombreTema} con ejercicios interactivos para ${nombreNivel} (${nivel.detalle}): pistas si te trabás y resolución paso a paso.`,
  };
}

export default async function TemaPage({ params }) {
  const { nivel, tema } = await buscar(params);
  if (!tema) notFound();

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6 sm:px-12 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <MigasEjercicios
          items={[
            { nombre: "Ejercicios", href: "/ejercicios" },
            { nombre: nivel.nombre, href: `/ejercicios/${nivel.slug}` },
            { nombre: tema.nombre, href: `/ejercicios/${nivel.slug}/${tema.slug}` },
          ]}
        />

        <header className="mb-10 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-dark mb-4 tracking-tight">
            {tema.nombre} <span className="text-brand-primary">· {nivel.nombre}</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resolvé cada ejercicio. Si te trabás, te doy una pista.
          </p>
        </header>

        <PracticaTema ejercicios={tema.ejercicios} />
      </div>
    </div>
  );
}
