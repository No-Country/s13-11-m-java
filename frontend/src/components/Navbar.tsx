import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaRegBell } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { InputSearch } from "./ui/inputSearch";

const curdate = new Date().toLocaleDateString("es-ES", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const userName = "John Doe";

const isAdmin = true;
const isDashboard = true;
const isLogin = false;

function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-screen-xl items-center justify-between p-4">
      <h1 className="text-3xl">LOGO</h1>
      <div className="flex gap-10">
        {!isLogin ? (
          <>
            <Link className="underline" to="#">
              Funciones
            </Link>
            <Link className="underline" to="#">
              Nosotros
            </Link>
          </>
        ) : (
          <h3>{isDashboard ? curdate : ""}</h3>
        )}
      </div>
      {!isLogin ? (
        <div className="hidden gap-10 md:flex ">
          <Button variant="outline" asChild>
            <Link to="/login">Iniciar Sesión</Link>
          </Button>
          <Button>
            <Link to="/register">Comenzar</Link>
          </Button>
        </div>
      ) : (
        <>
          <div>
            <InputSearch className="w-[300px]" type="search" placeholder="Buscar" />
          </div>
          <div className="flex items-center gap-6">
            <Button variant="ghost" className="px-2">
              <FaRegBell size={24} />
            </Button>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h3>{isAdmin ? "Admin" : userName}</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
