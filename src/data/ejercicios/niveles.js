// Lista liviana de niveles (sin ejercicios) para poder usarla en el Navbar
// sin cargar todos los ejercicios en el navegador.
export const niveles = [
  {
    slug: "primaria",
    nombre: "Primaria",
    detalle: "Desde 4° grado",
    descripcion: "Problemas cortos con situaciones de todos los días.",
    disponible: true,
  },
  {
    slug: "secundaria",
    nombre: "Secundaria",
    detalle: "1° año",
    descripcion: "Operaciones y ejercicios para practicar lo que ves en clase.",
    disponible: true,
  },
  {
    slug: "universitario",
    nombre: "Universitario",
    detalle: "Próximamente",
    descripcion: "Ejercicios para ingreso y primer año de la facultad.",
    disponible: false,
  },
];

export const nivelesDisponibles = niveles.filter((n) => n.disponible);
