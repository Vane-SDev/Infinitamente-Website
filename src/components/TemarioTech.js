export default function TemarioTech() {
  return (
    <section
      id="temario-tech"
      className="py-24 bg-[#06090f] border-t border-gray-800 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            {/* Título universal y directo al dolor */}
            <h2 className="text-3xl font-bold text-white">
              El filtro de las carreras tecnológicas no es el código, es la
              lógica.
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Las ingenierías y licenciaturas asumen que ya sabés pensar como
              programador. En el primer semestre te enfrentan a algoritmia y
              matemática discreta, y si no tenés la base lógica, te frustrás.
              Este programa está diseñado para darte la estructura mental que
              exige la universidad, sin importar el lenguaje que uses.
            </p>

            <div className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-6">
              <h3 className="text-blue-400 font-mono text-sm uppercase tracking-wider mb-4">
                Perfil del estudiante ideal:
              </h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                {/* Carreras universales en habla hispana */}
                <li className="flex gap-2">
                  <span className="text-blue-500">✓</span> Ingresantes a
                  Ingeniería en Sistemas, Software o Computación.
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">✓</span> Estudiantes de
                  Licenciatura en Informática y Tecnicaturas Superiores.
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">✓</span> Autodidactas que
                  necesitan la base analítica dura que omiten los tutoriales.
                </li>
              </ul>
            </div>
          </div>

          {/* Módulos resumidos y estandarizados */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
              <div className="text-blue-500 text-2xl mb-4">{"∑"}</div>
              <h4 className="text-white font-bold mb-2">Matemática Discreta</h4>
              <p className="text-gray-400 text-sm">
                Sistemas de numeración (Binario, Hexadecimal), lógica booleana,
                tablas de verdad y conjuntos.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
              <div className="text-blue-500 text-2xl mb-4">{"⎇"}</div>
              <h4 className="text-white font-bold mb-2">Algoritmia Inicial</h4>
              <p className="text-gray-400 text-sm">
                Formalización de algoritmos, diagramas de flujo, pseudocódigo
                (PSeInt) y resolución deductiva.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
              <div className="text-blue-500 text-2xl mb-4">{"{ }"}</div>
              <h4 className="text-white font-bold mb-2">
                Estructuras de Control
              </h4>
              <p className="text-gray-400 text-sm">
                Condicionales (If/Else), ciclos (For, While) y estructuras de
                datos elementales (Vectores/Matrices).
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
              <div className="text-blue-500 text-2xl mb-4">{"⚙"}</div>
              <h4 className="text-white font-bold mb-2">Fundamentos de POO</h4>
              <p className="text-gray-400 text-sm">
                Preparación teórica para Programación Orientada a Objetos:
                Clases, instanciación, abstracción y métodos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
