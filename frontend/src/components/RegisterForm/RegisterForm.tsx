import registerFormSchema, { type RegisterFormInputs } from "@/schemas/registerFormSchema";
// import { zodResolver } from "@hookform/resolvers/zod";
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
    // resolver: zodResolver(registerFormSchema),
  });
  const onSubmit: SubmitHandler<RegisterFormInputs> = (data) => console.log(data);

  const inputStyle = "border-b-4 border-primary w-[320px]";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto flex flex-col justify-center">
      <div className=" grid w-[737px] grid-cols-2 items-center gap-4">
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

      <Button type="submit" className="mx-auto mt-3 w-[720px] rounded-full">
        Registrarse
      </Button>
    </form>
  );
}
