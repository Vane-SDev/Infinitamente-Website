// Dibuja "2/7 + 3/7" con las fracciones apiladas, los mixtos como "1 3/4" con
// el entero al lado de la fracción, y los casilleros "□" como lugares para
// completar. El lector de pantalla lee el texto original (con "casillero" en
// lugar de □): la versión visual queda oculta para él, salvo los casilleros,
// que son campos para escribir.

// Un número puede ser un casillero. Cada pedazo es un mixto (entero +
// fracción), una fracción o cualquier otra cosa sin espacios (números, signos).
const N = "(?:\\d+|□)";
const PEDAZOS = new RegExp(`(-?${N})\\s+(${N})\\/(${N})|(-?${N})\\/(${N})|\\S+`, "g");

// Lista de casilleros en el orden en que aparecen, con su nombre para el
// lector de pantalla. La usan Expresion y la entrada "completar".
export function casillerosDe(texto) {
  const casilleros = [];
  for (const [original, entero, numMixto, denMixto, numerador, denominador] of texto.matchAll(PEDAZOS)) {
    const partes = entero
      ? [[entero, "entero"], [numMixto, "numerador"], [denMixto, "denominador"]]
      : numerador
        ? [[numerador, "numerador"], [denominador, "denominador"]]
        : [[original, "número"]];
    for (const [parte, rol] of partes) {
      if (parte === "□") casilleros.push(`${rol} que falta`);
    }
  }
  if (casilleros.length === 1) return casilleros;
  return casilleros.map((nombre, i) => `Casillero ${i + 1} de ${casilleros.length}: ${nombre}`);
}

export default function Expresion({ texto, renderCasillero }) {
  const pedazos = [...texto.matchAll(PEDAZOS)];
  let indiceCasillero = 0;

  // Un número o un casillero. Sin renderCasillero, el casillero se dibuja vacío.
  function numero(valor) {
    if (valor !== "□") return <span aria-hidden="true">{valor}</span>;
    const indice = indiceCasillero++;
    if (renderCasillero) return renderCasillero(indice);
    return (
      <span
        aria-hidden="true"
        className="inline-block w-10 h-10 border-2 border-dashed border-brand-light rounded-lg align-middle"
      />
    );
  }

  function fraccion(numerador, denominador) {
    return (
      <span className="inline-flex flex-col items-center leading-none">
        <span className="px-1">{numero(numerador)}</span>
        <span aria-hidden="true" className="w-full h-0.5 bg-brand-dark my-1 rounded" />
        <span className="px-1">{numero(denominador)}</span>
      </span>
    );
  }

  return (
    <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-4 text-3xl sm:text-4xl font-bold text-brand-dark">
      <span className="sr-only">{texto.replaceAll("□", "casillero")}</span>
      {pedazos.map((pedazo, index) => {
        const [original, entero, numMixto, denMixto, numerador, denominador] = pedazo;

        if (entero) {
          return (
            <span key={index} className="inline-flex items-center gap-1">
              {numero(entero)}
              {fraccion(numMixto, denMixto)}
            </span>
          );
        }
        if (numerador) {
          return <span key={index}>{fraccion(numerador, denominador)}</span>;
        }
        if (original === "□") {
          return <span key={index}>{numero(original)}</span>;
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
