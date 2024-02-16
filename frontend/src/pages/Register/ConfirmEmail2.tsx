import { Button } from "@/components/ui/button";

const ConfirmEmail2 = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="w-1/3 bg-primary flex justify-center items-center">
        <img src="src/assets/check_email.svg" alt="" />
      </div>
      <div className="w-2/3 flex justify-center items-center max-w-[370px] text-center mx-auto">
        <div className="grid grid-cols-1 gap-3 ">
          <h1 className="text-4xl">Revisá tu mail</h1>
          <p className="text-2xl">Te enviamos un mail a mariagarcia@gmail.com para verificar tu cuenta.</p>
          <Button variant={"outline"}>Abrir Mail</Button>
          <Button variant={"outline"}>Abrir Gmail</Button>
          <Button variant={"outline"}>Abrir Outlook</Button>
          <p className="text-2xl">¿Hubo algún error?. Reenviar mail</p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail2;
