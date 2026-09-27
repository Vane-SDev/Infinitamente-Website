// Cada ejercicio necesita 2 pistas: se muestran después del 1° y del 2° error.
// Al 3° error se muestra la resolución paso a paso.
const fracciones = {
  slug: "fracciones",
  nombre: "Fracciones",
  descripcion:
    "Leer y pintar fracciones, completar cuentas, plantear problemas y números mixtos.",
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
      id: "fracciones-4-grado-identificar-chocolate",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Una barra de chocolate tiene 5 cuadraditos iguales. Tomi se comió los que están pintados. ¿Qué fracción de la barra se comió?",
      grafico: { forma: "barra", partes: 5, pintadas: 2 },
      tipoRespuesta: "identificar",
      respuesta: "2/5",
      pistas: [
        "Contá en cuántas partes iguales está dividida la barra: ese número va abajo (denominador).",
        "Ahora contá las partes pintadas: ese número va arriba (numerador).",
      ],
      resolucion: [
        "La barra tiene 5 partes → denominador 5.",
        "Hay 2 pintadas → numerador 2.",
        "Tomi se comió 2/5.",
      ],
    },
    {
      id: "fracciones-4-grado-identificar-ruleta",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Esta ruleta está dividida en 6 partes iguales. ¿Qué fracción está pintada?",
      grafico: { forma: "circulo", partes: 6, pintadas: 5 },
      tipoRespuesta: "identificar",
      respuesta: "5/6",
      pistas: [
        "El denominador es la cantidad total de partes iguales.",
        "Contá las partes pintadas: son el numerador.",
      ],
      resolucion: [
        "Hay 6 partes en total y 5 pintadas: 5/6.",
      ],
    },
    {
      id: "fracciones-4-grado-pintar-libro",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Martina ya leyó 3/4 de su libro. Pintá la parte que leyó.",
      operacion: "3/4",
      grafico: { forma: "barra", partes: 4 },
      tipoRespuesta: "pintar",
      respuesta: "3/4",
      pistas: [
        "El denominador 4 te dice en cuántas partes está dividida la barra.",
        "El numerador 3 te dice cuántas partes tenés que pintar.",
      ],
      resolucion: [
        "La barra tiene 4 partes y pintamos 3.",
      ],
    },
    {
      id: "fracciones-4-grado-pintar-mitad-grilla",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Pintá la mitad (1/2) de la grilla.",
      operacion: "1/2",
      grafico: { forma: "grilla", filas: 2, columnas: 5 },
      tipoRespuesta: "pintar",
      respuesta: "1/2",
      pistas: [
        "La mitad es partir en 2 grupos iguales. ¿Cuántas partes tiene la grilla en total?",
        "La grilla tiene 10 partes. ¿Cuánto es la mitad de 10?",
      ],
      resolucion: [
        "10 partes ÷ 2 = 5.",
        "Pintamos 5 de 10, que es 5/10 = 1/2.",
      ],
    },
    {
      id: "fracciones-4-grado-completar-suma",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Completá el casillero para que la cuenta dé bien.",
      operacion: "□/8 + 3/8 = 7/8",
      tipoRespuesta: "completar",
      respuesta: ["4"],
      pistas: [
        "Los denominadores son iguales: solo se suman los numeradores.",
        "¿Qué número sumado a 3 da 7?",
      ],
      resolucion: [
        "4 + 3 = 7, entonces 4/8 + 3/8 = 7/8.",
      ],
    },
    {
      id: "fracciones-4-grado-completar-resta",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Completá el casillero para que la cuenta dé bien.",
      operacion: "5/6 − □/6 = 2/6",
      tipoRespuesta: "completar",
      respuesta: ["3"],
      pistas: [
        "Con igual denominador, se restan solo los numeradores.",
        "¿Qué número le restás a 5 para que quede 2?",
      ],
      resolucion: [
        "5 − 3 = 2, entonces 5/6 − 3/6 = 2/6.",
      ],
    },
    {
      id: "fracciones-4-grado-plantear-leche",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Sofi tomó 2/8 de la botella de leche a la mañana y 3/8 a la tarde. ¿Qué parte de la botella tomó en total?",
      tipoRespuesta: "plantear",
      planteo: { a: "2/8", operador: "+", b: "3/8" },
      respuesta: "5/8",
      pistasPlanteo: [
        "“En total” nos dice que hay que juntar las dos partes. ¿Qué operación junta cantidades?",
        "Fijate qué dos fracciones aparecen en el problema: esas van en los casilleros.",
      ],
      pistas: [
        "Los denominadores son iguales: sumá solo los numeradores.",
        "2 + 3 = ?",
      ],
      resolucion: [
        "2/8 + 3/8 = 5/8 de la botella.",
      ],
    },
    {
      id: "fracciones-4-grado-plantear-jugo",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Una jarra tenía 7/10 de litro de jugo. Se sirvieron 4/10 de litro. ¿Cuánto jugo quedó?",
      tipoRespuesta: "plantear",
      planteo: { a: "7/10", operador: "-", b: "4/10" },
      respuesta: "3/10",
      pistasPlanteo: [
        "“Quedó” nos dice que se sacó una parte. ¿Qué operación usamos para sacar?",
        "Fijate qué dos fracciones aparecen en el problema: primero va lo que había y después lo que se sacó.",
      ],
      pistas: [
        "Restá solo los numeradores: 7 − 4.",
        "El denominador queda igual: 10.",
      ],
      resolucion: [
        "7/10 − 4/10 = 3/10 de litro.",
      ],
    },
    {
      id: "fracciones-4-grado-completar-mixto",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Completá el casillero para que la cuenta dé bien.",
      operacion: "1 2/5 = □/5",
      tipoRespuesta: "completar",
      respuesta: ["7"],
      pistas: [
        "Un entero, en quintos, son 5/5.",
        "Sumá los 5 quintos del entero con los 2 quintos que ya tenés.",
      ],
      resolucion: [
        "1 = 5/5, y 5/5 + 2/5 = 7/5.",
      ],
    },
    {
      id: "fracciones-4-grado-impropia-a-mixta-pan",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "En la panadería pesaron 11/4 kilos de pan. ¿Cuántos kilos enteros son y cuánto sobra? Escribilo como número mixto.",
      operacion: "11/4",
      tipoRespuesta: "mixta",
      respuesta: "2 3/4",
      pistas: [
        "Cada kilo entero son 4/4. ¿Cuántas veces entra 4 en 11?",
        "4 entra 2 veces en 11 (2 × 4 = 8) y sobran 3 cuartos.",
      ],
      resolucion: [
        "11 ÷ 4 = 2 y sobran 3, así que 11/4 = 2 3/4 kilos.",
      ],
    },
  ],
};

export default fracciones;
