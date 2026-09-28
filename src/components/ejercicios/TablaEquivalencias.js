import { equivalenciasSecundaria, paises } from "@/data/ejercicios/equivalencias";

// En el celular la tabla se desplaza de costado dentro de su caja y la
// columna de la edad queda fija a la izquierda.
export default function TablaEquivalencias() {
  return (
    <section aria-labelledby="equivalencias-titulo" className="mt-20">
      <h2 id="equivalencias-titulo" className="text-2xl sm:text-3xl font-bold text-brand-dark mb-3 text-center">
        ¿En qué curso estás en tu país?
      </h2>
      <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
        Buscá tu país y tu curso: en la primera columna está la edad y en la de Argentina, el curso que tenés que elegir acá.
      </p>

      <p className="lg:hidden text-sm text-gray-500 mb-2 text-right" aria-hidden="true">
        Deslizá la tabla para ver más países →
      </p>
      <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
        <table className="w-full text-left text-sm sm:text-base">
          <caption className="sr-only">Equivalencias de cursos de secundaria por país y edad</caption>
          <thead>
            <tr className="bg-brand-dark text-white">
              <th scope="col" className="sticky left-0 bg-brand-dark px-4 py-3 font-bold whitespace-nowrap">
                Edad
              </th>
              {paises.map((pais) => (
                <th key={pais} scope="col" className="px-4 py-3 font-bold whitespace-nowrap">
                  {pais}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {equivalenciasSecundaria.map((fila) => (
              <tr key={fila.edad} className="border-t border-gray-100 bg-white even:bg-gray-50">
                <th scope="row" className="sticky left-0 bg-inherit px-4 py-3 font-semibold text-gray-700 whitespace-nowrap">
                  {fila.edad}
                </th>
                {fila.cursos.map((curso, i) => (
                  <td
                    key={paises[i]}
                    className={`px-4 py-3 whitespace-nowrap ${i === 0 ? "font-bold text-brand-primary" : "text-gray-700"}`}
                  >
                    {curso}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-500 mt-4 text-center max-w-2xl mx-auto">
        En algunas provincias de Argentina, 1° año se llama 7° grado. Si no estás seguro, guiate por la edad.
      </p>
    </section>
  );
}
