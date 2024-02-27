import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/app/hooks";

import { ForgotPasswordFormInputs } from "@/schemas/forgotPasswordSchema";
import { LoginFormInputs } from "@/schemas/loginFormSchema";
import { RegisterFormInputs } from "@/schemas/registerFormSchema";

import { useForgotPasswordMutation, useLoginMutation, useRegisterMutation } from "@/app/services/api";
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
    dispatch(logout());
  };

  const handleSubmit = async (values: LoginFormInputs) => {
    await login(values).unwrap();
    navigate("/dashboard");
  };

  const handleForgotPassword = async (values: ForgotPasswordFormInputs) => {
    const { email } = values;
    await forgotPassword(email).unwrap();
    navigate("/confirm-email");
  };

  const handleRegister = async (values: RegisterFormInputs) => {
    await register(values).unwrap();
    navigate("/confirm-email");
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
