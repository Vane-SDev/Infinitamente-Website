import { useId } from "react";
import BotonComprobar from "./BotonComprobar";
import RectaNumerica from "./RectaNumerica";

// El alumno toca la marca de la recta donde va la fracción. Al terminar, la
// recta queda a la vista sin poder cambiarse.
export default function EntradaRecta({ tipo, ejercicio, valor, onCambiar, onComprobar, terminado }) {
  const ayudaId = useId();

  return (
    <form onSubmit={onComprobar} noValidate aria-describedby={terminado ? undefined : ayudaId}>
      <div className="py-6 px-2 sm:px-4 mb-4 rounded-xl bg-gray-50 border border-gray-100">
        <RectaNumerica
          recta={ejercicio.recta}
          elegida={valor}
          onElegir={terminado ? undefined : onCambiar}
        />
      </div>
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
