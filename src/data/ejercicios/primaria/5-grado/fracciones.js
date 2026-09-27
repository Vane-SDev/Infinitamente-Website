// Cada ejercicio necesita 2 pistas: se muestran después del 1° y del 2° error.
// Al 3° error se muestra la resolución paso a paso.

// Operaciones que aparecen en el menú de los ejercicios de plantear.
const operadores = ["+", "-", "×", "÷"];

const fracciones = {
  slug: "fracciones",
  nombre: "Fracciones",
  descripcion:
    "Fracciones equivalentes, comparación, sumas y restas con distinto denominador, multiplicación y división.",
  ejercicios: [
    {
      id: "fracciones-5-grado-equivalente-cuartos",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Completá el casillero para que la cuenta dé bien.",
      operacion: "1/2 = □/4",
      tipoRespuesta: "completar",
      respuesta: ["2"],
      pistas: [
        "Para pasar de medios a cuartos, el denominador se multiplicó por 2.",
        "Multiplicar por 2/2 es multiplicar por 1 entero, así que la fracción no cambia: multiplicá también el numerador por 2.",
      ],
      resolucion: [
        "2/2 = 1 entero.",
        "1/2 × 2/2 = 2/4.",
        "Como multiplicamos por 1, 1/2 y 2/4 son equivalentes.",
      ],
    },
    {
      id: "fracciones-5-grado-equivalente-doceavos",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Completá el casillero para que la cuenta dé bien.",
      operacion: "2/3 = □/12",
      tipoRespuesta: "completar",
      respuesta: ["8"],
      pistas: [
        "¿Por cuánto multiplicaste el 3 para llegar a 12?",
        "3 × 4 = 12. Multiplicá por 4/4, que es igual a 1 entero.",
      ],
      resolucion: [
        "4/4 = 1 entero.",
        "2/3 × 4/4 = 8/12, así que 2/3 = 8/12.",
      ],
    },
    {
      id: "fracciones-5-grado-comparar-tercios-cuartos",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "¿Qué signo va en el casillero? Elegí <, = o >.",
      operacion: "2/3 □ 3/4",
      tipoRespuesta: "comparar",
      respuesta: "<",
      pistas: [
        "Para comparar, pasá las dos fracciones al mismo denominador con fracciones equivalentes.",
        "Un múltiplo de 3 y de 4 es 12: 2/3 = 8/12 y 3/4 = 9/12.",
      ],
      resolucion: [
        "2/3 = 8/12 y 3/4 = 9/12.",
        "Como 8 < 9, 2/3 < 3/4.",
      ],
    },
    {
      id: "fracciones-5-grado-comparar-equivalentes",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "¿Qué signo va en el casillero? Elegí <, = o >.",
      operacion: "3/5 □ 6/10",
      tipoRespuesta: "comparar",
      respuesta: "=",
      pistas: [
        "Fijate si una se puede escribir con el denominador de la otra.",
        "3/5 × 2/2 = 6/10.",
      ],
      resolucion: [
        "3/5 × 2/2 = 6/10.",
        "Son fracciones equivalentes: 3/5 = 6/10.",
      ],
    },
    {
      id: "fracciones-5-grado-comparar-sextos-cuartos",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "¿Qué signo va en el casillero? Elegí <, = o >.",
      operacion: "5/6 □ 3/4",
      tipoRespuesta: "comparar",
      respuesta: ">",
      pistas: [
        "Buscá un denominador común para 6 y 4.",
        "El 12: 5/6 = 10/12 y 3/4 = 9/12.",
      ],
      resolucion: [
        "5/6 = 10/12 y 3/4 = 9/12.",
        "Como 10 > 9, 5/6 > 3/4.",
      ],
    },
    {
      id: "fracciones-5-grado-suma-distinto-denominador",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Resolvé y escribí el resultado simplificado.",
      operacion: "1/2 + 1/3",
      tipoRespuesta: "fraccion",
      respuesta: "5/6",
      pistas: [
        "Buscá un múltiplo de 2 y de 3 para el denominador común.",
        "Pasá las dos a sextos con fracciones equivalentes: 1/2 = 3/6 y 1/3 = 2/6.",
      ],
      resolucion: [
        "1/2 = 3/6 y 1/3 = 2/6.",
        "3/6 + 2/6 = 5/6.",
      ],
    },
    {
      id: "fracciones-5-grado-completar-suma-octavos",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Completá el casillero para que la cuenta dé bien.",
      operacion: "1/4 + □/8 = 5/8",
      tipoRespuesta: "completar",
      respuesta: ["3"],
      pistas: [
        "Pasá 1/4 a octavos.",
        "1/4 = 2/8. ¿Qué número sumado a 2 da 5?",
      ],
      resolucion: [
        "1/4 = 2/8, y 2/8 + 3/8 = 5/8.",
      ],
    },
    {
      id: "fracciones-5-grado-resta-distinto-denominador",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Resolvé y escribí el resultado simplificado.",
      operacion: "3/4 − 1/2",
      tipoRespuesta: "fraccion",
      respuesta: "1/4",
      pistas: [
        "Pasá 1/2 a cuartos.",
        "1/2 = 2/4. Ahora restá 3/4 − 2/4.",
      ],
      resolucion: [
        "1/2 = 2/4, y 3/4 − 2/4 = 1/4.",
      ],
    },
    {
      id: "fracciones-5-grado-plantear-pared",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Lucas pintó 1/3 de la pared el lunes y 1/6 el martes. ¿Qué parte de la pared pintó en total?",
      tipoRespuesta: "plantear",
      planteo: { a: "1/3", operador: "+", b: "1/6", operadores },
      respuesta: "1/2",
      pistasPlanteo: [
        "“En total” nos dice que hay que juntar.",
        "Fijate qué dos fracciones aparecen en el problema.",
      ],
      pistas: [
        "Pasá 1/3 a sextos.",
        "1/3 = 2/6. Sumá 2/6 + 1/6 y simplificá.",
      ],
      resolucion: [
        "1/3 = 2/6.",
        "2/6 + 1/6 = 3/6 = 1/2 de la pared.",
      ],
    },
    {
      id: "fracciones-5-grado-plantear-botella",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Una botella tenía 3/4 de litro de agua y tomaste 1/3 de litro. ¿Cuánta agua queda?",
      tipoRespuesta: "plantear",
      planteo: { a: "3/4", operador: "-", b: "1/3", operadores },
      respuesta: "5/12",
      pistasPlanteo: [
        "“Queda” nos dice que se sacó una parte.",
        "Lo que había va primero.",
      ],
      pistas: [
        "Un múltiplo de 4 y de 3 es 12.",
        "3/4 = 9/12 y 1/3 = 4/12.",
      ],
      resolucion: [
        "3/4 = 9/12 y 1/3 = 4/12.",
        "9/12 − 4/12 = 5/12 de litro.",
      ],
    },
    {
      id: "fracciones-5-grado-multiplicacion-en-linea",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Resolvé y escribí el resultado simplificado.",
      operacion: "1/2 × 3/4",
      tipoRespuesta: "fraccion",
      respuesta: "3/8",
      pistas: [
        "Para multiplicar no hace falta el mismo denominador: se multiplica en línea.",
        "Numerador por numerador (1 × 3) y denominador por denominador (2 × 4).",
      ],
      resolucion: [
        "1 × 3 = 3 y 2 × 4 = 8.",
        "Resultado: 3/8.",
      ],
    },
    {
      id: "fracciones-5-grado-multiplicacion-simplificar-en-cruz",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Resolvé y escribí el resultado simplificado.",
      operacion: "2/3 × 3/4",
      tipoRespuesta: "fraccion",
      respuesta: "1/2",
      pistas: [
        "Antes de multiplicar, fijate si podés simplificar en cruz: el numerador de una con el denominador de la otra.",
        "El 3 de arriba se simplifica con el 3 de abajo, y el 2 con el 4.",
      ],
      resolucion: [
        "Simplificamos en cruz: 3 con 3 queda 1/1, y 2 con 4 queda 1/2.",
        "Nos queda 1/1 × 1/2 = 1/2.",
        "Sin simplificar antes: 6/12 = 1/2.",
      ],
    },
    {
      id: "fracciones-5-grado-plantear-galletitas",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Un paquete tiene 1/2 kilo de galletitas y Martina se comió 1/4 del paquete. ¿Cuántos kilos se comió?",
      tipoRespuesta: "plantear",
      planteo: { a: "1/4", operador: "×", b: "1/2", operadores },
      respuesta: "1/8",
      pistasPlanteo: [
        "“1/4 del paquete” es una parte de una parte: eso es multiplicar.",
        "Las fracciones son 1/4 y 1/2.",
      ],
      pistas: [
        "Multiplicá en línea.",
        "1 × 1 = 1 y 4 × 2 = 8.",
      ],
      resolucion: [
        "1/4 × 1/2 = 1/8 de kilo.",
      ],
    },
    {
      id: "fracciones-5-grado-plantear-vasos",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Tenés 1/2 litro de jugo y querés servirlo en vasos de 1/4 de litro. ¿Cuántos vasos llenás?",
      tipoRespuesta: "plantear",
      planteo: { a: "1/2", operador: "÷", b: "1/4", operadores },
      respuesta: "2",
      pistasPlanteo: [
        "“¿Cuántos vasos llenás?” es repartir en partes iguales: es una división.",
        "Lo que tenés (1/2) va primero y el tamaño del vaso (1/4), después.",
      ],
      pistas: [
        "En la división se multiplica en cruz: numerador de la primera por denominador de la segunda va arriba.",
        "Arriba: 1 × 4 = 4. Abajo: 2 × 1 = 2. ¿Cuánto es 4/2?",
      ],
      resolucion: [
        "Multiplicamos en cruz: arriba 1 × 4 = 4 y abajo 2 × 1 = 2.",
        "Queda 4/2 = 2 vasos.",
      ],
    },
  ],
};

export default fracciones;
