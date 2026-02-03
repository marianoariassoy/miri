"use client";
import { useRef, useState, useEffect } from "react";
import Content from "./Content";
import { Forward } from "@/lib/icons";
import Link from "next/link";
import { Portfolio } from "../types";

const PortfolioModule = ({ data }: { data: Portfolio[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollAmount = 320;

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  };

  const handleScrollRight = () => {
    scrollRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleScrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollButtons();
    el.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  return (
    <Content title="Portafolio" bgColor="dark">
      <button
        onClick={handleScrollRight}
        disabled={!canScrollRight}
        className={`absolute right-6 top-1/2 -translate-y-1/2 text-5xl z-10 transition
          ${canScrollRight ? "hover:text-secondary cursor-pointer" : "opacity-20 cursor-default"}
        `}
      >
        <Forward />
      </button>
      <button
        onClick={handleScrollLeft}
        disabled={!canScrollLeft}
        className={`absolute left-6 top-1/2 -translate-y-1/2 text-5xl z-10 transition
          ${canScrollLeft ? "hover:text-secondary cursor-pointer" : "opacity-20 cursor-default"}
        `}
      >
        <span className="rotate-180 block">
          <Forward />
        </span>
      </button>
      <div
        ref={scrollRef}
        className="flex items-center gap-x-4 overflow-x-auto pb-8 scroll-smooth no-scrollbar"
      >
        {data.map((item, index) => (
          <article
            key={index}
            className="flex flex-col gap-y-4 w-full max-w-80"
          >
            <Link href={`/portfolio/${item.slug}`}>
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition hover:scale-105"
                />
              </div>
            </Link>
            <h2 className="font-bold">{item.title}</h2>
          </article>
        ))}
      </div>
    </Content>
  );
};

export default PortfolioModule;
