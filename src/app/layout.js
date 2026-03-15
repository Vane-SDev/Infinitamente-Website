import "./globals.css";
import Navbar from "../components/Navbar";
import BotonWhatsApp from "../components/BotonWhatsApp";

export const metadata = {
  title: "Infinitamente Matemático | Clases Online",
  description:
    "Dominá la matemática con clases online personalizadas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className="antialiased bg-brand-dark min-h-screen flex flex-col"
      >
        {/* El Navbar queda fijo arriba */}
        <Navbar />

        {/* Acá se renderiza el contenido de cada página (como tu page.js) */}
        <main className="grow">{children}</main>
        <BotonWhatsApp />
      </body>
    </html>
  );
}
