import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";

const ConfirmEmail2 = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="hidden w-1/3 items-center justify-center bg-primary lg:flex">
        <img src="src/assets/check_email.svg" alt="" />
      </div>
      <div className="mx-auto flex w-2/3 max-w-[370px] items-center justify-center text-center">
        <div className="grid grid-cols-1 gap-3 ">
          <img src="src/assets/check_email.svg" alt="" className="lg:hidden" />
          <h1 className="text-3xl md:text-4xl">Revisá tu mail</h1>
          <p className="text-xl md:text-2xl">Te enviamos un mail a mariagarcia@gmail.com para verificar tu cuenta.</p>
          <Button variant={"outline"}>
            <MdOutlineMail className="mr-2 text-lg text-blue-500" />
            Abrir Mail
          </Button>
          <Button variant={"outline"}>
            <FcGoogle className="mr-2 text-lg" /> Abrir Gmail
          </Button>
          <Button variant={"outline"}>
            <PiMicrosoftOutlookLogo className="mr-2 text-lg text-blue-500" />
            Abrir Outlook
          </Button>
          <p className="text-xl md:text-2xl">¿Hubo algún error?. Reenviar mail</p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail2;
