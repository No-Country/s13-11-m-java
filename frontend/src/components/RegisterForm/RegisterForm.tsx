import registerFormSchema, { type RegisterFormInputs } from "@/schemas/registerFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center">
      <div className="grid w-[460px] grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email">Mail</Label>
          <Input type="email" {...register("email")} />
          <ErrorMessage error={errors.email} />
        </div>

        <div>
          <Label htmlFor="password">Contraseña</Label>
          <Input type="password" {...register("password")} />
          <ErrorMessage error={errors.password} />
        </div>
        <div>
          <Label htmlFor="firstName">Nombre</Label>
          <Input type="text" {...register("firstName")} />
          <ErrorMessage error={errors.firstName} />
        </div>
        <div>
          <Label htmlFor="lastName">Apellido</Label>
          <Input type="text" {...register("lastName")} />
          <ErrorMessage error={errors.lastName} />
        </div>
        <div>
          <Label htmlFor="address">Direccion</Label>
          <Input type="text" {...register("address")} />
          <ErrorMessage error={errors.address} />
        </div>
        <div>
          <Label htmlFor="phone">Teléfono</Label>
          <Input type="tel" {...register("phone")} />
          <ErrorMessage error={errors.phone} />
        </div>
      </div>

      <Button type="submit" className="mx-auto mt-3">
        Registrarse
      </Button>
    </form>
  );
}
