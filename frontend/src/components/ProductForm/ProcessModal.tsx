import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { ScrollArea } from "../ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogProps, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import {
  FaChevronDown, // FaCheck
} from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";

import { ProductProcesses, SubProcess, productProcessesSchema } from "@/schemas/apiSchemas";

import ProcessOption from "./ProcessOption";
import SubProcessModal from "./SubProcessModal";
import { State } from "@/app/services/api/types";

type ModalProps = {
  onSubmit?: (data: ProductProcesses) => void;
  defaultValues?: Partial<ProductProcesses>;
} & Pick<DialogProps, "open" | "onOpenChange">;

export const states: Record<State, string> = {
  PENDIENTE: "Pendiente",
  EN_PROGRESO: "En progreso",
  TERMINADO: "Terminado",
  SUSPENDIDO: "Suspendido",
};

const ProcessModal = ({
  open,
  defaultValues = {
    processAttributes: {
      name: "",
      timeAverage: 0,
      timeMargin: 0,
      comment: "",
      state: State.PENDIENTE,
      active: false,
      counter: 0,
      timeEstimatedCompletion: 0,
    },
    subProcesses: [],
  },
  onOpenChange,
  onSubmit,
}: ModalProps) => {
  const [openSubModal, setOpenSubModal] = React.useState(false);
  const form = useForm<ProductProcesses>({
    resolver: zodResolver(productProcessesSchema),
    defaultValues,
  });
  const [subProductProcesses, setSubProductProcesses] = React.useState<Partial<SubProcess>>({});

  const handleSubmit = (data: ProductProcesses) => {
    onOpenChange?.(false);
    onSubmit?.(data);
  };

  const handleOpenModal = () => {
    setOpenSubModal(true);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[955px] flex-col md:flex md:max-h-[801px]">
        <DialogHeader>
          <DialogTitle>Agregar un nuevo proceso</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col items-center justify-center">
            {/* <div className="max-auto flex h-24 w-32 flex-col items-center justify-center">
              <Button type="button" variant={"ghost"} className="w-30 flex h-44 flex-col">
                <p>Subir una foto</p>
                <div className="mx-auto mb-2 h-16 w-16 rounded-full bg-gray-200">
                  <FaCamera className="relative left-6 top-6 text-lg" />
                </div>
              </Button>
            </div> */}
            <div className=" mb-2 grid-cols-1 grid-rows-3 gap-x-4 space-y-4 md:grid md:grid-cols-2">
              <FormField
                control={form.control}
                name="processAttributes.name"
                render={({ field }) => (
                  <FormItem className="pt-4">
                    <FormLabel>Nombre del proceso</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="processAttributes.timeMargin"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>Margen de tiempo de aceptabilidad</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="processAttributes.timeEstimatedCompletion"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>Índice de progreso</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="processAttributes.timeAverage"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>Tiempo estimado</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="processAttributes.state"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>Activo/Inactivo</FormLabel>
                    <Select
                      onValueChange={(value: State) => {
                        form.setValue("processAttributes.state", value in states ? value : State.PENDIENTE);
                      }}
                      defaultValue={field.value in states ? field.value : State.PENDIENTE}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a verified email to display" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.entries(states).map(([key, value]) => (
                          <SelectItem key={key} value={key}>
                            {value}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subProcesses"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>Subproceso</FormLabel>
                    <FormControl>
                      <div className="flex w-96 items-center gap-3">
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button variant="outline" role="combobox" className={`w-[360px]`}>
                                <p>Nombre del subproceso</p>
                                <FaChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <Button
                            type="button"
                            onClick={() => {
                              handleOpenModal();
                              setSubProductProcesses({});
                            }}
                            size="icon"
                          >
                            <IoMdAddCircle className="text-xl" />
                          </Button>
                          <PopoverContent className="w-[340px] p-0">
                            <Command>
                              <CommandInput placeholder="Buscar subproceso..." className="h-9" />
                              <CommandEmpty>Subproceso no encontrado</CommandEmpty>
                              <CommandGroup>
                                {(
                                  [
                                    /*aca va la datos de api*/
                                  ] as SubProcess[]
                                )?.map((subProcess, i) => (
                                  <CommandItem
                                    value={subProcess.subProcessAttributes.name}
                                    key={i}
                                    onSelect={() => {
                                      form.setValue("subProcesses", [...field.value]);
                                    }}
                                  >
                                    {subProcess.subProcessAttributes.name}
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
              <FormField
                control={form.control}
                name="subProcesses"
                render={({ field }) => (
                  <FormItem className="col-span-full row-span-1">
                    {field.value?.length > 0 ? (
                      <ScrollArea className="mb-4 h-60 w-[390px] rounded-md  border">
                        <div className="p-4 pr-0">
                          {field.value?.map((subprocess, index) => (
                            <div
                              key={index}
                              className="flex h-[57px] w-[355px] items-center justify-between rounded-none border border-[#D5D5D5] bg-[#F5F6FA] px-4  pl-2 hover:border-primary/80 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent"
                              onClick={() => {
                                handleOpenModal();
                                setSubProductProcesses(subprocess);
                              }}
                            >
                              <p>{subprocess.subProcessAttributes.name}</p>
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
            <Button className="mx-auto mt-4 w-[282px] " type="submit" size="rounded">
              Agregar
            </Button>
          </form>
        </Form>
        <DialogFooter>
          <SubProcessModal
            key={subProductProcesses?.subProcessAttributes?.name}
            open={openSubModal}
            onOpenChange={setOpenSubModal}
            defaultValues={subProductProcesses}
            onSubmit={(data) => {
              const oldValues = [...(form.getValues().subProcesses ?? [])];
              const index = oldValues.findIndex(
                (process) =>
                  process.id === data.id || process.subProcessAttributes.name === data.subProcessAttributes.name
              );
              if (index !== -1) {
                oldValues[index] = data;
                form.setValue("subProcesses", oldValues);
                return;
              }
              form.setValue("subProcesses", [...oldValues, data]);
            }}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProcessModal;
