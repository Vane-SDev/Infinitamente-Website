import Link from "next/link";

// Recibe [{ nombre, href }]; el último elemento es la página actual.
export default function MigasEjercicios({ items }) {
  return (
    <nav aria-label="Ubicación" className="mb-8 text-sm text-gray-500">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const esActual = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {esActual ? (
                <span aria-current="page" className="text-brand-dark font-semibold">
                  {item.nombre}
                </span>
              ) : (
                <>
                  <Link href={item.href} className="hover:text-brand-primary transition-colors">
                    {item.nombre}
                  </Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
