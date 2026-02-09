import Button from "./Button";
import Content from "./Content";

const Services = () => {
  const data = [
    {
      title: "Creatividad Funcional",
      icon: "/assets/icon1.svg",
    },
    {
      title: "Responsividad",
      icon: "/assets/icon2.svg",
    },
    {
      title: "Experiencia",
      icon: "/assets/icon3.svg",
    },
  ];

  return (
    <Content title="Servicios" bgColor="light">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-4xl mx-auto">
        {data.map((item, index) => (
          <article key={index} className="flex flex-col items-center gap-y-4">
            <div className="bg-foreground shadow-2xl w-42 h-42 rounded-full flex items-center justify-center text-white">
              <img
                src={item.icon}
                alt={item.title}
                className={`h-1/2  ${index === 0 ? "translate-x-2" : ""}`}
              />
            </div>
            <h2 className="font-bold">{item.title}</h2>
          </article>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Button bgColor="dark" title="Contactanos" target="Contacto" />
      </div>
    </Content>
  );
};

export default Services;
