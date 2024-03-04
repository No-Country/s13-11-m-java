import { z } from "zod";

const productFormSchema = z.object({
  // idUnico, name, createDate, estimatedTime, state,instruction, process, image, description
  idUnico: z.string({
    required_error: "Por favor asigna un ID",
    invalid_type_error: "Solo se permiten valores alfanumericos!",
  }),
  name: z
    .string()
    .min(1, { message: "El nombre del producto es requerido" })
    .max(255, { message: "El nombre del producto no puede tener más de 255 caracteres" }),
  createDate: z.string().optional(),
  timeEstimatedCompletion: z.string(),
  progressPercent: z.string().optional(),
  instruction: z.string(),
  productProcesses: z
    .array(
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
    )
    .optional(),
  // image: z.string(),
  description: z.string(),
  // active: z.boolean(),
});

export default productFormSchema;
export type ProductFormInputs = z.infer<typeof productFormSchema>;
