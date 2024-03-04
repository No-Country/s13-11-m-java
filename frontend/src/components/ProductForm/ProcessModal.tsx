import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import {
  FaChevronDown, // FaCheck
} from "react-icons/fa";

import { ProcessFormInputs, processFormSchema } from "@/schemas/processSchema";

import SubProcessModal from "./SubProcessModal";
import { SubProcess } from "@/mocks/process/data";
// import { ProcessAttributes } from '../../app/services/api/types';

export interface ProcessModalProps {
  onSubmit?: (values: ProcessFormInputs) => void;
  defaultValues?: ProcessFormInputs;
  isLoading?: boolean;
}

const ProcessModal = ({ onSubmit, isLoading, defaultValues }: ProcessModalProps) => {
  const processForm = useForm<ProcessFormInputs>({
    resolver: zodResolver(processFormSchema),
    defaultValues,
  });

  function handleSubmit(values: ProcessFormInputs) {
    onSubmit?.(values);
  }

  const labelStyle = "text-[#606060]";
  const boxStyle =
    "bg-[#F5F6FA] border h-[57px] w-[400px] border-[#D5D5D5] rounded-none  pl-2 hover:border-primary/80 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="" variant="outline">
          Agregar un nuevo proceso
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[955px] flex-col md:flex md:max-h-[801px]">
        <DialogHeader>
          <DialogTitle>Agregar un nuevo proceso</DialogTitle>
        </DialogHeader>
        <Form {...processForm}>
          <form onSubmit={processForm.handleSubmit(handleSubmit)} className="flex flex-col items-center justify-center">
            <div className=" mb-2 grid-flow-col grid-rows-3 gap-x-4 space-y-4 md:grid">
              <FormField
                control={processForm.control}
                name="processAttributes.name"
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
                control={processForm.control}
                name="processAttributes.timeMargin"
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
                control={processForm.control}
                name="processAttributes.timeReal"
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
                control={processForm.control}
                name="processAttributes.timeAverage"
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
                control={processForm.control}
                name="processAttributes.state"
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
                control={processForm.control}
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
                                <p>Nombre del subproceso</p>
                                <FaChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-[340px] p-0">
                            <Command>
                              <CommandInput placeholder="Buscar subproceso..." className="h-9" />
                              <CommandEmpty>Subproceso no encontrado</CommandEmpty>
                              <CommandGroup>
                                {[{ name: "Test" }].map((subProcess, i) => (
                                  <CommandItem
                                    value={subProcess.name}
                                    key={i}
                                    onSelect={() => {
                                      processForm.setValue("subprocess", [...field.value, subProcess] as SubProcess[]);
                                    }}
                                  >
                                    {subProcess.name}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="min-h-[20vh]"></div>
            <Button className="mx-auto mt-4 w-[282px] " type="submit" size="rounded" disabled={isLoading}>
              Agregar
            </Button>
          </form>
        </Form>
        <DialogFooter>
          {/* AGREGAR SUBPROCESO */}
          <SubProcessModal />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProcessModal;
