import { z } from "zod";

const orderFormSchema = z.object({
  name: z.string(),
  initialDate: z.string(),
  finishEstimatedDate: z.string(),
  productId: z.number(),
  client: z.object({ name: z.string() }),
  photoLink: z.string(),
  errortime: z.number(), // no esta en el diseno de figma, no se a que se refiere
  assignedEmployee: z.object({ name: z.string() }), //empleado asignado - falta en schema de back
  employeeAvailability: z.string(), // disponibilidad del empleado - falta en el schema de back
  note: z.string(), // nota - falta en schema de back
});

export default orderFormSchema;
export type OrderFormInputs = z.infer<typeof orderFormSchema>;
