"use client";

import Link from "next/link";
import { useState } from "react";
import Ejercicio from "./Ejercicio";

// Cada ejercicio bien descubre un decimal más de π.
const PI = "3,14159265358979323846264338327950288419716939937510";

export default function PracticaTema({ ejercicios, siguiente }) {
  const [indice, setIndice] = useState(0);
  const [racha, setRacha] = useState(0); // ejercicios seguidos bien
  const [aciertos, setAciertos] = useState(0);
  const [temaTerminado, setTemaTerminado] = useState(false);
  const [vuelta, setVuelta] = useState(0); // cambia al volver a empezar
  const actual = ejercicios[indice];
  const esUltimo = indice === ejercicios.length - 1;
  const decimales = Math.min(aciertos, PI.length - 2);

  function alTerminar(acerto) {
    setRacha((r) => (acerto ? r + 1 : 0));
    if (acerto) setAciertos((a) => a + 1);
    if (esUltimo) setTemaTerminado(true);
  }

  function volverAEmpezar() {
    setIndice(0);
    setRacha(0);
    setAciertos(0);
    setTemaTerminado(false);
    setVuelta((v) => v + 1);
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* La key reinicia el estado del ejercicio al pasar al siguiente */}
      {actual && (
        <Ejercicio
          key={`${vuelta}-${actual.id}`}
          ejercicio={actual}
          esUltimo={esUltimo}
          racha={racha}
          onTerminar={alTerminar}
        />
      )}

      <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
        <div>
          {ejercicios.length > 1 && (
            <p className="text-sm text-gray-500">
              Ejercicio {indice + 1} de {ejercicios.length}
            </p>
          )}
          <p
            className="font-mono font-bold text-brand-dark tracking-wider"
            aria-label={`Decimales de pi que descubriste: ${decimales}`}
          >
            <span className="text-brand-primary">π</span> = {PI.slice(0, decimales ? decimales + 2 : 1)}
            <span className="text-gray-300">…</span>
          </p>
        </div>

        {temaTerminado ? (
          <div className="flex flex-wrap gap-2">
            {siguiente && (
              <Link
                href={siguiente.href}
                className="bg-brand-primary hover:bg-purple-600 text-white font-bold py-2 px-5 rounded-xl transition-colors"
              >
                Subir de nivel: {siguiente.nombre}
              </Link>
            )}
            <button
              type="button"
              onClick={volverAEmpezar}
              className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-bold py-2 px-5 rounded-xl transition-colors"
            >
              Volver a empezar
            </button>
          </div>
        ) : (
          ejercicios.length > 1 &&
          !esUltimo && (
            <button
              type="button"
              onClick={() => setIndice(indice + 1)}
              className="text-brand-primary font-bold hover:translate-x-1 transition-transform"
            >
              Siguiente ejercicio <span aria-hidden="true">→</span>
            </button>
          )
        )}
      </div>
    </div>
  );
}
