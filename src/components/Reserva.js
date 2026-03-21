"use client";

import ClasePrueba from "./ClasePrueba";
import { motion } from "framer-motion";

export default function Reserva() {
  const numero = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${numero}&text=Hola%20Vane,%20quiero%20reservar%20una%20clase%20de%20prueba.`;

  return (
    <section
      id="reserva"
      className="relative py-24 px-6 sm:px-12 bg-brand-dark overflow-hidden"
    >
      {/* Resplandor de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-600px h-600px bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        className="max-w-5xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block py-1 px-4 rounded-full bg-white/5 border border-brand-light/20 text-brand-light text-sm font-semibold tracking-widest uppercase mb-4">
            Sin cargo · 20 minutos
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">
            Reservá tu{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-light to-brand-primary">
              Clase de Prueba
            </span>
          </h2>
          <p className="text-brand-light/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Nos conocemos, me contás qué temas te cuestan y armamos un plan de
            estudio a medida. Los horarios se muestran en tu hora local.
          </p>
        </div>

        {/* Tarjetas de info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: "🕐", label: "Duración", value: "20 minutos" },
            { icon: "💻", label: "Modalidad", value: "Google Meet / Zoom" },
            { icon: "✅", label: "Costo", value: "Sin cargo" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 bg-white/5 border border-brand-light/10 rounded-xl px-5 py-4"
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="text-brand-light/60 text-xs uppercase tracking-wider">
                  {item.label}
                </p>
                <p className="text-white font-semibold text-sm">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Widget del calendario */}
        <ClasePrueba />

        {/* Separador y WhatsApp */}
        <div className="mt-10 pt-8 border-t border-brand-light/10 text-center flex flex-col items-center">
          <p className="text-brand-light/60 mb-5 font-medium">
            ¿Preferís coordinar los horarios directamente por chat?
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#1EBE57] text-white font-bold py-3 px-8 rounded-xl transition-all shadow-md flex items-center gap-3 transform hover:-translate-y-1"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escribime por WhatsApp
          </a>
          <p className="text-brand-light/30 text-xs mt-5">
            Al reservar aceptás los{" "}
            <a
              href="https://calendly.com/es/pages/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-brand-light/60 transition-colors"
            >
              términos de privacidad de Calendly
            </a>
            .
          </p>
        </div>
      </motion.div>
    </section>
  );
}
