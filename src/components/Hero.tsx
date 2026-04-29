"use client";
import Content from "./Content";
import Slider from "./Slider";
import Whatsapp from "./Whatsapp";
import HeroHeader from "./HeroHeader";
import Axios from "axios";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";

const Hero = () => {
  const api = process.env.NEXT_PUBLIC_API_URL + "/home";
  const [data, setData] = useState([]);
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

  return (
    <Content title="" bgColor="dark">
      <div
        className="flex flex-col-reverse lg:flex-row gap-x-20 gap-y-8 lg:items-center scroll-m-40 mt-20"
        id="hero"
      >
        <div className="lg:w-1/3 flex flex-col gap-y-4">
          <HeroHeader />
        </div>
        <div className="lg:w-2/3">
          {loading ? (
            <div className="mt-8">
              <Loader />
            </div>
          ) : (
            <Slider data={data} />
          )}
        </div>
      </div>

      <Whatsapp />
    </Content>
  );
};

export default Hero;
