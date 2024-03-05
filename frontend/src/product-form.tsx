import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "./components/ui/button";
import { Checkbox } from "./components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./components/ui/form";
import { Input } from "./components/ui/input";

import Modal from "./modal";
import { Product, ProductProcesses, productSchema } from "./schemas/apiSchemas";

const ProductForm = () => {
  const [open, setOpen] = React.useState(false);
  const form = useForm<Product>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "Prueba",
      idUnico: "123",
      instruction: "Sin instrucciones",
      description: "Sin descripción",
      timeEstimatedCompletion: "2021-09-01T00:00:00.000Z",
      state: false,
      active: false,
      productProcesses: [
        {
          processAttributes: {
            name: "Proceso 1",
            active: false,
            timeReal: 25,
            comment: "Comentario",
            counter: 2,
            state: false,
            timeAverage: 25,
            timeMargin: 25,
          },
          subProcesses: [],
        },
        {
          processAttributes: {
            name: "Proceso 2",
            active: false,
            timeReal: 25,
            comment: "Comentario",
            counter: 2,
            state: false,
            timeAverage: 25,
            timeMargin: 25,
          },
          subProcesses: [
            {
              subProcessAttributes: {
                name: "SubProceso 1",
                active: false,
                timeReal: 25,
                comment: "Comentario",
                counter: 2,
                state: false,
                timeAverage: 25,
                timeMargin: 25,
              },
            },
          ],
        },
      ],
    },
  });

  const [productProcesses, setProductProcesses] = React.useState<Partial<ProductProcesses>>({});

  const handleSubmit = (data: Product) => {
    console.log(data);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  // console.log(form.watch());

  return (
    <>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="mx-auto w-full max-w-3xl space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} />
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
                  <FormControl>
                    <Input {...field} />
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
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} />
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
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="state"
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
              name="active"
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
              name="productProcesses"
              render={({ field }) => (
                <>
                  {field.value?.map((process, index) => (
                    <div
                      key={`${process.processAttributes.name}-${index}`}
                      className="flex w-full max-w-sm items-center space-x-2"
                    >
                      <Input
                        readOnly
                        defaultValue={process.processAttributes.name}
                        onClick={() => {
                          handleOpenModal();
                          setProductProcesses(process);
                        }}
                      />
                      <Button
                        type="button"
                        onClick={() => {
                          const oldValues = [...(form.getValues().productProcesses ?? [])];
                          oldValues.splice(index, 1);
                          form.setValue("productProcesses", oldValues);
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  ))}
                </>
              )}
            />
            <Button type="button" onClick={handleOpenModal}>
              Open Modal
            </Button>
            <Button variant="outline" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
      <Modal
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
    </>
  );
};

export default ProductForm;
