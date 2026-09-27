import { useId } from "react";
import { totalPartes } from "@/lib/figuras";
import BotonComprobar from "./BotonComprobar";
import FiguraFraccion from "./FiguraFraccion";

// El alumno pinta partes de la figura. Al terminar, la figura queda a la vista
// sin poder cambiarse.
export default function EntradaPintar({ tipo, ejercicio, valor, onCambiar, onComprobar, terminado }) {
  const ayudaId = useId();
  const total = totalPartes(ejercicio.grafico);

  function alternar(indice) {
    onCambiar(
      valor.includes(indice) ? valor.filter((i) => i !== indice) : [...valor, indice],
    );
  }

  return (
    <form onSubmit={onComprobar} noValidate aria-describedby={terminado ? undefined : ayudaId}>
      <div className="py-6 px-2 sm:px-4 mb-3 rounded-xl bg-gray-50 border border-gray-100">
        <FiguraFraccion
          grafico={ejercicio.grafico}
          pintadas={valor}
          onAlternar={terminado ? undefined : alternar}
        />
      </div>
      <p className="text-center text-gray-600 mb-4" aria-live="polite">
        Pintaste {valor.length} de {total} {total === 1 ? "parte" : "partes"}.
      </p>
      {!terminado && (
        <>
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
