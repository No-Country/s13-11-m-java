import useAuth from "@/hooks/useAuth";

import AuthTemplate from "@/components/AuthTemplate";
import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm/ForgotPasswordForm";

import ForgotPasswordImage from "@/assets/forgot_password.svg";

const ForgotPasswordPage = () => {
  const { isLoadingForgotPassword, forgotPassword } = useAuth();
  return (
    <AuthTemplate image={ForgotPasswordImage}>
      <ForgotPasswordForm onSubmit={forgotPassword} isLoading={isLoadingForgotPassword} />
    </AuthTemplate>
  );
};

export default ForgotPasswordPage;
