"use client";
import Button from "./Button";
import Axios from "axios";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";

interface HeroHeaderProps {
  text: string;
}

const HeroHeader = () => {
  const api = process.env.NEXT_PUBLIC_API_URL + "/textos";
  const [data, setData] = useState<HeroHeaderProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(api);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [api]);

  if (loading) return <Loader />;

  return (
    <>
      <h3 className="text-lg font-bold leading-tight whitespace-break-spaces">
        {data[0].text}
      </h3>
      <p className="leading-tight whitespace-break-spaces">{data[1].text}</p>
      <div className="flex mt-4 lg:mt-8">
        <Button bgColor="dark" title="Contactame" target="Contacto" />
      </div>
    </>
  );
};

export default HeroHeader;
