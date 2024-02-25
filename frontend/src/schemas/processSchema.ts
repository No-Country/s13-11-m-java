import { z } from "zod";

const processFormSchema = z.object({
  name: z.string(),
  marginTime: z.number(),
  progress: z.number(),
  estimatedTime: z.number(),
  status: z.string(),
  subprocess: z.array(z.object({ name: z.string() })),
});

export default processFormSchema;
export type ProcessFormInputs = z.infer<typeof processFormSchema>;
