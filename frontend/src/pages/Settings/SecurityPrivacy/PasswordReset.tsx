import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";

import { FaArrowLeft } from "react-icons/fa";

interface PasswordResetFormData {
  email: string;
}

function PasswordReset() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordResetFormData>();

  const onSubmit = (data: PasswordResetFormData) => {
    console.log(data);
  };

  return (
    <div className="position container fixed top-20 h-screen bg-[#fafafa] px-0 py-4">
      <div className="flex items-center gap-4 py-4">
        <Link to="/settings" className="transition-transform hover:scale-125">
          <FaArrowLeft size={24} />
        </Link>
        <span className="text-3xl">Reestablecer Contraseña</span>
      </div>
      <div className="my-6">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <label htmlFor="email" className="text-lg font-medium">
            Mail
          </label>
          <input
            className="border-b-2 bg-inherit px-2 py-2"
            type="email"
            id="email"
            placeholder="Ingresa tu correo electrónico"
            {...register("email", { required: "Este campo es requerido" })}
          />
          {errors.email && (
            <span role="alert" className="text-red-500">
              {errors.email.message}
            </span>
          )}
          <Button type="submit">Enviar</Button>
        </form>
      </div>
    </div>
  );
}

export default PasswordReset;
