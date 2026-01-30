const Content = ({
  children,
  title,
  bgColor,
  bgImage,
}: {
  children: React.ReactNode;
  title?: string;
  bgColor?: string;
  bgImage?: string;
}) => {
  return (
    <section
      className={`scroll-mt-40 relative bg-center bg-cover bg-no-repeat ${bgColor === "light" ? "bg-white" : "bg-primary"} bg-cover bg-center ${bgImage ? "text-white" : ""}`}
      id={title}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="w-full max-w-6xl mx-auto px-4 py-20 flex flex-col gap-y-8">
        <h1 className="uppercase font-bold">{title}</h1>
        {children}
      </div>
    </section>
  );
};

export default Content;
