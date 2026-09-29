import { notFound } from "next/navigation";
import MigasEjercicios from "@/components/ejercicios/MigasEjercicios";
import PracticaTema from "@/components/ejercicios/PracticaTema";
import {
  getCurso,
  getNivel,
  getRutasEjercicios,
  getSiguienteCurso,
  getTema,
} from "@/data/ejercicios";

// Genera todas las combinaciones nivel + curso + tema en el build.
export function generateStaticParams() {
  return getRutasEjercicios().flatMap(({ nivel, curso, temas }) =>
    temas.map((tema) => ({ nivel, curso, tema })),
  );
}

async function buscar(params) {
  const { nivel: nivelSlug, curso: cursoSlug, tema: temaSlug } = await params;
  const nivel = getNivel(nivelSlug);
  const curso = nivel && getCurso(nivel.slug, cursoSlug);
  const tema = curso && getTema(nivel.slug, curso.slug, temaSlug);
  return { nivel, curso, tema };
}

export async function generateMetadata({ params }) {
  const { curso, tema } = await buscar(params);
  if (!tema) return {};

  const nombreTema = tema.nombre.toLowerCase();
  return {
    title: `Ejercicios de ${nombreTema} para ${curso.nombreCompleto}`,
    description: `Practicá ${nombreTema} con ejercicios interactivos para ${curso.nombreCompleto} (${curso.edad}): pistas si te trabás y resolución paso a paso.`,
  };
}

export default async function TemaPage({ params }) {
  const { nivel, curso, tema } = await buscar(params);
  if (!tema) notFound();

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6 sm:px-12 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <MigasEjercicios
          items={[
            { nombre: "Ejercicios", href: "/ejercicios" },
            { nombre: nivel.nombre, href: `/ejercicios/${nivel.slug}` },
            { nombre: curso.nombre, href: `/ejercicios/${nivel.slug}/${curso.slug}` },
            {
              nombre: tema.nombre,
              href: `/ejercicios/${nivel.slug}/${curso.slug}/${tema.slug}`,
            },
          ]}
        />

        <header className="mb-10 text-center">
          <p className="text-sm font-bold text-brand-primary uppercase tracking-wider mb-3">
            {nivel.nombre} · {curso.edad}
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-dark mb-4 tracking-tight">
            {tema.nombre} <span className="text-brand-primary">· {curso.nombre}</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resolvé cada ejercicio. Si te trabás, te doy una pista.
          </p>
        </header>

        <PracticaTema
          ejercicios={tema.ejercicios}
          siguiente={getSiguienteCurso(nivel.slug, curso.slug, tema.slug)}
        />
      </div>
    </div>
  );
}
