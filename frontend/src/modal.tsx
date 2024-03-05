import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "./components/ui/button";
import { Checkbox } from "./components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./components/ui/form";
import { Input } from "./components/ui/input";
import { ScrollArea } from "./components/ui/scroll-area";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import { DialogProps } from "./main";
import { ProductProcesses, SubProcess, productProcessesSchema } from "./schemas/apiSchemas";
import SubModal from "./sub-modal";

type ModalProps = {
  onSubmit?: (data: ProductProcesses) => void;
  defaultValues?: Partial<ProductProcesses>;
} & DialogProps;

function Modal({
  open,
  defaultValues = {
    processAttributes: {
      name: "",
      timeReal: 0,
      timeAverage: 0,
      timeMargin: 0,
      comment: "",
      state: false,
      active: false,
      counter: 0,
    },
    subProcesses: [],
  },
  onOpenChange,
  onSubmit,
}: ModalProps) {
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
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="pt-12 sm:max-w-md">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <ScrollArea className="h-72 p-4">
                <div className="mx-auto w-full max-w-3xl space-y-8">
                  <FormField
                    control={form.control}
                    name="processAttributes.name"
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
                    name="processAttributes.timeReal"
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
                    name="processAttributes.timeAverage"
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
                    name="processAttributes.timeMargin"
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
                    name="processAttributes.comment"
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
                    name="processAttributes.state"
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
                    name="processAttributes.active"
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
                    name="processAttributes.counter"
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
                <FormField
                  control={form.control}
                  name="subProcesses"
                  render={({ field }) => (
                    <>
                      {field.value?.map((subProcess, index) => (
                        <div
                          key={`${subProcess.subProcessAttributes.name}-${index}`}
                          className="flex w-full max-w-sm items-center space-x-2"
                        >
                          <Input
                            readOnly
                            defaultValue={subProcess.subProcessAttributes.name}
                            onClick={() => {
                              handleOpenModal();
                              setSubProductProcesses(subProcess);
                            }}
                          />
                          <Button
                            type="button"
                            onClick={() => {
                              const oldValues = [...(form.getValues().subProcesses ?? [])];
                              oldValues.splice(index, 1);
                              form.setValue("subProcesses", oldValues);
                            }}
                          >
                            Delete
                          </Button>
                        </div>
                      ))}
                    </>
                  )}
                />
              </ScrollArea>
              <Button type="button" onClick={handleOpenModal}>
                Open Modal
              </Button>
              <Button variant="outline" type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      <SubModal
        key={subProductProcesses?.subProcessAttributes?.name}
        defaultValues={subProductProcesses}
        open={openSubModal}
        onOpenChange={setOpenSubModal}
        onSubmit={(data) => {
          const oldValues = [...(form.getValues().subProcesses ?? [])];
          const index = oldValues.findIndex(
            (process) => process.id === data.id || process.subProcessAttributes.name === data.subProcessAttributes.name
          );
          if (index !== -1) {
            oldValues[index] = data;
            form.setValue("subProcesses", oldValues);
            return;
          }
          form.setValue("subProcesses", [...oldValues, data]);
        }}
      />
    </>
  );
}

export default Modal;
