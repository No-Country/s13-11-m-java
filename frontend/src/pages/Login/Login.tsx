import AuthTemplate from "@/components/AuthTemplate";
import LoginForm from "@/components/LoginForm/LoginForm";

import loginImage from "@/assets/login.svg";
import useAuth from "@/hooks/useAuth";

const Login2 = () => {
  const { login, isLoading } = useAuth();

  return (
    <AuthTemplate title={"Gestioná tu producción, transformá tu negocio."} image={loginImage}>
      <LoginForm onSubmit={login} loading={isLoading} />
    </AuthTemplate>
  );
};

export default Login2;
