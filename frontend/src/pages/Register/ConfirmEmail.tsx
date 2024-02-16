import { Button } from "@/components/ui/button";

const ConfirmEmail = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="max-w-[437px] text-center">
        <h1 className="text-4xl">Revisa tu mail</h1>
        <img src="src/assets/check_email.svg" alt="" />
        <p className="my-7 text-2xl">Te enviamos un mail a mariagarcia@gmail.com para verificar tu cuenta.</p>
        <Button className="w-full rounded-full">Abrir mail</Button>
        <p className="my-7 text-2xl">¿Hubo algún error?. Reenviar mail</p>
      </div>
    </div>
  );
};

export default ConfirmEmail;
