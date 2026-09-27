"use client";

import { useState } from "react";
import Ejercicio from "./Ejercicio";

export default function PracticaTema({ ejercicios }) {
  const [indice, setIndice] = useState(0);
  const actual = ejercicios[indice];

  return (
    <div className="max-w-2xl mx-auto">
      {/* La key reinicia el estado del ejercicio al pasar al siguiente */}
      {actual && <Ejercicio key={actual.id} ejercicio={actual} />}

      {ejercicios.length > 1 && (
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-gray-500">
            Ejercicio {indice + 1} de {ejercicios.length}
          </p>
          <button
            type="button"
            onClick={() => setIndice((indice + 1) % ejercicios.length)}
            className="text-brand-primary font-bold hover:translate-x-1 transition-transform"
          >
            {indice + 1 < ejercicios.length ? "Siguiente ejercicio" : "Volver al primero"}{" "}
            <span aria-hidden="true">→</span>
          </button>
        </div>
      )}
    </div>
  );
}
