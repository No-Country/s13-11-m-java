import { z } from "zod";

const productFormSchema = z.object({
  // _id, name, createdDate, estimatedTime, progressPercent, process, image, note
  _id: z.string({
    required_error: "Por favor asigna un ID",
    invalid_type_error: "Solo se permiten valores alfanumericos!",
  }),
  name: z
    .string()
    .min(1, { message: "El nombre del producto es requerido" })
    .max(255, { message: "El nombre del producto no puede tener más de 255 caracteres" }),
  createdDate: z
    .string()
    .min(8, { message: "Por favor elige una fecha valida" })
    .max(10, { message: "Por favor elige una fecha valida" }),
  estimatedTime: z
    //   este se calcula en base a los tiempos de procesos, no lo completa el usuario
    .number()
    .min(1, { message: "El tiempo estimado es requerido" })
    .max(10, { message: "El tiempo estimado no puede tener más de 10 caracteres" }),
  progressPercent: z.number(),
  process: z.array(
    z.object({
      name: z.string(),
      timeframe: z.number(),
      progress: z.number(),
      estimatedTime: z.number(),
      status: z.string(),
      subProcess: z.array(
        z.object({
          name: z.string(),
          timeframe: z.number(),
          progress: z.number(),
          estimatedTime: z.number(),
          status: z.string(),
        })
      ),
    })
  ),
  //falta definir valores de estos 2
  image: z.string(),
  note: z.string(),
});

export default productFormSchema;
export type ProductFormInputs = z.infer<typeof productFormSchema>;
