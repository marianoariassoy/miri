"use client";
import Button from "./Button";
import Content from "./Content";
import { Quotation } from "@/lib/icons";
import Axios from "axios";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";

interface BioProps {
  text: string;
}

const Bio = () => {
  const api = process.env.NEXT_PUBLIC_API_URL + "/textos";
  const [data, setData] = useState<BioProps[]>([]);
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

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );

  return (
    <Content title="Bio" bgColor="dark">
      <div className="flex flex-col lg:flex-row gap-y-8 gap-x-12">
        <div className="flex-1 flex flex-col gap-y-4 leading-tight">
          <h3 className="text-xl leading-tight whitespace-break-spaces">
            {data[2].text}
          </h3>
          <p className="whitespace-break-spaces">{data[3].text}</p>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <div className="w-60 h-60 rounded-full overflow-hidden bg-foreground shadow-2xl mb-2">
            <img src="/images/bio.jpg" alt="Bio" />
          </div>
          <Button bgColor="dark" title="Contactame" target="Contacto" />
        </div>
        <div className="flex-1 h-full flex items-start justify-center gap-x-2 lg:mt-20">
          <span>
            <Quotation />
          </span>
          <p className="text-lg font-bold leading-tight">{data[4].text}</p>
        </div>
      </div>
    </Content>
  );
};

export default Bio;
