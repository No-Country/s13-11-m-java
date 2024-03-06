import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/app/hooks";

import { useToast } from "@/components/ui/use-toast";

import { ForgotPasswordFormInputs } from "@/schemas/forgotPasswordSchema";
import { LoginFormInputs } from "@/schemas/loginFormSchema";
import { RegisterFormInputs } from "@/schemas/registerFormSchema";

import { useForgotPasswordMutation, useLoginMutation, useRegisterMutation } from "@/app/services/api/auth";
import { logout } from "@/features/auth/authSlice";

const useAuth = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const [forgotPassword, { isLoading: isLoadingForgotPassword }] = useForgotPasswordMutation();
  const [register, { isLoading: isLoadingRegister }] = useRegisterMutation();
  const navigate = useNavigate();
  const isLogin = user !== null;

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    dispatch(logout());
  };

  const { toast } = useToast();

  const handleSubmit = async (values: LoginFormInputs) => {
    try {
      sessionStorage.removeItem("token");
      const response = await login(values).unwrap();
      const token = response.token;
      sessionStorage.setItem("token", token);
      toast({
        variant: "success",
        title: "Bienvenido",
        description: "Sesión iniciada",
      });
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Credenciales incorrectas",
      });
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
