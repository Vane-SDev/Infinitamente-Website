import { useId } from "react";

// El símbolo de infinito que queda detrás de Pi.
const INFINITO =
  "M150 165 C185 115 285 110 285 165 C285 220 185 215 150 165 C115 115 15 110 15 165 C15 220 115 215 150 165Z";

// Pi, la mascota. Reacciona según el estado: "pensando" | "contento" | "oops".
// Es decorativa: el mensaje para el alumno lo da el texto que la acompaña.
export default function PiMascota({ estado = "pensando", className = "" }) {
  const gradiente = useId();

  return (
    <svg
      viewBox="10 10 280 260"
      aria-hidden="true"
      className={`pi-mascota pi-${estado} overflow-visible ${className}`}
    >
      <defs>
        <linearGradient id={gradiente} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e2b0ff" />
          <stop offset=".55" stopColor="#9a4be0" />
          <stop offset="1" stopColor="#5b1d99" />
        </linearGradient>
      </defs>

      <g transform="rotate(-10 150 165)">
        <path d={INFINITO} fill="none" stroke="#c98cff" strokeWidth="5" opacity=".5" />
        <path
          className="pi-infinito"
          d={INFINITO}
          pathLength="100"
          fill="none"
          stroke="#D4A2EB"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="28 72"
        />
      </g>

      <g className="pi-cuerpo" fill={`url(#${gradiente})`}>
        {/* barra de arriba y las dos patas */}
        <path d="M40 92 C60 60 110 66 160 66 L250 62 C262 62 266 74 258 84 L248 96 C240 104 232 104 222 104 L78 104 C62 104 52 108 46 118 C38 112 34 102 40 92Z" />
        <path d="M100 102 L126 102 C124 150 116 200 96 238 C90 250 72 250 70 238 C68 228 76 220 82 212 C96 180 100 140 100 102Z" />
        <path d="M178 102 L204 102 C202 150 204 196 214 218 C220 232 238 230 244 220 C250 232 240 254 218 254 C190 254 180 226 178 190 C176 160 178 130 178 102Z" />
        <path d="M70 80 C100 72 140 74 180 72" stroke="#fff" strokeWidth="5" strokeLinecap="round" fill="none" opacity=".55" />

        {/* cara */}
        <g className="pi-ojo">
          <ellipse cx="128" cy="84" rx="9" ry="11" fill="#fff" />
          <circle className="pi-pupila" cx="129" cy="86" r="5" fill="#37125C" />
        </g>
        <g className="pi-ojo">
          <ellipse cx="170" cy="84" rx="9" ry="11" fill="#fff" />
          <circle className="pi-pupila" cx="171" cy="86" r="5" fill="#37125C" />
        </g>
        {estado === "contento" && (
          <>
            <circle cx="112" cy="96" r="5" fill="#ff8fd1" opacity=".7" />
            <circle cx="186" cy="96" r="5" fill="#ff8fd1" opacity=".7" />
            <path d="M140 96 Q149 104 158 96" stroke="#37125C" strokeWidth="3" fill="none" strokeLinecap="round" />
          </>
        )}
        {estado === "pensando" && (
          <path d="M142 99 L157 97" stroke="#37125C" strokeWidth="3" fill="none" strokeLinecap="round" />
        )}
        {estado === "oops" && (
          <>
            <circle cx="149" cy="101" r="4" fill="#37125C" />
            <path d="M200 60 C196 68 194 72 198 76 C202 78 206 74 204 68Z" fill="#9fe3ff" />
          </>
        )}
      </g>

      {estado === "pensando" && (
        <g className="pi-puntos" fill="#A728D4">
          <circle cx="232" cy="40" r="5" />
          <circle cx="248" cy="30" r="6" />
          <circle cx="266" cy="18" r="7" />
        </g>
      )}
    </svg>
  );
}
