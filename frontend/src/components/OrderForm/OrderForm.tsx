import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Textarea } from "../ui/textarea";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { FaCamera } from "react-icons/fa";
import { FaCheck, FaChevronDown } from "react-icons/fa";

import orderFormSchema, { OrderFormInputs } from "@/schemas/orderSchema";

import { cn } from "@/lib/utils";
import { Product, products } from "@/mocks/products/data";
import { simulateLoading } from "@/utils/fakeUtils";

//mock
async function getData(): Promise<Product[]> {
  await simulateLoading();
  return products;
}

const OrderForm = () => {
  const [product, setProduct] = useState<Product | undefined>();
  const [data, setData] = useState<Product[]>([]);

  const form = useForm<OrderFormInputs>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      errortime: 5,
      photoLink: "",
    },
  });

  function handleSubmit(values: OrderFormInputs) {
    console.log(product);

    console.log(values);
  }

  useEffect(() => {
    getData().then(setData);
  }, []);

  const labelStyle = "text-[#606060]";
  const boxStyle =
    "bg-[#F5F6FA] border h-[57px] w-[400px] border-[#D5D5D5] rounded-none  pl-2 hover:border-primary/80 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-transparent";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full max-w-[70%] flex-col md:flex md:max-w-3xl">
        <div className="max-auto hidden flex-col items-center justify-center">
          <Button type="button" variant={"ghost"} className="flex h-48 w-36 flex-col">
            <div className="mx-auto mb-2 h-24 w-24 rounded-full bg-gray-200">
              <FaCamera className="relative left-9 top-9 text-2xl" />
            </div>
            <p>Subir una foto</p>
          </Button>
        </div>
        <div className="w-full grid-flow-col grid-rows-3 gap-x-12 space-y-8 md:grid">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="pt-8">
                <FormLabel className={labelStyle}>Nombre o ID del producto</FormLabel>
                <div className="flex items-center">
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={`${boxStyle} w-[360px]`}
                            // className={cn("w-[200px] justify-between", !field.value && "text-muted-foreground")}
                          >
                            {field.value
                              ? data.find((product) => product.name === field.value)?.name
                              : "Nombre del producto"}
                            <FaChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[340px] p-0">
                        <Command>
                          <CommandInput placeholder="Buscar producto..." className="h-9" />
                          <CommandEmpty>Producto no encontrado.</CommandEmpty>
                          <CommandGroup>
                            {data.map((product) => (
                              <CommandItem
                                value={product.name}
                                key={product._id}
                                onSelect={() => {
                                  form.setValue("name", product.name);
                                  setProduct(product);
                                }}
                              >
                                {product.name}
                                <FaCheck
                                  className={cn(
                                    "ml-auto h-4 w-4",
                                    product.name === field.value ? "opacity-100" : "opacity-0"
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <Button type="button" className="ml-2 rounded-full">
                    <Link to={"/product"}>+</Link>
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="initialDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelStyle}>Fecha Inicial</FormLabel>
                <FormControl>
                  <Input
                    className={boxStyle}
                    placeholder="Ingresar fecha"
                    {...field}
                    // onChange={form.setValue("estimatedEndDate", field.value + product!.estimatedTime)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="finishEstimatedDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelStyle}>Fecha estimada final</FormLabel>
                <FormControl>
                  <Input className={boxStyle} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="client.name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelStyle}>Cliente</FormLabel>
                <FormControl>
                  <Input className={boxStyle} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="assignedEmployee.name"
            render={({ field }) => (
              <FormItem>
                {/* Aca va un shadcn Command */}
                <FormLabel className={labelStyle}>Empleado asignado</FormLabel>
                <FormControl>
                  <Input className={boxStyle} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="employeeAvailability"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelStyle}>Fecha más cercana disponible del empleado</FormLabel>
                <FormControl>
                  <Input className={boxStyle} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
        <Button className="w-full md:col-span-2" type="submit" size="rounded">
          Confirmar
        </Button>
      </form>
    </Form>
  );
};

export default OrderForm;
