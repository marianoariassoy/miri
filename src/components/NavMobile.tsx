"use client";
import { nav } from "@/lib/data";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Nav = ({ onClick }: { onClick: (id: string) => void }) => {
  const pathname = usePathname();

  return (
    <nav className="px-4 w-screen h-screen text-center flex items-center justify-center bg-white/90 backdrop-blur-xl">
      <ul className="flex flex-col gap-y-2 font-bold text-lg -translate-y-28">
        {nav.map((item) => (
          <li key={item.name}>
            {pathname === "/" ? (
              <button
                className="uppercase cursor-pointer"
                onClick={() => onClick(item.target)}
              >
                {item.name}
              </button>
            ) : (
              <Link
                href={"/#" + item.target}
                className="uppercase cursor-pointer"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
