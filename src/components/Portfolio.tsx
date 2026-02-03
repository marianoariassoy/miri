import PortfolioModule from "./PortfolioModule";
import { Portfolio } from "../types";

const PortfolioModulo = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/portfolio", {
    cache: "no-store",
  });

  const data = (await response.json()) as Portfolio[];
  if (!data) return;

  return <PortfolioModule data={data} />;
};

export default PortfolioModulo;
