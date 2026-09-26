import Link from "next/link";

// El link a la guía es provisorio: en el Entregable 3 se reemplaza por el
// formulario que la envía por mail con Brevo.
const CTA = {
  guia: {
    texto: "Quiero la guía de fracciones gratis",
    href: "/recursos/fracciones",
  },
  clase: {
    texto: "Reservar clase de prueba gratis",
    href: "/#reserva",
  },
};

const estiloPrincipal =
  "w-full sm:w-auto text-center bg-brand-primary hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]";
const estiloSecundario =
  "w-full sm:w-auto text-center border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-bold py-3 px-6 rounded-xl transition-all";

export default function ResultadoCTA({ acerto }) {
  const principal = acerto ? CTA.guia : CTA.clase;
  const secundario = acerto ? CTA.clase : CTA.guia;

  return (
    <div className="mt-6 p-5 rounded-2xl bg-brand-light/15 border border-brand-light/40">
      <p className="text-brand-dark font-semibold mb-4">
        {acerto
          ? "¿Querés seguir practicando? Te mando la guía con más ejercicios y trucos para resolver mentalmente."
          : "Las fracciones se entienden mucho mejor con alguien que te acompañe paso a paso. Probemos juntos en una clase gratis de 20 minutos."}
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link href={principal.href} className={estiloPrincipal}>
          {principal.texto}
        </Link>
        <Link href={secundario.href} className={estiloSecundario}>
          {secundario.texto}
        </Link>
      </div>
    </div>
  );
}
