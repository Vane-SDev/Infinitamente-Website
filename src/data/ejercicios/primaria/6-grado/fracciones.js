// Cada ejercicio necesita 2 pistas: se muestran después del 1° y del 2° error.
// Al 3° error se muestra la resolución paso a paso.

// Operaciones que aparecen en el menú de los ejercicios de plantear.
const operadores = ["+", "-", "×", "÷"];

const fracciones = {
  slug: "fracciones",
  nombre: "Fracciones",
  descripcion:
    "Operaciones combinadas separando en términos, potencias, raíces y problemas.",
  ejercicios: [
    {
      id: "fracciones-6-grado-combinado-suma-producto",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Resolvé separando en términos y escribí el resultado simplificado.",
      operacion: "1/2 + 1/3 × 3/4",
      tipoRespuesta: "fraccion",
      respuesta: "3/4",
      pistas: [
        "Separá en términos: el + separa. Primero se resuelve la multiplicación.",
        "1/3 × 3/4: simplificá en cruz el 3 con el 3 y queda 1/4. Ahora sumá 1/2 + 1/4.",
      ],
      resolucion: [
        "Términos: 1/2 y 1/3 × 3/4.",
        "1/3 × 3/4 = 1/4 (simplificando en cruz).",
        "1/2 + 1/4 = 2/4 + 1/4 = 3/4.",
      ],
    },
    {
      id: "fracciones-6-grado-combinado-parentesis-producto",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Resolvé separando en términos y escribí el resultado simplificado.",
      operacion: "(1/2 + 1/4) × 4/3",
      tipoRespuesta: "fraccion",
      respuesta: "1",
      pistas: [
        "Primero resolvé lo que está dentro del paréntesis.",
        "1/2 + 1/4 = 3/4. Ahora 3/4 × 4/3: simplificá en cruz.",
      ],
      resolucion: [
        "1/2 + 1/4 = 2/4 + 1/4 = 3/4.",
        "3/4 × 4/3 = 12/12 = 1 entero.",
      ],
    },
    {
      id: "fracciones-6-grado-combinado-resta-division",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Resolvé separando en términos y escribí el resultado simplificado.",
      operacion: "2/3 − 1/2 ÷ 3/2",
      tipoRespuesta: "fraccion",
      respuesta: "1/3",
      pistas: [
        "Separá en términos: primero se resuelve la división.",
        "1/2 ÷ 3/2 en cruz: arriba 1 × 2 y abajo 2 × 3.",
      ],
      resolucion: [
        "1/2 ÷ 3/2 = 2/6 = 1/3.",
        "2/3 − 1/3 = 1/3.",
      ],
    },
    {
      id: "fracciones-6-grado-combinado-producto-suma",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Resolvé separando en términos y escribí el resultado simplificado.",
      operacion: "3/4 × 2/3 + 1/6",
      tipoRespuesta: "fraccion",
      respuesta: "2/3",
      pistas: [
        "Separá en términos y resolvé primero la multiplicación.",
        "3/4 × 2/3 = 1/2 (simplificando en cruz). Pasá 1/2 a sextos para sumar.",
      ],
      resolucion: [
        "3/4 × 2/3 = 6/12 = 1/2.",
        "1/2 + 1/6 = 3/6 + 1/6 = 4/6 = 2/3.",
      ],
    },
    {
      id: "fracciones-6-grado-combinado-parentesis-division",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Resolvé separando en términos y escribí el resultado simplificado.",
      operacion: "(5/6 − 1/3) ÷ 1/4",
      tipoRespuesta: "fraccion",
      respuesta: "2",
      pistas: [
        "Primero el paréntesis: pasá 1/3 a sextos.",
        "El paréntesis da 3/6 = 1/2. Ahora 1/2 ÷ 1/4 en cruz.",
      ],
      resolucion: [
        "5/6 − 2/6 = 3/6 = 1/2.",
        "1/2 ÷ 1/4 = (1 × 4)/(2 × 1) = 4/2 = 2.",
      ],
    },
    {
      id: "fracciones-6-grado-combinado-mixto",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Resolvé separando en términos y escribí el resultado simplificado.",
      operacion: "1 1/2 + 3/4 × 2/3",
      tipoRespuesta: "fraccion",
      respuesta: "2",
      pistas: [
        "Pasá 1 1/2 a fracción impropia y resolvé primero la multiplicación.",
        "1 1/2 = 3/2 y 3/4 × 2/3 = 1/2. Ahora sumá 3/2 + 1/2.",
      ],
      resolucion: [
        "1 1/2 = 3/2.",
        "3/4 × 2/3 = 1/2.",
        "3/2 + 1/2 = 4/2 = 2.",
      ],
    },
    {
      id: "fracciones-6-grado-completar-combinado",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Completá el casillero para que la cuenta dé bien.",
      operacion: "1/2 × □/5 + 1/5 = 2/5",
      tipoRespuesta: "completar",
      respuesta: ["2"],
      pistas: [
        "Primero pensá cuánto tiene que dar la multiplicación: ¿qué le sumás a 1/5 para que dé 2/5?",
        "La multiplicación tiene que dar 1/5. ¿Por qué fracción multiplicás 1/2 para obtener 1/5?",
      ],
      resolucion: [
        "2/5 − 1/5 = 1/5, así que 1/2 × □/5 = 1/5.",
        "1/2 × 2/5 = 2/10 = 1/5.",
        "Falta el 2.",
      ],
    },
    {
      id: "fracciones-6-grado-potencia-cuadrado",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Resolvé separando en términos y escribí el resultado simplificado.",
      operacion: "(2/3)² + 1/9",
      tipoRespuesta: "fraccion",
      respuesta: "5/9",
      pistas: [
        "Separá en términos y resolvé primero la potencia: se elevan el numerador y el denominador.",
        "(2/3)² = 2²/3² = 4/9. Ahora sumá 4/9 + 1/9.",
      ],
      resolucion: [
        "(2/3)² = 4/9.",
        "4/9 + 1/9 = 5/9.",
      ],
    },
    {
      id: "fracciones-6-grado-raiz-resta",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Resolvé separando en términos y escribí el resultado simplificado.",
      operacion: "√(9/16) − 1/4",
      tipoRespuesta: "fraccion",
      respuesta: "1/2",
      pistas: [
        "La raíz de una fracción es la raíz del numerador sobre la raíz del denominador.",
        "√9 = 3 y √16 = 4, así que √(9/16) = 3/4. Ahora restá 3/4 − 1/4.",
      ],
      resolucion: [
        "√(9/16) = 3/4.",
        "3/4 − 1/4 = 2/4 = 1/2.",
      ],
    },
    {
      id: "fracciones-6-grado-potencia-cubo",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Resolvé separando en términos y escribí el resultado simplificado.",
      operacion: "(1/2)³ × 8/3",
      tipoRespuesta: "fraccion",
      respuesta: "1/3",
      pistas: [
        "Primero la potencia: (1/2)³ = 1/2 × 1/2 × 1/2.",
        "(1/2)³ = 1/8. Ahora 1/8 × 8/3: simplificá en cruz el 8 con el 8.",
      ],
      resolucion: [
        "(1/2)³ = 1/8.",
        "1/8 × 8/3 = 1/3, simplificando en cruz.",
      ],
    },
    {
      id: "fracciones-6-grado-raiz-y-potencia",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Resolvé separando en términos y escribí el resultado simplificado.",
      operacion: "√(4/9) + (1/3)²",
      tipoRespuesta: "fraccion",
      respuesta: "7/9",
      pistas: [
        "Separá en términos: resolvé la raíz y la potencia por separado.",
        "√(4/9) = 2/3 y (1/3)² = 1/9. Pasá 2/3 a novenos.",
      ],
      resolucion: [
        "√(4/9) = 2/3 = 6/9.",
        "(1/3)² = 1/9.",
        "6/9 + 1/9 = 7/9.",
      ],
    },
    {
      id: "fracciones-6-grado-raiz-division",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Resolvé separando en términos y escribí el resultado simplificado.",
      operacion: "√(25/36) ÷ 5/12",
      tipoRespuesta: "fraccion",
      respuesta: "2",
      pistas: [
        "Primero la raíz: raíz del numerador y raíz del denominador.",
        "√(25/36) = 5/6. Ahora dividí 5/6 ÷ 5/12 en cruz.",
      ],
      resolucion: [
        "√(25/36) = 5/6.",
        "5/6 ÷ 5/12 = (5 × 12)/(6 × 5) = 60/30 = 2.",
      ],
    },
    {
      id: "fracciones-6-grado-problema-dinero",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Juan gastó 1/3 de su dinero en ropa y 1/4 en libros. ¿Qué parte de su dinero le queda?",
      tipoRespuesta: "fraccion",
      respuesta: "5/12",
      pistas: [
        "Primero sumá lo que gastó. Después pensá cuánto falta para llegar al entero.",
        "Gastó 1/3 + 1/4 = 7/12. El entero son 12/12.",
      ],
      resolucion: [
        "1/3 + 1/4 = 4/12 + 3/12 = 7/12.",
        "El entero es 12/12, así que le queda 12/12 − 7/12 = 5/12.",
      ],
    },
    {
      id: "fracciones-6-grado-problema-libro",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Sofía leyó 2/5 de un libro el sábado y 1/3 el domingo. ¿Qué parte del libro le falta leer?",
      tipoRespuesta: "fraccion",
      respuesta: "4/15",
      pistas: [
        "Sumá lo que leyó y restáselo al entero.",
        "2/5 + 1/3 = 11/15, y el entero son 15/15.",
      ],
      resolucion: [
        "2/5 + 1/3 = 6/15 + 5/15 = 11/15.",
        "15/15 − 11/15 = 4/15.",
      ],
    },
    {
      id: "fracciones-6-grado-problema-tanque",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Un tanque tiene 40 litros de agua y se usaron 3/8 del tanque. ¿Cuántos litros se usaron?",
      tipoRespuesta: "fraccion",
      respuesta: "15",
      pistas: [
        "“3/8 de 40” es multiplicar: 3/8 × 40.",
        "Dividí 40 en 8 partes iguales y tomá 3.",
      ],
      resolucion: [
        "40 ÷ 8 = 5 litros cada octavo.",
        "3 × 5 = 15 litros.",
      ],
    },
    {
      id: "fracciones-6-grado-plantear-receta",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Una receta lleva 3/4 de taza de azúcar. Si hacés la mitad de la receta, ¿cuánta azúcar usás?",
      tipoRespuesta: "plantear",
      planteo: { a: "1/2", operador: "×", b: "3/4", operadores },
      respuesta: "3/8",
      pistasPlanteo: [
        "“La mitad de” es multiplicar por 1/2.",
        "Las fracciones son 1/2 y 3/4.",
      ],
      pistas: [
        "Multiplicá en línea.",
        "1 × 3 = 3 y 2 × 4 = 8.",
      ],
      resolucion: [
        "1/2 × 3/4 = 3/8 de taza.",
      ],
    },
    {
      id: "fracciones-6-grado-problema-botellas",
      nivel: "primaria",
      tema: "Fracciones",
      contexto:
        "Tenés 3 litros de jugo y botellas de 3/4 de litro. ¿Cuántas botellas llenás?",
      tipoRespuesta: "fraccion",
      respuesta: "4",
      pistas: [
        "Es una división: 3 ÷ 3/4. Escribí el 3 como 3/1.",
        "3/1 ÷ 3/4 en cruz: arriba 3 × 4 y abajo 1 × 3.",
      ],
      resolucion: [
        "3/1 ÷ 3/4 = (3 × 4)/(1 × 3) = 12/3 = 4 botellas.",
      ],
    },
  ],
};

export default fracciones;
