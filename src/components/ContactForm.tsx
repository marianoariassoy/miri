"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios, { AxiosError } from "axios";
import Input from "@/components/Input";
import Loader from "@/components/Loader";
import Error from "@/components/Error";
import { Contact } from "@/types";
import { Whatsapp } from "@/lib/icons";

const Page = () => {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [sended, setSended] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Contact>();

  const onSubmit: SubmitHandler<Contact> = async (data) => {
    setSending(true);

    try {
      const response = await axios.post("", data);
      if (response?.data?.error) {
        setError(response.data.message);
        setSending(false);
      } else {
        setSended(true);
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;

      if (axiosError.response) {
        setError(axiosError.response.data?.message || "Error desconocido");
      } else {
        setError("Error de conexión");
      }
      setSending(false);
    }
  };

  const errorMessage = "Este dato es obligatorio";

  if (sended) return <div></div>;

  return (
    <div className="bg-white p-8 rounded-2xl text-foreground">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
        <div className="form-control">
          <Input
            type="text"
            title="Nombre"
            register={register("name", { required: errorMessage })}
          />
          <Error error={errors.name} />
        </div>
        <div className="form-control">
          <Input
            type="email"
            title="Email"
            register={register("email", {
              required: errorMessage,
              maxLength: 50,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Dirección de correo electrónico inválida",
              },
            })}
          />
          <Error error={errors.email} />
        </div>
        <div className="flex flex-col gap-y-2">
          <label
            className="text-secondary font-bold text-center"
            htmlFor="mensaje"
          >
            Mensaje
          </label>
          <textarea
            className="w-full border border-foreground rounded-xl bg-transparent p-4 focus:outline-none focus:ring-0 placeholder:text-primary text-sm"
            {...register("message", { required: errorMessage })}
            rows={5}
            id="mensaje"
          />
          <Error error={errors.message} />
        </div>
        <div className="form-control flex justify-center mt-4">
          {sending ? (
            <Loader />
          ) : (
            <button
              className={`bg-secondary h-12 text-white font-bold w-50 py-2 px-4 rounded-xl cursor-pointer hover:bg-foreground`}
            >
              Contactanos
            </button>
          )}
        </div>
        <div className="flex items-center justify-center text-secondary mt-2">
          <span className="text-xl">
            <Whatsapp />
          </span>
          <span className="font-bold">+54 9 38 7482 2795</span>
        </div>
      </form>
    </div>
  );
};

export default Page;
