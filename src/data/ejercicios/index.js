import { niveles, nivelesDisponibles } from "./niveles";
import fracciones4Grado from "./primaria/4-grado/fracciones";
import fracciones5Grado from "./primaria/5-grado/fracciones";
import fracciones6Grado from "./primaria/6-grado/fracciones";
import fracciones1Anio from "./secundaria/1-anio/fracciones";

// Para sumar un tema: crear el archivo en la carpeta del curso
// (ej: primaria/4-grado/decimales.js) y agregarlo a la lista de ese curso acá.
// Un curso sin temas se muestra como "Próximamente" y no tiene página.
const temasPorCurso = {
  "primaria/4-grado": [fracciones4Grado],
  "primaria/5-grado": [fracciones5Grado],
  "primaria/6-grado": [fracciones6Grado],
  "secundaria/1-anio": [fracciones1Anio],
};

export { niveles, nivelesDisponibles };

export function getNivel(slug) {
  return nivelesDisponibles.find((n) => n.slug === slug);
}

export function getTemas(nivelSlug, cursoSlug) {
  return temasPorCurso[`${nivelSlug}/${cursoSlug}`] ?? [];
}

// Todos los cursos del nivel, marcando cuáles ya tienen ejercicios.
export function getCursos(nivelSlug) {
  const nivel = getNivel(nivelSlug);
  if (!nivel) return [];
  return nivel.cursos.map((curso) => ({
    ...curso,
    nombreCompleto: curso.nombreCompleto ?? curso.nombre,
    disponible: getTemas(nivelSlug, curso.slug).length > 0,
  }));
}

export function getCurso(nivelSlug, cursoSlug) {
  return getCursos(nivelSlug).find((c) => c.slug === cursoSlug && c.disponible);
}

export function getTema(nivelSlug, cursoSlug, temaSlug) {
  return getTemas(nivelSlug, cursoSlug).find((t) => t.slug === temaSlug);
}

// Todas las combinaciones que tienen página: se usa en generateStaticParams y
// en el sitemap.
export function getRutasEjercicios() {
  return nivelesDisponibles.flatMap((nivel) =>
    getCursos(nivel.slug)
      .filter((curso) => curso.disponible)
      .map((curso) => ({
        nivel: nivel.slug,
        curso: curso.slug,
        temas: getTemas(nivel.slug, curso.slug).map((t) => t.slug),
      })),
  );
}
