import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Textarea } from "../ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { FaCamera } from "react-icons/fa";

import productFormSchema, { ProductFormInputs } from "@/schemas/addProductSchema";

import ProcessModal from "./ProcessModal";
import ProcessScroll from "./ProcessScroll";

interface ProductFormProps {
  onSubmit?: (values: ProductFormInputs) => void;
  loading?: boolean;
}

const ProductForm = ({ loading, onSubmit }: ProductFormProps) => {
  const form = useForm<ProductFormInputs>({
    resolver: zodResolver(productFormSchema),
    // _id, name, createdDate, estimatedTime, progressPercent, process, image, note
    defaultValues: {
      process: [
        {
          name: "prueba form proceso",
          timeframe: 2,
          subProcess: [
            { name: "subproceso", timeframe: 1 },
            { name: "subproceso 2", timeframe: 3 },
          ],
        },
        {
          name: "prueba form proceso 2",
          timeframe: 3,
          subProcess: [
            { name: "subproceso 3", timeframe: 1 },
            { name: "subproceso 4", timeframe: 3 },
          ],
        },
        {
          name: "prueba form proceso 2",
          timeframe: 3,
          subProcess: [
            { name: "subproceso 3", timeframe: 1 },
            { name: "subproceso 4", timeframe: 3 },
          ],
        },
        {
          name: "prueba form proceso 2",
          timeframe: 3,
          subProcess: [
            { name: "subproceso 3", timeframe: 1 },
            { name: "subproceso 4", timeframe: 3 },
          ],
        },
        {
          name: "prueba form proceso 2",
          timeframe: 3,
          subProcess: [
            { name: "subproceso 3", timeframe: 1 },
            { name: "subproceso 4", timeframe: 3 },
          ],
        },
      ],
    },
  });

  function handleSubmit(values: ProductFormInputs) {
    onSubmit?.(values);
  }

  const labelStyle = "text-[#606060]";
  const boxStyle =
    "bg-[#F5F6FA] border h-[57px] w-[400px] border-[#D5D5D5] rounded-none  pl-2 hover:border-primary/80 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full max-w-[70%] flex-col md:flex md:max-w-3xl">
        <div className="max-auto flex flex-col items-center justify-center">
          <Button type="button" variant={"ghost"} className="flex h-48 w-36 flex-col">
            <div className="mx-auto mb-2 h-24 w-24 rounded-full bg-gray-200">
              <FaCamera className="relative left-9 top-9 text-2xl" />
            </div>
            <p>Subir una foto</p>
          </Button>
        </div>
        <div className="w-full grid-flow-col grid-rows-4 gap-x-12 space-y-8 md:grid">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="pt-8">
                <FormLabel className={labelStyle}>Nombre del producto</FormLabel>
                <FormControl>
                  <Input className={boxStyle} placeholder="Ingresa un nombre para el producto" {...field} />
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
                <FormLabel className={labelStyle}>Fecha de creación</FormLabel>
                <FormControl>
                  <Input className={boxStyle} placeholder="Fecha de creacion" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelStyle}>ID interno</FormLabel>
                <FormControl>
                  <Input className={boxStyle} placeholder="Fecha de finalizacion" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="progressPercent"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelStyle}>Índice de progreso</FormLabel>
                <FormControl>
                  <Input className={boxStyle} {...field} />
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
                <FormLabel className={labelStyle}>Cantidad días/horas estimadas de producción</FormLabel>
                <FormControl>
                  <Input className={boxStyle} placeholder="Ingresa un tiempo estimado" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="process"
            render={({ field }) => (
              <FormItem className="row-span-3">
                <FormLabel className={labelStyle}>Procesos</FormLabel>
                <FormControl>
                  <div>
                    <div className="mb-2 flex">
                      <Input className={boxStyle} placeholder="Ingresa texto" />
                      <ProcessModal />
                    </div>
                    {field.value.length > 0 && <ProcessScroll procesos={field.value} />}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="note"
          render={({ field }) => (
            <FormItem className="px-6 py-8">
              <FormLabel className={labelStyle}>Notas</FormLabel>
              <FormControl>
                <Textarea
                  className="w-full resize-none rounded-sm border-2 border-primary hover:border-primary/80 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent"
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
