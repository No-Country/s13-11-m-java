import { Link } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { DatePickerForm } from "../DatePicker/DatePickerForm";
import SelectInputForm from "../SelectInput/SelectInputForm";
import { Textarea } from "../ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { FaCamera } from "react-icons/fa";

import orderFormSchema, { OrderFormInputs } from "@/schemas/orderSchema";

import { products } from "@/mocks/products/data";

const employees = [
  {
    _id: "1",
    name: "Tommy Vercetti",
  },
  {
    _id: "2",
    name: "Claude Speed",
  },
  {
    _id: "3",
    name: "Niko Bellic",
  },
];

const clients = [
  {
    _id: "1",
    name: "Bojang",
  },
  {
    _id: "2",
    name: "Rockstar Games",
  },
  {
    _id: "3",
    name: "Ubisoft",
  },
];

const OrderForm = () => {
  const form = useForm<OrderFormInputs>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      assignedEmployee: {},
      client: {},
      employeeAvailability: "",
      finishEstimatedDate: "",
      initialDate: "",
      name: "",
      note: "",
      productId: 0,
      errortime: 5,
      photoLink: "",
    },
  });

  function handleSubmit(values: OrderFormInputs) {
    const { name, errortime, photoLink, initialDate, finishEstimatedDate, productId, client } = values;

    //requestBody es lo que solicita el endpoint de create

    const requestBody = {
      name,
      errortime,
      photoLink,
      initialDate,
      finishEstimatedDate,
      productId,
      client: { commonAttribute: { name: client.name } },
    };
    console.log(requestBody);
  }

  const labelStyle = "text-[#606060]";

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
                    <SelectInputForm
                      selectOptions={products}
                      fieldValue={field.value}
                      setValue={form.setValue as () => void}
                      title={"producto"}
                      fieldName={"name"}
                    />
                  </FormControl>
                  <Button type="button" className="ml-2 rounded-full" asChild>
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
                  <DatePickerForm onChangeDate={field.onChange} />
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
                  <DatePickerForm onChangeDate={field.onChange} />
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
                  <SelectInputForm
                    selectOptions={clients}
                    fieldValue={field.value}
                    setValue={form.setValue as () => void}
                    title={"cliente"}
                    fieldName={"client.name"}
                  />
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
                <FormLabel className={labelStyle}>Empleado asignado</FormLabel>
                <FormControl>
                  <SelectInputForm
                    selectOptions={employees}
                    fieldValue={field.value}
                    setValue={form.setValue as () => void}
                    title={"empleado"}
                    fieldName="assignedEmployee.name"
                  />
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
                  <DatePickerForm onChangeDate={field.onChange} />
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
