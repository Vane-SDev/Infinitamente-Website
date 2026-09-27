// Dibuja "2/7 + 3/7" con las fracciones apiladas, y los mixtos como "1 3/4"
// con el entero al lado de la fracción. El lector de pantalla lee el texto
// original, porque la versión visual queda oculta para él.

// Cada pedazo es un mixto (entero + fracción), una fracción o cualquier otra
// cosa sin espacios (números, signos).
const PEDAZOS = /(-?\d+)\s+(\d+)\/(\d+)|(-?\d+)\/(\d+)|\S+/g;

function Fraccion({ numerador, denominador }) {
  return (
    <span className="inline-flex flex-col items-center leading-none">
      <span className="px-1">{numerador}</span>
      <span className="w-full h-0.5 bg-brand-dark my-1 rounded" />
      <span className="px-1">{denominador}</span>
    </span>
  );
}

export default function Expresion({ texto }) {
  const pedazos = [...texto.matchAll(PEDAZOS)];

  return (
    <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-4 text-3xl sm:text-4xl font-bold text-brand-dark">
      <span className="sr-only">{texto}</span>
      {pedazos.map((pedazo, index) => {
        const [original, entero, numMixto, denMixto, numerador, denominador] = pedazo;

        if (entero) {
          return (
            <span key={index} aria-hidden="true" className="inline-flex items-center gap-1">
              <span>{entero}</span>
              <Fraccion numerador={numMixto} denominador={denMixto} />
            </span>
          );
        }
        if (numerador) {
          return (
            <span key={index} aria-hidden="true">
              <Fraccion numerador={numerador} denominador={denominador} />
            </span>
          );
        }
        return (
          <span key={index} aria-hidden="true" className="text-brand-primary">
            {original}
          </span>
        );
      })}
    </div>
  );
}
