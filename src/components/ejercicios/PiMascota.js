"use client";

import { useEffect, useId, useRef } from "react";

// El infinito que envuelve a Pi: cada lazo rodea una pata.
const INFINITO =
  "M152 170 C182 128 264 126 264 170 C264 214 182 212 152 170 C122 128 40 126 40 170 C40 214 122 212 152 170Z";

// Los decimales que van escritos adentro del infinito.
const DECIMALES =
  "3,14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196";

// Qué boca y qué detalle (signo, gotita, etc.) lleva cada estado.
const CARAS = {
  pensando: { boca: "recta", extra: "puntos" },
  contento: { boca: "grande", extra: "cachetes" },
  duda: { boca: "sonrisa", extra: "pregunta" },
  vasbien: { boca: "feliz" },
  cuidado: { boca: "o", extra: "alerta" },
  nervioso: { boca: "onda", extra: "gota" },
  fin: { boca: "triste" },
  impaciente: { boca: "recta", extra: "reloj" },
  dormido: { boca: "recta", extra: "zzz" },
  final: { boca: "grande", extra: "cachetes" },
};

const BOCAS = {
  feliz: <path d="M139 101 Q149 109 159 101" />,
  grande: <path d="M137 99 Q149 116 161 99 Z" fill="#2a0f45" />,
  sonrisa: <path d="M141 103 Q152 106 160 99" />,
  recta: <path d="M142 103 L157 102" />,
  o: <circle cx="149" cy="104" r="4" fill="#2a0f45" />,
  onda: <path d="M139 104 q3 -4 6 0 t6 0 t6 0" />,
  triste: <path d="M140 107 Q149 99 158 107" />,
};

// La cinta del infinito. Se dibuja dos veces: entera por detrás de Pi y solo
// la mitad de abajo por delante, así parece que lo envuelve.
function Infinito({ id, textoRef }) {
  return (
    <>
      <path id={id} d={INFINITO} fill="none" stroke="#3d1466" strokeWidth="17" />
      <path d={INFINITO} fill="none" stroke="#f4eaff" strokeWidth="14" />
      <text
        fontFamily="ui-monospace, 'Courier New', monospace"
        fontSize="9.5"
        fontWeight="700"
        fill="#5b1d99"
        dy="3.3"
      >
        <textPath ref={textoRef} href={`#${id}`}>
          {DECIMALES}
        </textPath>
      </text>
    </>
  );
}

// Pi, la mascota. Como Clippy, no tiene brazos: se expresa con los ojos, las
// cejas y el cuerpo. Es decorativa: lo que le dice al alumno va en el texto
// que la acompaña.
export default function PiMascota({ estado = "pensando", className = "" }) {
  const id = useId().replace(/:/g, "");
  const svgRef = useRef(null);
  const textos = useRef([]);
  const estadoRef = useRef(estado);
  useEffect(() => {
    estadoRef.current = estado;
  }, [estado]);
  const cara = CARAS[estado] ?? CARAS.pensando;

  // Las pupilas siguen al mouse (o al dedo) y los decimales se mueven despacio.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const svg = svgRef.current;
    const miras = [...svg.querySelectorAll(".pi-mira")];
    let objetivo = { x: 0, y: 0 };
    const actual = { x: 0, y: 0 };
    let ultimoPuntero = -Infinity;
    let corrimiento = 0;
    let cuadro;

    function mirarHacia(e) {
      const r = svg.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height * 0.28);
      const d = Math.hypot(dx, dy) || 1;
      const k = Math.min(1, d / 160);
      objetivo = { x: (dx / d) * k * 4, y: (dy / d) * k * 5 };
      ultimoPuntero = performance.now();
    }

    // Sin mouse (en el celular), cada tanto mira hacia otro lado.
    const lugares = [
      { x: 4, y: 0 },
      { x: -4, y: 1 },
      { x: 0, y: 4 },
      { x: 3, y: -3 },
      { x: 0, y: 0 },
    ];
    const vistazo = setInterval(() => {
      if (performance.now() - ultimoPuntero < 3000) return;
      objetivo = lugares[Math.floor(Math.random() * lugares.length)];
    }, 1800);

    function animar() {
      const e = estadoRef.current;
      const conPuntero = performance.now() - ultimoPuntero < 3000;
      let o = objetivo;
      if (e === "pensando" && !conPuntero) o = { x: 3.5, y: -4.5 };
      if (e === "dormido") o = { x: 0, y: 3 };
      actual.x += (o.x - actual.x) * 0.18;
      actual.y += (o.y - actual.y) * 0.18;
      miras.forEach((m) =>
        m.setAttribute("transform", `translate(${actual.x.toFixed(2)} ${actual.y.toFixed(2)})`),
      );

      // Cuando festeja, los decimales corren más rápido.
      const rapido = e === "contento" || e === "final";
      corrimiento = (corrimiento - (rapido ? 1.2 : 0.25)) % 420;
      textos.current.forEach((t) => t?.setAttribute("startOffset", corrimiento));
      cuadro = requestAnimationFrame(animar);
    }

    window.addEventListener("pointermove", mirarHacia);
    window.addEventListener("pointerdown", mirarHacia);
    cuadro = requestAnimationFrame(animar);
    return () => {
      window.removeEventListener("pointermove", mirarHacia);
      window.removeEventListener("pointerdown", mirarHacia);
      clearInterval(vistazo);
      cancelAnimationFrame(cuadro);
    };
  }, []);

  return (
    <span className={`relative inline-block ${className}`}>
      <svg
        ref={svgRef}
        viewBox="20 10 270 260"
        aria-hidden="true"
        className={`pi-mascota pi-${estado} w-full h-full overflow-visible`}
      >
        <defs>
          <linearGradient id={`${id}g`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#e2b0ff" />
            <stop offset=".55" stopColor="#9a4be0" />
            <stop offset="1" stopColor="#5b1d99" />
          </linearGradient>
          <clipPath id={`${id}adelante`}>
            <rect x="0" y="170" width="300" height="130" />
          </clipPath>
        </defs>

        <Infinito id={`${id}a`} textoRef={(el) => (textos.current[0] = el)} />

        {/* Al terminar el tema, Pi se hace bolita y corre por el infinito */}
        <g className="pi-bola">
          <g className="pi-bola-mov" style={{ offsetPath: `path("${INFINITO}")` }}>
            <g className="pi-bola-giro">
              <circle r="20" fill={`url(#${id}g)`} stroke="#f4eaff" strokeWidth="2" />
              <text y="8" textAnchor="middle" fontSize="24" fontWeight="700" fill="#fff" fontFamily="Georgia, serif">
                π
              </text>
            </g>
          </g>
        </g>

        <g className="pi-cuerpo">
          <g fill={`url(#${id}g)`}>
            <path d="M40 92 C60 60 110 66 160 66 L250 62 C262 62 266 74 258 84 L248 96 C240 104 232 104 222 104 L78 104 C62 104 52 108 46 118 C38 112 34 102 40 92Z" />
            <path d="M100 102 L126 102 C124 150 116 200 96 238 C90 250 72 250 70 238 C68 228 76 220 82 212 C96 180 100 140 100 102Z" />
            <path d="M178 102 L204 102 C202 150 204 196 214 218 C220 232 238 230 244 220 C250 232 240 254 218 254 C190 254 180 226 178 190 C176 160 178 130 178 102Z" />
          </g>
          <path d="M70 80 C100 72 140 74 180 72" stroke="#fff" strokeWidth="5" strokeLinecap="round" fill="none" opacity=".5" />

          {/* ojos: lo blanco queda quieto y las pupilas se mueven adentro */}
          <g className="pi-ojo pi-ojo-izq">
            <ellipse cx="128" cy="84" rx="9" ry="11" fill="#fff" />
            <g className="pi-mira">
              <circle cx="128" cy="85" r="5" fill="#2a0f45" />
              <circle cx="130" cy="83" r="1.6" fill="#fff" />
            </g>
          </g>
          <g className="pi-ojo pi-ojo-der">
            <ellipse cx="170" cy="84" rx="9" ry="11" fill="#fff" />
            <g className="pi-mira">
              <circle cx="170" cy="85" r="5" fill="#2a0f45" />
              <circle cx="172" cy="83" r="1.6" fill="#fff" />
            </g>
          </g>
          <path className="pi-ceja pi-ceja-izq" d="M114 62 Q128 56 142 62" stroke="#2a0f45" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path className="pi-ceja pi-ceja-der" d="M156 62 Q170 56 184 62" stroke="#2a0f45" strokeWidth="4" fill="none" strokeLinecap="round" />

          <g stroke="#2a0f45" strokeWidth="3" fill="none" strokeLinecap="round">
            {BOCAS[cara.boca]}
          </g>

          {cara.extra === "cachetes" && (
            <>
              <circle cx="110" cy="100" r="5" fill="#ff8fd1" opacity=".7" />
              <circle cx="188" cy="100" r="5" fill="#ff8fd1" opacity=".7" />
            </>
          )}
          {cara.extra === "gota" && (
            <path d="M202 56 C198 64 196 68 200 72 C204 74 208 70 206 64Z" fill="#9fe3ff" />
          )}
          {cara.extra === "alerta" && (
            <text x="214" y="52" fontSize="30" fontWeight="700" fill="#f59e0b">!</text>
          )}
        </g>

        <g clipPath={`url(#${id}adelante)`}>
          <Infinito id={`${id}b`} textoRef={(el) => (textos.current[1] = el)} />
        </g>

        {cara.extra === "pregunta" && (
          <text className="pi-flota" x="212" y="44" fontSize="34" fontWeight="700" fill="#f59e0b">?</text>
        )}
        {cara.extra === "puntos" && (
          <g className="pi-puntos" fill="#A728D4">
            <circle cx="226" cy="44" r="5" />
            <circle cx="242" cy="32" r="6" />
            <circle cx="260" cy="20" r="7" />
          </g>
        )}
        {cara.extra === "zzz" && (
          <g className="pi-zzz" fill="#A728D4" fontWeight="700">
            <text x="206" y="50" fontSize="16">z</text>
            <text x="220" y="38" fontSize="20">z</text>
            <text x="236" y="26" fontSize="24">Z</text>
          </g>
        )}
        {cara.extra === "reloj" && (
          <g>
            <circle cx="240" cy="36" r="14" fill="#D4A2EB" />
            <path d="M240 28 L240 36 L246 40" stroke="#2a0f45" strokeWidth="3" fill="none" strokeLinecap="round" />
          </g>
        )}
      </svg>

      {estado === "final" && <Confeti />}
    </span>
  );
}

const COLORES_CONFETI = ["#ff5fa2", "#ffd27a", "#7ee0a8", "#39d0ff", "#A728D4"];

// Papel picado para cuando termina el tema. Las posiciones salen del índice
// para que sean siempre las mismas.
function Confeti() {
  return (
    <span aria-hidden="true" className="pi-confeti">
      {Array.from({ length: 24 }, (_, i) => (
        <span
          key={i}
          style={{
            left: `${(i * 37) % 100}%`,
            background: COLORES_CONFETI[i % COLORES_CONFETI.length],
            animationDelay: `${1.4 + (i % 6) * 0.07}s`,
            "--dx": `${((i * 53) % 120) - 60}px`,
            "--giro": `${(i * 97) % 720}deg`,
          }}
        />
      ))}
    </span>
  );
}
