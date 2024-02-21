import AuthTemplate from "@/components/AuthTemplate";
import LoginForm from "@/components/LoginForm/LoginForm";

import loginImage from "@/assets/login.svg";
import { LoginFormInputs } from "@/schemas/loginFormSchema";
import { useLoginMutation } from "@/app/services/api";
import { useNavigate } from "react-router-dom";

const Login2 = () => {
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (values: LoginFormInputs) => {
    try {
      await login(values).unwrap();
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Error al iniciar sesión");
    }
  };

  return (
    <AuthTemplate title={"Gestioná tu producción, transformá tu negocio."} image={loginImage}>
      <LoginForm onSubmit={handleSubmit} loading={isLoading} />
    </AuthTemplate>
  );
};

export default Login2;
