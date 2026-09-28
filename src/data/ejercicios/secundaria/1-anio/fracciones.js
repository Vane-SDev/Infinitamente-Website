// Cada ejercicio necesita 2 pistas: se muestran después del 1° y del 2° error.
// Al 3° error se muestra la resolución paso a paso.

// Operaciones que aparecen en el menú de los ejercicios de plantear.
const operadores = ["+", "-", "×", "÷"];

const fracciones = {
  slug: "fracciones",
  nombre: "Fracciones",
  descripcion:
    "Irreducible, recta numérica, las cuatro operaciones con mixtos, potencias, raíces y combinados con paréntesis.",
  ejercicios: [
    {
      id: "fracciones-1-anio-irreducible",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto: "Simplificá la fracción hasta que sea irreducible.",
      operacion: "36/48",
      tipoRespuesta: "fraccion",
      respuesta: "3/4",
      pistas: [
        "Dividí numerador y denominador por un mismo número: los dos son pares.",
        "36/48 = 18/24 = 9/12. ¿Por qué número podés dividir 9 y 12?",
      ],
      resolucion: [
        "36/48 ÷ 2 = 18/24.",
        "18/24 ÷ 2 = 9/12.",
        "9/12 ÷ 3 = 3/4. 3 y 4 no tienen divisores en común: es irreducible.",
      ],
    },
    {
      id: "fracciones-1-anio-completar-equivalente",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto: "Completá para que las fracciones sean equivalentes.",
      operacion: "5/8 = □/56",
      tipoRespuesta: "completar",
      respuesta: ["35"],
      pistas: [
        "¿Por cuánto multiplicaste el 8 para llegar a 56?",
        "8 × 7 = 56. Multiplicá el numerador por el mismo número.",
      ],
      resolucion: [
        "8 × 7 = 56, entonces 5 × 7 = 35.",
        "5/8 = 35/56: es como multiplicar por 7/7 = 1 entero.",
      ],
    },
    {
      id: "fracciones-1-anio-cadena-equivalentes",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Completá los casilleros para que las tres fracciones sean equivalentes.",
      operacion: "12/□ = □/5 = 60/100",
      tipoRespuesta: "completar",
      respuesta: ["20", "3"],
      pistas: [
        "Empezá por 60/100: simplificala hasta tener denominador 5.",
        "60/100 = 3/5. Ahora, ¿qué denominador lleva 12 si 3 × 4 = 12?",
      ],
      resolucion: [
        "60/100 ÷ 20 = 3/5, así que el segundo casillero es 3.",
        "3 × 4 = 12, así que 5 × 4 = 20: la primera fracción es 12/20.",
      ],
    },
    {
      id: "fracciones-1-anio-ubicar-recta",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Cada entero está dividido en 4 partes iguales. Tocá la marca donde va 5/4.",
      recta: {
        desde: 0,
        hasta: 2,
        partes: 4,
      },
      tipoRespuesta: "ubicar",
      respuesta: "5/4",
      pistas: [
        "Cada parte vale 1/4. ¿Cuántas partes contás desde el 0?",
        "5/4 = 4/4 + 1/4 = 1 entero y 1/4: pasá el 1 y avanzá una marca más.",
      ],
      resolucion: [
        "5/4 = 4/4 + 1/4 = 1 1/4.",
        "Desde el 0 contamos 5 cuartos: queda una marca después del 1.",
      ],
    },
    {
      id: "fracciones-1-anio-leer-recta",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "La recta está dividida en 6 partes iguales. ¿Qué fracción marca el punto A? Escribila simplificada.",
      recta: {
        desde: 0,
        hasta: 1,
        partes: 6,
        punto: 4,
      },
      tipoRespuesta: "fraccion",
      respuesta: "2/3",
      pistas: [
        "Cada parte es 1/6 del entero.",
        "A está en 4/6. Simplificá dividiendo por 2.",
      ],
      resolucion: [
        "Cada parte vale 1/6 y A está en la cuarta marca: 4/6.",
        "4/6 ÷ 2 = 2/3.",
      ],
    },
    {
      id: "fracciones-1-anio-comparar-equivalentes",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto: "¿Qué signo va en el casillero? Elegí <, = o >.",
      operacion: "5/6 □ 7/9",
      tipoRespuesta: "comparar",
      respuesta: ">",
      pistas: [
        "Buscá fracciones equivalentes con el mismo denominador.",
        "18 es múltiplo de 6 y de 9: 5/6 = 15/18 y 7/9 = 14/18.",
      ],
      resolucion: ["5/6 = 15/18 y 7/9 = 14/18.", "Como 15 > 14, 5/6 > 7/9."],
    },
    {
      id: "fracciones-1-anio-suma-tres-terminos",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto: "Resolvé la suma y escribí el resultado simplificado.",
      operacion: "1/2 + 2/3 + 3/4",
      tipoRespuesta: "fraccion",
      respuesta: "23/12",
      pistas: [
        "Buscá un denominador que sirva para 2, 3 y 4 a la vez.",
        "Con 12: 1/2 = 6/12, 2/3 = 8/12 y 3/4 = 9/12.",
      ],
      resolucion: [
        "1/2 = 6/12, 2/3 = 8/12 y 3/4 = 9/12.",
        "6/12 + 8/12 + 9/12 = 23/12.",
      ],
    },
    {
      id: "fracciones-1-anio-resta-mixtos",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Resolvé la resta y escribí el resultado como fracción simplificada.",
      operacion: "3 1/4 − 1 2/3",
      tipoRespuesta: "fraccion",
      respuesta: "19/12",
      pistas: [
        "Pasá los dos mixtos a fracción impropia.",
        "3 1/4 = 13/4 y 1 2/3 = 5/3. Pasá a doceavos.",
      ],
      resolucion: [
        "3 1/4 = 13/4 y 1 2/3 = 5/3.",
        "13/4 − 5/3 = 39/12 − 20/12 = 19/12.",
      ],
    },
    {
      id: "fracciones-1-anio-multiplicacion-tres",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Resolvé la multiplicación. Si el resultado es un número entero, escribilo sin barra.",
      operacion: "4/9 × 15/8 × 6/5",
      tipoRespuesta: "fraccion",
      respuesta: "1",
      pistas: [
        "Antes de multiplicar, simplificá en cruz y directo todo lo que puedas.",
        "4 con 8, 15 con 9 (por 3), el 5 con el 5 y el 6 con lo que quede abajo.",
      ],
      resolucion: [
        "Simplificando, arriba y abajo queda lo mismo.",
        "4 × 15 × 6 = 360 y 9 × 8 × 5 = 360.",
        "360/360 = 1 entero.",
      ],
    },
    {
      id: "fracciones-1-anio-division-mixtos",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Resolvé la división y escribí el resultado como fracción simplificada.",
      operacion: "2 1/2 ÷ 1 7/8",
      tipoRespuesta: "fraccion",
      respuesta: "4/3",
      pistas: [
        "Pasá a impropias y dividí en cruz.",
        "5/2 ÷ 15/8: arriba 5 × 8 y abajo 2 × 15.",
      ],
      resolucion: [
        "2 1/2 = 5/2 y 1 7/8 = 15/8.",
        "5/2 ÷ 15/8 = (5 × 8)/(2 × 15) = 40/30.",
        "40/30 = 4/3.",
      ],
    },
    {
      id: "fracciones-1-anio-potencia-producto",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Resolvé separando en términos y escribí el resultado simplificado.",
      operacion: "(2/5)² × 25/8",
      tipoRespuesta: "fraccion",
      respuesta: "1/2",
      pistas: [
        "Primero la potencia: se elevan el numerador y el denominador.",
        "(2/5)² = 4/25. Ahora 4/25 × 25/8: simplificá en cruz.",
      ],
      resolucion: [
        "(2/5)² = 4/25.",
        "4/25 × 25/8 = 4/8, simplificando el 25 con el 25.",
        "4/8 = 1/2.",
      ],
    },
    {
      id: "fracciones-1-anio-raices-suma",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Resolvé separando en términos y escribí el resultado simplificado.",
      operacion: "√(49/64) + √(1/4)",
      tipoRespuesta: "fraccion",
      respuesta: "11/8",
      pistas: [
        "Raíz del numerador sobre raíz del denominador, en cada término.",
        "√(49/64) = 7/8 y √(1/4) = 1/2 = 4/8.",
      ],
      resolucion: ["√(49/64) = 7/8 y √(1/4) = 1/2.", "7/8 + 4/8 = 11/8."],
    },
    {
      id: "fracciones-1-anio-raiz-cubica",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Resolvé separando en términos y escribí el resultado simplificado.",
      operacion: "∛(27/64) − 1/2",
      tipoRespuesta: "fraccion",
      respuesta: "1/4",
      pistas: [
        "La raíz cúbica busca el número que multiplicado 3 veces por sí mismo da el radicando.",
        "3 × 3 × 3 = 27 y 4 × 4 × 4 = 64, así que ∛(27/64) = 3/4.",
      ],
      resolucion: ["∛(27/64) = 3/4.", "3/4 − 1/2 = 3/4 − 2/4 = 1/4."],
    },
    {
      id: "fracciones-1-anio-combinado-parentesis",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Resolvé separando en términos y escribí el resultado simplificado.",
      operacion: "(1/2 + 1/3) × 6/5 − 1/4",
      tipoRespuesta: "fraccion",
      respuesta: "3/4",
      pistas: [
        "Separá en términos: el − separa. En el primer término, primero el paréntesis.",
        "1/2 + 1/3 = 5/6 y 5/6 × 6/5 = 1.",
      ],
      resolucion: [
        "1/2 + 1/3 = 3/6 + 2/6 = 5/6.",
        "5/6 × 6/5 = 30/30 = 1.",
        "1 − 1/4 = 4/4 − 1/4 = 3/4.",
      ],
    },
    {
      id: "fracciones-1-anio-combinado-potencia-raiz",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Resolvé separando en términos y escribí el resultado simplificado.",
      operacion: "(1/3)² + √(16/9) ÷ 2",
      tipoRespuesta: "fraccion",
      respuesta: "7/9",
      pistas: [
        "Separá en términos. Resolvé la potencia y la raíz, después la división.",
        "(1/3)² = 1/9 y √(16/9) = 4/3. 4/3 ÷ 2/1 en cruz da 4/6 = 2/3.",
      ],
      resolucion: [
        "(1/3)² = 1/9.",
        "√(16/9) = 4/3 y 4/3 ÷ 2 = 4/6 = 2/3.",
        "1/9 + 2/3 = 1/9 + 6/9 = 7/9.",
      ],
    },
    {
      id: "fracciones-1-anio-completar-combinado",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto: "Completá el número que falta para que la cuenta dé bien.",
      operacion: "(□/4 − 1/2) × 8/3 = 2",
      tipoRespuesta: "completar",
      respuesta: ["5"],
      pistas: [
        "Pensá de atrás para adelante: ¿por qué fracción multiplicás 8/3 para que dé 2?",
        "El paréntesis tiene que dar 3/4. ¿Qué le restás 1/2 = 2/4 para que quede 3/4?",
      ],
      resolucion: [
        "2 ÷ 8/3 = 6/8 = 3/4, así que el paréntesis da 3/4.",
        "□/4 − 2/4 = 3/4, entonces □/4 = 5/4.",
        "Falta el 5.",
      ],
    },
    {
      id: "fracciones-1-anio-problema-resto",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "En un curso, 2/5 de los alumnos van en colectivo, 1/3 del resto va caminando y los demás van en bici. ¿Qué fracción del curso va en bici?",
      tipoRespuesta: "fraccion",
      respuesta: "2/5",
      pistas: [
        "El resto es lo que falta para el entero después de los que van en colectivo.",
        "El resto es 3/5. Caminando va 1/3 de 3/5 = 1/5.",
      ],
      resolucion: [
        "5/5 − 2/5 = 3/5 de resto.",
        "1/3 × 3/5 = 1/5 va caminando.",
        "En bici: 5/5 − 2/5 − 1/5 = 2/5.",
      ],
    },
    {
      id: "fracciones-1-anio-plantear-jarra",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Una jarra tiene 3/4 de litro de jugo y se sirve en vasos de 1/8 de litro. ¿Cuántos vasos se llenan?",
      planteo: { a: "3/4", operador: "÷", b: "1/8", operadores },
      tipoRespuesta: "plantear",
      respuesta: "6",
      pistasPlanteo: [
        "“¿Cuántos vasos se llenan?” es una división.",
        "Dividís lo que hay (3/4) por lo que entra en cada vaso (1/8).",
      ],
      pistas: ["Dividí en cruz.", "Arriba 3 × 8 y abajo 4 × 1."],
      resolucion: ["3/4 ÷ 1/8 = (3 × 8)/(4 × 1) = 24/4.", "24/4 = 6 vasos."],
    },
  ],
};

export default fracciones;
