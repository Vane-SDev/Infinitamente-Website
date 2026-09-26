export function mcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

// Devuelve { numerador, denominador } con el signo siempre en el numerador,
// o { error } si el texto no es "a/b" ni un entero.
export function parsearFraccion(texto) {
  const limpio = texto.trim().replace(/[−–]/g, "-").replace(/\s+/g, "");

  if (limpio === "") {
    return { error: "vacio" };
  }

  const entero = limpio.match(/^-?\d+$/);
  if (entero) {
    return { numerador: Number(limpio), denominador: 1 };
  }

  const fraccion = limpio.match(/^(-?\d+)\/(-?\d+)$/);
  if (!fraccion) {
    return { error: "formato" };
  }

  let numerador = Number(fraccion[1]);
  let denominador = Number(fraccion[2]);

  if (denominador === 0) {
    return { error: "denominadorCero" };
  }
  if (denominador < 0) {
    numerador = -numerador;
    denominador = -denominador;
  }

  return { numerador, denominador };
}

export function simplificar({ numerador, denominador }) {
  const divisor = mcd(numerador, denominador) || 1;
  return { numerador: numerador / divisor, denominador: denominador / divisor };
}

export function sonEquivalentes(a, b) {
  return a.numerador * b.denominador === b.numerador * a.denominador;
}

export function estaSimplificada(fraccion) {
  return mcd(fraccion.numerador, fraccion.denominador) === 1;
}

// Resultado: "correcto" | "equivalente" (bien pero sin simplificar) | "incorrecto" | "invalido"
export function evaluarFraccion(textoAlumno, respuestaEsperada) {
  const alumno = parsearFraccion(textoAlumno);
  if (alumno.error) {
    return { resultado: "invalido", error: alumno.error };
  }

  const esperada = parsearFraccion(respuestaEsperada);
  if (!sonEquivalentes(alumno, esperada)) {
    return { resultado: "incorrecto" };
  }

  return { resultado: estaSimplificada(alumno) ? "correcto" : "equivalente" };
}
