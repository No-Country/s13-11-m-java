import { z } from "zod";

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "El correo electrónico no es válido" }),
});

export default forgotPasswordSchema;
export type ForgotPasswordFormInputs = z.infer<typeof forgotPasswordSchema>;
