import Link from "next/link";

export default function RecursosIndexPage() {
  // Esta lista simula tu índice. Más adelante, podés automatizar esto para que lea todos los archivos de tu carpeta 'data' directamente.
  const apuntes = [
    {
      id: "fracciones",
      titulo: "Fracciones: La guía para entenderlas sin fallar en el intento😉",
      descripcion:
        "Entendé las fracciones aplicadas a la vida real: dinero, tecnología y decisiones diarias.",
      ruta: "/recursos/fracciones",
    },
    // Cuando crees el próximo apunte de física o de polinomios, agregás otro bloque acá:
    /*
    {
      id: "fisica-cinematica",
      titulo: "Cinemática sin fórmulas de memoria",
      descripcion: "Cómo entender el movimiento analizando gráficos en vez de memorizar ecuaciones.",
      ruta: "/recursos/fisica-cinematica"
    }
    */
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6 sm:px-12 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16 text-center border-b border-gray-200 pb-10">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-brand-dark mb-6 tracking-tight">
            Recursos <span className="text-brand-primary">Gratuitos</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Guías prácticas, ejercicios aplicados y estrategias reales para que
            dejes de memorizar fórmulas y empieces a entenderlas.
          </p>
        </header>

        {/* Banner a los ejercicios interactivos */}
        <Link
          href="/ejercicios"
          className="group mb-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-brand-dark p-8 rounded-2xl shadow-sm hover:shadow-xl border border-brand-primary/30 transition-all duration-300"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Practicá con ejercicios interactivos
            </h2>
            <p className="text-brand-light leading-relaxed">
              Para primaria y secundaria. Resolvé y, si te trabás, te doy una
              pista.
            </p>
          </div>
          <span className="shrink-0 inline-flex items-center justify-center bg-brand-primary group-hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-xl transition-colors">
            Ir a los ejercicios <span className="ml-2 text-xl">→</span>
          </span>
        </Link>

        {/* Grilla de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {apuntes.map((apunte) => (
            <Link
              key={apunte.id}
              href={apunte.ruta}
              className="block group h-full"
            >
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-light transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors">
                    {apunte.titulo}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {apunte.descripcion}
                  </p>
                </div>
                <div className="flex items-center text-brand-primary font-bold group-hover:translate-x-2 transition-transform">
                  Leer apunte <span className="ml-2 text-xl">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
