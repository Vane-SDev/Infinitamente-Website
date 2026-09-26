export const niveles = [
  { id: "primaria", nombre: "Primaria", detalle: "Desde 4° grado" },
  { id: "secundaria", nombre: "Secundaria", detalle: "1° año" },
];

// Cada ejercicio necesita 2 pistas: se muestran después del 1° y del 2° error.
// Al 3° error se muestra la resolución paso a paso.
export const ejercicios = [
  {
    id: "fracciones-primaria-suma-mismo-denominador",
    nivel: "primaria",
    tema: "Fracciones",
    contexto:
      "Lucía leyó 2/7 de un libro el sábado y 3/7 el domingo. ¿Qué parte del libro leyó en total?",
    operacion: "2/7 + 3/7",
    tipoRespuesta: "fraccion",
    respuesta: "5/7",
    pistas: [
      "Las dos fracciones tienen el mismo denominador (el número de abajo). Cuando pasa eso, el denominador no cambia.",
      "Sumá solo los numeradores (los números de arriba) y dejá el 7 abajo.",
    ],
    resolucion: [
      "Las dos fracciones tienen denominador 7, así que el resultado también tiene denominador 7.",
      "Sumamos los numeradores: 2 + 3 = 5.",
      "Resultado: 5/7 del libro.",
    ],
  },
  {
    id: "fracciones-primaria-resta-simplificar",
    nivel: "primaria",
    tema: "Fracciones",
    contexto:
      "Una botella tenía 5/6 de jugo y Tomi se tomó 1/6. ¿Qué parte de la botella queda?",
    operacion: "5/6 − 1/6",
    tipoRespuesta: "fraccion",
    respuesta: "2/3",
    pistas: [
      "Los denominadores son iguales, así que restá solo los numeradores.",
      "Restá 5 − 1 y dejá el mismo denominador. Después fijate si podés dividir arriba y abajo por un mismo número.",
    ],
    resolucion: [
      "Los denominadores son iguales: restamos los numeradores, 5 − 1 = 4.",
      "Queda 4/6.",
      "4 y 6 se pueden dividir por 2: 4/6 = 2/3.",
    ],
  },
  {
    id: "fracciones-primaria-suma-medios-cuartos",
    nivel: "primaria",
    tema: "Fracciones",
    contexto:
      "Martina caminó 1/2 kilómetro hasta la escuela y después 1/4 kilómetro hasta la plaza. ¿Cuánto caminó en total?",
    operacion: "1/2 + 1/4",
    tipoRespuesta: "fraccion",
    respuesta: "3/4",
    pistas: [
      "Para sumar, las dos fracciones necesitan el mismo denominador. ¿Cuántos cuartos hay en 1/2?",
      "1/2 es lo mismo que 2/4. Ahora sumá 2/4 + 1/4.",
    ],
    resolucion: [
      "Pasamos 1/2 a cuartos: 1/2 = 2/4.",
      "Ahora los denominadores son iguales: 2/4 + 1/4.",
      "Sumamos los numeradores: 2 + 1 = 3. Resultado: 3/4 de kilómetro.",
    ],
  },
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
];
