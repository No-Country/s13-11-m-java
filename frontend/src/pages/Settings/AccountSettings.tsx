import { Link } from "react-router-dom";

import useAuth from "@/hooks/useAuth";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

import { BsPencilFill } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";

function AccountSettings() {
  const { user } = useAuth();
  return (
    <div>
      <div className="flex items-center gap-4 py-4">
        <Link to="/settings" className="transition-transform hover:scale-125">
          <FaArrowLeft size={24} />
        </Link>
        <span className="text-3xl">Información de la cuenta</span>
      </div>
      <div className="my-4 flex flex-col gap-4 rounded-2xl bg-white p-4 py-4 text-xl">
        <div className="flex gap-5 p-8">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" className="h-24 w-24 rounded-full" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start justify-center gap-4">
            <span className="hidden md:block">
              {user?.firstName} {user?.lastName}
            </span>
            <span className="hidden md:block">Administrador/a</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 rounded-2xl bg-white p-4 text-xl">
        <div className="mr-4 mt-4 flex justify-end">
          <Button variant="default" className="flex items-center gap-2 px-12">
            <BsPencilFill size={20} />
            Editar
          </Button>
        </div>
        <div className="flex justify-between gap-5 p-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="font-semibold">Nombre :</span>
              <span>{user?.firstName}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Email:</span>
              <span>{user?.email}</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="font-semibold">Apellido:</span>
              <span>{user?.lastName}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Telefono</span>
              <span>+1234567890</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="font-semibold">Dirección</span>
              <span>Calle Falsa 123</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Ciudad</span>
              <span>Springfield</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;
