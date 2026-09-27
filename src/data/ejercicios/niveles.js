// Lista liviana de niveles y cursos (sin ejercicios) para poder usarla en el
// Navbar sin cargar todos los ejercicios en el navegador.
// La edad ayuda a ubicarse a las familias de otros países.
export const niveles = [
  {
    slug: "primaria",
    nombre: "Primaria",
    detalle: "4° a 6° grado",
    descripcion: "Problemas cortos con situaciones de todos los días.",
    disponible: true,
    cursos: [
      { slug: "4-grado", nombre: "4° grado", edad: "9 a 10 años" },
      { slug: "5-grado", nombre: "5° grado", edad: "10 a 11 años" },
      { slug: "6-grado", nombre: "6° grado", edad: "11 a 12 años" },
    ],
  },
  {
    slug: "secundaria",
    nombre: "Secundaria",
    detalle: "1° año",
    descripcion: "Operaciones y ejercicios para practicar lo que ves en clase.",
    disponible: true,
    cursos: [
      {
        slug: "1-anio",
        nombre: "1° año",
        nombreCompleto: "1° año de secundaria",
        edad: "12 a 13 años",
      },
    ],
  },
  {
    slug: "universitario",
    nombre: "Universitario",
    detalle: "Próximamente",
    descripcion: "Ejercicios para ingreso y primer año de la facultad.",
    disponible: false,
    cursos: [],
  },
];

export const nivelesDisponibles = niveles.filter((n) => n.disponible);
