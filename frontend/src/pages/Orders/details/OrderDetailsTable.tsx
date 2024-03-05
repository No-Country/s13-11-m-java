import React from "react";

import { DataTable2 } from "@/components/ui/data-table2";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { columns as orderColumns } from "./orderColumn";
import {columns as processColumns} from "./processColumn"

import { Order } from "@/app/services/api/types";

interface OrderDetailsTableProps {
  orderData: Order;
}
const OrderDetailsTable: React.FC<OrderDetailsTableProps> = ({ orderData: data }) => {
  console.log(data)
  return (
    <div className="container py-10">
      <div className="flex flex-wrap justify-between gap-4">
        <h2 className="text-2xl">
          Pedido {data.id} - Cliente: {data.clientName}
        </h2>
      </div>
      <div className="grid max-w-full grid-flow-row grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-7">
        <div className="col-span-full flex h-full max-h-[26rem] grid-flow-row flex-col rounded-2xl">
          <div className="flex flex-col py-4 max-md:gap-2 md:flex-row"></div>
          <ScrollArea className="h-[50vh] whitespace-nowrap rounded-md border md:h-[60vh]">
            <div className="flex">{data ? <DataTable2 columns={orderColumns} data={[data]} /> : ""}</div>
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
            <div className="flex">{data.processes ? <DataTable2 columns={processColumns} data={[...data.processes]} /> : ""}</div>
            <div className="flex">{data.subprocesses  ? <DataTable2 columns={processColumns} data={[...data.subprocesses]} /> : ""}</div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};
export default OrderDetailsTable;
