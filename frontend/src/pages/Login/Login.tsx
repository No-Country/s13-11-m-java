import AuthTemplate from "@/components/AuthTemplate";
import LoginForm from "@/components/LoginForm/LoginForm";

import loginImage from "@/assets/login.svg";

const Login2 = () => {
  return (
    <AuthTemplate title={"Gestioná tu producción, transformá tu negocio."} image={loginImage}>
      <LoginForm />
    </AuthTemplate>
  );
};

export default Login2;
