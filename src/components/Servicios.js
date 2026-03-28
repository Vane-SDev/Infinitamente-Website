"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const contenedorVariantes = {
  oculto: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const tarjetaVariantes = {
  oculto: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Servicios() {
  const [expandido, setExpandido] = useState(null);

  const servicios = [
    {
      titulo: "Apoyo Escolar Integral",
      desc: "Transformo la frustración en confianza. Construyo una base matemática sólida para que mis estudiantes desde los 7 años dejen tenerle miedo a la materia y avancen sin problema.",
      temario: [
        "Operaciones básicas y fracciones",
        "Ecuaciones de primer grado",
        "Geometría fundamental",
        "Resolución de problemas lógicos",
      ],
      ctaTexto: "Empezar apoyo escolar",
    },
    {
      titulo: "Física (Secundaria)",
      desc: "Hay que dejar de memorizar fórmulas sin sentido. Te enseño a interpretar los enunciados, plantear las ecuaciones correctas y entender el fenómeno físico detrás de los números.",
      temario: [
        "Cinemática (MRU, MRUV, Caída libre)",
        "Dinámica y Leyes de Newton",
        "Trabajo, Potencia y Energía",
        "Estática y diagramas de cuerpo libre",
      ],
      ctaTexto: "Entender la física",
    },
    {
      titulo: "Ingreso a la Universidad",
      desc: "No dejés tu ingreso al azar. Nivelación intensiva, resolución de exámenes reales y estrategias exactas para que superemos las pruebas de acceso sin sorpresas.",
      temario: [
        "Álgebra y polinomios",
        "Funciones (lineal, cuadrática, exponencial, etc.)",
        "Trigonometría analítica",
        "Física orientada al ingreso",
      ],
      ctaTexto: "Asegurar mi ingreso",
    },
    {
      titulo: "Apoyo Universitario",
      desc: "¿Te trabaste con una guía o un tema del programa? Clases 100% prácticas. Traé tus ejercicios o modelos de evaluación y los resolvemos paso a paso hasta que domines el tema.",
      temario: [
        "Análisis Matemático (Límites, Derivadas, Integrales)",
        "Álgebra Lineal (Matrices, Vectores)",
        "Probabilidad y Estadística",
        "Preparación de trabajos prácticos",
        "Matemática para carreras de software (Lógica, Algoritmos, Complejidad)",
        "Matemática Avanzada (Ecuaciones Diferenciales, Series, etc.)",
      ],
      ctaTexto: "Destrabar ejercicios",
    },
  ];

  const toggleExpandir = (index) => {
    setExpandido(expandido === index ? null : index);
  };

  return (
    <section id="servicios" className="py-24 bg-brand-dark px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-white drop-shadow-sm">
            El mapa exacto para{" "}
            <span className="text-brand-primary">aprobar</span>
          </h2>
          <p className="text-brand-light text-lg max-w-2xl mx-auto">
            Elegí tu materia y etapa educativa para descubrir cómo vamos a
            estructurar las clases y alcanzar tu objetivo.
          </p>
        </div>

        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
          variants={contenedorVariantes}
          initial="oculto"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {servicios.map((servicio, index) => {
            const estaSeleccionada = expandido === index;

            return (
              <motion.div
                key={index}
                variants={tarjetaVariantes}
                layout
                className={`border rounded-2xl p-8 shadow-lg flex flex-col justify-between transition-all duration-300 ${
                  estaSeleccionada
                    ? "bg-brand-primary/10 border-brand-primary"
                    : "bg-gray-900 border-gray-800 hover:border-brand-primary/50"
                }`}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {servicio.titulo}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-8 text-sm">
                    {servicio.desc}
                  </p>
                </div>

                <div className="mt-auto flex flex-col gap-4">
                  <a
                    href="#reserva"
                    className="w-full text-center bg-brand-primary hover:bg-purple-600 text-white font-bold py-3 rounded-lg transition-colors shadow-md"
                  >
                    {servicio.ctaTexto}
                  </a>

                  <button
                    onClick={() => toggleExpandir(index)}
                    className="text-brand-light hover:text-white text-sm font-medium flex items-center justify-center gap-2 py-2 transition-colors"
                  >
                    {estaSeleccionada
                      ? "Ocultar temario detallado"
                      : "Ver temario detallado"}
                    <span className="text-lg leading-none">
                      {estaSeleccionada ? "↑" : "↓"}
                    </span>
                  </button>
                </div>

                <AnimatePresence>
                  {estaSeleccionada && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-4 space-y-3 border-t border-gray-800 pt-5">
                        {servicio.temario.map((tema, i) => (
                          <li
                            key={i}
                            className="text-gray-300 flex items-start gap-3 text-sm leading-snug"
                          >
                            <span className="text-brand-primary mt-0.5">▹</span>
                            {tema}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
