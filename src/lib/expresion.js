// Convierte el texto de una cuenta ("(1/2 + 1/4) × 4/3", "√(9/16) − 1/4",
// "(2/3)² + 1/9", "1 1/2 + □/5", "[1/2 − (−1/3)]⁻²") en una lista de nodos
// que se pueden dibujar o leer en voz alta.
//
// Nodos:
// { tipo: "numero", valor }            "3", "0,333…" o "□" (casillero)
// { tipo: "fraccion", numerador, denominador }   (cada uno es un nodo numero)
// { tipo: "mixto", entero, fraccion }
// { tipo: "negativo", valor }          el menos pegado: −2/3, −(1/2)², −1 3/8
// { tipo: "operador", valor }          + − × ÷ = < > y cualquier otra palabra
// { tipo: "grupo", delimitador, hijos } entre ( ), [ ] o { }
// { tipo: "potencia", base, exponente } exponente es un nodo numero: "2", "-3", "□"
// { tipo: "raiz", indice, radicando }  indice 2 (√), 3 (∛) o 4 (∜)
//
// Exponentes: se escriben con superíndices (², ³, ⁰, ⁻²) o con ^ (^4, ^-2, ^□).
// El menos va pegado al número cuando es el signo (−2/3) y con espacios cuando
// es la resta (1/2 − 1/3).

const N = "(?:\\d+|□)";
const SUPERINDICES = "⁰¹²³⁴⁵⁶⁷⁸⁹⁻";
const SIMBOLOS = "()\\[\\]{}√∛∜";
// En orden: mixto (el entero no puede ser casillero, así "□ 3/4" es un
// casillero y una fracción), fracción, decimal, número o casillero, signo
// menos pegado, exponente, símbolos y el resto.
const TOKENS = new RegExp(
  `(\\d+)\\s+(${N})\\/(${N})|(${N})\\/(${N})|(\\d+,\\d+…?)|(\\d+|□)` +
    `|([-−])(?=[\\d□(\\[{√∛∜])` +
    `|(\\^-?(?:\\d+|□)|[${SUPERINDICES}]+)` +
    `|([${SIMBOLOS}])|([^\\s${SIMBOLOS}^${SUPERINDICES}]+)`,
  "g",
);

const CIERRES = { "(": ")", "[": "]", "{": "}" };
const INDICES = { "√": 2, "∛": 3, "∜": 4 };

const numero = (valor) => ({ tipo: "numero", valor });

// "²" → "2", "⁻³" → "-3", "^□" → "□"
function normalizarExponente(texto) {
  if (texto.startsWith("^")) return texto.slice(1);
  return [...texto].map((c) => (c === "⁻" ? "-" : String(SUPERINDICES.indexOf(c)))).join("");
}

function tokenizar(texto) {
  return [...texto.matchAll(TOKENS)].map(
    ([, entero, numMixto, denMixto, numerador, denominador, decimal, solo, signo, exponente, simbolo, otro]) => {
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
      if (decimal || solo) return numero(decimal || solo);
      if (signo) return { tipo: "signo" };
      if (exponente) return { tipo: "exponente", valor: normalizarExponente(exponente) };
      if (simbolo) return { tipo: "simbolo", valor: simbolo };
      return { tipo: "operador", valor: otro };
    },
  );
}

// Lee nodos hasta el final o hasta el cierre del grupo (")", "]" o "}").
function parsearLista(tokens, inicio, cierre) {
  const nodos = [];
  let i = inicio;
  while (i < tokens.length) {
    if (cierre && tokens[i].valor === cierre) return { nodos, i: i + 1 };
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

  if (CIERRES[token.valor]) {
    const grupo = parsearLista(tokens, i + 1, CIERRES[token.valor]);
    nodo = { tipo: "grupo", delimitador: token.valor, hijos: grupo.nodos };
    siguiente = grupo.i;
  } else if (INDICES[token.valor] && i + 1 < tokens.length) {
    const radicando = parsearAtomo(tokens, i + 1);
    nodo = { tipo: "raiz", indice: INDICES[token.valor], radicando: radicando.nodo };
    siguiente = radicando.i;
  } else if (token.tipo === "signo" && i + 1 < tokens.length) {
    // El exponente va antes que el signo: −(1/2)² es −[(1/2)²].
    const valor = parsearAtomo(tokens, i + 1);
    return { nodo: { tipo: "negativo", valor: valor.nodo }, i: valor.i };
  } else if (token.tipo === "signo") {
    nodo = { tipo: "operador", valor: "−" };
  } else if (token.tipo === "simbolo" || token.tipo === "exponente") {
    // Un cierre o un exponente sueltos se muestran tal cual.
    nodo = { tipo: "operador", valor: token.valor };
  } else {
    nodo = token;
  }

  // Un exponente se aplica a lo que viene justo antes: (2/3)² o 5².
  while (tokens[siguiente]?.tipo === "exponente") {
    nodo = { tipo: "potencia", base: nodo, exponente: numero(tokens[siguiente].valor) };
    siguiente++;
  }
  return { nodo, i: siguiente };
}

export function parsearExpresion(texto) {
  return parsearLista(tokenizar(texto), 0, null).nodos;
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

const NOMBRES_GRUPO = { "(": "paréntesis", "[": "corchete", "{": "llave" };
const NOMBRES_RAIZ = { 2: "raíz", 3: "raíz cúbica", 4: "raíz cuarta" };

// "0,333…" se lee "0 coma 333 periódico".
function leerNumero(nodo) {
  if (nodo.valor === "□") return "casillero";
  return nodo.valor.replace(",", " coma ").replace("…", " periódico");
}

function leerExponente({ valor }) {
  if (valor === "2") return "al cuadrado";
  if (valor === "3") return "al cubo";
  if (valor === "□") return "elevado al casillero";
  return valor.startsWith("-") ? `elevado a la menos ${valor.slice(1)}` : `elevado a la ${valor}`;
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
    case "negativo":
      return `menos ${leerNodo(nodo.valor)}`;
    case "grupo": {
      const nombre = NOMBRES_GRUPO[nodo.delimitador];
      return `abre ${nombre} ${leerExpresion(nodo.hijos)} cierra ${nombre}`;
    }
    case "potencia": {
      // (2/3)² se lee "2 tercios al cuadrado", sin nombrar los paréntesis.
      // Con un negativo adentro sí se nombran: (−2/3)² no es −(2/3)².
      const { base } = nodo;
      const simple =
        base.tipo === "grupo" && base.delimitador === "(" && base.hijos.length === 1 && base.hijos[0].tipo !== "negativo"
          ? base.hijos[0]
          : base;
      return `${leerNodo(simple)} ${leerExponente(nodo.exponente)}`;
    }
    case "raiz": {
      const radicando = radicandoSinParentesis(nodo);
      return `${NOMBRES_RAIZ[nodo.indice]} de ${leerExpresion(radicando)}`;
    }
    default:
      return PALABRAS[nodo.valor] ?? nodo.valor;
  }
}

// El paréntesis de √(9/16) no se dibuja ni se lee: la barra de la raíz ya agrupa.
export function radicandoSinParentesis({ radicando }) {
  return radicando.tipo === "grupo" && radicando.delimitador === "(" ? radicando.hijos : [radicando];
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
    case "negativo":
      juntarNumeros(nodo.valor, lista, rol);
      break;
    case "potencia":
      juntarNumeros(nodo.base, lista);
      juntarNumeros(nodo.exponente, lista, "exponente");
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
