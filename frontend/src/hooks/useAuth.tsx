import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useLoginMutation, useForgotPasswordMutation } from "@/app/services/api";
import { logout } from "@/features/auth/authSlice";
import { ForgotPasswordFormInputs } from "@/schemas/forgotPasswordSchema";
import { LoginFormInputs } from "@/schemas/loginFormSchema";
import { useNavigate } from "react-router-dom";
const useAuth = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const [forgotPassword, { isLoading: isLoadingForgotPassword }] = useForgotPasswordMutation();
  const navigate = useNavigate();
  const isLogin = user !== null;

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleSubmit = async (values: LoginFormInputs) => {
    try {
      await login(values).unwrap();
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Error al iniciar sesión");
    }
  };

  const handleForgotPassword = async (values: ForgotPasswordFormInputs) => {
    try {
      const { email } = values;
      await forgotPassword(email).unwrap();
      navigate("/confirm-email");
    } catch (error) {
      console.error(error);
      alert("Error al enviar email");
    }
  };

  return {
    isLogin,
    isLoading,
    isLoadingForgotPassword,
    user,
    logout: handleLogout,
    login: handleSubmit,
    forgotPassword: handleForgotPassword,
  } as const;
};
export default useAuth;
