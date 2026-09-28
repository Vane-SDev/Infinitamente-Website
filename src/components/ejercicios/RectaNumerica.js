import { totalMarcas } from "@/lib/recta";

const ANCHO = 600;
const MARGEN = 36;
const ALTO = 120;
const Y = 52; // altura de la línea

function describir(recta, interactiva) {
  const { desde, hasta, partes } = recta;
  const base = `Recta numérica de ${desde} a ${hasta}, con cada entero dividido en ${partes} partes iguales`;
  if (interactiva) return `${base}. Tocá la marca que corresponde.`;
  if (recta.punto === undefined) return `${base}.`;
  return `${base}. El punto ${recta.etiqueta ?? "A"} está en la marca ${recta.punto} contando desde el ${desde}.`;
}

// Si recibe onElegir, cada marca es un botón. La marca elegida queda con un
// punto (también al terminar). Sin elegida, se dibuja el punto de recta.punto
// con su etiqueta, si lo tiene.
export default function RectaNumerica({ recta, elegida, onElegir }) {
  const marcas = totalMarcas(recta);
  const paso = (ANCHO - 2 * MARGEN) / (marcas - 1);
  const x = (marca) => MARGEN + marca * paso;
  const interactiva = Boolean(onElegir);
  const conEtiqueta = elegida === undefined || elegida === null;
  const conPunto = conEtiqueta ? recta.punto : elegida;

  return (
    <svg
      viewBox={`0 0 ${ANCHO} ${ALTO}`}
      role={interactiva ? "group" : "img"}
      aria-label={describir(recta, interactiva)}
      className="w-full max-w-2xl h-auto mx-auto block text-brand-dark"
    >
      <line
        x1={MARGEN - 24}
        x2={ANCHO - MARGEN + 24}
        y1={Y}
        y2={Y}
        className="stroke-current [stroke-width:4]"
      />
      <path d={`M${ANCHO - MARGEN + 16} ${Y - 8} L${ANCHO - MARGEN + 26} ${Y} L${ANCHO - MARGEN + 16} ${Y + 8}`} className="fill-none stroke-current [stroke-width:4]" />
      <path d={`M${MARGEN - 16} ${Y - 8} L${MARGEN - 26} ${Y} L${MARGEN - 16} ${Y + 8}`} className="fill-none stroke-current [stroke-width:4]" />

      {Array.from({ length: marcas }, (_, i) => {
        const entero = i % recta.partes === 0;
        return (
          <g key={i}>
            <line
              x1={x(i)}
              x2={x(i)}
              y1={Y - (entero ? 20 : 13)}
              y2={Y + (entero ? 20 : 13)}
              className="stroke-current [stroke-width:4]"
            />
            {entero && (
              <text x={x(i)} y={Y + 56} textAnchor="middle" className="fill-current text-[32px] font-bold">
                {String(recta.desde + i / recta.partes).replace("-", "−")}
              </text>
            )}
          </g>
        );
      })}

      {conPunto !== undefined && conPunto !== null && (
        <g aria-hidden="true">
          <circle cx={x(conPunto)} cy={Y} r="12" className="fill-brand-primary" />
          {conEtiqueta && (
            <text x={x(conPunto)} y={Y - 24} textAnchor="middle" className="fill-brand-primary text-[30px] font-bold">
              {recta.etiqueta ?? "A"}
            </text>
          )}
        </g>
      )}

      {interactiva &&
        Array.from({ length: marcas }, (_, i) => (
          <rect
            key={i}
            x={x(i) - paso / 2}
            y={0}
            width={paso}
            height={ALTO}
            role="button"
            tabIndex={0}
            aria-pressed={elegida === i}
            aria-label={`Marca ${i} contando desde el ${recta.desde}`}
            onClick={() => onElegir(i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onElegir(i);
              }
            }}
            className="fill-transparent hover:fill-brand-light/30 cursor-pointer focus:outline-none focus-visible:stroke-amber-500 focus-visible:[stroke-width:4]"
          />
        ))}
    </svg>
  );
}
