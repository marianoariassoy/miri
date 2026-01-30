import Content from "@/components/Content";

const page = () => {
  return (
    <Content title="" bgColor="light">
      <h1 className="font-bold text-2xl">Trabajo</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        cupiditate minima! Soluta impedit id repudiandae nesciunt minus corrupti
        blanditiis et tenetur perspiciatis cum, ipsum, nemo architecto mollitia
        non laborum at.
      </p>
      <div className="flex flex-col gap-y-4">
        <img
          src="https://picsum.photos/id/10/1920/1080"
          className="w-full"
          alt="Portfolio"
        />
        <img
          src="https://picsum.photos/id/11/1920/1080"
          className="w-full"
          alt="Portfolio"
        />
        <img
          src="https://picsum.photos/id/12/1920/1080"
          className="w-full"
          alt="Portfolio"
        />
      </div>
    </Content>
  );
};

export default page;
