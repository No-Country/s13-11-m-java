import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ForgotPassword = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="w-1/3 bg-primary flex justify-center items-center">
        <img src="src/assets/check_email.svg" alt="" />
      </div>
      <div className="w-2/3 flex justify-center items-center max-w-[510px] text-start mx-auto">
        <div className="grid grid-cols-1 gap-4 ">
          <h1 className="text-4xl">¿Olvidaste tu contraseña?</h1>
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
