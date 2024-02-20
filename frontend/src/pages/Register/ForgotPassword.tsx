import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ForgotPassword = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="hidden w-1/3 items-center justify-center bg-primary lg:flex">
        <img src="src/assets/forgot_password.svg" alt="" className="pl-6" />
      </div>
      <div className="mx-auto flex w-2/3 max-w-[510px] items-center justify-center text-start">
        <div className="grid grid-cols-1 gap-4 text-center">
          <img src="src/assets/forgot_password.svg" alt="" className="mx-auto lg:hidden" />
          <h1 className="mx-auto text-2xl md:text-4xl">¿Olvidaste tu contraseña?</h1>
          <p className="text-xl">Ingresá tu mail para que podamos enviarte información de como recuperarla. </p>
          <Label htmlFor="email">Mail</Label>
          <Input className="border-b-4 border-primary" />
          <Button className="w-full rounded-full">Enviar</Button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
