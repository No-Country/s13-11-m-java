import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "./components/ui/button";
import { Checkbox } from "./components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./components/ui/form";
import { Input } from "./components/ui/input";
import { ScrollArea } from "./components/ui/scroll-area";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import { DialogProps } from "./main";
import { SubProcess, subProcessSchema } from "./schemas/apiSchemas";

type SubModalProps = {
  onSubmit?: (data: SubProcess) => void;
  defaultValues?: Partial<SubProcess>;
} & DialogProps;

function SubModal({
  open,
  defaultValues = {
    subProcessAttributes: {
      name: "Prueba",
      timeReal: 24,
      timeAverage: 23,
      timeMargin: 31,
      comment: "Sin Comentarios",
      state: false,
      active: false,
      counter: 2,
    },
  },
  onOpenChange,
  onSubmit,
}: SubModalProps) {
  const form = useForm<SubProcess>({
    resolver: zodResolver(subProcessSchema),
    defaultValues,
  });

  const handleSubmit = (data: SubProcess) => {
    onOpenChange?.(false);
    onSubmit?.(data);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="pt-12 sm:max-w-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <ScrollArea className="h-72 p-4">
              <div className="mx-auto w-full max-w-3xl space-y-8">
                <FormField
                  control={form.control}
                  name="subProcessAttributes.name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subProcessAttributes.timeReal"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="timeReal" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subProcessAttributes.timeAverage"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="timeAverage" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subProcessAttributes.timeMargin"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="timeMargin" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subProcessAttributes.comment"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="comment" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subProcessAttributes.state"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subProcessAttributes.active"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subProcessAttributes.counter"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="counter" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </ScrollArea>
            <Button type="submit">Enviar</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default SubModal;
