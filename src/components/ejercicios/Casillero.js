// Campo chico para escribir un número entero dentro de una cuenta.
// Con conSigno el teclado del celular muestra el menos (el numérico no lo trae).
export default function Casillero({ valor, onCambiar, etiqueta, marcado, deshabilitado, conSigno }) {
  return (
    <input
      type="text"
      inputMode={conSigno ? "text" : "numeric"}
      autoComplete="off"
      maxLength={4}
      aria-label={etiqueta}
      aria-invalid={marcado || undefined}
      disabled={deshabilitado}
      value={valor}
      onChange={(e) => onCambiar(e.target.value)}
      className={`w-12 h-12 sm:w-16 sm:h-14 text-center text-2xl sm:text-3xl font-bold text-brand-dark rounded-lg border-2 focus:outline-none focus:ring-4 focus:ring-brand-primary/20 transition-colors disabled:bg-gray-100 ${
        marcado
          ? "border-red-500 bg-red-50"
          : "border-brand-light bg-white focus:border-brand-primary"
      }`}
    />
  );
}
