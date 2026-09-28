// Cada ejercicio necesita 2 pistas: se muestran después del 1° y del 2° error.
// Al 3° error se muestra la resolución paso a paso.
const fracciones = {
  slug: "fracciones",
  nombre: "Fracciones",
  descripcion:
    "Fracciones con signo, recta con negativos, propiedades de la potencia, corchetes y decimales periódicos.",
  ejercicios: [
    {
      id: "fracciones-2-anio-ubicar-negativo",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Cada entero está dividido en 4 partes iguales. Tocá la marca donde va −3/4.",
      recta: {
        desde: -2,
        hasta: 1,
        partes: 4,
      },
      tipoRespuesta: "ubicar",
      respuesta: "-3/4",
      pistas: [
        "Los negativos van a la izquierda del 0. Cada parte vale 1/4.",
        "Desde el 0 contá 3 cuartos hacia la izquierda, sin llegar al −1.",
      ],
      resolucion: [
        "−3/4 está entre −1 y 0.",
        "Desde el 0 contamos 3 cuartos hacia la izquierda.",
      ],
    },
    {
      id: "fracciones-2-anio-leer-negativo",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "La recta está dividida en quintos. ¿Qué fracción marca el punto B?",
      recta: {
        desde: -1,
        hasta: 0,
        partes: 5,
        punto: 3,
        etiqueta: "B",
      },
      tipoRespuesta: "fraccion",
      respuesta: "-2/5",
      pistas: [
        "Cada parte vale 1/5 y a la izquierda del 0 los números son negativos.",
        "B está a 2 quintos del 0.",
      ],
      resolucion: [
        "Cada parte vale 1/5.",
        "B está 2 partes a la izquierda del 0: B = −2/5.",
      ],
    },
    {
      id: "fracciones-2-anio-comparar-negativos",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto: "¿Qué signo va en el casillero? Elegí <, = o >.",
      operacion: "−2/3 □ −3/5",
      tipoRespuesta: "comparar",
      respuesta: "<",
      pistas: [
        "Pasá las dos a equivalentes con el mismo denominador.",
        "−10/15 y −9/15. En los negativos, el que está más lejos del 0 es el menor.",
      ],
      resolucion: [
        "−2/3 = −10/15 y −3/5 = −9/15.",
        "−10/15 está más lejos del 0, así que es menor: −2/3 < −3/5.",
      ],
    },
    {
      id: "fracciones-2-anio-suma-signos",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Resolvé y escribí el resultado simplificado. Si es negativo, poné el signo menos adelante.",
      operacion: "−2/3 + 5/6",
      tipoRespuesta: "fraccion",
      respuesta: "1/6",
      pistas: [
        "Pasá a sextos.",
        "−4/6 + 5/6: signos distintos, se restan y queda el signo del mayor.",
      ],
      resolucion: ["−2/3 = −4/6.", "−4/6 + 5/6 = 1/6."],
    },
    {
      id: "fracciones-2-anio-restar-negativo",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Resolvé y escribí el resultado simplificado. Si es negativo, poné el signo menos adelante.",
      operacion: "1/4 − (−2/3)",
      tipoRespuesta: "fraccion",
      respuesta: "11/12",
      pistas: [
        "Menos por menos es más: − (−2/3) = + 2/3.",
        "1/4 + 2/3 con denominador 12.",
      ],
      resolucion: [
        "1/4 − (−2/3) = 1/4 + 2/3.",
        "1/4 + 2/3 = 3/12 + 8/12 = 11/12.",
      ],
    },
    {
      id: "fracciones-2-anio-multiplicacion-signos",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Resolvé y escribí el resultado simplificado. Si es negativo, poné el signo menos adelante.",
      operacion: "(−5/6) × (−9/10)",
      tipoRespuesta: "fraccion",
      respuesta: "3/4",
      pistas: [
        "Primero el signo: menos por menos da más. Después simplificá en cruz.",
        "5 con 10 queda 1 y 2. 9 con 6 queda 3 y 2.",
      ],
      resolucion: [
        "Menos por menos da más.",
        "Simplificando en cruz: (1 × 3)/(2 × 2) = 3/4.",
      ],
    },
    {
      id: "fracciones-2-anio-division-signos",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Resolvé y escribí el resultado simplificado. Si es negativo, poné el signo menos adelante.",
      operacion: "(−4/9) ÷ 2/3",
      tipoRespuesta: "fraccion",
      respuesta: "-2/3",
      pistas: [
        "Menos dividido más da menos. Dividí en cruz.",
        "Arriba 4 × 3 y abajo 9 × 2.",
      ],
      resolucion: [
        "Menos dividido más da menos.",
        "(4 × 3)/(9 × 2) = 12/18 = 2/3, así que el resultado es −2/3.",
      ],
    },
    {
      id: "fracciones-2-anio-potencias-base-negativa",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Resolvé separando en términos y escribí el resultado simplificado.",
      operacion: "(−2/3)² − (−1/3)³",
      tipoRespuesta: "fraccion",
      respuesta: "13/27",
      pistas: [
        "Exponente par da positivo, exponente impar conserva el signo.",
        "(−2/3)² = 4/9 y (−1/3)³ = −1/27. Restar −1/27 es sumar 1/27.",
      ],
      resolucion: [
        "(−2/3)² = 4/9 y (−1/3)³ = −1/27.",
        "4/9 − (−1/27) = 4/9 + 1/27 = 12/27 + 1/27 = 13/27.",
      ],
    },
    {
      id: "fracciones-2-anio-exponente-cero",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Resolvé separando en términos y escribí el resultado simplificado.",
      operacion: "(5/7)⁰ + 1/2",
      tipoRespuesta: "fraccion",
      respuesta: "3/2",
      pistas: [
        "Todo número distinto de 0 elevado a la 0 da 1.",
        "1 + 1/2 = 2/2 + 1/2.",
      ],
      resolucion: ["(5/7)⁰ = 1.", "1 + 1/2 = 2/2 + 1/2 = 3/2."],
    },
    {
      id: "fracciones-2-anio-cociente-igual-base",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Resolvé usando las propiedades de la potencia y escribí el resultado simplificado.",
      operacion: "(2/3)⁵ ÷ (2/3)³",
      tipoRespuesta: "fraccion",
      respuesta: "4/9",
      pistas: [
        "Con la misma base, al dividir se restan los exponentes.",
        "5 − 3 = 2, queda (2/3)².",
      ],
      resolucion: ["(2/3)⁵ ÷ (2/3)³ = (2/3)⁵⁻³ = (2/3)².", "(2/3)² = 4/9."],
    },
    {
      id: "fracciones-2-anio-completar-exponente",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto: "Completá el exponente que falta.",
      operacion: "(3/4)² × (3/4)^□ = (3/4)⁵",
      tipoRespuesta: "completar",
      respuesta: ["3"],
      pistas: [
        "Con la misma base, al multiplicar se suman los exponentes.",
        "2 + □ = 5.",
      ],
      resolucion: [
        "Al multiplicar potencias de igual base se suman los exponentes.",
        "2 + 3 = 5. Falta el 3.",
      ],
    },
    {
      id: "fracciones-2-anio-potencia-de-potencia",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Resolvé usando las propiedades de la potencia y escribí el resultado simplificado.",
      operacion: "[(2/3)²]² ÷ (2/3)³",
      tipoRespuesta: "fraccion",
      respuesta: "2/3",
      pistas: [
        "Potencia de potencia: se multiplican los exponentes.",
        "[(2/3)²]² = (2/3)⁴. Ahora dividí con la misma base.",
      ],
      resolucion: ["[(2/3)²]² = (2/3)⁴.", "(2/3)⁴ ÷ (2/3)³ = (2/3)¹ = 2/3."],
    },
    {
      id: "fracciones-2-anio-raiz-cubica-negativa",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Resolvé separando en términos y escribí el resultado simplificado.",
      operacion: "∛(−8/27) + 1",
      tipoRespuesta: "fraccion",
      respuesta: "1/3",
      pistas: [
        "La raíz cúbica de un negativo es negativa: (−2) × (−2) × (−2) = −8.",
        "∛(−8/27) = −2/3. Escribí el 1 como 3/3.",
      ],
      resolucion: ["∛(−8/27) = −2/3.", "−2/3 + 3/3 = 1/3."],
    },
    {
      id: "fracciones-2-anio-corchete-parentesis",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Resolvé y escribí el resultado simplificado. Si es negativo, poné el signo menos adelante.",
      operacion: "[1/2 − (1/3 + 1/4)] × 12",
      tipoRespuesta: "fraccion",
      respuesta: "-1",
      pistas: [
        "De adentro hacia afuera: paréntesis, corchete y después la multiplicación.",
        "1/3 + 1/4 = 7/12 y 1/2 − 7/12 = 6/12 − 7/12.",
      ],
      resolucion: [
        "1/3 + 1/4 = 4/12 + 3/12 = 7/12.",
        "1/2 − 7/12 = 6/12 − 7/12 = −1/12.",
        "−1/12 × 12 = −1.",
      ],
    },
    {
      id: "fracciones-2-anio-combinado-largo",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Resolvé separando en términos y escribí el resultado simplificado.",
      operacion: "2/3 − [1/2 × (−4/5) + 3/10] ÷ 1/5",
      tipoRespuesta: "fraccion",
      respuesta: "7/6",
      pistas: [
        "Separá en términos. Dentro del corchete también: primero la multiplicación.",
        "1/2 × (−4/5) = −2/5 = −4/10. −4/10 + 3/10 = −1/10.",
      ],
      resolucion: [
        "Dentro del corchete: 1/2 × (−4/5) = −4/10 y −4/10 + 3/10 = −1/10.",
        "−1/10 ÷ 1/5 = −5/10 = −1/2.",
        "2/3 − (−1/2) = 2/3 + 1/2 = 4/6 + 3/6 = 7/6.",
      ],
    },
    {
      id: "fracciones-2-anio-potencia-raiz-signo",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Resolvé y escribí el resultado simplificado. Si es negativo, poné el signo menos adelante.",
      operacion: "(−1/2)² + √(25/16) × (−2/5)",
      tipoRespuesta: "fraccion",
      respuesta: "-1/4",
      pistas: [
        "Separá en términos: la potencia sola y la raíz por la fracción.",
        "(−1/2)² = 1/4 y √(25/16) = 5/4. 5/4 × (−2/5) = −1/2.",
      ],
      resolucion: [
        "(−1/2)² = 1/4.",
        "√(25/16) = 5/4 y 5/4 × (−2/5) = −10/20 = −1/2.",
        "1/4 − 1/2 = 1/4 − 2/4 = −1/4.",
      ],
    },
    {
      id: "fracciones-2-anio-periodico-mixto",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Completá el numerador de la fracción que es igual al decimal periódico.",
      operacion: "1,2555… = □/90",
      tipoRespuesta: "completar",
      respuesta: ["113"],
      pistas: [
        "Arriba va todo el número sin coma menos la parte que no se repite: 125 − 12.",
        "Abajo, un 9 por cada cifra que se repite y un 0 por cada cifra que no se repite después de la coma: 90.",
      ],
      resolucion: [
        "Arriba: 125 − 12 = 113.",
        "Abajo: un 9 (el 5 se repite) y un 0 (el 2 no se repite): 90.",
        "1,2555… = 113/90.",
      ],
    },
    {
      id: "fracciones-2-anio-problema-temperatura",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "A la medianoche había 1/2 °C y la temperatura bajó 3/4 °C por hora durante 2 1/2 horas. ¿Qué temperatura había al final? Escribila como fracción.",
      tipoRespuesta: "fraccion",
      respuesta: "-11/8",
      pistas: [
        "Lo que bajó es 3/4 × 2 1/2. Después se lo restás a 1/2.",
        "3/4 × 5/2 = 15/8. 1/2 = 4/8.",
      ],
      resolucion: [
        "Bajó 3/4 × 5/2 = 15/8 °C.",
        "1/2 − 15/8 = 4/8 − 15/8 = −11/8 °C.",
      ],
    },
  ],
};

export default fracciones;
