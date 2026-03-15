export default function Temario() {
  return (
    <section
      id="temario"
      className="py-24 px-6 sm:px-12 bg-gray-50 text-gray-900"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-dark tracking-tight mb-4">
            Metodología y Alcance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Clases estructuradas para resolver problemas reales. Sin fórmulas
            mágicas, con razonamiento lógico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tarjeta 1 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-light transition-all">
            <div className="w-12 h-12 bg-brand-light/20 rounded-lg flex items-center justify-center mb-6">
              <span className="text-brand-primary font-bold text-xl">01</span>
            </div>
            <h3 className="text-2xl font-bold text-brand-dark mb-3">
              Matemática Base (Desde 7 años)
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Construcción de bases sólidas para alumnos de primaria y
              secundaria. Explicaciones paso a paso, respetando el ritmo de
              aprendizaje y perdiendo el miedo a los números.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-light transition-all">
            <div className="w-12 h-12 bg-brand-light/20 rounded-lg flex items-center justify-center mb-6">
              <span className="text-brand-primary font-bold text-xl">02</span>
            </div>
            <h3 className="text-2xl font-bold text-brand-dark mb-3">
              Ingresos Preuniversitarios
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Entrenamiento intensivo y resolución de exámenes de años
              anteriores. Estrategias de estudio enfocadas en nivelar hacia
              arriba y asegurar el ingreso a institutos exigentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
