import { UseFormRegisterReturn } from "react-hook-form";

interface Input {
  type: string;
  title: string;
  register: UseFormRegisterReturn;
}

const Input = ({ type, title, register }: Input) => {
  return (
    <div className="flex flex-col gap-y-2">
      <label className="text-secondary font-bold text-center" htmlFor={title}>
        {title}
      </label>
      <input
        type={type}
        className="w-full h-10 lg:h-12 border border-foregorund rounded-xl bg-transparent px-4 focus:outline-none focus:ring-0 text-sm"
        {...register}
        id={title}
      />
    </div>
  );
};

export default Input;
