import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { DatePickerForm } from "../DatePicker/DatePickerForm";
import { Textarea } from "../ui/textarea";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";

import { FaCheck, FaChevronDown } from "react-icons/fa";

import productFormSchema, { ProductFormInputs } from "@/schemas/productSchema";

import ProcessModal from "./ProcessModal";
import ProcessOption from "./ProcessOption";
import { cn } from "@/lib/utils";
import { Process, process } from "@/mocks/process/data";

export interface ProductFormProps {
  onSubmit?: (values: ProductFormInputs) => void;
  defaultValues?: ProductFormInputs;
  loading?: boolean;
}

const ProductForm = ({ defaultValues, loading, onSubmit }: ProductFormProps) => {
  const productForm = useForm<ProductFormInputs>({
    resolver: zodResolver(productFormSchema),
    defaultValues,
  });

  function handleSubmit(values: ProductFormInputs) {
    onSubmit?.(values);
  }

  const [processList, setProcessList] = useState<Process[]>([]);

  const labelStyle = "text-[#606060]";
  const boxStyle =
    "bg-[#F5F6FA] border h-[57px] w-[400px] border-[#D5D5D5] rounded-none  pl-2 hover:border-primary/80 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent";
  return (
    <div>
      {/* Agregar proceso */}
      <ProcessModal />

      <Form {...productForm}>
        <form
          onSubmit={productForm.handleSubmit(handleSubmit)}
          className="w-full max-w-[70%] flex-col md:flex md:max-w-3xl"
        >
          <div className="w-full grid-flow-col grid-rows-5 gap-x-12 space-y-8 md:grid">
            <FormField
              control={productForm.control}
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
              control={productForm.control}
              name="createDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className={labelStyle}>Fecha de creación</FormLabel>
                  <FormControl>
                    <DatePickerForm onChangeDate={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={productForm.control}
              name="idUnico"
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
              control={productForm.control}
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
              control={productForm.control}
              name="timeEstimatedCompletion"
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
              control={productForm.control}
              name="instruction"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={labelStyle}>Instruccion</FormLabel>
                  <FormControl>
                    <Input className={boxStyle} placeholder="Insertar texto" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={productForm.control}
              name="productProcesses"
              render={({ field }) => (
                <FormItem className="row-span-1">
                  <FormLabel className={labelStyle}>Procesos</FormLabel>
                  <FormControl>
                    <div className="mb-2 flex items-center">
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              role="combobox"
                              className={`${boxStyle} w-[360px]`}
                              // className={cn("w-[200px] justify-between", !field.value && "text-muted-foreground")}
                            >
                              <p>Nombre del proceso</p>
                              <FaChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[340px] p-0">
                          <Command>
                            <CommandInput placeholder="Buscar proceso..." className="h-9" />
                            <CommandEmpty>Proceso no encontrado</CommandEmpty>
                            <CommandGroup>
                              {process.map((process, i) => (
                                <CommandItem
                                  value={process.name}
                                  key={i}
                                  onSelect={() => {
                                    setProcessList([...field.value!, process] as Process[]);
                                    productForm.setValue("productProcesses", [...field.value!, process] as Process[]);
                                  }}
                                >
                                  {process.name}
                                  <FaCheck
                                    className={cn(
                                      "ml-auto h-4 w-4",
                                      processList.includes(process) ? "opacity-100" : "opacity-0"
                                    )}
                                  />
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <ProcessModal />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="row-span-2">
              {processList?.length > 0 && (
                <ScrollArea className="mb-4 h-60 w-[390px] rounded-md  border">
                  <div className="p-4 pr-0">
                    {processList.map((process, i) => (
                      <div
                        key={i}
                        className="flex h-[57px] w-[355px] items-center justify-between rounded-none border border-[#D5D5D5] bg-[#F5F6FA] px-4  pl-2 hover:border-primary/80 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent"
                      >
                        <p>{process.name}</p>
                        <ProcessOption />
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              )}
            </div>
          </div>
          <FormField
            control={productForm.control}
            name="description"
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
    </div>
  );
};

export default ProductForm;
