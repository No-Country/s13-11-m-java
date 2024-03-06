import { z } from "zod";

const registerFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "El correo electrónico es requerido" })
    .max(255, { message: "El correo electrónico no puede tener más de 255 caracteres" })
    .email({ message: "El correo electrónico no es válido" }),
  password: z
    .string()
    .min(6, { message: "La contraseña debe tener al menos 8 caracteres" })
    .max(255, { message: "La contraseña no puede tener más de 255 caracteres" }),
  firstName: z
    .string()
    .min(1, { message: "El nombre es requerido" })
    .max(255, { message: "El nombre no puede tener más de 255 caracteres" })
    .regex(/^[a-zA-Z0-9 ]+$/, { message: "La contraseña solo puede contener caracteres alfanuméricos" }),
  lastName: z
    .string()
    .min(1, { message: "El apellido es requerido" })
    .max(255, { message: "El apellido no puede tener más de 255 caracteres" })
    .regex(/^[a-zA-Z0-9 ]+$/, { message: "La contraseña solo puede contener caracteres alfanuméricos" }),
  address: z
    .string()
    .min(1, { message: "La dirección es requerida" })
    .max(255, { message: "La dirección no puede tener más de 255 caracteres" })
    .regex(/^[a-zA-Z0-9 ]+$/, { message: "La contraseña solo puede contener caracteres alfanuméricos" }),
  phone: z
    .string()
    .min(1, { message: "El número de teléfono es requerido" })
    .max(15, { message: "El número de teléfono no puede tener más de 15 caracteres" })
    .regex(/^[0-9]+$/, { message: "El número de teléfono solo puede contener números" }),
});

export default registerFormSchema;
export type RegisterFormInputs = z.infer<typeof registerFormSchema>;
