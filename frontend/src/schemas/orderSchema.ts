import { z } from "zod";

const orderFormSchema = z.object({
  name: z.string(),
  startDate: z.string(),
  estimatedEndDate: z.string(),
  assignedEmployee: z.object({ name: z.string() }),
  employeeAvailability: z.string(),
  note: z.string(),
});

export default orderFormSchema;
export type OrderFormInputs = z.infer<typeof orderFormSchema>;
