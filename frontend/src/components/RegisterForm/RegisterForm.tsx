import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import registerFormSchema, { type RegisterFormInputs } from "@/schemas/registerFormSchema";

import ErrorMessage from "../ErrorMessage";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    mode: "onTouched",
    resolver: zodResolver(registerFormSchema),
  });
  const onSubmit: SubmitHandler<RegisterFormInputs> = (data) => console.log(data);

  const inputStyle =
    "border-0 border-b-2 border-b-primary w-[250px] lg:w-[280px] rounded-none focus:ring-0 ring-0 focus-visible:ring-ring-0 focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 px-0 focus:bg-blue-500/10";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto flex max-w-3xl flex-col justify-center">
      <div className="grid grid-cols-1 items-center gap-4 gap-x-14 md:grid-cols-2">
        <div>
          <Label htmlFor="email">Mail</Label>
          <Input type="email" {...register("email")} className={inputStyle} />
          <ErrorMessage error={errors.email} />
        </div>

        <div>
          <Label htmlFor="password">Contraseña</Label>
          <Input type="password" {...register("password")} className={inputStyle} />
          <ErrorMessage error={errors.password} />
        </div>
        <div>
          <Label htmlFor="firstName">Nombre</Label>
          <Input type="text" {...register("firstName")} className={inputStyle} />
          <ErrorMessage error={errors.firstName} />
        </div>
        <div>
          <Label htmlFor="lastName">Apellido</Label>
          <Input type="text" {...register("lastName")} className={inputStyle} />
          <ErrorMessage error={errors.lastName} />
        </div>
        <div>
          <Label htmlFor="address">Direccion</Label>
          <Input type="text" {...register("address")} className={inputStyle} />
          <ErrorMessage error={errors.address} />
        </div>
        <div>
          <Label htmlFor="phone">Numero de Teléfono</Label>
          <Input type="tel" {...register("phone")} className={inputStyle} />
          <ErrorMessage error={errors.phone} />
        </div>
      </div>

      <Button type="submit" className="mx-auto mt-12 w-full rounded-full">
        Registrarse
      </Button>
    </form>
  );
}
