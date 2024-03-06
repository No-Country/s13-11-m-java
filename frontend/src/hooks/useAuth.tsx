import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/app/hooks";

import { useToast } from "@/components/ui/use-toast";

import { LoginFormInputs } from "@/schemas/loginFormSchema";
import { RegisterFormInputs } from "@/schemas/registerFormSchema";

import { authApi, useLoginMutation, useRegisterMutation } from "@/app/services/api/auth";
import { logout } from "@/features/auth/authSlice";

const useAuth = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const [register, { isLoading: isLoadingRegister }] = useRegisterMutation();
  const navigate = useNavigate();
  const isLogin = user !== null;
  const data = useAppSelector(authApi.endpoints.getUser.select());

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    dispatch(logout());
  };

  const { toast } = useToast();

  const handleLogin = async (values: LoginFormInputs) => {
    try {
      sessionStorage.removeItem("token");
      await login(values).unwrap();
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
  const handleForgotPassword = async () => {
    toast({
      variant: "success",
      title: "Email enviado",
      description: "Revisa tu correo para restablecer tu contraseña",
    });
    navigate("/confirm-email");
  };

  const handleRegister = async (values: RegisterFormInputs) => {
    try {
      await register(values).unwrap();
      await login({ email: values.email, password: values.password }).unwrap();
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Error al registrar",
      });
    }
  };

  return {
    isLogin,
    isLoading: isLoading || data.isUninitialized || data.isLoading,
    isLoadingRegister,
    user,
    logout: handleLogout,
    login: handleLogin,
    forgotPassword: handleForgotPassword,
    register: handleRegister,
  } as const;
};
export default useAuth;
