import data from "../../../data/fracciones.json";

export default function FraccionesPage() {
  // Acá tenés que reemplazar TUNUMERO por tu número real con código de país (ej: 549...)
  const whatsappUrl =
    "https://api.whatsapp.com/send?phone=TUNUMERO&text=Hola%20Vane,%20vengo%20de%20la%20web.%20%C2%BFMe%20pas%C3%A1s%20el%20manual%20de%20supervivencia%20de%20fracciones?";

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6 sm:px-12 text-gray-800">
      <article className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-200">
        {/* Encabezado SEO (Lo que lee Google) */}
        <header className="mb-10 text-center border-b border-gray-100 pb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark mb-4 tracking-tight">
            {data.titulo}
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            {data.descripcion}
          </p>
        </header>

        {/* Contenido Dinámico (Mapeo del JSON) */}
        <section className="space-y-8 mb-12">
          {data.contenidoAbierto.map((seccion, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold text-brand-primary mb-3">
                {seccion.subtitulo}
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                {seccion.parrafo}
              </p>
            </div>
          ))}
        </section>

        {/* El corte de conversión (Lead Magnet) */}
        <section className="bg-brand-dark rounded-xl p-8 sm:p-10 text-center shadow-xl border border-brand-primary/30">
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Querés ver los ejemplos tecnológicos y los ejercicios prácticos?
          </h3>
          <p className="text-brand-light mb-8 text-lg">{data.cta.mensaje}</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-primary hover:bg-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-md hover:scale-105"
          >
            {data.cta.boton}
          </a>
        </section>
      </article>
    </div>
  );
}
