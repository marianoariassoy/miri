"use client";
import { nav } from "@/lib/data";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Nav = ({ onClick }: { onClick: (id: string) => void }) => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:block xl:mr-8">
      <ul className="flex items-center gap-x-6 font-semibold">
        {nav.map((item) => (
          <li key={item.name}>
            {pathname === "/" ? (
              <button
                className="hover:text-secondary uppercase cursor-pointer"
                onClick={() => onClick(item.target)}
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
  );
};

export default Nav;
