import { FaCamera } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import productFormSchema, { ProductFormInputs } from "@/schemas/productSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import ProcessModal from "./ProcessModal";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  FaChevronDown,
  // FaCheck
} from "react-icons/fa";
import { Process, process } from "@/mocks/process/data";
import { simulateLoading } from "@/utils/fakeUtils";
import { useEffect, useState } from "react";
// import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
// import { SlOptionsVertical } from "react-icons/sl";
import ProcessOption from "./ProcessOption";

interface ProductFormProps {
  onSubmit?: (values: ProductFormInputs) => void;
  loading?: boolean;
}

//mock
async function getData(): Promise<Process[]> {
  await simulateLoading();
  return process;
}

const ProductForm = ({ loading, onSubmit }: ProductFormProps) => {
  const [data, setData] = useState<Process[]>([]);
  const form = useForm<ProductFormInputs>({
    resolver: zodResolver(productFormSchema),
    defaultValues: { process: [] as Process[] },
  });

  function handleSubmit(values: ProductFormInputs) {
    onSubmit?.(values);
    console.log(values);
  }

  useEffect(() => {
    getData().then(setData);
  }, []);

  const [processList, setProcessList] = useState<Process[]>([]);

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
        <div className="w-full grid-flow-col grid-rows-5 gap-x-12 space-y-8 md:grid">
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
          <div></div>
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
            control={form.control}
            name="process"
            render={({ field }) => (
              <FormItem className="row-span-1">
                <FormLabel className={labelStyle}>Procesos</FormLabel>
                <FormControl>
                  <div className="mb-2 flex items-center">
                    {/* PROCESOS */}
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
                          <CommandInput placeholder="Buscar producto..." className="h-9" />
                          <CommandEmpty>Proceso no encontrado</CommandEmpty>
                          <CommandGroup>
                            {data.map((process, i) => (
                              <CommandItem
                                value={process.name}
                                key={i}
                                onSelect={() => {
                                  // Hice un estado local que guarde los procesos por una cuestion de sincronizacion, si queria traerlos para renderizarlos tenia un delay
                                  setProcessList([...field.value, process] as Process[]);
                                  //Esta es la funcion para setear el valor del form con los procesos, funciona pero marca como error el codigo
                                  form.setValue("process", [...field.value, process] as Process[]);
                                }}
                              >
                                {process.name}
                                {/* <FaCheck

                                Esto es un icono de check que queda lindo nomas, pero me costo hacer el includo y lo pospuse
                                className={cn(
                                  "ml-auto h-4 w-4"
                                  processList.includes((proc: Process) => process.name === proc.name)
                                  field.value.includes((proc: Process) => proc.name === process.name)
                                  ?  "opacity-100"
                                  : "opacity-0"
                                  process.name === field.value ? "opacity-100" : "opacity-0"
                                )}
                                /> */}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    {/* Agregar proceso */}
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
