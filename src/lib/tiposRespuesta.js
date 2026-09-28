import {
  evaluarCasilleros,
  evaluarComparacion,
  evaluarFraccion,
  evaluarIdentificar,
  evaluarMixta,
  evaluarPintar,
  evaluarPlanteo,
  normalizarOperador,
  parsearFraccion,
  sonEquivalentes,
} from "./fracciones";
import { totalPartes } from "./figuras";
import { textoFraccion, valorDeMarca } from "./recta";

// Cada tipo de respuesta decide:
// - entrada: qué ve el alumno para responder ("texto", "pintar", "completar",
//   "comparar", "planteo" o "recta").
// - valorInicial (o una función que lo arma según el ejercicio) y
//   evaluar(valor, ejercicio): cómo se corrige.
// - mostrar(valor, ejercicio): cómo se nombra la respuesta en los mensajes.
// - mensajesEquivalente: qué decir cuando vale lo mismo pero está mal escrita.
// - textoCorrecto y textoIncorrecto (opcionales): mensajes propios del tipo.
// - incluyeOperacion / incluyeGrafico (opcionales): la entrada ya muestra la
//   cuenta o la figura, así que no se dibujan aparte.
// - pasos (opcional): si el ejercicio se resuelve en varios pasos, una función
//   que devuelve la lista de pasos, cada uno con los mismos campos que un tipo
//   más sus pistas. Ver "plantear".
// Para un tipo nuevo se agrega una entrada acá y el componente Ejercicio no
// cambia.

const mensajesFormato = {
  vacio: "Escribí tu respuesta antes de comprobar.",
  denominadorCero:
    "El denominador no puede ser 0. Revisá el número de abajo de la fracción.",
};

const sinSimplificar = (valor) =>
  `¡Vas bien! ${valor} es equivalente al resultado. ¿Se puede simplificar? Escribila en su forma más simple.`;

const tipoTexto = {
  entrada: "texto",
  valorInicial: "",
  mostrar: (valor) => valor.trim(),
};

const tiposRespuesta = {
  fraccion: {
    ...tipoTexto,
    evaluar: (valor, ejercicio) => evaluarFraccion(valor, ejercicio.respuesta),
    placeholder: "Ej: 3/4 o 2",
    ayudaFormato: 'Escribí una fracción como "3/4" o un número entero como "2".',
    mensajesError: {
      ...mensajesFormato,
      formato:
        'No reconozco ese formato. Escribí una fracción como "3/4" o un número entero como "2".',
    },
    mensajesEquivalente: {
      sinSimplificar,
      mixta: (valor) =>
        `Está bien, ${valor} vale lo mismo, pero escribilo como fracción: una sola fracción, con el numerador más grande que el denominador.`,
    },
  },

  mixta: {
    ...tipoTexto,
    evaluar: (valor, ejercicio) => evaluarMixta(valor, ejercicio.respuesta),
    placeholder: "Ej: 2 1/3",
    ayudaFormato:
      'Escribí el entero, un espacio y la fracción, como "2 1/3".',
    mensajesError: {
      ...mensajesFormato,
      formato:
        'No reconozco ese formato. Escribí el entero, un espacio y la fracción, como "2 1/3".',
    },
    mensajesEquivalente: {
      sinSimplificar: (valor) =>
        `¡Vas bien! ${valor} vale lo mismo, pero la fracción se puede simplificar. Escribila en su forma más simple.`,
      impropia: (valor) =>
        `Está bien, ${valor} vale lo mismo, pero escribilo como número mixto: el entero, un espacio y la fracción.`,
      parteImpropia: (valor) =>
        `¡Vas bien! ${valor} vale lo mismo, pero en un número mixto la fracción tiene que ser menor que 1. ¿Podés sacar otro entero?`,
    },
  },

  identificar: {
    ...tipoTexto,
    evaluar: (valor, ejercicio) => evaluarIdentificar(valor, ejercicio.respuesta),
    placeholder: "Ej: 3/4",
    ayudaFormato:
      'Escribí la fracción como "3/4": arriba las partes pintadas, abajo el total de partes.',
    mensajesError: {
      ...mensajesFormato,
      formato:
        'No reconozco ese formato. Escribí la fracción como "3/4": arriba las partes pintadas, abajo el total de partes.',
    },
    mensajesEquivalente: {
      otraEquivalente: (valor) =>
        `${valor} vale lo mismo, pero no es lo que muestra la figura. Contá en cuántas partes iguales está dividida y cuántas están pintadas.`,
    },
  },

  pintar: {
    entrada: "pintar",
    incluyeGrafico: true, // la figura es la entrada, no se muestra aparte
    valorInicial: [],
    evaluar: (pintadas, ejercicio) =>
      evaluarPintar(pintadas.length, totalPartes(ejercicio.grafico), ejercicio.respuesta),
    mostrar: (pintadas, ejercicio) =>
      `${pintadas.length}/${totalPartes(ejercicio.grafico)}`,
    textoCorrecto: (texto, ejercicio) =>
      texto === ejercicio.respuesta
        ? `¡Excelente! Pintaste ${texto}.`
        : `¡Excelente! Pintaste ${texto}, que es lo mismo que ${ejercicio.respuesta}.`,
    ayudaFormato: "Tocá una parte para pintarla y otra vez para despintarla.",
    mensajesError: {
      vacio: "Pintá al menos una parte antes de comprobar.",
    },
    mensajesEquivalente: {},
  },

  completar: {
    entrada: "completar",
    incluyeOperacion: true, // la cuenta con casilleros es la entrada
    valorInicial: (ejercicio) =>
      Array.from(ejercicio.operacion.matchAll(/□/g), () => ""),
    evaluar: (valores, ejercicio) => evaluarCasilleros(valores, ejercicio.respuesta),
    mostrar: (valores) => valores.join(", "),
    textoCorrecto: () => "¡Excelente! Completaste bien la cuenta.",
    textoIncorrecto: (evaluacion, valores) =>
      valores.length > 1 && evaluacion.casillerosMal
        ? "Revisá los casilleros marcados en rojo."
        : "",
    ayudaFormato: "Escribí un número entero en cada casillero.",
    mensajesError: {
      vacio: "Completá todos los casilleros antes de comprobar.",
      formato: "En cada casillero va un número entero, sin barras ni letras.",
    },
    mensajesEquivalente: {},
  },

  // Tocar la marca de la recta numérica donde va la fracción de "respuesta".
  ubicar: {
    entrada: "recta",
    incluyeGrafico: true, // la recta es la entrada, no se muestra aparte
    valorInicial: null,
    evaluar: (marca, ejercicio) => {
      if (marca === null) return { resultado: "invalido", error: "vacio" };
      return sonEquivalentes(valorDeMarca(ejercicio.recta, marca), parsearFraccion(ejercicio.respuesta))
        ? { resultado: "correcto" }
        : { resultado: "incorrecto" };
    },
    mostrar: (marca, ejercicio) =>
      marca === null ? "" : textoFraccion(valorDeMarca(ejercicio.recta, marca)),
    textoCorrecto: (texto) => `¡Excelente! Ahí va ${texto}.`,
    ayudaFormato: "Tocá la marca de la recta y después Comprobar.",
    mensajesError: {
      vacio: "Tocá una marca de la recta antes de comprobar.",
    },
    mensajesEquivalente: {},
  },

  comparar: {
    entrada: "comparar",
    incluyeOperacion: true, // las fracciones con el casillero son la entrada
    valorInicial: "",
    evaluar: (signo, ejercicio) => evaluarComparacion(signo, ejercicio.respuesta),
    mostrar: (signo, ejercicio) => ejercicio.operacion.replace("□", signo),
    textoCorrecto: (texto) => `¡Excelente! ${texto}.`,
    ayudaFormato: "Elegí el signo que va en el casillero y tocá Comprobar.",
    mensajesError: {
      vacio: "Elegí un signo antes de comprobar.",
    },
    mensajesEquivalente: {},
  },

  // Dos pasos: primero armar la cuenta del problema, después resolverla.
  // Las operaciones del menú salen de planteo.operadores (por defecto + y −).
  plantear: {
    pasos: (ejercicio) => {
      const { a, operador, b, operadores = ["+", "-"] } = ejercicio.planteo;
      const signo = normalizarOperador(operador);
      const cuenta = `${a} ${signo === "-" ? "−" : signo} ${b}`;
      return [
        {
          titulo: "Paso 1: armá la cuenta",
          entrada: "planteo",
          operadores,
          valorInicial: { a: { n: "", d: "" }, operador: "", b: { n: "", d: "" } },
          evaluar: (valor) => evaluarPlanteo(valor, ejercicio.planteo),
          mostrar: () => "",
          textoCorrecto: () => "¡Bien planteado! Ahora resolvé la cuenta.",
          textoAgotado: `Esta vez no salió, pero no pasa nada. La cuenta es ${cuenta}. Ahora resolvela.`,
          alAgotar: "continuar",
          pistas: ejercicio.pistasPlanteo,
          ayudaFormato:
            "Escribí las dos fracciones del problema y elegí la operación.",
          mensajesError: {
            vacio: "Completá las dos fracciones y elegí la operación antes de comprobar.",
            formato: "En cada casillero va un número entero, sin barras ni letras.",
          },
          mensajesEquivalente: {},
        },
        {
          ...tiposRespuesta.fraccion,
          titulo: "Paso 2: resolvé la cuenta",
          operacion: cuenta,
          pistas: ejercicio.pistas,
        },
      ];
    },
  },
};

// Los pasos de un ejercicio. Los tipos comunes tienen un solo paso.
export function pasosDelEjercicio(ejercicio) {
  const tipo = tiposRespuesta[ejercicio.tipoRespuesta];
  if (tipo.pasos) return tipo.pasos(ejercicio);
  return [{ ...tipo, pistas: ejercicio.pistas }];
}

export default tiposRespuesta;
