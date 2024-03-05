import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { ScrollArea } from "../ui/scroll-area";
import { Textarea } from "../ui/textarea";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { FaChevronDown } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";

import { Product, ProductProcesses, productSchema } from "@/schemas/apiSchemas";

import ProcessModal from "./ProcessModal";
import ProcessOption from "./ProcessOption";
import { cn } from "@/lib/utils";

export interface ProductFormProps {
  onSubmit?: (values: Product) => void;
  defaultValues?: Partial<Product>;
  loading?: boolean;
}

const ProductForm = ({ defaultValues = {}, loading, onSubmit }: ProductFormProps) => {
  const [open, setOpen] = React.useState(false);
  const [productProcesses, setProductProcesses] = React.useState<Partial<ProductProcesses>>(defaultValues);
  const form = useForm<Product>({
    resolver: zodResolver(productSchema),
  });

  const handleSubmit = (data: Product) => {
    onSubmit?.(data);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full flex-col md:flex">
          <div className="w-full grid-cols-1 grid-rows-3 gap-4 space-y-8 md:grid md:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="pt-8">
                  <FormLabel>Nombre del producto</FormLabel>
                  <FormControl>
                    <Input placeholder="Ingresa un nombre para el producto" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="timeEstimatedCompletion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cantidad de horas estimadas de producción</FormLabel>
                  <FormControl>
                    <Input placeholder="Ingresa un tiempo estimado" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="idUnico"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID interno</FormLabel>
                  <FormControl>
                    <Input placeholder="Ingresa un Identificador para el producto" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="instruction"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instruccion</FormLabel>
                  <FormControl>
                    <Input placeholder="Instrucciones para realizar el producto" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="productProcesses"
              render={({ field }) => (
                <FormItem className="col-span-full row-span-1">
                  <FormLabel>Procesos</FormLabel>
                  <FormControl>
                    <Popover>
                      <div>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button variant="outline" role="combobox">
                              <p>Nombre del proceso</p>
                              <FaChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <Button type="button" onClick={handleOpenModal} size="icon">
                          <IoMdAddCircle className="text-xl" />
                        </Button>
                      </div>
                      <PopoverContent className="w-[340px] p-0">
                        <Command>
                          <CommandInput placeholder="Buscar proceso..." className="h-9" />
                          <CommandEmpty>Proceso no encontrado</CommandEmpty>
                          <CommandGroup>
                            {
                              /*/ aca va la lista de procesos de la API*/
                              ([] as ProductProcesses[]).map((process, i) => (
                                <CommandItem
                                  value={process.processAttributes.name}
                                  key={i}
                                  onSelect={() => {
                                    form.setValue("productProcesses", [...field.value!, process]);
                                  }}
                                >
                                  {process.processAttributes.name}
                                  <FaCheck className={cn("ml-auto h-4 w-4")} />
                                </CommandItem>
                              ))
                            }
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="productProcesses"
              render={({ field }) => (
                <FormItem className="col-span-full row-span-1">
                  {field.value?.length > 0 ? (
                    <ScrollArea className="mb-4 h-60 w-[390px] rounded-md  border">
                      <div className="p-4 pr-0">
                        {field.value?.map((process, index) => (
                          <div
                            key={index}
                            className="flex h-[57px] w-[355px] items-center justify-between rounded-none border border-[#D5D5D5] bg-[#F5F6FA] px-4  pl-2 hover:border-primary/80 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent"
                            onClick={() => {
                              handleOpenModal();
                              setProductProcesses(process);
                            }}
                          >
                            <p>{process.processAttributes.name}</p>
                            <ProcessOption />
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  ) : (
                    <p className="text-sm text-[#BDBDBD]">No hay procesos</p>
                  )}
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="py-8">
                <FormLabel>Notas</FormLabel>
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
      <ProcessModal
        key={productProcesses?.processAttributes?.name}
        defaultValues={productProcesses}
        open={open}
        onOpenChange={setOpen}
        onSubmit={(data) => {
          const oldValues = [...(form.getValues().productProcesses ?? [])];
          const index = oldValues.findIndex(
            (process) => process.processAttributes.name === data.processAttributes.name
          );
          if (index !== -1) {
            oldValues[index] = data;
            form.setValue("productProcesses", oldValues);
            return;
          }
          form.setValue("productProcesses", [...oldValues, data]);
        }}
      />
    </div>
  );
};

export default ProductForm;
