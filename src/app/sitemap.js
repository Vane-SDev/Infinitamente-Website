import { getRutasEjercicios, nivelesDisponibles } from "@/data/ejercicios";

export default function sitemap() {
  const baseUrl = "https://infinitamentematematico.com";

  const pagina = (ruta) => ({
    url: `${baseUrl}/ejercicios/${ruta}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  });

  const paginasEjercicios = [
    ...nivelesDisponibles.map((nivel) => pagina(nivel.slug)),
    ...getRutasEjercicios().flatMap(({ nivel, curso, temas }) => [
      pagina(`${nivel}/${curso}`),
      ...temas.map((tema) => pagina(`${nivel}/${curso}/${tema}`)),
    ]),
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/recursos`,
      lastModified: new Date(),
      changeFrequency: 'weekly', 
      priority: 0.9,
    },
    {
      url: `${baseUrl}/recursos/fracciones`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ejercicios`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...paginasEjercicios,
    
    {
      url: `${baseUrl}/programacion`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    }
  ];
}
