import Content from "./Content";

const Bio = () => {
  const data = [
    {
      title: "PACK 1 • Emprendedor",
      subtitle: "Logo + Paleta de Colores",
      description: `• Incluye 2 propuestas de diseño de logo o isologo
con hasta 2 revisiones.
• Envío el archivo en formatos PNG, JPEG, PDF e
ILLUSTRATOR.
• Manual de marca reducido`,
      image: "https://picsum.photos/id/10/1920/1080",
    },
    {
      title: "PACK 2 • Redes",
      subtitle: "Logo + Paleta de Colores + plantillas editables para redes",
      description: `• Incluye 2 propuestas de diseño de logo o isologo
con hasta 2 revisiones.
• Envío el archivo en formatos PNG, JPEG, PDF e
ILLUSTRATOR.
• Manual de marca reducido
• 3 Plantillas para feed o reel (instagram, facebook,
whatsapp )
-No incluye la gestión de publicación, creación de
contenido ni fotografía)`,
      image: "https://picsum.photos/id/11/1920/1080",
    },
    {
      title: "PACK 3 • Plus",
      subtitle:
        "Logo + paleta de colores + plantillas editables para redes + iconos + trama",
      description: `• Incluye 3 propuestas de diseño de logo o isologo
con hasta 3 revisiones.
• Envío el archivo en formatos PNG, JPEG, PDF e
ILLUSTRATOR.
• Manual de marca completo con aplicaciones.
• Iconos a definir para historias destacadas
• 3 Plantillas para feed o reel
(instagram, facebook, whatsapp )`,
      image: "https://picsum.photos/id/12/1920/1080",
    },
  ];

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
              {item.description}
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
