import { leerExpresion, parsearExpresion, radicandoSinParentesis } from "@/lib/expresion";

// Dibuja una cuenta: fracciones apiladas, mixtos ("1 3/4"), negativos,
// paréntesis, corchetes y llaves que se estiran a la altura de lo que
// encierran, potencias con el exponente arriba, raíces con la barra sobre el
// radicando (y el índice si es cúbica o cuarta) y casilleros "□" para completar.
// El lector de pantalla escucha la cuenta leída ("2 tercios al cuadrado más
// 1 noveno"): la versión visual queda oculta para él, salvo los casilleros,
// que son campos para escribir.

// Trazos de cada delimitador (el de cierre es el mismo dado vuelta).
const TRAZOS = {
  "(": ["M9 2 Q1 50 9 98", "M1 2 Q9 50 1 98"],
  "[": ["M9 2 H3 V98 H9", "M1 2 H7 V98 H1"],
  "{": [
    "M9 2 Q4 2 4 12 V40 Q4 50 1 50 Q4 50 4 60 V88 Q4 98 9 98",
    "M1 2 Q6 2 6 12 V40 Q6 50 9 50 Q6 50 6 60 V88 Q6 98 1 98",
  ],
};

function Delimitador({ tipo, lado }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 10 100"
      preserveAspectRatio="none"
      className="w-2 sm:w-3 self-stretch shrink-0"
    >
      <path
        d={TRAZOS[tipo][lado === "abre" ? 0 : 1]}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function SignoRaiz({ indice }) {
  const signo = (
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
  if (indice === 2) return signo;
  // El índice va chiquito arriba del ganchito de la raíz.
  return (
    <span className="relative inline-flex self-stretch shrink-0 pl-2">
      <span aria-hidden="true" className="absolute left-0 top-0 text-sm sm:text-base leading-none">
        {indice}
      </span>
      {signo}
    </span>
  );
}

// Un grupo con otro grupo adentro queda un poco más alto, para que los
// corchetes y las llaves de afuera se vean más grandes que los de adentro.
const tieneGrupo = (nodo) =>
  nodo.tipo === "grupo" ||
  (nodo.tipo === "potencia" && tieneGrupo(nodo.base)) ||
  (nodo.tipo === "negativo" && tieneGrupo(nodo.valor));

export default function Expresion({ texto, renderCasillero }) {
  const nodos = parsearExpresion(texto);
  let indiceCasillero = 0;

  function dibujarNumero(nodo) {
    if (nodo.valor !== "□") return <span aria-hidden="true">{nodo.valor.replace("-", "−")}</span>;
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
      case "negativo":
        return (
          <span className="inline-flex items-center gap-0.5">
            <span aria-hidden="true">−</span>
            {dibujar(nodo.valor)}
          </span>
        );
      case "grupo":
        return (
          <span className="inline-flex items-center gap-1 sm:gap-3">
            <Delimitador tipo={nodo.delimitador} lado="abre" />
            <span className={`inline-flex items-center gap-1 sm:gap-3 ${nodo.hijos.some(tieneGrupo) ? "py-1.5" : ""}`}>
              {dibujarLista(nodo.hijos)}
            </span>
            <Delimitador tipo={nodo.delimitador} lado="cierra" />
          </span>
        );
      case "potencia":
        return (
          <span className="inline-flex items-start">
            {dibujar(nodo.base)}
            <span className="text-xl sm:text-2xl leading-none ml-0.5">
              {dibujarNumero(nodo.exponente)}
            </span>
          </span>
        );
      case "raiz": {
        const radicando = radicandoSinParentesis(nodo);
        return (
          <span className="inline-flex items-stretch">
            <SignoRaiz indice={nodo.indice} />
            <span className="inline-flex items-center gap-1 sm:gap-3 border-t-[3px] border-brand-dark pt-1.5 pl-1 pr-1.5">
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

  // Las cuentas largas de secundaria van con letra más chica en el celular
  // para que entren en el ancho de la pantalla.
  const numeros = (texto.match(/[\d⁰¹²³⁴⁵⁶⁷⁸⁹]+|□/g) ?? []).length;
  const tamanio =
    numeros > 11 ? "text-xl sm:text-4xl" : numeros > 8 ? "text-2xl sm:text-4xl" : "text-3xl sm:text-4xl";

  return (
    <div className={`flex items-center justify-center flex-wrap gap-x-2 gap-y-3 sm:gap-4 ${tamanio} font-bold text-brand-dark`}>
      <span className="sr-only">{leerExpresion(nodos)}</span>
      {dibujarLista(nodos)}
    </div>
  );
}
