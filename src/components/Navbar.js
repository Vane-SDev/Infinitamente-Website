"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

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
              src="/logo.jpg" // Asegurate de que este nombre coincida con tu archivo
              alt="Logo Infinitamente Matemático"
              width={48}
              height={48}
              className="rounded-md object-contain"
            />
          </div>
          <span className="text-white font-bold text-xl tracking-wide hidden sm:block">
            Infinitamente <span className="text-brand-primary">Matemático</span>
          </span>
        </Link>

        {/* Botón Hamburguesa (Solo visible en móviles) */}
        <button
          className="sm:hidden text-brand-light hover:text-white transition-colors focus:outline-none z-50"
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
              // Ícono de X (Cerrar)
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Ícono de Hamburguesa
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navegación de Escritorio (Oculta en móviles) */}
        <ul className="hidden sm:flex items-center gap-6 text-brand-light font-medium text-base">
          <li>
            <Link
              href="/#temario"
              className="hover:text-white transition-colors"
            >
              Temario
            </Link>
          </li>
          <li>
            <Link
              href="/#calendario"
              className="hover:text-white transition-colors"
            >
              Reservar Clase
            </Link>
          </li>
          <li>
            <Link href="/#faq" className="hover:text-white transition-colors">
              FAQ
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
        className={`sm:hidden absolute top-full left-0 w-full bg-brand-dark border-b border-brand-primary/30 shadow-xl transition-all duration-300 ease-in-out origin-top ${
          menuAbierto
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4 text-center font-medium">
          <li>
            <Link
              href="/#temario"
              onClick={cerrarMenu}
              className="block text-brand-light hover:text-white py-2"
            >
              Temario
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
          <li>
            <Link
              href="/#faq"
              onClick={cerrarMenu}
              className="block text-brand-light hover:text-white py-2"
            >
              FAQ
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
