import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useLoginMutation, useForgotPasswordMutation, useRegisterMutation } from "@/app/services/api";
import { logout } from "@/features/auth/authSlice";
import { ForgotPasswordFormInputs } from "@/schemas/forgotPasswordSchema";
import { LoginFormInputs } from "@/schemas/loginFormSchema";
import { RegisterFormInputs } from "@/schemas/registerFormSchema";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const [forgotPassword, { isLoading: isLoadingForgotPassword }] = useForgotPasswordMutation();
  const [register, { isLoading: isLoadingRegister }] = useRegisterMutation();
  const navigate = useNavigate();
  const isLogin = user !== null;

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleSubmit = async (values: LoginFormInputs) => {
    try {
      await login(values).unwrap();
      navigate("/dashboard");
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

  const handleRegister = async (values: RegisterFormInputs) => {
    try {
      await register(values).unwrap();
      navigate("/confirm-email");
    } catch (error) {
      console.error(error);
      alert("Error al registrar usuario");
    }
  };

  return {
    isLogin,
    isLoading,
    isLoadingForgotPassword,
    isLoadingRegister,
    user,
    logout: handleLogout,
    login: handleSubmit,
    forgotPassword: handleForgotPassword,
    register: handleRegister,
  } as const;
};
export default useAuth;
