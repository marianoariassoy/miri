import Content from "./Content";
import ContactForm from "./ContactForm";
import Social from "./Social2";

const Bio = () => {
  return (
    <Content title="Contacto" bgColor="light" bgImage="/images/bg-contact.jpg">
      <div className="flex flex-col-reverse lg:flex-row gap-8">
        <div className="lg:w-1/4 lg:pt-20">
          <Social />
        </div>
        <div className="lg:w-1/2">
          <ContactForm />
        </div>
        <div className="lg:w-1/4"></div>
      </div>
    </Content>
  );
};

export default Bio;
