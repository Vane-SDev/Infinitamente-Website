"use client";
import { useState, useRef, useEffect } from "react";
import { opinionesGMB } from "../data/resenasGoogle";

// Subcomponente: Maneja la lógica individual de cada reseña
const TarjetaResena = ({ opinion }) => {
  const [expandido, setExpandido] = useState(false);
  const limiteCaracteres = 130; 

  const esLargo = opinion.texto.length > limiteCaracteres;
  const textoMostrar =
    expandido || !esLargo
      ? opinion.texto
      : opinion.texto.substring(0, limiteCaracteres) + "...";

  return (
    <div className="w-[80vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center shrink-0 bg-gray-900 border border-gray-800 p-5 rounded-xl shadow-md flex flex-col h-fit min-h-[220px] transition-all duration-300 relative">
      {/* Estrellas */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex text-yellow-500 text-sm md:text-base">
          {"★".repeat(opinion.estrellas)}
        </div>
      </div>

      {/* Texto de la reseña */}
      <p className="text-gray-300 text-sm leading-relaxed italic mb-6 grow break-word whitespace-normal w-full">
        &quot;{textoMostrar}&quot;
        {esLargo && (
          <button
            onClick={() => setExpandido(!expandido)}
            className="text-brand-primary hover:text-brand-lila font-semibold ml-1 transition-colors text-xs uppercase tracking-wide"
          >
            {expandido ? " Leer menos" : " Leer más"}
          </button>
        )}
      </p>

      {/* Autor y Fecha */}
      <div className="flex items-center gap-3 border-t border-gray-800 pt-3 mt-auto shrink-0 w-full">
        <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary font-bold text-sm shrink-0">
          {opinion.nombre.charAt(0)}
        </div>
        <div className="overflow-hidden grow">
          <p className="text-white font-semibold text-xs truncate w-full">
            {opinion.nombre}
          </p>
          <p className="text-gray-500 text-[10px] truncate">{opinion.fecha}</p>
        </div>
      </div>
    </div>
  );
};

export default function Resenas() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Sincroniza el índice de los puntitos cuando el usuario hace scroll manual
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const itemWidth = container.children[0]?.offsetWidth || 0;
    if (itemWidth === 0) return;

    const newIndex = Math.round(container.scrollLeft / itemWidth);
    setCurrentIndex(newIndex);
  };

  // Lógica de auto-desplazamiento
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const container = scrollRef.current;
      const itemWidth = container.children[0]?.offsetWidth || 0;

      const maxScroll = container.scrollWidth - container.clientWidth;
      const isAtEnd = container.scrollLeft >= maxScroll - 10;

      if (isAtEnd) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: itemWidth, behavior: "smooth" });
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollToCard = (index) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const itemWidth = container.children[0]?.offsetWidth || 0;
    container.scrollTo({ left: itemWidth * index, behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-20 bg-[#080b14] border-y border-gray-800 overflow-hidden w-full relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Encabezado */}
        <div className="text-center mb-10 flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 mb-4 bg-gray-900/50 py-1.5 px-4 rounded-full border border-gray-800">
            <span className="text-lg font-bold text-white">5.0</span>
            <div className="flex text-yellow-500 text-base">★★★★★</div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
            Lo que dicen <span className="text-brand-primary">mis alumnos</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-2">
            Experiencias reales de estudiantes que lograron destrabar sus
            materias y avanzar en sus carreras.
          </p>
        </div>

        {/* Contenedor del Carrusel */}
        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-6 hide-scrollbar px-2 md:px-0"
          >
            {/* Iteramos y renderizamos nuestro nuevo subcomponente */}
            {opinionesGMB.map((opinion) => (
              <TarjetaResena key={opinion.id} opinion={opinion} />
            ))}
          </div>
        </div>

        {/* Paginación (Puntitos) */}
        <div className="flex justify-center items-center gap-2 mt-2">
          {opinionesGMB.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? "w-6 h-2 bg-brand-primary"
                  : "w-2 h-2 bg-gray-700 hover:bg-gray-500"
              }`}
              aria-label={`Ir a la reseña ${index + 1}`}
            />
          ))}
        </div>

        {/* Botón de acción */}
        <div className="text-center mt-10 relative z-10">
          <a
            href="https://g.page/r/CQOh2Z-tmLQREAE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white font-medium py-2.5 px-5 rounded-lg transition-all text-sm shadow-sm"
          >
            Ver todas las opiniones en Google
          </a>
        </div>
      </div>
    </section>
  );
}
