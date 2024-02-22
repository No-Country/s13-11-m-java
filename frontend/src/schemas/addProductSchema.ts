import { z } from "zod";

const productFormSchema = z.object({
  // name, createdDate, endDate, estimatedTime, subProcess, image, note
  name: z
    .string()
    .min(1, { message: "El nombre del producto es requerido" })
    .max(255, { message: "El nombre del producto no puede tener más de 255 caracteres" }),
  createdDate: z
    .string()
    .min(8, { message: "Por favor elige una fecha valida" })
    .max(10, { message: "Por favor elige una fecha valida" }),
  //   .date({
  //     required_error: "Por favor elige una fecha",
  //     invalid_type_error: "Esa no es una fecha!",
  //   }),
  endDate: z
    .string()
    .min(8, { message: "Por favor elige una fecha valida" })
    .max(10, { message: "Por favor elige una fecha valida" }),
  //   .date({
  //     required_error: "Por favor elige una fecha",
  //     invalid_type_error: "Esa no es una fecha!",
  //   }),
  estimatedTime: z
    //   este se calcula en base a los tiempos de procesos, no lo completa el usuario
    .string()
    .min(1, { message: "El tiempo estimado es requerido" })
    .max(10, { message: "El tiempo estimado no puede tener más de 10 caracteres" }),
  //falta definir valores de estos 3
  subProcess: z.string(),
  // .object({
  //   name: z.string(),
  // })
  // .array(),
  image: z.string(),
  note: z.string(),
});

export default productFormSchema;
export type ProductFormInputs = z.infer<typeof productFormSchema>;
