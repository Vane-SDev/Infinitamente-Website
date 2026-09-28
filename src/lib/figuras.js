// Datos de una figura: { forma: "barra" | "circulo" | "grilla", partes,
// filas, columnas, pintadas }. En la grilla, partes = filas × columnas.
// "pintadas" puede ser una cantidad (se pintan las primeras) o una lista de
// posiciones empezando en 0.

export function totalPartes(grafico) {
  if (grafico.forma === "grilla") return grafico.filas * grafico.columnas;
  return grafico.partes;
}

export function indicesPintados(grafico) {
  const { pintadas = 0 } = grafico;
  if (Array.isArray(pintadas)) return pintadas;
  return Array.from({ length: pintadas }, (_, i) => i);
}
