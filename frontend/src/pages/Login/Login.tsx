import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import slideImage4 from "@/assets/login.svg";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useLoginMutation } from "@/api/auth";
import { setCredentials} from "@/features/auth/authSlice";
import { useEffect, useState } from "react";


const Login: React.FC = () => {
  const [login, { isLoading, isError, data }] = useLoginMutation();
  const  dispatch = useAppDispatch();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const state = useAppSelector((state) => {
    return state.auth
  })
  useEffect(() => {
    console.log('isLoading:', isLoading)
    console.log('isError', isError);
    console.log('data', data)
    console.log('state', state)
  }, [isLoading, isError, data])
  
  async function handleClick() {
    try {
      const user =  await login({ username, password }).unwrap();
      dispatch(setCredentials(user));
    } catch (error) {
      if(error instanceof Error){
        alert(`Error ${error.message}`)
      }
    }
    
  }
  return (
    <>
      <div className="flex h-screen w-screen ">
        <div className="container w-1/2 bg-slate-800 ">
          <Link to="/"><img
            className="m-0 size-12 text-white "
            src="https://images.vexels.com/media/users/3/136994/isolated/preview/aa3216bc8664471a5f75363fd74c728a-icono-de-reloj-temporizador.png"
            alt="LOGO"
          /></Link>
          <p className="text-md m-10 text-white">Gestioná tu producción de manera inteligente y sencilla</p>
          <img className="pb-5" src={slideImage4} alt="image-login" />
        </div>
        <div className="m-10 w-1/2">
          <h1 className="m-20 text-center text-lg outline-slate-800">Iniciar sesión</h1>
          Mail
          <Input className="border-b-4 border-slate-800" value={username} onChange={(event) => {
            setUsername(event.target.value);
          }} />
          Contraseña
          <Input type="password" className="border-b-4 border-slate-800 text-slate-800 outline-current" value={password} onChange={(event) => {
            setPassword(event.target.value);
          }} />
          <Button className="align-center mr-10 mt-10 w-full  items-center" onClick={handleClick}>Iniciar sesión</Button>
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
