import { z } from "zod";

export const processFormSchema = z.object({
  name: z.string(),
  marginTime: z.string(),
  progress: z.string(),
  estimatedTime: z.string(),
  status: z.string(),
  subprocess: z.array(
    z.object({
      name: z.string(),
    })
  ),
});

export const subProcessFormSchema = z.object({
  name: z.string(),
  timeframe: z.string(),
  progress: z.string(),
  estimatedTime: z.string(),
  status: z.string(),
});

export type ProcessFormInputs = z.infer<typeof processFormSchema>;

export type SubProcessFormInputs = z.infer<typeof subProcessFormSchema>;
