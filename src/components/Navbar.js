"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nivelesDisponibles } from "@/data/ejercicios/niveles";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const pathname = usePathname();
  const esRutaTech = pathname === "/programacion";

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <nav className="bg-brand-dark border-b border-brand-primary/30 sticky top-0 z-50 shadow-md">
      <div className="py-4 px-6 sm:px-12 flex items-center justify-between">
        {/* Sector del Logo */}
        <Link
          href="/"
          onClick={cerrarMenu}
          className="flex items-center gap-4 transition-transform hover:scale-105 z-50"
        >
          <div className="bg-white/10 p-1 rounded-lg">
            <Image
              src="/Logo.png"
              alt="Logo Infinitamente Matemático"
              width={48}
              height={48}
              className="rounded-md object-contain"
              style={{ width: "auto", height: "auto" }}
              priority
            />
          </div>

          <div className="hidden lg:flex flex-col justify-center">
            <span className="text-white font-bold text-xl tracking-wide leading-none">
              Infinitamente{" "}
              <span
                className={esRutaTech ? "text-blue-500" : "text-brand-primary"}
              >
                Matemático
              </span>
            </span>
            {esRutaTech && (
              <span className="text-blue-400 text-[11px] font-mono tracking-[0.2em] uppercase mt-1">
                Code_Lab
              </span>
            )}
          </div>
        </Link>

        {/* Botón Hamburguesa */}
        <button
          className="lg:hidden text-brand-light hover:text-white transition-colors focus:outline-none z-50"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Alternar menú"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuAbierto ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navegación de Escritorio */}
        <ul className="hidden lg:flex items-center gap-6 text-brand-light font-medium text-sm">
          <li>
            <Link
              href="/#servicios"
              className="hover:text-white transition-colors"
            >
              Clases
            </Link>
          </li>
          <li>
            <Link
              href="/programacion"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              Programación
              <span className="bg-brand-primary/20 text-brand-primary text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider border border-brand-primary/30">
                Nuevo
              </span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              href="/ejercicios"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              Ejercicios
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
            {/* Submenú de niveles: se abre con hover o al navegar con teclado */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 hidden group-hover:block group-focus-within:block">
              <ul className="bg-brand-dark border border-brand-primary/30 rounded-lg shadow-xl py-2 min-w-44">
                {nivelesDisponibles.map((nivel) => (
                  <li key={nivel.slug}>
                    <Link
                      href={`/ejercicios/${nivel.slug}`}
                      className="block px-4 py-2 hover:bg-brand-primary/20 hover:text-white transition-colors"
                    >
                      {nivel.nombre}
                      <span className="block text-[11px] text-brand-light/70">
                        {nivel.detalle}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <Link
              href="/#calendario"
              className="hover:text-white transition-colors"
            >
              Reservar
            </Link>
          </li>
          <li>
            <Link
              href="/recursos"
              className="bg-brand-primary/20 hover:bg-brand-primary text-white px-4 py-2 rounded-lg transition-colors border border-brand-primary/50"
            >
              Apuntes Gratis
            </Link>
          </li>
        </ul>
      </div>

      {/* Navegación Móvil (Desplegable) - Corregido y sin duplicar */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-brand-dark border-b border-brand-primary/30 shadow-xl transition-all duration-300 ease-in-out origin-top ${
          menuAbierto
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4 text-center font-medium">
          <li>
            <Link
              href="/#servicios"
              onClick={cerrarMenu}
              className="block text-brand-light hover:text-white py-2"
            >
              Clases
            </Link>
          </li>
          <li>
            <Link
              href="/programacion"
              onClick={cerrarMenu}
              className="flex items-center justify-center gap-2 text-brand-light hover:text-white py-2"
            >
              Programación
              <span className="bg-brand-primary text-white text-[10px] px-2 py-0.5 rounded-md uppercase tracking-wide">
                Nuevo
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/ejercicios"
              onClick={cerrarMenu}
              className="block text-brand-light hover:text-white py-2"
            >
              Ejercicios
            </Link>
            <div className="flex justify-center gap-3">
              {nivelesDisponibles.map((nivel) => (
                <Link
                  key={nivel.slug}
                  href={`/ejercicios/${nivel.slug}`}
                  onClick={cerrarMenu}
                  className="text-sm text-brand-light/80 hover:text-white border border-brand-primary/30 rounded-md px-3 py-1"
                >
                  {nivel.nombre}
                </Link>
              ))}
            </div>
          </li>
          <li>
            <Link
              href="/#calendario"
              onClick={cerrarMenu}
              className="block text-brand-light hover:text-white py-2"
            >
              Reservar Clase
            </Link>
          </li>
          <li className="pt-2 border-t border-brand-primary/20 mt-2">
            <Link
              href="/recursos"
              onClick={cerrarMenu}
              className="inline-block w-full bg-brand-primary/20 hover:bg-brand-primary text-white px-4 py-3 rounded-lg transition-colors border border-brand-primary/50"
            >
              Apuntes Gratis
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
