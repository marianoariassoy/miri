"use client";
import { useState, useEffect } from "react";
import { Kit } from "../types";
import Modal from "./Modal";

const KitGallery = ({ data }: { data: Kit[] }) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Cerrar con ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8">
        {data.map((item) => (
          <article key={item.title} className="flex flex-col gap-y-6">
            <a
              href="https://wa.me/5493874822795"
              target="_blank"
              rel="norefeerer"
              className="w-full text-center py-2 uppercase text-secondary font-bold border border-foreground h-12 rounded-xl flex justify-center items-center hover:text-white hover:bg-secondary hover:border-secondary"
            >
              {item.title}
            </a>
            <h3 className="font-bold leading-tight text-center lg:min-h-10">
              {item.subtitle}
            </h3>
            <p className="text-sm whitespace-break-spaces leading-tight lg:min-h-50">
              {item.text}
            </p>
            <div
              className="aspect-square cursor-pointer overflow-hidden"
              onClick={() => setActiveImage(item.image)}
            >
              <img
                src={item.image}
                alt="Pack"
                className="w-full h-full object-center object-cover hover:scale-105 transition-transform"
              />
            </div>
          </article>
        ))}
      </div>

      {activeImage && (
        <Modal activeImage={activeImage} setActiveImage={setActiveImage} />
      )}
    </>
  );
};

export default KitGallery;
