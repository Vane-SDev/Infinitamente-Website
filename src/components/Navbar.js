"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const pathname = usePathname(); // Leemos la URL actual

  // Variable booleana para saber si estamos en la ruta tech
  const esRutaTech = pathname === "/programacion";

  // Función para cerrar el menú móvil al hacer clic en un enlace
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
              src="/logo.png"
              alt="Logo"
              width={48}
              height={48}
              className="rounded-md object-contain"
            />
          </div>

          {/* LÓGICA DEL LOGO DINÁMICO */}
          <div className="hidden lg:flex flex-col justify-center">
            <span className="text-white font-bold text-xl tracking-wide leading-none">
              Infinitamente{" "}
              <span
                className={esRutaTech ? "text-blue-500" : "text-brand-primary"}
              >
                Matemático
              </span>
            </span>

            {/* Si estamos en /programacion, mostramos este subtítulo técnico */}
            {esRutaTech && (
              <span className="text-blue-400 text-[11px] font-mono tracking-[0.2em] uppercase mt-1">
                Code_Lab
              </span>
            )}
          </div>
        </Link>

        {/* Botón Hamburguesa (Solo visible en móviles) */}
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

        {/* Navegación de Escritorio (Oculta en móviles, break en lg para dar espacio) */}
        <ul className="hidden lg:flex items-center gap-6 text-brand-light font-medium text-sm">
          <li>
            <Link
              href="/#servicios"
              className="hover:text-white transition-colors"
            >
              Matemática
            </Link>
          </li>
          <li>
            <Link
              href="/#servicios"
              className="hover:text-white transition-colors"
            >
              Física
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

      {/* Navegación Móvil (Desplegable) */}
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
              Matemática
            </Link>
          </li>
          <li>
            <Link
              href="/#servicios"
              onClick={cerrarMenu}
              className="block text-brand-light hover:text-white py-2"
            >
              Física (Secundaria)
            </Link>
          </li>
          <li>
            <Link
              href="/programacion"
              onClick={cerrarMenu}
              className="flex items-center justify-center gap-2 text-brand-light hover:text-white py-2"
            >
              Programación POO
              <span className="bg-brand-primary text-white text-[10px] px-2 py-0.5 rounded-md uppercase tracking-wide">
                Nuevo
              </span>
            </Link>
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
