import { z } from "zod";

const strToNumGT0 = z.coerce.number().positive();
const strToInt = z.coerce.number().int().positive();
const bool = z.boolean().default(false);

export const processSchema = z.object({
  name: z.string().min(3).max(50).trim(),
  timeReal: strToNumGT0,
  timeAverage: strToNumGT0,
  timeMargin: strToNumGT0,
  comment: z.string().max(255).trim().default("Sin comentarios"),
  state: bool,
  active: bool,
  counter: strToInt.default(1),
});

export const subProcessSchema = z.object({
  id: strToInt.optional(),
  // productProcess: z.string().max(50).trim(),
  subProcessAttributes: processSchema,
});

export const productProcessesSchema = z.object({
  id: strToInt.optional(),
  // product: z.string().max(50).trim(),
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
  state: bool,
  timeEstimatedCompletion: z.string().max(255).trim(),
  productProcesses: z.array(productProcessesSchema).default([]),
  active: bool,
});

export type Product = z.infer<typeof productSchema>;
export type ProductProcesses = z.infer<typeof productProcessesSchema>;
export type SubProcess = z.infer<typeof subProcessSchema>;
export type Process = z.infer<typeof processSchema>;
