import Button from "./Button";
import Content from "./Content";
import Slider from "./Slider";
import Whatsapp from "./Whatsapp";

const Hero = () => {
  return (
    <Content title="" bgColor="dark">
      <div
        className="flex flex-col-reverse lg:flex-row gap-x-20 gap-y-8 lg:items-center scroll-m-40"
        id="hero"
      >
        <div className="lg:w-1/3 flex flex-col gap-y-4">
          <h3 className="text-lg font-bold leading-tight">
            Lo que ves es lo que es... pero diseñado para vender. Sin Filtros,
            con estrategia.
          </h3>
          <p className="leading-tight">
            Mi enfoque es desvelar la esencia de tu marca y encontrar la
            solución visual que tu competencia no está viendo, la que
            honestamente te representa y te hace único. El resultado es una
            identidad lista para que dejes de confundir y empieces a facturar.
          </p>
          <div className="flex justify-center mt-4 lg:mt-8">
            <Button bgColor="dark" title="Contactanos" target="Contacto" />
          </div>
        </div>
        <div className="lg:w-2/3">
          <Slider />
        </div>
      </div>

      <Whatsapp />
    </Content>
  );
};

export default Hero;
