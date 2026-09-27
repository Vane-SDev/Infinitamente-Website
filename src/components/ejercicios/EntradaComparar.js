import { useId } from "react";
import BotonComprobar from "./BotonComprobar";
import Expresion from "./Expresion";

const SIGNOS = [
  { signo: "<", nombre: "menor que" },
  { signo: "=", nombre: "igual a" },
  { signo: ">", nombre: "mayor que" },
];

// Dos fracciones con un casillero en el medio y tres botones para elegir el
// signo que va ahí.
export default function EntradaComparar({ tipo, ejercicio, valor, onCambiar, onComprobar, terminado }) {
  const ayudaId = useId();

  return (
    <form onSubmit={onComprobar} noValidate aria-describedby={terminado ? undefined : ayudaId}>
      <div className="py-6 px-4 mb-4 rounded-xl bg-gray-50 border border-gray-100">
        <Expresion
          texto={ejercicio.operacion}
          renderCasillero={() => (
            <span
              aria-hidden="true"
              className={`inline-flex items-center justify-center w-14 h-14 rounded-lg border-2 text-brand-primary ${
                valor ? "border-brand-primary bg-white" : "border-dashed border-brand-light"
              }`}
            >
              {valor}
            </span>
          )}
        />
      </div>

      {!terminado && (
        <>
          <div role="group" aria-label="Elegí el signo" className="flex justify-center gap-3 mb-4">
            {SIGNOS.map(({ signo, nombre }) => (
              <button
                key={signo}
                type="button"
                aria-pressed={valor === signo}
                aria-label={nombre}
                onClick={() => onCambiar(signo)}
                className={`w-16 h-16 sm:w-20 sm:h-20 text-3xl sm:text-4xl font-bold rounded-xl border-2 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-primary/30 ${
                  valor === signo
                    ? "bg-brand-primary border-brand-primary text-white"
                    : "bg-white border-brand-light text-brand-dark hover:border-brand-primary"
                }`}
              >
                {signo}
              </button>
            ))}
          </div>
          <div className="flex justify-center">
            <BotonComprobar />
          </div>
          <p id={ayudaId} className="text-sm text-gray-500 mt-2 text-center">
            {tipo.ayudaFormato}
          </p>
        </>
      )}
    </form>
  );
}
