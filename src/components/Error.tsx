import { FieldError } from "react-hook-form";

type ErrorProps = {
  error?: FieldError;
};

const Error = ({ error }: ErrorProps) => {
  if (!error) return null;

  return (
    <div className="text-sm mt-2">
      <span className="font-medium text-secondary px-4">{error.message}</span>
    </div>
  );
};

export default Error;
