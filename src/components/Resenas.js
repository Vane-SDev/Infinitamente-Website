"use client";
// Importamos la "base de datos" estática
import { opinionesGMB } from "../data/resenasGoogle";

export default function Resenas() {
  return (
    <section className="py-24 bg-[#080b14] px-6 border-y border-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="flex items-center justify-center gap-3 mb-4 bg-gray-900/50 py-2 px-6 rounded-full border border-gray-800">
            {/* Logo SVG de Google */}
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span className="text-xl font-bold text-white">5.0</span>
            <div className="flex text-yellow-500 text-lg">★★★★★</div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">
            No me creas a mí,{" "}
            <span className="text-brand-primary">creele a ellos</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Más de 15 opiniones perfectas avalan la metodología. Estudiantes que
            destrabaron sus materias y avanzaron en sus carreras.
          </p>
        </div>

        {/* Grilla de Reseñas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opinionesGMB.map((opinion) => (
            <div
              key={opinion.id}
              className="bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-lg hover:border-brand-primary/30 transition-all flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex text-yellow-500 text-lg">
                  {"★".repeat(opinion.estrellas)}
                </div>
                {/* Logo de Google en cada tarjeta */}
                <svg
                  className="w-5 h-5 opacity-50"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </div>

              <p className="text-gray-300 leading-relaxed italic mb-8 grow">
                &quot;{opinion.texto}&quot;
              </p>

              <div className="flex items-center gap-3 border-t border-gray-800 pt-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary font-bold text-lg shrink-0">
                  {opinion.nombre.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm line-clamp-1">
                    {opinion.nombre}
                  </p>
                  <p className="text-gray-500 text-xs">{opinion.fecha}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón de acción */}
        <div className="text-center mt-12">
          
          <a
            href="https://g.page/r/CQOh2Z-tmLQREAE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white font-medium py-3 px-6 rounded-xl transition-all"
          >
            Ver las 15 opiniones en Google
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
