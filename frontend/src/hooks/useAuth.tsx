import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useLoginMutation } from "@/app/services/api";
import { logout } from "@/features/auth/authSlice";
import { LoginFormInputs } from "@/schemas/loginFormSchema";

const useAuth = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const isLogin = user !== null;

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleSubmit = async (values: LoginFormInputs) => {
    try {
      await login(values).unwrap();
    } catch (error) {
      console.error(error);
      alert("Error al iniciar sesión");
    }
  };

  return { isLogin, isLoading, user, logout: handleLogout, login: handleSubmit } as const;
};
export default useAuth;
