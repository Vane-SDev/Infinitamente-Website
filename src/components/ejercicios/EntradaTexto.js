import { useId } from "react";
import BotonComprobar from "./BotonComprobar";

// El alumno escribe la respuesta. Al terminar el ejercicio se oculta.
export default function EntradaTexto({ tipo, valor, onCambiar, onComprobar, terminado }) {
  const inputId = useId();
  const ayudaId = useId();

  if (terminado) return null;

  return (
    <>
      <form onSubmit={onComprobar} className="flex flex-col sm:flex-row gap-3" noValidate>
        <label htmlFor={inputId} className="sr-only">
          Tu respuesta
        </label>
        <input
          id={inputId}
          type="text"
          inputMode="text"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          placeholder={tipo.placeholder}
          aria-describedby={ayudaId}
          value={valor}
          onChange={(e) => onCambiar(e.target.value)}
          className="flex-1 min-w-0 text-xl text-center sm:text-left text-brand-dark font-semibold px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-primary focus:outline-none focus:ring-4 focus:ring-brand-primary/20 transition-colors"
        />
        <BotonComprobar />
      </form>
      <p id={ayudaId} className="text-sm text-gray-500 mt-2">
        {tipo.ayudaFormato}
      </p>
    </>
  );
}
