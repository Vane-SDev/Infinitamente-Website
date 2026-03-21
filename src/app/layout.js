import "./globals.css";
import Navbar from "../components/Navbar";
import BotonWhatsApp from "../components/BotonWhatsApp";
import { GoogleAnalytics } from '@next/third-parties/google'; // Importación oficial para rendimiento

export const metadata = {
  metadataBase: new URL("https://infinitamentematematico.com"),
  title: {
    default: "Infinitamente STEM | Clases de Matemática, Física y Programación",
    template: "%s | Infinitamente STEM",
  },
  description:
    "Clases online personalizadas de matemática, física y programación lógica. Apoyo escolar, ingreso a la universidad y acompañamiento para tecnicaturas.",
  keywords: [
    "clases de matemática online", 
    "clases de física secundaria", 
    "aprender a programar", 
    "lógica computacional", 
    "apoyo universitario", 
    "ingreso universidad"
  ],
  openGraph: {
    title: "Infinitamente STEM | Clases Online",
    description: "Dominá la matemática, la física y la lógica de programación. Aprobá entendiendo.",
    url: "https://infinitamentematematico.com",
    siteName: "Infinitamente STEM",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinitamente STEM | Clases Online",
    description: "Dominá la matemática, la física y la lógica de programación. Aprobá entendiendo.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className="antialiased bg-brand-dark min-h-screen flex flex-col"
      >
        <Navbar />
        <main className="grow">{children}</main>
        <BotonWhatsApp />
      </body>
      
      
      <GoogleAnalytics gaId="G-XDDNDKRX8D
" />
    </html>
  );
}
