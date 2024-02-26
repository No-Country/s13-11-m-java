import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import processFormSchema, { ProcessFormInputs } from "@/schemas/processSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaCamera } from "react-icons/fa6";
import SubProcessModal from "./SubProcessModal";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  FaChevronDown,
  // FaCheck
} from "react-icons/fa";
import { Process } from "@/mocks/process/data";

interface ProcessFormProps {
  onSubmit?: (values: ProcessFormInputs) => void;
  loading?: boolean;
}

const ProcessModal = ({ loading, onSubmit }: ProcessFormProps) => {
  const form = useForm<ProcessFormInputs>({
    resolver: zodResolver(processFormSchema),
    defaultValues: { subprocess: [] },
  });

  function handleSubmit(values: ProcessFormInputs) {
    onSubmit?.(values);
    console.log(values);
  }

  const labelStyle = "text-[#606060]";
  const boxStyle =
    "bg-[#F5F6FA] border h-[57px] w-[400px] border-[#D5D5D5] rounded-none  pl-2 hover:border-primary/80 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full">+</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[955px] flex-col md:flex md:max-h-[801px]">
        <DialogHeader>
          <DialogTitle>Agregar un nuevo proceso</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col items-center justify-center">
            <div className="max-auto flex h-24 w-32 flex-col items-center justify-center">
              <Button type="button" variant={"ghost"} className="w-30 flex h-44 flex-col">
                <p>Subir una foto</p>
                <div className="mx-auto mb-2 h-16 w-16 rounded-full bg-gray-200">
                  <FaCamera className="relative left-6 top-6 text-lg" />
                </div>
              </Button>
            </div>
            <div className=" mb-2 grid-flow-col grid-rows-3 gap-x-4 space-y-4 md:grid">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="pt-4">
                    <FormLabel className={labelStyle}>Nombre del proceso</FormLabel>
                    <FormControl>
                      <Input className={boxStyle} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="marginTime"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className={labelStyle}>Margen de tiempo de aceptabilidad</FormLabel>
                    <FormControl>
                      <Input className={boxStyle} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="progress"
                render={({ field }) => (
                  <FormItem className="">
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
                  <FormItem className="">
                    <FormLabel className={labelStyle}>Tiempo estimado</FormLabel>
                    <FormControl>
                      <Input className={boxStyle} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className={labelStyle}>Activo/Inactivo</FormLabel>
                    <FormControl>
                      <Input className={boxStyle} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subprocess"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className={labelStyle}>Subproceso</FormLabel>
                    <FormControl>
                      <div className="flex w-96 items-center gap-3">
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
                                {[{ name: "Test" }].map((subProcess, i) => (
                                  <CommandItem
                                    value={subProcess.name}
                                    key={i}
                                    onSelect={() => {
                                      //Esta es la funcion para setear el valor del form con los procesos, funciona pero marca como error el codigo
                                      form.setValue("subprocess", [...field.value, subProcess] as Process[]);
                                    }}
                                  >
                                    {subProcess.name}
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
                        <SubProcessModal />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="min-h-[20vh]"></div>
            <Button className="mx-auto mt-4 w-[282px] " type="submit" size="rounded" disabled={loading}>
              Agregar
            </Button>
          </form>
        </Form>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProcessModal;
