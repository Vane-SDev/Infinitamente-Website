import "./globals.css";
import Navbar from "../components/Navbar";
import BotonWhatsApp from "../components/BotonWhatsApp";
import { GoogleAnalytics } from "@next/third-parties/google";

// 1. Optimizamos la Metadata SEO
export const metadata = {
  metadataBase: new URL("https://infinitamentematematico.com"),
  title: {
    default:
      "Infinitamente Matemático | Clases Online de Matemática, Física y Lógica",
    template: "%s | Infinitamente Matemático",
  },
  description:
    "Clases personalizadas online para estudiantes de habla hispana. 15 años de experiencia en apoyo escolar, ingreso universitario y nivelación para carreras de software.",
  keywords: [
    "clases de matemática online",
    "apoyo física secundaria",
    "aprender programación lógica",
    "ingreso universidad STEM",
    "profesora matemática online",
  ],
  // Etiquetas para WhatsApp/LinkedIn/Twitter
  openGraph: {
    title: "Dominá la Matemática, Física y Programación | Infinitamente STEM",
    description:
      "Clases online personalizadas con docente experimentada. Aprobá entendiendo.",
    url: "https://infinitamentematematico.com",
    siteName: "Infinitamente Matemático",
    locale: "es_AR",
    type: "website",
  },
};

// Schema Markup

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "TutoringService", 
  name: "Infinitamente Matemático",
  image: "https://infinitamentematematico.com/logo.png",
  url: "https://infinitamentematematico.com",
  telephone: "+5492643171733",
  priceRange: "$$",
  // Eliminamos address y geo. Agregamos alcance digital:
  areaServed: {
    "@type": "GeoCircle",
    description: "Hispanoamérica y estudiantes de habla hispana a nivel global",
  },
  availableLanguage: "es", // Le decimos a Google tu idioma nativo de enseñanza
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "20:00",
  },
  sameAs: ["https://g.page/r/CQOh2Z-tmLQREAE"],
  // (Aggregate Rating) - Actualizado a tus 15 reseñas reales
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "15",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Inyectamos el Schema Markup en el head */}
        <script
          type="application/json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="antialiased bg-brand-dark min-h-screen flex flex-col font-sans"
      >
        <Navbar />
        <main className="grow">{children}</main>
        <BotonWhatsApp />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
    </html>
  );
}
