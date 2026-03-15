"use client"; // Esta línea es obligatoria para usar useState en el App Router

import { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      pregunta: "¿Desde qué edad se pueden tomar las clases?",
      respuesta:
        "Las clases están adaptadas para alumnos desde los 7 años en adelante. Ajusto la metodología según la edad, construyendo bases sólidas para primaria, secundaria o nivel preuniversitario.",
    },
    {
      pregunta: "Vivo fuera de Argentina, ¿cómo puedo pagar?",
      respuesta:
        "Trabajo con alumnos de distintos países hispanohablantes. Podés abonar fácilmente a través de plataformas internacionales como PayPal o Western Union. Los alumnos residentes en Argentina pueden usar MercadoPago o transferencia bancaria.",
    },
    {
      pregunta: "¿Qué plataforma usamos para las clases online?",
      respuesta:
        "Las sesiones se dan por Google Meet (o Zoom). Uso una pizarra digital interactiva para que puedas ver la resolución de los problemas matemáticos en tiempo real, paso a paso.",
    },
    {
      pregunta:
        "¿Dan preparación para exámenes de ingreso o preuniversitarios?",
      respuesta:
        "Sí. Hacemos entrenamiento intensivo enfocado en los temarios específicos de cada instituto, resolviendo modelos de exámenes de años anteriores para asegurar el nivel necesario.",
    },
  ];

  return (
    <section id="faq" className="py-24 px-6 sm:px-12 bg-white text-gray-900">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-dark tracking-tight mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-gray-600">
            Todo lo que necesitás saber antes de empezar.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-brand-light"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center bg-gray-50 hover:bg-brand-light/10 transition-colors"
              >
                <span className="font-semibold text-lg text-brand-dark">
                  {faq.pregunta}
                </span>
                <span
                  className={`text-brand-primary transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-48 py-5 opacity-100" : "max-h-0 py-0 opacity-0"}`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.respuesta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
