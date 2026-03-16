"use client";

import { InlineWidget } from "react-calendly";

export default function CalendarioPrueba() {
  return (
    <section id="calendario" className="py-16 px-6 sm:px-12 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Conoceme en una{" "}
          <span className="text-brand-primary">Clase de Prueba</span>
        </h2>
        <p className="text-gray-600 text-lg">
          Agendá 20 minutos sin cargo. Nos conocemos, me contás qué temas te
          cuestan y armamos un plan de estudio. Los horarios se muestran
          automáticamente en tu hora local.
        </p>
      </div>

      {/* Contenedor del calendario */}
      <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.15)] bg-white">
        <InlineWidget
          url="https://calendly.com/infinitamentematematico/20min?hide_gdpr_banner=1"
          styles={{
            height: "900px", // Le damos más altura para absorber el formulario sin scroll
            width: "100%",
          }}
        />
      </div>
    </section>
  );
}
