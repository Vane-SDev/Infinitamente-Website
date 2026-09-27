import Link from "next/link";
import { notFound } from "next/navigation";
import MigasEjercicios from "@/components/ejercicios/MigasEjercicios";
import { getNivel, getTemas, nivelesDisponibles } from "@/data/ejercicios";

// Le dice a Next qué niveles existen para generar sus páginas en el build.
export function generateStaticParams() {
  return nivelesDisponibles.map((nivel) => ({ nivel: nivel.slug }));
}

export async function generateMetadata({ params }) {
  const { nivel: nivelSlug } = await params;
  const nivel = getNivel(nivelSlug);
  if (!nivel) return {};

  const nombre = nivel.nombre.toLowerCase();
  return {
    title: `Ejercicios de matemática para ${nombre}`,
    description: `Ejercicios interactivos de matemática para ${nombre} (${nivel.detalle}), con pistas y resolución paso a paso.`,
  };
}

export default async function NivelPage({ params }) {
  const { nivel: nivelSlug } = await params;
  const nivel = getNivel(nivelSlug);
  if (!nivel) notFound();

  const temas = getTemas(nivel.slug);

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6 sm:px-12 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <MigasEjercicios
          items={[
            { nombre: "Ejercicios", href: "/ejercicios" },
            { nombre: nivel.nombre, href: `/ejercicios/${nivel.slug}` },
          ]}
        />

        <header className="mb-16 text-center border-b border-gray-200 pb-10">
          <p className="text-sm font-bold text-brand-primary uppercase tracking-wider mb-3">
            {nivel.detalle}
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-brand-dark mb-6 tracking-tight">
            Ejercicios para <span className="text-brand-primary">{nivel.nombre}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Elegí un tema para empezar a practicar.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {temas.map((tema) => (
            <Link
              key={tema.slug}
              href={`/ejercicios/${nivel.slug}/${tema.slug}`}
              className="block group h-full"
            >
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-light transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors">
                    {tema.nombre}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {tema.descripcion}
                  </p>
                </div>
                <div className="flex items-center text-brand-primary font-bold group-hover:translate-x-2 transition-transform">
                  Practicar ({tema.ejercicios.length} ejercicios){" "}
                  <span className="ml-2 text-xl">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
