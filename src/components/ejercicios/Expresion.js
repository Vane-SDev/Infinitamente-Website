// Dibuja "2/7 + 3/7" con las fracciones apiladas. El lector de pantalla
// lee el texto original, porque la versión visual queda oculta para él.
export default function Expresion({ texto }) {
  const partes = texto.split(/\s+/);

  return (
    <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-4 text-3xl sm:text-4xl font-bold text-brand-dark">
      <span className="sr-only">{texto}</span>
      {partes.map((parte, index) => {
        const fraccion = parte.match(/^(-?\d+)\/(\d+)$/);
        if (!fraccion) {
          return (
            <span key={index} aria-hidden="true" className="text-brand-primary">
              {parte}
            </span>
          );
        }
        return (
          <span
            key={index}
            aria-hidden="true"
            className="inline-flex flex-col items-center leading-none"
          >
            <span className="px-1">{fraccion[1]}</span>
            <span className="w-full h-0.5 bg-brand-dark my-1 rounded" />
            <span className="px-1">{fraccion[2]}</span>
          </span>
        );
      })}
    </div>
  );
}
