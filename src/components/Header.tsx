"use client";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import Social from "./Social";
import Search from "./Search";
import Hamburger from "./HamburgerButton";
import NavMobile from "./NavMobile";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 10;

      setScrolled((prev) => {
        if (prev === next) return prev;
        return next;
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setIsOpen(false);
  };

  return (
    <header className="sticky w-screen top-0 z-50 bg-white/90 backdrop-blur-xl">
      <div
        className={`w-full max-w-1440px mx-auto transition-all ease-in-out px-4 lg:px-8 flex justify-between pb-6 relative ${scrolled ? "pt-6" : "pt-14"}`}
      >
        <div className="z-50 lg:translate-x-8">
          {pathname === "/" ? (
            <button onClick={() => handleScroll("hero")}>
              <div
                className={`absolute transition-all bg-foreground hover:scale-105 shadow-2xl rounded-full flex items-center justify-center text-white cursor-pointer ${scrolled ? "-translate-y-8 w-24 h-24 lg:h-30 lg:w-30" : "-translate-y-12 w-38 h-38 lg:h-48 lg:w-48"}`}
              >
                <img
                  src="/assets/logo.svg"
                  className="h-1/2 transition-transform"
                  alt="Logo"
                />
              </div>
            </button>
          ) : (
            <Link href="/">
              <div
                className={`absolute transition-transform bg-foreground hover:scale-105 shadow-2xl  rounded-full flex items-center justify-center text-white -translate-y-4 w-24 h-24 lg:h-30 lg:w-30`}
              >
                <img
                  src="/assets/logo.svg"
                  className="h-1/2 transition-transform"
                  alt="Logo"
                />
              </div>
            </Link>
          )}
        </div>
        <div className="flex items-center gap-x-8">
          <Nav onClick={handleScroll} />
          <Social />
          <Search />
          <Hamburger isOpen={isOpen} onClick={handleClick} />
        </div>
      </div>
      <div
        className={`absolute transition-transform ease-in-out duration-400 left-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <NavMobile onClick={handleScroll} />
      </div>
    </header>
  );
};

export default Header;
