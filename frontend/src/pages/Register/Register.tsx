import AuthTemplate from "@/components/AuthTemplate";

import registerImage from "@/assets/register.svg";
import RegisterForm2 from "@/components/RegisterForm/RegisterForm2";

const Register2 = () => {
  return (
    <AuthTemplate
      title={"Controlá tu producción, alcanzá tus metas: Tu socio digital de confianza."}
      image={registerImage}
    >
      <RegisterForm2 />
    </AuthTemplate>
  );
};

export default Register2;
