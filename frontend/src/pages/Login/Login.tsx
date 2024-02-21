import { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import slideImage4 from "@/assets/login.svg";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleClick() {}
  return (
    <>
      <div className="flex h-screen w-screen ">
        <div className="container w-1/2 bg-slate-800 ">
          <Link to="/">
            <img
              className="m-0 size-12 text-white "
              src="https://images.vexels.com/media/users/3/136994/isolated/preview/aa3216bc8664471a5f75363fd74c728a-icono-de-reloj-temporizador.png"
              alt="LOGO"
            />
          </Link>
          <p className="text-md m-10 text-white">Gestioná tu producción de manera inteligente y sencilla</p>
          <img className="pb-5" src={slideImage4} alt="image-login" />
        </div>
        <div className="m-10 w-1/2">
          <h1 className="m-20 text-center text-lg outline-slate-800">Iniciar sesión</h1>
          Mail
          <Input
            className="border-b-4 border-slate-800"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          Contraseña
          <Input
            type="password"
            className="border-b-4 border-slate-800 text-slate-800 outline-current"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <Button className="align-center mr-10 mt-10 w-full  items-center" onClick={handleClick}>
            Iniciar sesión
          </Button>
          <div className=" m-10">
            <Link className="m-10 block" to="/recovery_password">
              Olvidé mi contraseña
            </Link>
            <Link className="m-10 block" to="/register">
              ¿Aún no tenés cuenta? Regístrate
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
