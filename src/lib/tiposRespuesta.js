import {
  evaluarFraccion,
  evaluarIdentificar,
  evaluarMixta,
  evaluarPintar,
} from "./fracciones";
import { totalPartes } from "./figuras";

// Cada tipo de respuesta decide:
// - entrada: qué ve el alumno para responder ("texto" o "pintar").
// - valorInicial y evaluar(valor, ejercicio): cómo se corrige.
// - mostrar(valor, ejercicio): cómo se nombra la respuesta en los mensajes.
// - mensajesEquivalente: qué decir cuando vale lo mismo pero está mal escrita.
// - textoCorrecto (opcional): el mensaje de acierto.
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
};

export default tiposRespuesta;
