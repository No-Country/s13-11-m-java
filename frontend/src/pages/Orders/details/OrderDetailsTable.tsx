import React from "react";

import { DataTable2 } from "@/components/ui/data-table2";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { columns as orderColumns } from "./orderColumn";
import { columns as processColumns } from "./processColumn";
import { ProductOrder } from "@/app/services/api/types";

interface OrderDetailsTableProps {
  orderData?: ProductOrder;
}
const OrderDetailsTable: React.FC<OrderDetailsTableProps> = ({ orderData: data }) => {
  const productProcesses = data?.product.productProcesses ?? [];
  const subProcesses = productProcesses?.map((process) => process.subProcesses ?? []).flat() ?? [];

  return (
    <div className="container py-10">
      <div className="flex flex-wrap justify-between gap-4">
        <h2 className="text-2xl">
          Pedido {data?.client.id} - Cliente: {data?.client?.commonAttribute?.name}
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
            <div className="flex">
              {productProcesses?.length ? <DataTable2 columns={processColumns} data={productProcesses} /> : ""}
            </div>
            <div className="flex">
              {subProcesses.length ? <DataTable2 columns={processColumns} data={subProcesses} /> : ""}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};
export default OrderDetailsTable;
