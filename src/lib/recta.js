import { simplificar } from "./fracciones";

// Datos de una recta numérica: { desde, hasta, partes, punto, etiqueta }.
// Va de "desde" a "hasta" (enteros) y cada entero está dividido en "partes"
// iguales. Las marcas se cuentan desde 0 (la del "desde"). "punto" (opcional)
// es la marca donde se dibuja el punto con su "etiqueta" (por defecto "A").

export function totalMarcas({ desde, hasta, partes }) {
  return (hasta - desde) * partes + 1;
}

// Lo que vale la marca, como fracción simplificada.
export function valorDeMarca({ desde, partes }, marca) {
  return simplificar({ numerador: desde * partes + marca, denominador: partes });
}

export function textoFraccion({ numerador, denominador }) {
  return denominador === 1 ? String(numerador) : `${numerador}/${denominador}`;
}
