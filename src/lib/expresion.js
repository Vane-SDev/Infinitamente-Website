// Convierte el texto de una cuenta ("(1/2 + 1/4) × 4/3", "√(9/16) − 1/4",
// "(2/3)² + 1/9", "1 1/2 + □/5") en una lista de nodos que se pueden dibujar o
// leer en voz alta.
//
// Nodos:
// { tipo: "numero", valor }            "3" o "□" (casillero)
// { tipo: "fraccion", numerador, denominador }   (cada uno es un nodo numero)
// { tipo: "mixto", entero, fraccion }
// { tipo: "operador", valor }          + − × ÷ = < > y cualquier otra palabra
// { tipo: "grupo", hijos }             lo que está entre paréntesis
// { tipo: "potencia", base, exponente } exponente "²" o "³"
// { tipo: "raiz", radicando }

const N = "(?:\\d+|□)";
// En orden: mixto (el entero no puede ser casillero, así "□ 3/4" es un
// casillero y una fracción), fracción, número o casillero, símbolos y el resto.
const TOKENS = new RegExp(
  `(\\d+)\\s+(${N})\\/(${N})|(-?${N})\\/(${N})|(-?\\d+|□)|([()²³√])|([^\\s()²³√]+)`,
  "g",
);

const numero = (valor) => ({ tipo: "numero", valor });

function tokenizar(texto) {
  return [...texto.matchAll(TOKENS)].map(
    ([, entero, numMixto, denMixto, numerador, denominador, solo, simbolo, otro]) => {
      if (entero) {
        return {
          tipo: "mixto",
          entero: numero(entero),
          fraccion: { tipo: "fraccion", numerador: numero(numMixto), denominador: numero(denMixto) },
        };
      }
      if (numerador) {
        return { tipo: "fraccion", numerador: numero(numerador), denominador: numero(denominador) };
      }
      if (solo) return numero(solo);
      if (simbolo) return { tipo: "simbolo", valor: simbolo };
      return { tipo: "operador", valor: otro };
    },
  );
}

// Lee nodos hasta el final o hasta el ")" que cierra el grupo.
function parsearLista(tokens, inicio, dentroDeGrupo) {
  const nodos = [];
  let i = inicio;
  while (i < tokens.length) {
    if (dentroDeGrupo && tokens[i].valor === ")") return { nodos, i: i + 1 };
    const atomo = parsearAtomo(tokens, i);
    nodos.push(atomo.nodo);
    i = atomo.i;
  }
  return { nodos, i };
}

function parsearAtomo(tokens, i) {
  const token = tokens[i];
  let nodo;
  let siguiente = i + 1;

  if (token.valor === "(") {
    const grupo = parsearLista(tokens, i + 1, true);
    nodo = { tipo: "grupo", hijos: grupo.nodos };
    siguiente = grupo.i;
  } else if (token.valor === "√" && i + 1 < tokens.length) {
    const radicando = parsearAtomo(tokens, i + 1);
    nodo = { tipo: "raiz", radicando: radicando.nodo };
    siguiente = radicando.i;
  } else if (token.tipo === "simbolo") {
    nodo = { tipo: "operador", valor: token.valor }; // ")" o exponente sueltos
  } else {
    nodo = token;
  }

  // Un exponente se aplica a lo que viene justo antes: (2/3)² o 5².
  while (tokens[siguiente]?.valor === "²" || tokens[siguiente]?.valor === "³") {
    nodo = { tipo: "potencia", base: nodo, exponente: tokens[siguiente].valor };
    siguiente++;
  }
  return { nodo, i: siguiente };
}

export function parsearExpresion(texto) {
  return parsearLista(tokenizar(texto), 0, false).nodos;
}

// --- Lectura para el lector de pantalla ---

const DENOMINADORES = {
  2: ["medio", "medios"],
  3: ["tercio", "tercios"],
  4: ["cuarto", "cuartos"],
  5: ["quinto", "quintos"],
  6: ["sexto", "sextos"],
  7: ["séptimo", "séptimos"],
  8: ["octavo", "octavos"],
  9: ["noveno", "novenos"],
  10: ["décimo", "décimos"],
  11: ["onceavo", "onceavos"],
  12: ["doceavo", "doceavos"],
  13: ["treceavo", "treceavos"],
  14: ["catorceavo", "catorceavos"],
  15: ["quinceavo", "quinceavos"],
  16: ["dieciseisavo", "dieciseisavos"],
};

const PALABRAS = {
  "+": "más",
  "−": "menos",
  "-": "menos",
  "×": "por",
  "÷": "dividido",
  "=": "es igual a",
  "<": "es menor que",
  ">": "es mayor que",
  ")": "cierra paréntesis",
  "□": "casillero",
};

function leerNumero(nodo) {
  return nodo.valor === "□" ? "casillero" : nodo.valor;
}

function leerFraccion({ numerador, denominador }) {
  const nombres = DENOMINADORES[denominador.valor];
  if (nombres && numerador.valor !== "□") {
    return `${numerador.valor} ${numerador.valor === "1" ? nombres[0] : nombres[1]}`;
  }
  return `${leerNumero(numerador)} sobre ${leerNumero(denominador)}`;
}

function leerNodo(nodo) {
  switch (nodo.tipo) {
    case "numero":
      return leerNumero(nodo);
    case "fraccion":
      return leerFraccion(nodo);
    case "mixto":
      return `${nodo.entero.valor} ${nodo.entero.valor === "1" ? "entero" : "enteros"} y ${leerFraccion(nodo.fraccion)}`;
    case "grupo":
      return `abre paréntesis ${leerExpresion(nodo.hijos)} cierra paréntesis`;
    case "potencia": {
      // (2/3)² se lee "2 tercios al cuadrado", sin nombrar los paréntesis.
      const { base } = nodo;
      const simple = base.tipo === "grupo" && base.hijos.length === 1 ? base.hijos[0] : base;
      return `${leerNodo(simple)} ${nodo.exponente === "²" ? "al cuadrado" : "al cubo"}`;
    }
    case "raiz": {
      const radicando = nodo.radicando.tipo === "grupo" ? nodo.radicando.hijos : [nodo.radicando];
      return `raíz de ${leerExpresion(radicando)}`;
    }
    default:
      return PALABRAS[nodo.valor] ?? nodo.valor;
  }
}

export function leerExpresion(nodos) {
  return nodos.map(leerNodo).join(" ");
}

// --- Casilleros ---

function juntarNumeros(nodo, lista, rol = "número") {
  switch (nodo.tipo) {
    case "numero":
      lista.push([nodo.valor, rol]);
      break;
    case "fraccion":
      juntarNumeros(nodo.numerador, lista, "numerador");
      juntarNumeros(nodo.denominador, lista, "denominador");
      break;
    case "mixto":
      juntarNumeros(nodo.entero, lista, "entero");
      juntarNumeros(nodo.fraccion, lista);
      break;
    case "grupo":
      nodo.hijos.forEach((hijo) => juntarNumeros(hijo, lista));
      break;
    case "potencia":
      juntarNumeros(nodo.base, lista);
      break;
    case "raiz":
      juntarNumeros(nodo.radicando, lista);
      break;
  }
}

// Nombres de los casilleros en el orden en que aparecen (de izquierda a
// derecha), para el lector de pantalla.
export function casillerosDe(texto) {
  const numeros = [];
  parsearExpresion(texto).forEach((nodo) => juntarNumeros(nodo, numeros));
  const casilleros = numeros.filter(([valor]) => valor === "□").map(([, rol]) => `${rol} que falta`);
  if (casilleros.length === 1) return casilleros;
  return casilleros.map((nombre, i) => `Casillero ${i + 1} de ${casilleros.length}: ${nombre}`);
}
