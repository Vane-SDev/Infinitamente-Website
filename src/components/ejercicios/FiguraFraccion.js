import { totalPartes } from "@/lib/figuras";

const BORDE = 4; // margen para que el borde no se corte en los costados

// Devuelve las partes de la figura como { tipo: "rect" | "path" | "circle", props }.
function calcularPartes(grafico) {
  const n = totalPartes(grafico);

  if (grafico.forma === "circulo") {
    const r = 150;
    const c = r + BORDE;
    if (n === 1) {
      return { ancho: 2 * c, alto: 2 * c, partes: [{ tipo: "circle", props: { cx: c, cy: c, r } }] };
    }
    const punto = (i) => {
      const angulo = (2 * Math.PI * i) / n - Math.PI / 2; // empieza arriba
      return `${c + r * Math.cos(angulo)} ${c + r * Math.sin(angulo)}`;
    };
    return {
      ancho: 2 * c,
      alto: 2 * c,
      // Con 2 o más sectores, cada arco mide como máximo media vuelta.
      partes: Array.from({ length: n }, (_, i) => ({
        tipo: "path",
        props: { d: `M ${c} ${c} L ${punto(i)} A ${r} ${r} 0 0 1 ${punto(i + 1)} Z` },
      })),
    };
  }

  if (grafico.forma === "grilla") {
    const lado = 80;
    return {
      ancho: grafico.columnas * lado + 2 * BORDE,
      alto: grafico.filas * lado + 2 * BORDE,
      partes: Array.from({ length: n }, (_, i) => ({
        tipo: "rect",
        props: {
          x: BORDE + (i % grafico.columnas) * lado,
          y: BORDE + Math.floor(i / grafico.columnas) * lado,
          width: lado,
          height: lado,
        },
      })),
    };
  }

  // barra
  const ancho = 480;
  const alto = 140;
  return {
    ancho: ancho + 2 * BORDE,
    alto: alto + 2 * BORDE,
    partes: Array.from({ length: n }, (_, i) => ({
      tipo: "rect",
      props: { x: BORDE + (i * ancho) / n, y: BORDE, width: ancho / n, height: alto },
    })),
  };
}

function describir(grafico, cantidadPintadas, interactiva) {
  const n = totalPartes(grafico);
  const figura = {
    barra: "Barra dividida",
    circulo: "Círculo dividido",
    grilla: `Grilla de ${grafico.filas} filas y ${grafico.columnas} columnas dividida`,
  }[grafico.forma];
  const base = `${figura} en ${n} partes iguales`;
  if (interactiva) return `${base}. Tocá cada parte para pintarla.`;
  return `${base}, con ${cantidadPintadas} ${cantidadPintadas === 1 ? "parte pintada" : "partes pintadas"}.`;
}

// Si recibe onAlternar, cada parte es un botón que se pinta o despinta.
// Si no, es un dibujo fijo.
export default function FiguraFraccion({ grafico, pintadas, onAlternar }) {
  const { ancho, alto, partes } = calcularPartes(grafico);
  const interactiva = Boolean(onAlternar);
  const tamano = grafico.forma === "barra" ? "max-w-lg" : "max-w-xs";

  return (
    <svg
      viewBox={`0 0 ${ancho} ${alto}`}
      role={interactiva ? "group" : "img"}
      aria-label={describir(grafico, pintadas.length, interactiva)}
      className={`w-full ${tamano} h-auto mx-auto block`}
    >
      {partes.map(({ tipo, props }, i) => {
        const Parte = tipo;
        const pintada = pintadas.includes(i);
        const color = pintada
          ? "fill-brand-primary"
          : `fill-white ${interactiva ? "hover:fill-brand-light/50" : ""}`;
        const accesible = interactiva && {
          role: "button",
          tabIndex: 0,
          "aria-pressed": pintada,
          "aria-label": `Parte ${i + 1}`,
          onClick: () => onAlternar(i),
          onKeyDown: (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onAlternar(i);
            }
          },
        };
        return (
          <Parte
            key={i}
            {...props}
            {...accesible}
            className={`${color} stroke-brand-dark [stroke-width:3] [stroke-linejoin:round] transition-colors ${
              interactiva
                ? "cursor-pointer focus:outline-none focus-visible:stroke-amber-500 focus-visible:[stroke-width:8]"
                : ""
            }`}
          />
        );
      })}
    </svg>
  );
}
