import useAuth from "@/hooks/useAuth";

import AuthTemplate from "@/components/AuthTemplate";
import RegisterForm from "@/components/RegisterForm/RegisterForm";

import registerImage from "@/assets/register.svg";

const Register2 = () => {
  const { register, isLoadingRegister } = useAuth();
  return (
    <AuthTemplate
      title={"Controlá tu producción, alcanzá tus metas: Tu socio digital de confianza."}
      image={registerImage}
    >
      <RegisterForm onSubmit={register} loading={isLoadingRegister} />
    </AuthTemplate>
  );
};

export default Register2;
