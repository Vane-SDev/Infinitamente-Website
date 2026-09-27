import { useId } from "react";
import BotonComprobar from "./BotonComprobar";
import Casillero from "./Casillero";

function FraccionConCasilleros({ fraccion, onCambiar, nombre }) {
  return (
    <span className="inline-flex flex-col items-center gap-1">
      <Casillero
        valor={fraccion.n}
        onCambiar={(n) => onCambiar({ ...fraccion, n })}
        etiqueta={`Numerador de la ${nombre} fracción`}
      />
      <span aria-hidden="true" className="w-full h-0.5 bg-brand-dark rounded" />
      <Casillero
        valor={fraccion.d}
        onCambiar={(d) => onCambiar({ ...fraccion, d })}
        etiqueta={`Denominador de la ${nombre} fracción`}
      />
    </span>
  );
}

const NOMBRES = { "+": "+", "-": "−", "×": "×", "÷": "÷" };

// Armar la cuenta del problema: □/□ [operación] □/□. Las operaciones del
// menú las define el paso (tipo.operadores).
export default function EntradaPlanteo({ tipo, valor, onCambiar, onComprobar, terminado }) {
  const ayudaId = useId();
  if (terminado) return null;

  return (
    <form onSubmit={onComprobar} noValidate aria-describedby={ayudaId}>
      <div className="py-6 px-2 sm:px-4 mb-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center gap-3 sm:gap-4">
        <FraccionConCasilleros
          fraccion={valor.a}
          onCambiar={(a) => onCambiar({ ...valor, a })}
          nombre="primera"
        />
        <select
          aria-label="Operación"
          value={valor.operador}
          onChange={(e) => onCambiar({ ...valor, operador: e.target.value })}
          className="h-12 sm:h-14 px-2 text-2xl sm:text-3xl font-bold text-brand-primary bg-white rounded-lg border-2 border-brand-light focus:border-brand-primary focus:outline-none focus:ring-4 focus:ring-brand-primary/20"
        >
          <option value="">?</option>
          {tipo.operadores.map((operador) => (
            <option key={operador} value={operador}>
              {NOMBRES[operador]}
            </option>
          ))}
        </select>
        <FraccionConCasilleros
          fraccion={valor.b}
          onCambiar={(b) => onCambiar({ ...valor, b })}
          nombre="segunda"
        />
      </div>
      <div className="flex justify-center">
        <BotonComprobar />
      </div>
      <p id={ayudaId} className="text-sm text-gray-500 mt-2 text-center">
        {tipo.ayudaFormato}
      </p>
    </form>
  );
}
