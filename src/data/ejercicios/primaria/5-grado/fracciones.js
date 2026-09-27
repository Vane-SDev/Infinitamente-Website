// Cada ejercicio necesita 2 pistas: se muestran después del 1° y del 2° error.
// Al 3° error se muestra la resolución paso a paso.
const fracciones = {
  slug: "fracciones",
  nombre: "Fracciones",
  descripcion:
    "Sumas de fracciones con distinto denominador.",
  ejercicios: [
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
  ],
};

export default fracciones;
