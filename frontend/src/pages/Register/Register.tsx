import AuthTemplate from "@/components/AuthTemplate";

import registerImage from "@/assets/register.svg";
import RegisterForm2 from "@/components/RegisterForm/RegisterForm2";
import useAuth from "@/hooks/useAuth";

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
