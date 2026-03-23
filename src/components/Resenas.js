"use client";
import { useState, useRef, useEffect } from "react";
import { opinionesGMB } from "../data/resenasGoogle";

export default function Resenas() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Sincroniza el índice de los puntitos cuando el usuario hace scroll manual
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    // Tomamos el ancho del primer elemento como referencia
    const itemWidth = container.children[0]?.offsetWidth || 0;
    if (itemWidth === 0) return;

    // Calculamos qué tarjeta está más cerca del borde izquierdo
    const newIndex = Math.round(container.scrollLeft / itemWidth);
    setCurrentIndex(newIndex);
  };

  // Lógica de auto-desplazamiento
  useEffect(() => {
    if (isPaused) return; // Si el usuario interactúa, frenamos el temporizador

    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const container = scrollRef.current;
      const itemWidth = container.children[0]?.offsetWidth || 0;

      const maxScroll = container.scrollWidth - container.clientWidth;
      const isAtEnd = container.scrollLeft >= maxScroll - 10;

      if (isAtEnd) {
        // Si llegamos al final, volvemos al principio
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Avanzamos una tarjeta
        container.scrollBy({ left: itemWidth, behavior: "smooth" });
      }
    }, 4500); // 4.5 segundos por tarjeta

    return () => clearInterval(interval);
  }, [isPaused]);

  // Función para ir a una tarjeta específica al hacer clic en un puntito
  const scrollToCard = (index) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const itemWidth = container.children[0]?.offsetWidth || 0;
    container.scrollTo({ left: itemWidth * index, behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-24 bg-[#080b14] border-y border-gray-800 overflow-hidden w-full relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Encabezado (Sin cambios) */}
        <div className="text-center mb-10 md:mb-16 flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 mb-4 bg-gray-900/50 py-1.5 px-4 md:py-2 md:px-6 rounded-full border border-gray-800">
            <span className="text-lg md:text-xl font-bold text-white">5.0</span>
            <div className="flex text-yellow-500 text-base md:text-lg">
              ★★★★★
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Lo que dicen <span className="text-brand-primary">mis alumnos</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-2">
            Experiencias reales de estudiantes que lograron destrabar sus
            materias y avanzar en sus carreras.
          </p>
        </div>

        {/* Contenedor del Carrusel con eventos de pausa */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-6 hide-scrollbar px-2 md:px-0 pr-10 md:pr-10"
          >
            {opinionesGMB.map((opinion) => (
              <div
                key={opinion.id}
                className="w-[85vw] md:w-[calc(50%-11px)] lg:w-[calc(33.333%-16px)] snap-center shrink-0 bg-gray-900 border border-gray-800 p-6 md:p-8 rounded-2xl shadow-lg flex flex-col h-auto relative overflow-hidden"
              >
                {/* Estrellas */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex text-yellow-500 text-base md:text-lg">
                    {"★".repeat(opinion.estrellas)}
                  </div>
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
        </div>

        {/* Paginación (Puntitos) */}
        <div className="flex justify-center items-center gap-2 mt-4 md:mt-8">
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
        <div className="text-center mt-8 md:mt-12 relative z-10">
          <a
            href="https://g.page/r/CQOh2Z-tmLQREAE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white font-medium py-2.5 px-5 md:py-3 md:px-6 rounded-xl transition-all text-sm md:text-base shadow-lg"
          >
            Ver todas las opiniones en Google
          </a>
        </div>
      </div>
    </section>
  );
}
