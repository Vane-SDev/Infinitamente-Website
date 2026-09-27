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

// Reconoce un número mixto como "1 3/4" (entero, espacio, fracción).
// Devuelve null si el texto no tiene esa forma, { error } si es inválido o
// { numerador, denominador, entero, parte } con el valor como fracción impropia.
export function parsearMixta(texto) {
  const limpio = texto.trim().replace(/[−–]/g, "-").replace(/\s+/g, " ");
  const mixta = limpio.match(/^(-?)(\d+) (\d+)\/(\d+)$/);
  if (!mixta) return null;

  const signo = mixta[1] === "-" ? -1 : 1;
  const entero = Number(mixta[2]);
  const parte = { numerador: Number(mixta[3]), denominador: Number(mixta[4]) };

  if (parte.denominador === 0) {
    return { error: "denominadorCero" };
  }

  return {
    numerador: signo * (entero * parte.denominador + parte.numerador),
    denominador: parte.denominador,
    entero,
    parte,
  };
}

// Convierte la respuesta esperada ("7/4", "2" o "1 3/4") en fracción.
function parsearEsperada(texto) {
  return parsearMixta(texto) ?? parsearFraccion(texto);
}

// Todas las evaluaciones devuelven:
// { resultado: "correcto" | "incorrecto" }
// { resultado: "invalido", error } (formato mal escrito, no descuenta intento)
// { resultado: "equivalente", motivo } (vale lo mismo pero está mal escrito,
// no descuenta intento)

// Respuesta con fracción simplificada o entero, ej: "3/4", "7/4" o "2".
export function evaluarFraccion(textoAlumno, respuestaEsperada) {
  const esperada = parsearEsperada(respuestaEsperada);

  // Si escribe un mixto ("1 3/4") cuando se pide una fracción.
  const mixta = parsearMixta(textoAlumno);
  if (mixta?.error) return { resultado: "invalido", error: mixta.error };
  if (mixta) {
    return sonEquivalentes(mixta, esperada)
      ? { resultado: "equivalente", motivo: "mixta" }
      : { resultado: "incorrecto" };
  }

  const alumno = parsearFraccion(textoAlumno);
  if (alumno.error) return { resultado: "invalido", error: alumno.error };
  if (!sonEquivalentes(alumno, esperada)) return { resultado: "incorrecto" };

  return estaSimplificada(alumno)
    ? { resultado: "correcto" }
    : { resultado: "equivalente", motivo: "sinSimplificar" };
}

// Respuesta como número mixto, ej: "1 3/4". Un entero ("2") o una fracción
// menor que 1 ("3/4") también valen si ese es el resultado.
export function evaluarMixta(textoAlumno, respuestaEsperada) {
  const esperada = parsearEsperada(respuestaEsperada);

  const mixta = parsearMixta(textoAlumno);
  if (mixta?.error) return { resultado: "invalido", error: mixta.error };
  if (mixta) {
    if (!sonEquivalentes(mixta, esperada)) return { resultado: "incorrecto" };
    if (mixta.parte.numerador >= mixta.parte.denominador) {
      return { resultado: "equivalente", motivo: "parteImpropia" };
    }
    if (!estaSimplificada(mixta.parte)) {
      return { resultado: "equivalente", motivo: "sinSimplificar" };
    }
    return { resultado: "correcto" };
  }

  const alumno = parsearFraccion(textoAlumno);
  if (alumno.error) return { resultado: "invalido", error: alumno.error };
  if (!sonEquivalentes(alumno, esperada)) return { resultado: "incorrecto" };
  const esperadaEsEntera = simplificar(esperada).denominador === 1;
  if (!esperadaEsEntera && Math.abs(alumno.numerador) > alumno.denominador) {
    return { resultado: "equivalente", motivo: "impropia" };
  }

  return estaSimplificada(alumno)
    ? { resultado: "correcto" }
    : { resultado: "equivalente", motivo: "sinSimplificar" };
}

// Leer la fracción de una figura. La respuesta esperada es la lectura literal
// (ej: "6/8" si hay 6 de 8 partes pintadas). Vale la literal y también la
// simplificada (3/4); otra equivalente (12/16) no descuenta intento pero pide
// mirar la figura.
export function evaluarIdentificar(textoAlumno, respuestaEsperada) {
  const alumno = parsearFraccion(textoAlumno);
  if (alumno.error) return { resultado: "invalido", error: alumno.error };

  const esperada = parsearFraccion(respuestaEsperada);
  if (!sonEquivalentes(alumno, esperada)) return { resultado: "incorrecto" };

  const esLiteral =
    alumno.numerador === esperada.numerador &&
    alumno.denominador === esperada.denominador;
  return esLiteral || estaSimplificada(alumno)
    ? { resultado: "correcto" }
    : { resultado: "equivalente", motivo: "otraEquivalente" };
}

// Pintar una figura: cualquier cantidad de partes equivalente a la respuesta
// está bien (ej: si se pide 1/2 de una barra de 8, pintar 4).
export function evaluarPintar(cantidadPintadas, totalPartes, respuestaEsperada) {
  if (cantidadPintadas === 0) return { resultado: "invalido", error: "vacio" };

  const pintado = { numerador: cantidadPintadas, denominador: totalPartes };
  return sonEquivalentes(pintado, parsearEsperada(respuestaEsperada))
    ? { resultado: "correcto" }
    : { resultado: "incorrecto" };
}

// Completar casilleros (□) con números enteros. Si hay errores, devuelve qué
// casilleros están mal (sus posiciones), sin decir el valor correcto.
export function evaluarCasilleros(valores, esperados) {
  const limpios = valores.map((v) => v.trim().replace(/[−–]/g, "-"));
  if (limpios.some((v) => v === "")) return { resultado: "invalido", error: "vacio" };
  if (limpios.some((v) => !/^-?\d+$/.test(v))) {
    return { resultado: "invalido", error: "formato" };
  }

  const casillerosMal = limpios
    .map((v, i) => (Number(v) === Number(esperados[i]) ? null : i))
    .filter((i) => i !== null);
  return casillerosMal.length === 0
    ? { resultado: "correcto" }
    : { resultado: "incorrecto", casillerosMal };
}

// Normaliza el signo de la operación: "−" y "-" son lo mismo.
export function normalizarOperador(operador) {
  return operador.replace(/[−–]/g, "-");
}

// Plantear la cuenta de un problema: valor = { a: { n, d }, operador, b: { n, d } }
// y planteo = { a: "2/8", operador: "+", b: "3/8" }. Se piden las fracciones tal
// como aparecen en el problema. En la suma vale el orden invertido (3/8 + 2/8);
// en la resta no, porque cambia el resultado.
export function evaluarPlanteo(valor, planteo) {
  const numeros = [valor.a.n, valor.a.d, valor.b.n, valor.b.d].map((v) => v.trim());
  if (numeros.some((v) => v === "") || valor.operador === "") {
    return { resultado: "invalido", error: "vacio" };
  }
  if (numeros.some((v) => !/^\d+$/.test(v))) {
    return { resultado: "invalido", error: "formato" };
  }

  const escrita = (fraccion) => `${Number(fraccion.n)}/${Number(fraccion.d)}`;
  const a = escrita(valor.a);
  const b = escrita(valor.b);
  const operador = normalizarOperador(planteo.operador);

  if (normalizarOperador(valor.operador) !== operador) return { resultado: "incorrecto" };

  const enOrden = a === planteo.a && b === planteo.b;
  const invertida = operador === "+" && a === planteo.b && b === planteo.a;
  return enOrden || invertida ? { resultado: "correcto" } : { resultado: "incorrecto" };
}
