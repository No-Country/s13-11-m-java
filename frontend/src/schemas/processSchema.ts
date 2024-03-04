import { z } from "zod";

export const processFormSchema = z.object({
  id: z.number(),
  subprocess: z.array(
    z.object({
      name: z.string(),
    })
  ),
  processAttributes: z.object({
    name: z.string(),
    timeReal: z.number(),
    timeAverage: z.number(),
    timeMargin: z.number(),
    comment: z.string(),
    state: z.string(),
    active: z.boolean(),
    counter: z.number(),
  }),
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
