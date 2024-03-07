import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { DatePickerForm } from "../DatePicker/DatePickerForm";
import SelectInputForm from "../SelectInput/SelectInputForm";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { FaCamera } from "react-icons/fa6";

import { OrderFormInputs, orderFormSchema } from "@/schemas/apiSchemas";

import { useLazyObtainFinishEstimateDateQuery } from "@/app/services/api/order";
import { useGetAllProductsQuery } from "@/app/services/api/product";
import { CreateOrderRequest } from "@/app/services/api/types";
import { employees } from "@/mocks/employees/employees";
import { clients } from "@/mocks/orderFormMocks/data";

export interface OrderFormProps {
  onSubmit?: (values: CreateOrderRequest) => void;
  isLoading?: boolean;
}

const OrderForm = ({ isLoading, onSubmit }: OrderFormProps) => {
  const { data: productsData, isLoading: isLoadingProduct } = useGetAllProductsQuery();
  const [obtainFinishEstimateDate, { isLoading: obtainLoading }] = useLazyObtainFinishEstimateDateQuery();
  const [productIdFI, setProductId] = useState<number>(0);

  // const [productFinishTime, setProductFinishTime] = useState<number>();

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
      productId: 11,
      errorTime: 5,
      photoLink:
        "https://media.istockphoto.com/id/467479468/photo/car-wheel.jpg?s=612x612&w=0&k=20&c=FVAl5bqn5DJAgEOQtt8Ca3Mb9Dzk0BqwTJ3SiQ3L3ts=",
    },
  });

  function handleSubmit(values: OrderFormInputs) {
    const { name, errorTime, photoLink, initialDate, finishEstimatedDate, client, state } = values;
    onSubmit?.({
      name,
      errorTime,
      photoLink,
      initialDate,
      finishEstimatedDate,
      productId: productIdFI,
      client: { commonAttribute: { name: client.name } },
      state,
    });
  }

  console.log(form);

  const labelStyle = "text-[#606060] flex w-full";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full flex-col md:w-3/4 ">
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
                      finishTime={setProductFinishTime}
                      pickId={setProductId as () => void}
                      isLoading={isLoadingProduct}
                      selectOptions={productsData}
                      fieldValue={field.value}
                      setValue={form.setValue as () => void}
                      title={"producto"}
                      fieldName={"name"}
                      isProduct={true}
                    />
                  </FormControl>
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
                  <DatePickerForm
                    disabled={obtainLoading || productIdFI === 0}
                    onChangeDate={async (data) => {
                      field.onChange(data);
                      await obtainFinishEstimateDate({
                        productId: productIdFI,
                        initialDate: data instanceof Date ? data.toISOString() : (data as string),
                      })
                        .unwrap()
                        .then((date) => {
                          form.setValue("finishEstimatedDate", date);
                        });
                    }}
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
                  {/* <DatePickerForm
                    key={field.value}
                    disabled
                    defaultValue={field.value ? new Date(field.value) : undefined}
                  /> */}
                  <Input type="date" value={field.value} />
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
              <FormItem className="hidden">
                <FormLabel className={labelStyle}>Fecha más cercana disponible del empleado</FormLabel>
                <FormControl>
                  <DatePickerForm onChangeDate={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="bg-red mb-32 flex w-full flex-col items-center justify-center">
          <FormField
            control={form.control}
            name="note"
            render={({ field }) => (
              <FormItem className="w-full py-8">
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
          <Button className="w-full md:col-span-2" type="submit" size="rounded" disabled={isLoading}>
            Confirmar
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default OrderForm;
