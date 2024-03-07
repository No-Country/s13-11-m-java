import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Badge } from "../ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogProps, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { SubProcess, subProcessSchema } from "@/schemas/apiSchemas";

import { states } from "./ProcessModal";
import { State } from "@/app/services/api/types";

type SubModalProps = {
  onSubmit?: (data: SubProcess) => void;
  defaultValues?: Partial<SubProcess>;
} & Pick<DialogProps, "open" | "onOpenChange">;
const SubProcessModal = ({
  open,
  defaultValues = {
    subProcessAttributes: {
      name: "",
      timeAverage: 1,
      timeMargin: 1,
      comment: "",
      state: State.PENDIENTE,
      active: false,
      counter: 2,
      timeEstimatedCompletion: 0,
    },
  },
  onOpenChange,
  onSubmit,
}: SubModalProps) => {
  const form = useForm<SubProcess>({
    resolver: zodResolver(subProcessSchema),
    defaultValues,
  });

  const handleSubmit = (data: SubProcess) => {
    onSubmit?.(data);
    onOpenChange?.(false);
  };

  const labelStyle = "text-[#606060]";
  const boxStyle =
    "bg-[#F5F6FA] border h-[57px] w-[400px] border-[#D5D5D5] rounded-none  pl-2 hover:border-primary/80 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[955px] flex-col md:flex md:max-h-[801px]">
        <DialogHeader>
          <DialogTitle>Agregar un nuevo subproceso</DialogTitle>
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
            <div className=" mb-2 grid-flow-col grid-rows-3 gap-x-8 space-y-4 md:grid">
              <FormField
                control={form.control}
                name="subProcessAttributes.name"
                render={({ field }) => (
                  <FormItem className="pt-4">
                    <FormLabel className={labelStyle}>Nombre del subproceso</FormLabel>
                    <FormControl>
                      <Input className={boxStyle} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subProcessAttributes.timeMargin"
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
                name="subProcessAttributes.timeEstimatedCompletion"
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
                name="subProcessAttributes.timeAverage"
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
                name="subProcessAttributes.state"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className={labelStyle}>Activo/Inactivo</FormLabel>
                    <Select
                      onValueChange={(value: State) => {
                        form.setValue("subProcessAttributes.state", value in states ? value : State.PENDIENTE);
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
                            <Badge className="mr-2 px-1 py-1" variant={key as State} />
                            {value}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button className="mx-auto mt-4 w-[282px]" type="submit" size="rounded">
              Agregar
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default SubProcessModal;
