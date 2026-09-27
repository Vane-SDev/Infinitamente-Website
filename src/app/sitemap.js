import { getTemas, nivelesDisponibles } from "@/data/ejercicios";

export default function sitemap() {
  const baseUrl = "https://infinitamentematematico.com";

  const paginasEjercicios = nivelesDisponibles.flatMap((nivel) => [
    {
      url: `${baseUrl}/ejercicios/${nivel.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...getTemas(nivel.slug).map((tema) => ({
      url: `${baseUrl}/ejercicios/${nivel.slug}/${tema.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })),
  ]);

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
