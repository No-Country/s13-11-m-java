import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const OnBoardingHeader = () => {
  return (
    <div className="flex justify-between items-center px-24 py-4">
      <h1 className="text-3xl">LOGO</h1>
      <div className="flex gap-10">
        <Link to="#">Funciones</Link>
        <Link to="#">Nosotros</Link>
      </div>
      <div className="flex gap-10">
        <Button>Iniciar Sesión</Button>
        <Button>Comenzar</Button>
      </div>
    </div>
  );
};

export default OnBoardingHeader;
