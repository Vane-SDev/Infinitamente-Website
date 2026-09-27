import { useId } from "react";
import BotonComprobar from "./BotonComprobar";
import Casillero from "./Casillero";
import Expresion, { casillerosDe } from "./Expresion";

// La cuenta con casilleros para completar. Si hay más de un casillero, los
// que están mal quedan marcados en rojo (sin mostrar el valor correcto).
export default function EntradaCompletar({ tipo, ejercicio, valor, onCambiar, onComprobar, terminado, evaluacion }) {
  const ayudaId = useId();
  const etiquetas = casillerosDe(ejercicio.operacion);
  const marcados = valor.length > 1 ? (evaluacion?.casillerosMal ?? []) : [];

  function cambiar(indice, nuevo) {
    onCambiar(valor.map((v, i) => (i === indice ? nuevo : v)));
  }

  return (
    <form onSubmit={onComprobar} noValidate aria-describedby={terminado ? undefined : ayudaId}>
      <div className="py-6 px-4 mb-4 rounded-xl bg-gray-50 border border-gray-100">
        <Expresion
          texto={ejercicio.operacion}
          renderCasillero={(indice) => (
            <Casillero
              valor={valor[indice]}
              onCambiar={(nuevo) => cambiar(indice, nuevo)}
              etiqueta={etiquetas[indice]}
              marcado={marcados.includes(indice)}
              deshabilitado={terminado}
            />
          )}
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
