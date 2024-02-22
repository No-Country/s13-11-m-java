import { FaCamera } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import productFormSchema, { ProductFormInputs } from "@/schemas/addProductSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";

interface ProductFormProps {
  onSubmit?: (values: ProductFormInputs) => void;
  loading?: boolean;
}

const ProductForm = ({ loading, onSubmit }: ProductFormProps) => {
  const form = useForm<ProductFormInputs>({
    resolver: zodResolver(productFormSchema),
    // name, createdDate, endDate, estimatedTime, subProcess, image, note
    defaultValues: {
      name: "",
      createdDate: "",
      endDate: "",
      estimatedTime: "",
      subProcess: "",
      image: "",
      note: "",
    },
  });

  function handleSubmit(values: ProductFormInputs) {
    onSubmit?.(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full max-w-[70%] flex-col md:flex md:max-w-3xl">
        <Button type="button" variant={"ghost"} className="mx-auto h-24 w-24  rounded-full bg-gray-200">
          <FaCamera className="text-2xl" />
        </Button>
        <Button type="button" variant={"ghost"} className="mx-auto max-w-24">
          Subir una foto
        </Button>
        <div className="w-full grid-flow-col grid-rows-3 space-x-6 space-y-8 md:grid">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="pl-4 pt-8">
                <FormLabel>Nombre del producto</FormLabel>
                <FormControl>
                  <Input
                    className="rounded-none border-0 border-b-2 pl-2 hover:border-primary/80 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent"
                    placeholder="Ingresa un nombre para el producto"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="createdDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fecha de creación</FormLabel>
                <FormControl>
                  <Input
                    className="rounded-none border-0 border-b-2 hover:border-primary/80 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent"
                    placeholder="Fecha de creacion"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fecha de creación</FormLabel>
                <FormControl>
                  <Input
                    className="rounded-none border-0 border-b-2 hover:border-primary/80 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent"
                    placeholder="Fecha de finalizacion"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="estimatedTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cantidad días/horas estimadas de producción</FormLabel>
                <FormControl>
                  <Input
                    className="rounded-none border-0 border-b-2 hover:border-primary/80 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent"
                    placeholder="Ingresa un tiempo estimado"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="border border-[#] bg-[#F5F6FA] text-[#A6A6A6]">+ Agregar subproceso</Button>
        </div>
        <FormField
          control={form.control}
          name="note"
          render={({ field }) => (
            <FormItem className="px-6 py-8">
              <FormLabel>Notas</FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none rounded-none border-0 border-b-2 hover:border-primary/80 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent"
                  placeholder="Agregar un comentario"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full md:col-span-2" type="submit" size="rounded" disabled={loading}>
          Confirmar
        </Button>
      </form>
    </Form>
  );
};

export default ProductForm;

{
  /*  */
}
