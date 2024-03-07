import { State } from "@/app/services/api/types";
import { z } from "zod";

const strToNumGT0 = z.coerce.number().positive();
const strToInt = z.coerce.number().int().positive();
const bool = z.boolean().default(false);

export const stateSchema = z.nativeEnum(State);

export const processSchema = z.object({
  name: z.string().min(3).max(50).trim(),
  timeEstimatedCompletion: z.number().positive(),
  timeAverage: strToNumGT0,
  timeMargin: strToNumGT0,
  comment: z.string().max(255).trim().default("Sin comentarios"),
  state: stateSchema.default(State.PENDIENTE),
  active: bool,
  counter: strToInt.default(1),
});

export const subProcessSchema = z.object({
  id: strToInt.optional(),
  productProcess: z.string().max(50).trim(),
  subProcessAttributes: processSchema,
});

export const productProcessesSchema = z.object({
  id: strToInt.optional(),
  product: z.string().max(50).trim(),
  subProcesses: z.array(subProcessSchema).default([]),
  processAttributes: processSchema,
});

export const productSchema = z.object({
  id: strToInt.optional(),
  idUnico: z.string().min(1).max(12).trim(),
  name: z.string().min(3).max(50).trim(),
  instruction: z.string().max(255).trim(),
  createDate: z.string().datetime({ offset: true }).optional(),
  description: z.string().max(255).trim(),
  state: stateSchema.default(State.PENDIENTE),
  timeEstimatedCompletion: z.number().positive(),
  timeAverage: strToNumGT0,
  timeMargin: strToNumGT0,
  productProcesses: z.array(productProcessesSchema).default([]),
  active: bool,
});

export const orderFormSchema = z.object({
  name: z.string(),
  initialDate: z.string(),
  finishEstimatedDate: z.string(),
  productId: z.number(),
  client: z.object({ name: z.string() }),
  photoLink: z.string(),
  errorTime: z.number(), // no esta en el diseno de figma, no se a que se refiere
  assignedEmployee: z.object({ name: z.string() }), //empleado asignado - falta en schema de back
  employeeAvailability: z.string(), // disponibilidad del empleado - falta en el schema de back
  note: z.string(), // nota - falta en schema de back
  state: stateSchema.default(State.PENDIENTE),
});

export type Product = z.infer<typeof productSchema>;
export type ProductProcesses = z.infer<typeof productProcessesSchema>;
export type SubProcess = z.infer<typeof subProcessSchema>;
export type Process = z.infer<typeof processSchema>;
export type OrderFormInputs = z.infer<typeof orderFormSchema>;
