import Servicios from "../components/Servicios";
import Resenas from "../components/Resenas"; 
import Reserva from "../components/Reserva";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import MathParticles from "../components/Mathparticles";

export default function Home() {
  return (
    <>
      
      <main className="w-full flex flex-col">
        {/* SECCIÓN HERO */}
        <section className="relative min-h-screen bg-brand-dark text-white font-sans flex flex-col items-center justify-center p-6 sm:p-12 overflow-hidden z-0">
          <MathParticles count={90} className="-z-10" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-300px md:w-700px h-300px md:h-700px bg-brand-primary/15 rounded-full blur-[120px] -z-20 pointer-events-none animate-pulse" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-200px bg-linear-to-t from-brand-primary/5 to-transparent -z-20 pointer-events-none" />

          <div className="max-w-4xl text-center space-y-8 z-10 relative">
            <div className="inline-block py-1 px-4 rounded-full bg-white/5 border border-brand-light/20 text-brand-light text-sm font-semibold tracking-widest uppercase mb-2 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
              Clases Online • Matemática, Física y Lógica
            </div>

            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white drop-shadow-md">
              Infinitamente <br className="sm:hidden" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-light to-brand-primary">
                Matemático
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-brand-light leading-relaxed max-w-2xl mx-auto font-medium">
              Dejá de frustrarte con guías interminables. Te enseño a razonar
              los ejercicios paso a paso, con pizarra virtual y estrategias
              directas para que apruebes entendiendo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a
                href="#calendario"
                className="bg-brand-primary hover:bg-purple-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transform hover:-translate-y-1 flex items-center justify-center"
              >
                Reservar clase de prueba
              </a>
              <a
                href="#servicios"
                className="border border-brand-light text-brand-light hover:bg-brand-light hover:text-brand-dark font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center"
              >
                Ver niveles y temarios
              </a>
            </div>
          </div>
        </section>

        <div id="servicios">
          <Servicios />
        </div>

        <Resenas />

        <div id="calendario">
          <Reserva />
        </div>

        <Faq />
      </main>

      <Footer />
    </>
  );
}
