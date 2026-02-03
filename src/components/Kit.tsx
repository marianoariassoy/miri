import Content from "./Content";
import { Kit } from "../types";

const Bio = async () => {
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8">
        {data.map((item) => (
          <article key={item.title} className="flex flex-col gap-y-6">
            <h2 className="w-full text-center py-2 uppercase text-secondary font-bold border border-foreground h-12 rounded-xl flex justify-center items-center">
              {item.title}
            </h2>
            <h3 className="font-bold leading-tight text-center lg:min-h-10">
              {item.subtitle}
            </h3>
            <p className="text-sm whitespace-break-spaces leading-tight lg:min-h-50">
              {item.text}
            </p>
            <div className="aspect-square">
              <img
                src={item.image}
                alt="Pack"
                className="w-full h-full object-center object-cover"
              />
            </div>
          </article>
        ))}
      </div>
    </Content>
  );
};

export default Bio;
