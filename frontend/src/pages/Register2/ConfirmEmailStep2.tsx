import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import AuthTemplate from "@/components/AuthTemplate";

import checkEmailImage from "@/assets/check_email.svg";
import { Link } from "react-router-dom";

const ConfirmEmailStep2 = () => {
  return (
    <AuthTemplate image={checkEmailImage}>
      <div className="grid max-w-lg grid-cols-1 gap-3">
        <h1 className="text-4xl">Revisá tu mail</h1>
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
        <Button asChild className="text-xl" variant="link">
          <Link to="#">
            <p>¿Hubo algún error?. Reenviar mail</p>
          </Link>
        </Button>
      </div>
    </AuthTemplate>
  );
};

export default ConfirmEmailStep2;
