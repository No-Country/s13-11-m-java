import useAuth from "@/hooks/useAuth";

import AuthTemplate from "@/components/AuthTemplate";
import RegisterForm2 from "@/components/RegisterForm/RegisterForm2";

import registerImage from "@/assets/register.svg";

const Register2 = () => {
  const { register, isLoadingRegister } = useAuth();
  return (
    <AuthTemplate
      title={"Controlá tu producción, alcanzá tus metas: Tu socio digital de confianza."}
      image={registerImage}
    >
      <RegisterForm2 onSubmit={register} loading={isLoadingRegister} />
    </AuthTemplate>
  );
};

export default Register2;
