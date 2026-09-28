import { leerExpresion, parsearExpresion } from "@/lib/expresion";

// Dibuja una cuenta: fracciones apiladas, mixtos ("1 3/4"), paréntesis que se
// estiran a la altura de lo que encierran, potencias con el exponente arriba,
// raíces con la barra sobre el radicando y casilleros "□" para completar.
// El lector de pantalla escucha la cuenta leída ("2 tercios al cuadrado más
// 1 noveno"): la versión visual queda oculta para él, salvo los casilleros,
// que son campos para escribir.

function Parentesis({ lado }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 10 100"
      preserveAspectRatio="none"
      className="w-2.5 sm:w-3 self-stretch shrink-0"
    >
      <path
        d={lado === "abre" ? "M9 2 Q1 50 9 98" : "M1 2 Q9 50 1 98"}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function SignoRaiz() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 100"
      preserveAspectRatio="none"
      className="w-4 sm:w-5 self-stretch shrink-0 -mr-px"
    >
      <path
        d="M1 62 L6 56 L11 98 L19 1"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function Expresion({ texto, renderCasillero }) {
  const nodos = parsearExpresion(texto);
  let indiceCasillero = 0;

  function dibujarNumero(nodo) {
    if (nodo.valor !== "□") return <span aria-hidden="true">{nodo.valor}</span>;
    const indice = indiceCasillero++;
    if (renderCasillero) return renderCasillero(indice);
    return (
      <span
        aria-hidden="true"
        className="inline-block w-10 h-10 border-2 border-dashed border-brand-light rounded-lg align-middle"
      />
    );
  }

  function dibujarLista(lista) {
    return lista.map((nodo, index) => <span key={index} className="inline-flex">{dibujar(nodo)}</span>);
  }

  function dibujar(nodo) {
    switch (nodo.tipo) {
      case "numero":
        return dibujarNumero(nodo);
      case "fraccion":
        return (
          <span className="inline-flex flex-col items-center leading-none">
            <span className="px-1">{dibujarNumero(nodo.numerador)}</span>
            <span aria-hidden="true" className="w-full h-0.5 bg-brand-dark my-1 rounded" />
            <span className="px-1">{dibujarNumero(nodo.denominador)}</span>
          </span>
        );
      case "mixto":
        return (
          <span className="inline-flex items-center gap-1">
            {dibujarNumero(nodo.entero)}
            {dibujar(nodo.fraccion)}
          </span>
        );
      case "grupo":
        return (
          <span className="inline-flex items-center gap-2 sm:gap-3">
            <Parentesis lado="abre" />
            {dibujarLista(nodo.hijos)}
            <Parentesis lado="cierra" />
          </span>
        );
      case "potencia":
        return (
          <span className="inline-flex items-start">
            {dibujar(nodo.base)}
            <span aria-hidden="true" className="text-xl sm:text-2xl leading-none ml-0.5">
              {nodo.exponente === "²" ? "2" : "3"}
            </span>
          </span>
        );
      case "raiz": {
        // El paréntesis de √(9/16) no se dibuja: la barra ya agrupa.
        const radicando = nodo.radicando.tipo === "grupo" ? nodo.radicando.hijos : [nodo.radicando];
        return (
          <span className="inline-flex items-stretch">
            <SignoRaiz />
            <span className="inline-flex items-center gap-2 sm:gap-3 border-t-[3px] border-brand-dark pt-1.5 pl-1 pr-1.5">
              {dibujarLista(radicando)}
            </span>
          </span>
        );
      }
      default:
        return (
          <span aria-hidden="true" className="text-brand-primary">
            {nodo.valor}
          </span>
        );
    }
  }

  return (
    <div className="flex items-center justify-center flex-wrap gap-x-2 gap-y-3 sm:gap-4 text-3xl sm:text-4xl font-bold text-brand-dark">
      <span className="sr-only">{leerExpresion(nodos)}</span>
      {dibujarLista(nodos)}
    </div>
  );
}
