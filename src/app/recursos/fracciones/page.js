"use client";

import data from "../../../data/fracciones.json";

export default function FraccionesPage() {
  const numero = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5492643171733";
  const mensaje = "Hola Vane, vengo de la web. ¿Me pasás el manual de supervivencia de fracciones?";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensaje)}`;

  return (
    <div className="min-h-screen bg-[#080b14] py-16 px-6 sm:px-12 text-white font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Grilla Principal: 1 columna en celular, 2 en PC */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* COLUMNA IZQUIERDA: Textos y persuasión (Ocupa 7 columnas) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Encabezado */}
            <header className="border-b border-gray-800 pb-8">
              <div className="inline-block bg-brand-primary/20 text-brand-lila text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 border border-brand-primary/30">
                Apunte Gratuito
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                {data.titulo}
              </h1>
              <p className="text-xl text-gray-400 font-medium leading-relaxed">
                {data.descripcion}
              </p>
            </header>

            {/* Checklist de Beneficios (Lo visual escaneable) */}
            <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
              <h3 className="text-lg font-bold text-brand-lila mb-4">¿Qué vas a lograr con esta guía?</h3>
              <ul className="space-y-3">
                {data.beneficios.map((beneficio, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-300">{beneficio}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contenido de muestra (El "anzuelo") */}
            <section className="space-y-8">
              {data.contenidoAbierto.map((seccion, index) => (
                <div key={index} className="pl-5 border-l-2 border-brand-primary">
                  <h2 className="text-2xl font-bold text-white mb-3">
                    {seccion.subtitulo}
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-400">
                    {seccion.parrafo}
                  </p>
                </div>
              ))}
            </section>
          </div>

          {/* COLUMNA DERECHA: Visual del PDF y CTA (Ocupa 5 columnas) */}
          <div className="lg:col-span-5 lg:sticky lg:top-8">
            <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
              
              {/* Brillo de fondo */}
              <div className="absolute top-0 w-full h-1/2 bg-linear-to-b from-brand-primary/20 to-transparent pointer-events-none" />

              {/* MOCKUP VISUAL DEL PDF (Hecho con CSS) */}
              <div className="w-48 h-64 bg-white rounded-r-xl rounded-l-sm shadow-[15px_15px_30px_rgba(0,0,0,0.5)] border-l-8 border-brand-morado mb-8 relative flex flex-col p-4 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="w-8 h-8 text-brand-morado mb-2">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                </div>
                <div className="text-left">
                  <p className="text-brand-morado font-black text-sm leading-tight mb-1">Fracciones:</p>
                  <p className="text-gray-800 font-bold text-xs leading-tight">El manual de supervivencia</p>
                </div>
                <div className="mt-auto">
                  <div className="w-full h-1 bg-gray-200 rounded mb-1"></div>
                  <div className="w-2/3 h-1 bg-gray-200 rounded"></div>
                  <p className="text-[8px] text-gray-400 mt-2 text-right">Infinitamente Matemático</p>
                </div>
              </div>

              {/* Textos del CTA */}
              <h3 className="text-2xl font-bold text-white mb-3 relative z-10">
                Accedé al material completo
              </h3>
              <p className="text-gray-400 mb-8 text-sm relative z-10 px-2">
                {data.cta.mensaje}
              </p>

              {/* Botón de Acción */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-brand-primary hover:bg-purple-600 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transform hover:-translate-y-1 relative z-10"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                {data.cta.boton}
              </a>
              <p className="text-xs text-gray-500 mt-4">Envío instantáneo por WhatsApp</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}