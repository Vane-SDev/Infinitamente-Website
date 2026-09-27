// Cada ejercicio necesita 2 pistas: se muestran después del 1° y del 2° error.
// Al 3° error se muestra la resolución paso a paso.
const fracciones = {
  slug: "fracciones",
  nombre: "Fracciones",
  descripcion:
    "Sumas y restas de fracciones con el mismo denominador.",
  ejercicios: [
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
  ],
};

export default fracciones;
