//Para hacer fetch y validacion de mock data
// import data from '@/data/users.mock.json'
// {
//   "username": "admin@admin.com",
//   "password": "1234"
// }
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <>
      <div className="flex h-screen w-screen ">
        <div className="container w-1/2 bg-slate-800 ">
          <img
            className="m-0 size-12 text-white "
            src="https://images.vexels.com/media/users/3/136994/isolated/preview/aa3216bc8664471a5f75363fd74c728a-icono-de-reloj-temporizador.png"
            alt="LOGO"
          />
          <p className="text-md m-10 text-white">Gestioná tu producción de manera inteligente y sencilla</p>
          <img className="pb-5" src="src/assets/login.svg" alt="image-login" />
        </div>
        <div className="m-10 w-1/2">
          <h1 className="m-20 text-center text-lg outline-slate-800">Iniciar sesión</h1>
          Mail
          <Input className="border-b-4 border-slate-800" />
          Contraseña
          <Input type="password" className="border-b-4 border-slate-800 text-slate-800 outline-current" />
          <Button className="align-center mr-10 mt-10 w-full  items-center">Iniciar sesión</Button>
          <div className="flex-block m-10 flex">
            <Link className="m-10" to="">
              Olvidé mi contraseña
            </Link>
            <Link className="m-10" to="/register">
              ¿Aún no tenés cuenta? Regístrate
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
