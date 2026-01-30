"use client";
import Social from "./Social";
import Button from "./Button";
import { nav } from "@/lib/data";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const pathname = usePathname();

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="flex flex-col">
      <div className="bg-primary py-8 px-4 flex flex-col gap-y-6 items-center justify-center">
        <Social />
        <p className="text-center">
          Ponemos foco en la creatividad, la exclusividad y la innovación de
          marcas.
        </p>
        <Button bgColor="light" title="Contactanos" target="Contacto" />
      </div>
      <div className="flex flex-col items-center justify-center gap-y-8 px-4 py-8">
        <nav>
          <ul className="flex justify-center font-semibold text-sm flex-wrap gap-y-2 text-center">
            {nav.map((item) => (
              <li
                key={item.name}
                className="pr-2 mx-1 lg:border-r lg:border-gray-300 last:pr-0 lg:last:mr-0 lg:last:border-r-0"
              >
                {pathname === "/" ? (
                  <button
                    className="hover:text-secondary uppercase cursor-pointer"
                    onClick={() => handleScroll(item.target)}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    href={"/#" + item.target}
                    className="hover:text-secondary uppercase"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-sm">
          2026 © MC diseño y comunicación visual. Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
