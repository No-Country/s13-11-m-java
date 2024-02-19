import AuthTemplate from "@/components/AuthTemplate";
import RegisterForm from "@/components/RegisterForm/RegisterForm";

import RegisterImage from "@/assets/register.svg";

const Register = () => {
  return (
    <AuthTemplate
      title="Controlá tu producción, alcanzá tus metas: Tu socio digital de confianza."
      image={RegisterImage}
    >
      <RegisterForm />
    </AuthTemplate>
  );
};

export default Register;
