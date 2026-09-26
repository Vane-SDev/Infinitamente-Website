"use client";

import { useState } from "react";
import { ejercicios, niveles } from "@/data/ejercicios";
import Ejercicio from "./Ejercicio";

export default function EjerciciosInteractivos() {
  const [nivel, setNivel] = useState(niveles[0].id);
  const [indice, setIndice] = useState(0);

  const delNivel = ejercicios.filter((e) => e.nivel === nivel);
  const actual = delNivel[indice];

  function elegirNivel(id) {
    setNivel(id);
    setIndice(0);
  }

  return (
    <section aria-labelledby="titulo-ejercicios" className="mb-20">
      <div className="text-center mb-8">
        <h2
          id="titulo-ejercicios"
          className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight mb-3"
        >
          Practicá con ejercicios interactivos
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Elegí el nivel, resolvé y, si te trabás, te doy una pista.
        </p>
      </div>

      <div
        role="group"
        aria-label="Nivel educativo"
        className="flex justify-center gap-3 mb-8"
      >
        {niveles.map((n) => {
          const activo = n.id === nivel;
          return (
            <button
              key={n.id}
              type="button"
              aria-pressed={activo}
              onClick={() => elegirNivel(n.id)}
              className={`flex-1 sm:flex-none px-5 py-3 rounded-xl border-2 transition-colors ${
                activo
                  ? "bg-brand-primary border-brand-primary text-white"
                  : "bg-white border-gray-200 text-brand-dark hover:border-brand-light"
              }`}
            >
              <span className="block font-bold">{n.nombre}</span>
              <span className={`block text-xs ${activo ? "text-white/80" : "text-gray-500"}`}>
                {n.detalle}
              </span>
            </button>
          );
        })}
      </div>

      <div className="max-w-2xl mx-auto">
        {/* La key reinicia el estado del ejercicio al cambiar de nivel o de ejercicio */}
        {actual && <Ejercicio key={actual.id} ejercicio={actual} />}

        {delNivel.length > 1 && (
          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-gray-500">
              Ejercicio {indice + 1} de {delNivel.length}
            </p>
            <button
              type="button"
              onClick={() => setIndice((indice + 1) % delNivel.length)}
              className="text-brand-primary font-bold hover:translate-x-1 transition-transform"
            >
              {indice + 1 < delNivel.length ? "Siguiente ejercicio" : "Volver al primero"}{" "}
              <span aria-hidden="true">→</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
