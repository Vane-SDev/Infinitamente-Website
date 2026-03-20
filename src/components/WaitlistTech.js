export default function WaitlistTech() {
  // Acordate de reemplazar TUNUMERO
  const numero = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${numero}&text=Hola%20Vane,%20quiero%20anotarme%20en%20la%20lista%20de%20espera%20para%20el%20Programa%20de%20Nivelaci%C3%B3n.`;

  return (
    <section className="py-24 bg-linear-to-b from-[#06090f] to-[#0b0f19] px-6 text-center">
      <div className="max-w-4xl mx-auto bg-gray-900 border border-blue-500/30 rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.1)]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <span className="bg-blue-600 text-white text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-md mb-6 inline-block">
          Próxima Edición: Mayo 2026
        </span>

        {/* Título académico y formal */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
          Programa de Nivelación: <br className="hidden sm:block" />
          <span className="text-blue-400">
            Lógica Computacional y Algoritmos
          </span>
        </h2>

        {/* Copy universalizado para todo Hispanoamérica */}
        <p className="text-gray-300 text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
          Las carreras de informática y desarrollo de software tienen un filtro
          inicial estricto basado en{" "}
          <strong className="text-white">
            razonamiento deductivo, matemática inicial y formalización de
            algoritmos
          </strong>
          . Si no tenés esta base, el primer semestre se vuelve un muro
          imposible de pasar.
        </p>

        <p className="text-gray-400 text-md mb-10 max-w-xl mx-auto">
          Este programa intensivo está diseñado para que superes los exámenes de
          ingreso a la universidad y construyas la estructura mental necesaria
          para dominar cualquier lenguaje.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-md flex justify-center items-center gap-2 w-full sm:w-auto"
          >
            Anotarme en la lista de espera
          </a>
          <span className="text-gray-500 text-sm font-medium">
            Solo 10 cupos disponibles.
          </span>
        </div>

        <p className="text-gray-500 text-xs mt-2 border-t border-gray-800 pt-6 max-w-lg mx-auto">
          Anotarse en la lista no implica compromiso de pago. Te enviaremos el
          temario completo y te avisaremos 48hs antes de abrir las inscripciones
          generales.
        </p>
      </div>
    </section>
  );
}
