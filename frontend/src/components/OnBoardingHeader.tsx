import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const OnBoardingHeader = () => {
  return (
    <div className="flex items-center justify-between px-24 py-4">
      <h1 className="text-3xl">LOGO</h1>
      <div className="flex gap-10">
        <Link className="hover:underline" to="#">Funciones</Link>
        <Link className="hover:underline" to="#">Nosotros</Link>
      </div>
      <div className="flex gap-10">
        <Button variant="outline">Iniciar Sesión</Button>
        <Button>Comenzar</Button>
      </div>
    </div>
  );
};

export default OnBoardingHeader;
