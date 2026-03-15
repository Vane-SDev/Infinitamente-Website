import Temario from "../components/Temario";
import Reserva from "../components/Reserva";
import Faq from "../components/Faq";



export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-brand-dark text-white font-sans flex flex-col items-center justify-center p-6 sm:p-12">
        <div className="max-w-4xl text-center space-y-8">
          {/* Título usando tu violeta principal */}
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white drop-shadow-md">
            Infinitamente <span className="text-brand-primary">Matemático</span>
          </h1>

          {/* Subtítulo usando el lila para buen contraste sobre el fondo oscuro */}
          <p className="text-lg sm:text-xl text-brand-light leading-relaxed max-w-2xl mx-auto font-medium">
            Dominá la matemática con clases online personalizadas. Estrategias
            directas y resolución de problemas reales, a tu propio ritmo.
          </p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button className="bg-brand-primary hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg">
              Reservar clase de prueba
            </button>

            <button className="border-2 border-brand-light text-brand-light hover:bg-brand-light hover:text-brand-dark font-bold py-3 px-8 rounded-lg transition-all">
              Ver temario
            </button>
          </div>
        </div>
      </main>
      <Temario />
      <Reserva />
      <Faq />
    </>
  );
}
