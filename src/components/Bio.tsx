import Button from "./Button";
import Content from "./Content";
import { Quotation } from "@/lib/icons";

const Bio = () => {
  return (
    <Content title="Bio" bgColor="dark">
      <div className="flex flex-col lg:flex-row gap-y-8 gap-x-12">
        <div className="flex-1 flex flex-col gap-y-4 leading-tight">
          <h3 className="text-lg leading-tight">
            Soy Mirian Camisar diseñadora con 25 años de experiencia en el mundo
            del diseño gráfico.
          </h3>
          <p>
            Trabaje en una variedad de proyectos, desde branding y diseño
            editorial hasta web y animaciones en 2D. Tuve la oportunidad de
            experimentar tanto en el mundo analógico de libros y revistas como
            en el digital, y ahora estoy explorando las posibilidades de la
            inteligencia artificial.
          </p>
          <p className="font-bold">
            Mi enfoque es estratégico : te doy la claridad funcional que
            necesitás para que tu excelente trabajo profesional se traduzca en
            comunicación eficaz y ventas.
          </p>
          <p>
            Estas listo para que te muestre un camino claro para materializar
            tus ideas?
          </p>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <div className="w-60 h-60 rounded-full overflow-hidden bg-foreground shadow-2xl mb-2">
            <img src="/images/bio.jpg" alt="Bio" />
          </div>
          <Button bgColor="dark" title="Contactanos" target="Contacto" />
        </div>
        <div className="flex-1 h-full flex items-start justify-center gap-x-2 lg:mt-20">
          <span>
            <Quotation />
          </span>
          <p className="text-lg font-bold leading-tight">
            Mi pasión es la creatividad funcional que garantiza diseños que
            duran y que, honestamente, venden”.
          </p>
        </div>
      </div>
    </Content>
  );
};

export default Bio;
