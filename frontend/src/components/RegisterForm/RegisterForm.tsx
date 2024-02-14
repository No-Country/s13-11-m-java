import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center">
      <div className="grid gap-4 grid-cols-2">
        <div>
          <Label htmlFor="email">Mail</Label>
          <Input type="email" {...(register("email"), { required: true })} />
          {errors.email && <span>This field is required</span>}
        </div>

        <div>
          <Label htmlFor="password">Contrasena</Label>
          <Input type="password" {...(register("password"), { required: true })} />
          {errors.password && <span>This field is required</span>}
        </div>
        <div>
          <Label htmlFor="firstName">Nombre</Label>
          <Input type="text" {...(register("firstName"), { required: true })} />
          {errors.firstName && <span>This field is required</span>}
        </div>
        <div>
          <Label htmlFor="lastName">Apellido</Label>
          <Input type="text" {...(register("lastName"), { required: true })} />
          {errors.lastName && <span>This field is required</span>}
        </div>
        <div>
          <Label htmlFor="address">Direccion</Label>
          <Input type="text" {...(register("address"), { required: true })} />
          {errors.address && <span>This field is required</span>}
        </div>
        <div>
          <Label htmlFor="phone">Contrasena</Label>
          <Input type="tel" {...(register("phone"), { required: true })} />
          {errors.phone && <span>This field is required</span>}
        </div>
      </div>

      <Button type="submit" className="mx-auto mt-3">
        Registrarse
      </Button>
    </form>
  );
}
