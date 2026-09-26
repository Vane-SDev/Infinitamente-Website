import { evaluarFraccion } from "./fracciones";

// Cada tipo de respuesta sabe validar lo que escribe el alumno y cómo
// explicarle el formato. Para un tipo nuevo (por ejemplo, decimales),
// se agrega una entrada acá y el componente Ejercicio no cambia.
const tiposRespuesta = {
  fraccion: {
    evaluar: evaluarFraccion,
    placeholder: "Ej: 3/4 o 2",
    ayudaFormato: 'Escribí una fracción como "3/4" o un número entero como "2".',
    mensajesError: {
      vacio: "Escribí tu respuesta antes de comprobar.",
      formato:
        'No reconozco ese formato. Escribí una fracción como "3/4" o un número entero como "2".',
      denominadorCero:
        "El denominador no puede ser 0. Revisá el número de abajo de la fracción.",
    },
  },
};

export default tiposRespuesta;
