// Cada ejercicio necesita 2 pistas: se muestran después del 1° y del 2° error.
// Al 3° error se muestra la resolución paso a paso.
const fracciones = {
  slug: "fracciones",
  nombre: "Fracciones",
  descripcion:
    "Leer y pintar fracciones, números mixtos y sumas y restas con el mismo denominador.",
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
    {
      id: "fracciones-4-grado-identificar-grilla",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Sofi pintó algunos cuadraditos de esta grilla. ¿Qué fracción de la grilla está pintada?",
      grafico: { forma: "grilla", filas: 2, columnas: 4, pintadas: 6 },
      tipoRespuesta: "identificar",
      respuesta: "6/8",
      pistas: [
        "Contá cuántos cuadraditos hay en total: ese número va abajo, en el denominador.",
        "Hay 8 cuadraditos en total. Ahora contá los pintados: ese número va arriba, en el numerador.",
      ],
      resolucion: [
        "La grilla tiene 8 cuadraditos iguales: el denominador es 8.",
        "Hay 6 cuadraditos pintados: el numerador es 6.",
        "Está pintado 6/8 de la grilla, que también se puede escribir como 3/4.",
      ],
    },
    {
      id: "fracciones-4-grado-pintar-pizza",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Una pizza está cortada en 8 porciones iguales. Pintá 3/4 de la pizza.",
      operacion: "3/4",
      grafico: { forma: "circulo", partes: 8 },
      tipoRespuesta: "pintar",
      respuesta: "3/4",
      pistas: [
        "Imaginá la pizza partida en 4 partes iguales. ¿Cuántas porciones entran en cada cuarto?",
        "Cada cuarto son 2 porciones. 3/4 son 3 de esos cuartos.",
      ],
      resolucion: [
        "La pizza tiene 8 porciones, así que cada cuarto son 8 ÷ 4 = 2 porciones.",
        "3/4 son 3 cuartos: 3 × 2 = 6 porciones.",
        "Pintamos 6 de 8 porciones: 6/8 es lo mismo que 3/4.",
      ],
    },
    {
      id: "fracciones-4-grado-mixta-a-impropia",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "En el cumple sobraron 2 1/2 pizzas. ¿Cuántas medias pizzas son? Escribilo como una sola fracción.",
      operacion: "2 1/2",
      tipoRespuesta: "fraccion",
      respuesta: "5/2",
      pistas: [
        "Cada pizza entera tiene 2 medios. ¿Cuántos medios hay en 2 pizzas?",
        "En 2 pizzas hay 4 medios. Sumale el medio que sobra.",
      ],
      resolucion: [
        "Cada pizza entera tiene 2 medios: en 2 pizzas hay 2 × 2 = 4 medios.",
        "Le sumamos el medio que sobra: 4 + 1 = 5 medios.",
        "Resultado: 5/2.",
      ],
    },
    {
      id: "fracciones-4-grado-impropia-a-mixta",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Para una torta se usaron 7/4 de taza de azúcar. Escribí esa cantidad como número mixto.",
      operacion: "7/4",
      tipoRespuesta: "mixta",
      respuesta: "1 3/4",
      pistas: [
        "Con 4 cuartos se forma una taza entera. ¿Cuántas tazas enteras armás con 7 cuartos?",
        "Con 7 cuartos armás 1 taza entera (4 cuartos) y te sobran 3 cuartos.",
      ],
      resolucion: [
        "Dividimos 7 ÷ 4: entra 1 vez y sobran 3.",
        "El 1 es la parte entera y los 3 que sobran son cuartos: 3/4.",
        "Resultado: 1 3/4 tazas.",
      ],
    },
  ],
};

export default fracciones;
