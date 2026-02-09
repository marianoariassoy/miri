import Content from "./Content";
import { Kit } from "../types";
import KitGallery from "./KitGallery";

const KitModule = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/kit-de-marca",
    {
      cache: "no-store",
    },
  );

  const data = (await response.json()) as Kit[];
  if (!data) return;

  return (
    <Content title="Kit de Marca - Branding" bgColor="light">
      <div>
        <p className="mt-2">
          Los componentes pueden variar según las necesidades de tu negocio.
        </p>
        <p className="text-secondary font-bold text-lg mb-4">
          También podes pedir tu presupuesto personalizado
        </p>
      </div>

      <KitGallery data={data} />
    </Content>
  );
};

export default KitModule;
