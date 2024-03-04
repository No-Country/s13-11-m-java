import React from "react";

// import { Order} from "@/app/services/api/types";
import useOrder from "@/hooks/useOrder";

// import { DataTable2 } from "@/components/ui/data-table2";
import { DataTable } from "@/components/ui/data-table";
// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { columns } from "./orderColumn";

// import {FormField, FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Textarea } from "@/components/ui/textarea";
// import { useForm } from "react-hook-form";
// import orderFormSchema, { OrderFormInputs } from "@/schemas/orderSchema";
// import { zodResolver } from "@hookform/resolvers/zod";
interface OrderDetailsTableProps {
  orderId?: number;
}

const OrderDetailsTable: React.FC<OrderDetailsTableProps> = (props) => {
  // const form = useForm<OrderFormInputs>({
  //   resolver: zodResolver(orderFormSchema),
  // });
  const { orders } = useOrder();
  const orderSelected = orders.find((o) => o.id === props.orderId);
  console.log("orderSelected", orderSelected);
  console.log(orderSelected);
  return (
    <div>
      <div className="flex flex-wrap justify-between gap-4">
        <h2 className="text-2xl">
          Pedido {orderSelected?.id} - Cliente: {orderSelected?.clientId}
        </h2>
      </div>
      <div className="grid max-w-full grid-flow-row grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-7">
        <div className="col-span-full flex h-full max-h-[26rem] grid-flow-row flex-col rounded-2xl">
          <div className="flex flex-col py-4 max-md:gap-2 md:flex-row"></div>
          <ScrollArea className="h-[50vh] whitespace-nowrap rounded-md border md:h-[60vh]">
            <div className="flex">{orderSelected ? <DataTable columns={columns} data={[orderSelected]} /> : ""}</div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-4">
        <h2 className="text-2xl">Procesos</h2>
      </div>
      <div className="grid max-w-full grid-flow-row grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-7">
        <div className="col-span-full flex h-full max-h-[26rem] grid-flow-row flex-col rounded-2xl">
          <div className="flex flex-col py-4 max-md:gap-2 md:flex-row"></div>
          <ScrollArea className="h-[50vh] whitespace-nowrap rounded-md border md:h-[60vh]">
            <div className="flex">{orderSelected ? <DataTable columns={columns} data={[orderSelected]} /> : ""}</div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
      {/* <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
      <FormItem className="px-6 py-8">
              <FormLabel className="">Notas</FormLabel>
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
      /> */}
    </div>
  );
};
export default OrderDetailsTable;
