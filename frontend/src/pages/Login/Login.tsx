import useAuth from "@/hooks/useAuth";

import AuthTemplate from "@/components/AuthTemplate";
import LoginForm from "@/components/forms/LoginForm/LoginForm";

import loginImage from "@/assets/login.svg";

const Login2 = () => {
  const { login, isLoading } = useAuth();

  return (
    <AuthTemplate title={"Gestioná tu producción, transformá tu negocio."} image={loginImage}>
      <LoginForm onSubmit={login} loading={isLoading} />
    </AuthTemplate>
  );
};

export default Login2;
