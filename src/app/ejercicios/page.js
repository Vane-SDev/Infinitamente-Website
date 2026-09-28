import Link from "next/link";
import { niveles } from "@/data/ejercicios";

export const metadata = {
  title: "Ejercicios interactivos de matemática",
  description:
    "Practicá matemática con ejercicios interactivos para primaria y secundaria: resolvé, recibí pistas si te trabás y mirá la resolución paso a paso.",
};

export default function EjerciciosPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6 sm:px-12 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16 text-center border-b border-gray-200 pb-10">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-brand-dark mb-6 tracking-tight">
            Ejercicios <span className="text-brand-primary">Interactivos</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Elegí tu nivel, resolvé y, si te trabás, te doy una pista.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {niveles.map((nivel) =>
            nivel.disponible ? (
              <Link
                key={nivel.slug}
                href={`/ejercicios/${nivel.slug}`}
                className="block group h-full"
              >
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-light transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <p className="text-sm font-bold text-brand-primary uppercase tracking-wider mb-2">
                      {nivel.detalle}
                    </p>
                    <h2 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors">
                      {nivel.nombre}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      {nivel.descripcion}
                    </p>
                  </div>
                  <div className="flex items-center text-brand-primary font-bold group-hover:translate-x-2 transition-transform">
                    Elegir tema <span className="ml-2 text-xl">→</span>
                  </div>
                </div>
              </Link>
            ) : (
              <div
                key={nivel.slug}
                className="bg-white/60 p-8 rounded-2xl border border-dashed border-gray-300 h-full flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block bg-gray-200 text-gray-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                    Próximamente
                  </span>
                  <h2 className="text-2xl font-bold text-gray-500 mb-4">
                    {nivel.nombre}
                  </h2>
                  <p className="text-gray-500 leading-relaxed">
                    {nivel.descripcion}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
