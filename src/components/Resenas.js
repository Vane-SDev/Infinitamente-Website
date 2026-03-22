"use client";
import { opinionesGMB } from "../data/resenasGoogle";

export default function Resenas() {
  return (
    // Redujimos el padding vertical en mobile (py-12) y lo dejamos grande en PC (md:py-24)
    <section className="py-12 md:py-24 bg-[#080b14] border-y border-gray-800 overflow-hidden w-full relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Encabezado */}
        <div className="text-center mb-10 md:mb-16 flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 mb-4 bg-gray-900/50 py-1.5 px-4 md:py-2 md:px-6 rounded-full border border-gray-800">
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
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
            <span className="text-lg md:text-xl font-bold text-white">5.0</span>
            <div className="flex text-yellow-500 text-base md:text-lg">
              ★★★★★
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Lo que dicen{" "}
            <span className="text-brand-primary">mis alumnos</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-2">
            Experiencias reales de estudiantes que lograron destrabar sus
            materias y avanzar en sus carreras.
          </p>
        </div>

        {/* Carrusel en Mobile / Grilla en Desktop */}
        {/* Agregamos pr-10 en mobile para que la última tarjeta no quede pegada al borde al scrollear */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 hide-scrollbar -mb-4 px-2 md:px-0 pr-10 md:pr-0">
          {opinionesGMB.map((opinion) => (
            <div
              key={opinion.id}
              // min-w-[85vw] está bien, el problema era el contenido interno
              className="w-[85vw] sm:w-[65vw] md:w-full snap-center shrink-0 bg-gray-900 border border-gray-800 p-6 md:p-8 rounded-2xl shadow-lg flex flex-col h-auto relative overflow-hidden"
            >
              {/* Estrellas y Logo */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex text-yellow-500 text-base md:text-lg">
                  {"★".repeat(opinion.estrellas)}
                </div>
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 opacity-50 shrink-0 ml-2"
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

              <p className="text-gray-300 text-sm md:text-base leading-relaxed italic mb-8 grow break-word whitespace-normal w-full">
                &quot;{opinion.texto}&quot;
              </p>

              {/* Autor y Fecha */}
              <div className="flex items-center gap-3 border-t border-gray-800 pt-4 mt-auto shrink-0 w-full">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary font-bold text-sm md:text-lg shrink-0">
                  {opinion.nombre.charAt(0)}
                </div>
                <div className="overflow-hidden grow">
                  <p className="text-white font-semibold text-xs md:text-sm truncate w-full">
                    {opinion.nombre}
                  </p>
                  <p className="text-gray-500 text-[10px] md:text-xs truncate">
                    {opinion.fecha}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón de acción */}
        <div className="text-center mt-6 md:mt-12 relative z-10">
          <a
            href="https://g.page/r/CQOh2Z-tmLQREAE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white font-medium py-2.5 px-5 md:py-3 md:px-6 rounded-xl transition-all text-sm md:text-base shadow-lg"
          >
            Ver todas las opiniones en Google
            <svg
              className="w-4 h-4 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
