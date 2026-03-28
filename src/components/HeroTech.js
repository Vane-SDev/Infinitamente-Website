import Link from "next/link";

export default function HeroTech() {
  return (
    <section className="relative pt-32 pb-20 px-6 sm:px-12 flex flex-col items-center justify-center overflow-hidden z-0 min-h-[85vh]">
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size:24px_24px"></div>

      <div className="absolute top-1/4 left-10 text-gray-700 font-mono text-6xl opacity-20 select-none">
        {"</>"}
      </div>
      <div className="absolute bottom-1/4 right-10 text-gray-700 font-mono text-8xl opacity-20 select-none">
        {"{ }"}
      </div>

      <div className="max-w-4xl text-center space-y-8 z-10 relative mt-10">
        <div className="inline-block py-1 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-widest uppercase mb-2">
          Tecnicaturas • Ingeniería • Sistemas • Ciencias Exactas
        </div>

        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white drop-shadow-md">
          Dominá la lógica. <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-brand-primary">
            Avanzá en tu carrera.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-medium">
          Si te frustran las materias exactas de los primeros años o sentís que
          te falta base para entender cómo resolver un algoritmo, el problema no
          es tu capacidad. Te enseño a estructurar tu pensamiento para que
          apruebes entendiendo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link
            href="/#reserva"
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transform hover:-translate-y-1"
          >
            Agendar una clase de prueba
          </Link>
          <a
            href="#temario-tech"
            className="border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
          >
            Ver tecnologías
          </a>
        </div>
      </div>
    </section>
  );
}
