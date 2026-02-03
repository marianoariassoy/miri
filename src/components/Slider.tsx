"use client";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Forward } from "@/lib/icons";
import { Home } from "../types";

const Slider = ({ data }: { data: Home[] }) => {
  const properties = {
    prevArrow: (
      <button className="ml-2 lg:ml-10 text-5xl hover:text-secondary">
        <span className="rotate-180 block">
          <Forward />
        </span>
      </button>
    ),
    nextArrow: (
      <button className="mr-2 lg:mr-10 text-5xl hover:text-secondary">
        <Forward />
      </button>
    ),
    arrows: false,
    infinite: true,
    pauseOnHover: false,
    autoplay: true,
    duration: 4000,
    transitionDuration: 400,
    indicators: true,
  };

  return (
    <Fade {...properties}>
      {data.map((item) => (
        <div
          key={item.id}
          className="w-full aspect-square lg:aspect-video bg-cover bg-center shadow-2xl"
          style={{ backgroundImage: `url(${item.image})` }}
        />
      ))}
    </Fade>
  );
};

export default Slider;
