import { niveles, nivelesDisponibles } from "./niveles";
import fraccionesPrimaria from "./primaria/fracciones";
import fraccionesSecundaria from "./secundaria/fracciones";

// Para sumar un tema: crear el archivo en la carpeta del nivel
// (ej: primaria/decimales.js) y agregarlo a la lista de ese nivel acá.
const temasPorNivel = {
  primaria: [fraccionesPrimaria],
  secundaria: [fraccionesSecundaria],
};

export { niveles, nivelesDisponibles };

export function getNivel(slug) {
  return nivelesDisponibles.find((n) => n.slug === slug);
}

export function getTemas(nivelSlug) {
  return temasPorNivel[nivelSlug] ?? [];
}

export function getTema(nivelSlug, temaSlug) {
  return getTemas(nivelSlug).find((t) => t.slug === temaSlug);
}
