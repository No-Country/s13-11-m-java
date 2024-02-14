import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type Inputs = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: number;
};

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="email">Mail</Label>
      <Input type="email" {...register("email")} />

      <Label htmlFor="email">Contrasena</Label>
      <Input type="password" {...register("password")} />

      <Label htmlFor="email">Nombre</Label>
      <Input type="text" {...register("firstName")} />

      <Label htmlFor="email">Apellido</Label>
      <Input type="text" {...register("lastName")} />

      <Label htmlFor="email">Direccion</Label>
      <Input type="text" {...register("address")} />

      <Label htmlFor="phone">Contrasena</Label>
      <Input type="tel" {...register("phone")} />

      {/* <Input {...register("exampleRequired", { required: true })} /> */}
      {/* {errors.exampleRequired && <span>This field is required</span>} */}

      <input type="submit" />
    </form>
  );
}
