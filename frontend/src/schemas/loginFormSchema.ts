import { z } from "zod";

const loginFormSchema = z.object({
  email: z.string().email({ message: "El correo electrónico no es válido" }),
  password: z.string().min(10, {
    message: "La Contraseña es requerida",
  }),
});

export default loginFormSchema;
export type LoginFormInputs = z.infer<typeof loginFormSchema>;
