// Cada ejercicio necesita 2 pistas: se muestran después del 1° y del 2° error.
// Al 3° error se muestra la resolución paso a paso.
const fracciones = {
  slug: "fracciones",
  nombre: "Fracciones",
  descripcion:
    "Exponente negativo, propiedades de potencias y raíces, combinados con llaves, ecuaciones y problemas.",
  ejercicios: [
    {
      id: "fracciones-3-anio-exponente-negativo",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Resolvé y escribí el resultado simplificado. Si es negativo, poné el signo menos adelante.",
      operacion: "(2/3)⁻²",
      tipoRespuesta: "fraccion",
      respuesta: "9/4",
      pistas: [
        "El exponente negativo da vuelta la fracción y el exponente pasa a positivo.",
        "(2/3)⁻² = (3/2)².",
      ],
      resolucion: ["(2/3)⁻² = (3/2)².", "(3/2)² = 9/4."],
    },
    {
      id: "fracciones-3-anio-entero-exponente-negativo",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Resolvé y escribí el resultado simplificado. Si es negativo, poné el signo menos adelante.",
      operacion: "2⁻³ + (1/2)⁻¹",
      tipoRespuesta: "fraccion",
      respuesta: "17/8",
      pistas: [
        "El 2 es 2/1: dado vuelta es 1/2.",
        "2⁻³ = (1/2)³ = 1/8 y (1/2)⁻¹ = 2.",
      ],
      resolucion: [
        "2⁻³ = (1/2)³ = 1/8.",
        "(1/2)⁻¹ = 2/1 = 2.",
        "1/8 + 2 = 1/8 + 16/8 = 17/8.",
      ],
    },
    {
      id: "fracciones-3-anio-propiedades-combinadas",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Resolvé usando las propiedades de la potencia y escribí el resultado simplificado.",
      operacion: "(3/5)⁻² × (3/5)⁴ ÷ (3/5)³",
      tipoRespuesta: "fraccion",
      respuesta: "5/3",
      pistas: [
        "Misma base: al multiplicar se suman los exponentes y al dividir se restan.",
        "−2 + 4 − 3 = −1.",
      ],
      resolucion: ["Exponentes: −2 + 4 − 3 = −1.", "(3/5)⁻¹ = 5/3."],
    },
    {
      id: "fracciones-3-anio-base-negativa-exponente-negativo",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Resolvé y escribí el resultado simplificado. Si es negativo, poné el signo menos adelante.",
      operacion: "(−1/2)⁻³",
      tipoRespuesta: "fraccion",
      respuesta: "-8",
      pistas: [
        "Primero da vuelta la fracción: (−2)³.",
        "Exponente impar conserva el signo.",
      ],
      resolucion: ["(−1/2)⁻³ = (−2/1)³ = (−2)³.", "(−2)³ = −8."],
    },
    {
      id: "fracciones-3-anio-completar-exponente-negativo",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto: "Completá el exponente que falta. Puede ser negativo.",
      operacion: "(1/2)^□ = 8",
      tipoRespuesta: "completar",
      respuesta: ["-3"],
      pistas: [
        "8 = 2³. ¿Cómo pasás de 1/2 a 2?",
        "Dar vuelta la fracción es un exponente negativo.",
      ],
      resolucion: [
        "8 = 2³ y 2 es 1/2 dado vuelta.",
        "(1/2)⁻³ = 2³ = 8. Falta el −3.",
      ],
    },
    {
      id: "fracciones-3-anio-producto-raices",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Resolvé juntando las raíces y escribí el resultado simplificado.",
      operacion: "√(8/9) × √2",
      tipoRespuesta: "fraccion",
      respuesta: "4/3",
      pistas: [
        "Las raíces del mismo índice se pueden juntar: √a × √b = √(a × b).",
        "8/9 × 2 = 16/9.",
      ],
      resolucion: ["√(8/9) × √2 = √(8/9 × 2) = √(16/9).", "√(16/9) = 4/3."],
    },
    {
      id: "fracciones-3-anio-raiz-de-raiz",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Resolvé y escribí el resultado simplificado. Si es negativo, poné el signo menos adelante.",
      operacion: "√(√(16/81))",
      tipoRespuesta: "fraccion",
      respuesta: "2/3",
      pistas: ["Empezá por la raíz de adentro.", "√(16/81) = 4/9."],
      resolucion: [
        "√(16/81) = 4/9.",
        "√(4/9) = 2/3. Es lo mismo que la raíz cuarta de 16/81.",
      ],
    },
    {
      id: "fracciones-3-anio-raiz-de-suma",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Resolvé y escribí el resultado simplificado. Si es negativo, poné el signo menos adelante.",
      operacion: "√(1 + 9/16)",
      tipoRespuesta: "fraccion",
      respuesta: "5/4",
      pistas: [
        "Primero resolvé la suma que está debajo de la raíz. Ojo: no es √1 + √(9/16).",
        "1 + 9/16 = 16/16 + 9/16 = 25/16.",
      ],
      resolucion: [
        "1 + 9/16 = 16/16 + 9/16 = 25/16.",
        "√(25/16) = 5/4.",
        "La raíz no se distribuye en la suma: √1 + √(9/16) daría 7/4, que está mal.",
      ],
    },
    {
      id: "fracciones-3-anio-combinado-llaves",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Resolvé y escribí el resultado simplificado. Si es negativo, poné el signo menos adelante.",
      operacion: "{[(1/2 − 1)² + 3/4] ÷ 1/2 − 3} × (−2/3)⁻¹",
      tipoRespuesta: "fraccion",
      respuesta: "3/2",
      pistas: [
        "De adentro hacia afuera: paréntesis, potencia, corchete, llave. El otro factor lo resolvés aparte.",
        "(1/2 − 1)² = (−1/2)² = 1/4. 1/4 + 3/4 = 1. 1 ÷ 1/2 = 2 y 2 − 3 = −1.",
      ],
      resolucion: [
        "(1/2 − 1)² = (−1/2)² = 1/4 y 1/4 + 3/4 = 1.",
        "1 ÷ 1/2 = 2 y 2 − 3 = −1: la llave da −1.",
        "(−2/3)⁻¹ = −3/2.",
        "−1 × (−3/2) = 3/2.",
      ],
    },
    {
      id: "fracciones-3-anio-separar-terminos",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Resolvé separando en términos y escribí el resultado simplificado.",
      operacion: "1/3 − 2/9 ÷ (−2/3)² + √(1 − 5/9)",
      tipoRespuesta: "fraccion",
      respuesta: "1/2",
      pistas: [
        "Tres términos: 1/3, 2/9 ÷ (−2/3)² y la raíz. Resolvé cada uno por separado.",
        "(−2/3)² = 4/9, y 2/9 ÷ 4/9 = 1/2. Debajo de la raíz: 9/9 − 5/9 = 4/9.",
      ],
      resolucion: [
        "(−2/3)² = 4/9 y 2/9 ÷ 4/9 = 1/2.",
        "√(1 − 5/9) = √(4/9) = 2/3.",
        "1/3 − 1/2 + 2/3 = 2/6 − 3/6 + 4/6 = 3/6 = 1/2.",
      ],
    },
    {
      id: "fracciones-3-anio-decimales-periodicos",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Pasá los decimales a fracción, resolvé y escribí el resultado simplificado.",
      operacion: "0,5 + 0,333…",
      tipoRespuesta: "fraccion",
      respuesta: "5/6",
      pistas: [
        "Pasá cada decimal a fracción.",
        "0,5 = 1/2 y 0,333… = 3/9 = 1/3.",
      ],
      resolucion: [
        "0,5 = 5/10 = 1/2.",
        "0,333… = 3/9 = 1/3.",
        "1/2 + 1/3 = 3/6 + 2/6 = 5/6.",
      ],
    },
    {
      id: "fracciones-3-anio-leer-recta",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "La recta muestra el tramo de 1 a 2 dividido en quintos. ¿Qué número marca el punto A? Escribilo como fracción.",
      recta: {
        desde: 1,
        hasta: 2,
        partes: 5,
        punto: 3,
      },
      tipoRespuesta: "fraccion",
      respuesta: "8/5",
      pistas: ["Ya pasaste el 1 entero. Cada parte vale 1/5.", "A = 1 + 3/5."],
      resolucion: [
        "A está 3 quintos después del 1: A = 1 3/5.",
        "1 3/5 = 5/5 + 3/5 = 8/5.",
      ],
    },
    {
      id: "fracciones-3-anio-fraccion-entre-dos",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto: "Escribí una fracción que esté entre 2/5 y 3/7.",
      operacion: "2/5 < □ < 3/7",
      entre: ["2/5", "3/7"],
      tipoRespuesta: "entre",
      respuesta: "29/70",
      pistas: [
        "Pasalas a equivalentes con el mismo denominador: 14/35 y 15/35.",
        "Entre 14/35 y 15/35 no hay numerador entero. Multiplicá por 2/2: 28/70 y 30/70.",
      ],
      resolucion: [
        "2/5 = 14/35 = 28/70 y 3/7 = 15/35 = 30/70.",
        "28/70 < 29/70 < 30/70, así que 29/70 sirve.",
        "Entre dos fracciones siempre hay otra: por eso hay muchas respuestas posibles.",
      ],
    },
    {
      id: "fracciones-3-anio-ecuacion",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto: "¿Cuánto vale x? Escribí solo el número.",
      operacion: "2/3 x − 1/4 = 5/12",
      tipoRespuesta: "fraccion",
      respuesta: "1",
      pistas: [
        "Primero pasá el −1/4 sumando al otro lado.",
        "2/3 x = 5/12 + 3/12 = 8/12 = 2/3.",
      ],
      resolucion: [
        "2/3 x = 5/12 + 1/4 = 5/12 + 3/12 = 8/12 = 2/3.",
        "x = 2/3 ÷ 2/3 = 1.",
      ],
    },
    {
      id: "fracciones-3-anio-ecuacion-parentesis",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto: "¿Cuánto vale x? Escribí solo el número.",
      operacion: "1/2 × (x + 1/3) = 5/6",
      tipoRespuesta: "fraccion",
      respuesta: "4/3",
      pistas: [
        "El 1/2 que multiplica pasa dividiendo.",
        "x + 1/3 = 5/6 ÷ 1/2 = 10/6 = 5/3.",
      ],
      resolucion: ["x + 1/3 = 5/6 ÷ 1/2 = 10/6 = 5/3.", "x = 5/3 − 1/3 = 4/3."],
    },
    {
      id: "fracciones-3-anio-problema-tanque",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Un tanque está lleno hasta 3/8. Se agregan 120 litros y queda lleno hasta 3/4. ¿Cuántos litros entran en el tanque?",
      tipoRespuesta: "fraccion",
      respuesta: "320",
      pistas: [
        "Los 120 litros son la diferencia entre 3/4 y 3/8.",
        "3/4 − 3/8 = 3/8. Si 3/8 son 120 litros, ¿cuánto es 1/8?",
      ],
      resolucion: [
        "3/4 − 3/8 = 6/8 − 3/8 = 3/8, y eso son 120 litros.",
        "120 ÷ 3 = 40 litros cada octavo.",
        "8/8 = 8 × 40 = 320 litros.",
      ],
    },
    {
      id: "fracciones-3-anio-problema-ciclista",
      nivel: "secundaria",
      tema: "Fracciones",
      contexto:
        "Una ciclista recorre 1/4 del camino el primer día y 2/5 del resto el segundo día. Le faltan 18 km. ¿Cuántos km mide el camino?",
      tipoRespuesta: "fraccion",
      respuesta: "40",
      pistas: [
        "El resto después del primer día es 3/4. El segundo día hace 2/5 de 3/4.",
        "2/5 × 3/4 = 3/10. En total recorrió 1/4 + 3/10 = 11/20 y le faltan 9/20.",
      ],
      resolucion: [
        "El segundo día: 2/5 × 3/4 = 3/10.",
        "Recorrió 1/4 + 3/10 = 5/20 + 6/20 = 11/20, le faltan 9/20.",
        "9/20 son 18 km, así que 1/20 son 2 km y el camino mide 20 × 2 = 40 km.",
      ],
    },
  ],
};

export default fracciones;
