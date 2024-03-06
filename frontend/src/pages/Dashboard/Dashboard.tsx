import React from "react";

import useOrder from "@/hooks/useOrder";

import { DataTable } from "@/components/ui/data-table";
import { Progress } from "@/components/ui/progress";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { LuFileCheck } from "react-icons/lu";

import { columns } from "../Orders/columns";
import { data as barData, options } from "@/data/Dashboard/bar/bar.chart";
import { dataComparative, optionsComparative } from "@/data/Dashboard/comparative/comparative.chart";
import { dataEmployee } from "@/data/Dashboard/donuts/employee.data";
import { dataProcessPorcent } from "@/data/Dashboard/donuts/procesos.data";
import { dataProcessQ } from "@/data/Dashboard/donuts/process.dataq";
import { dataProcessQ2 } from "@/data/Dashboard/donuts/process.dataq2";
import { ColumnFiltersState } from "@tanstack/react-table";
import {
  ArcElement,
  BarElement, // Legend,
  CategoryScale,
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  CategoryScale,
  PointElement,
  LineElement
);

const Dashboard = () => {
  const { orders } = useOrder();
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);

  const activeOrders = orders.reduce((acc, order) => (order ? acc + 1 : acc), 0);
  const totalOrders = orders.length;
  const progress = (activeOrders * 100) / totalOrders;

  return (
    <div className="grid grid-flow-row grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      <div className="col-span-full h-full max-h-[26rem] grid-flow-row rounded-2xl bg-background p-4 shadow-2xl md:col-span-3 md:row-span-2">
        <ScrollArea className="h-full whitespace-nowrap rounded-md border">
          <div className="flex">
            <DataTable
              columns={columns}
              data={orders}
              columnFilters={columnFilters}
              setColumnFilters={setColumnFilters}
            />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <div className="flex flex-col justify-between rounded-2xl bg-background px-4 py-6 shadow-2xl">
        <div className="flex items-center justify-between text-2xl">
          <h2>
            <b>Progresos activos</b>
          </h2>
          <LuFileCheck />
        </div>
        <label className="text-3xl">{activeOrders.toString().padStart(2, "0")}</label>
        <div className="flex flex-col gap-2">
          {activeOrders < totalOrders && <label className="text-sm">Completar progresos</label>}
          <Progress value={progress} />
        </div>
      </div>
      <div className="rounded-2xl bg-background p-4 shadow-2xl">
        <div>
          <Bar options={options} data={barData} />
        </div>
      </div>
      <div className="rounded-2xl bg-background p-4 shadow-2xl">
        <div className="max-w-48">
          <Doughnut data={dataProcessPorcent} />
        </div>
      </div>
      <div className="rounded-2xl bg-background p-4 shadow-2xl">
        <div className="max-w-48">
          <Doughnut data={dataProcessQ} />
        </div>
      </div>
      <div className="col-span-full rounded-2xl bg-background p-4 shadow-2xl max-xl:order-5 xl:col-span-2 xl:row-span-2">
        <Line options={optionsComparative} data={dataComparative} height={200} />
      </div>
      <div className="rounded-2xl bg-background p-4 shadow-2xl">
        <div className="max-w-48">
          <Doughnut data={dataEmployee} />
        </div>
      </div>
      <div className="rounded-2xl bg-background p-4 shadow-2xl">
        <div className="max-w-48">
          <Doughnut data={dataProcessQ2} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
