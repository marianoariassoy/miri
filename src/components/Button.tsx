"use client";
const Button = ({
  bgColor,
  title,
  target,
}: {
  bgColor: string;
  title: string;
  target: string;
}) => {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${bgColor === "dark" ? "bg-foreground text-white hover:bg-secondary" : "bg-white hover:bg-secondary hover:text-white"} font-bold w-50 py-2 px-4 rounded-xl h-12 cursor-pointer`}
      onClick={() => handleScroll(target)}
    >
      {title}
    </button>
  );
};

export default Button;
