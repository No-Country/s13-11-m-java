import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SubProcessFormInputs, subProcessFormSchema } from "@/schemas/processSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaCamera } from "react-icons/fa6";

const SubProcessModal = () => {
  const subProcessForm = useForm<SubProcessFormInputs>({
    resolver: zodResolver(subProcessFormSchema),
  });

  function handleSubmit(values: SubProcessFormInputs) {
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
          <DialogTitle>Agregar un nuevo subproceso</DialogTitle>
        </DialogHeader>
        <Form {...subProcessForm}>
          <form
            onSubmit={subProcessForm.handleSubmit(handleSubmit)}
            className="flex flex-col items-center justify-center"
          >
            <div className="max-auto flex h-24 w-32 flex-col items-center justify-center">
              <Button type="button" variant={"ghost"} className="w-30 flex h-44 flex-col">
                <p>Subir una foto</p>
                <div className="mx-auto mb-2 h-16 w-16 rounded-full bg-gray-200">
                  <FaCamera className="relative left-6 top-6 text-lg" />
                </div>
              </Button>
            </div>
            <div className=" mb-2 grid-flow-col grid-rows-3 gap-x-8 space-y-4 md:grid">
              <FormField
                control={subProcessForm.control}
                name="name"
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
                control={subProcessForm.control}
                name="timeframe"
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
                control={subProcessForm.control}
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
                control={subProcessForm.control}
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
                control={subProcessForm.control}
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
            </div>
            <Button className="mx-auto mt-4 w-[282px]" type="submit" size="rounded">
              Agregar
            </Button>
          </form>
        </Form>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SubProcessModal;
