import { columns } from "./orderColumn";
import { DataTable2 } from "@/components/ui/data-table2";
import React from "react";
// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
// import { Order} from "@/app/services/api/types";
import useOrder from "@/hooks/useOrder";

interface OrderDetailsTableProps {
  orderId?: number;
}

const OrderDetailsTable: React.FC<OrderDetailsTableProps> = (props) => {
  const { orders } = useOrder();
  const orderSelected = orders.find((o) => o.id === props.orderId);
  console.log("orderSelected", orderSelected);
  return (
    <div className="container py-10">
      <div className="flex flex-wrap justify-between gap-4">
        <h2 className="text-2xl">
          Pedido {orderSelected?.id} - Cliente: {orderSelected?.clientId}
        </h2>
      </div>
      <div className="grid max-w-full grid-flow-row grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-7">
        <div className="col-span-full flex h-full max-h-[26rem] grid-flow-row flex-col rounded-2xl">
          <div className="flex flex-col py-4 max-md:gap-2 md:flex-row"></div>
          <ScrollArea className="h-[50vh] whitespace-nowrap rounded-md border md:h-[60vh]">
            <div className="flex">{orderSelected ? <DataTable2 columns={columns} data={[orderSelected]} /> : ""}</div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};
export default OrderDetailsTable;
