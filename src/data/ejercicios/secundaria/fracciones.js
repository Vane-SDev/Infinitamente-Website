// Cada ejercicio necesita 2 pistas: se muestran después del 1° y del 2° error.
// Al 3° error se muestra la resolución paso a paso.
const fracciones = {
  slug: "fracciones",
  nombre: "Fracciones",
  descripcion:
    "Denominador común, multiplicación y división de fracciones.",
  ejercicios: [
    {
      id: "fracciones-secundaria-suma-distinto-denominador",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto: "Resolvé la suma y escribí el resultado simplificado.",
      operacion: "2/3 + 1/4",
      tipoRespuesta: "fraccion",
      respuesta: "11/12",
      pistas: [
        "Buscá un denominador común: un número que sea múltiplo de 3 y de 4 a la vez.",
        "El mínimo común múltiplo de 3 y 4 es 12. Escribí cada fracción con denominador 12 y después sumá.",
      ],
      resolucion: [
        "El mínimo común múltiplo de 3 y 4 es 12.",
        "2/3 = 8/12 y 1/4 = 3/12.",
        "8/12 + 3/12 = 11/12.",
      ],
    },
    {
      id: "fracciones-secundaria-multiplicacion",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto: "Resolvé la multiplicación y escribí el resultado simplificado.",
      operacion: "3/4 × 2/9",
      tipoRespuesta: "fraccion",
      respuesta: "1/6",
      pistas: [
        "Para multiplicar fracciones, multiplicá numerador por numerador y denominador por denominador.",
        "Podés simplificar antes de multiplicar: 3 y 9 tienen un divisor en común, y 2 y 4 también.",
      ],
      resolucion: [
        "Multiplicamos en línea: 3 × 2 = 6 y 4 × 9 = 36, así que queda 6/36.",
        "6 y 36 se pueden dividir por 6.",
        "6/36 = 1/6.",
      ],
    },
    {
      id: "fracciones-secundaria-division",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto: "Resolvé la división. Si el resultado es un número entero, escribilo sin barra.",
      operacion: "4/5 ÷ 2/5",
      tipoRespuesta: "fraccion",
      respuesta: "2",
      pistas: [
        "Dividir por una fracción es lo mismo que multiplicar por su inversa (la fracción dada vuelta).",
        "La inversa de 2/5 es 5/2. Multiplicá 4/5 × 5/2 y simplificá.",
      ],
      resolucion: [
        "Dividir por 2/5 es multiplicar por 5/2: 4/5 × 5/2.",
        "4 × 5 = 20 y 5 × 2 = 10, así que queda 20/10.",
        "20/10 = 2.",
      ],
    },
  ],
};

export default fracciones;
