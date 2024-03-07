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
          <h2 className="text-1xl mt-4 text-center">Procesos finalizados</h2>
          <Bar options={options} data={barData} />
        </div>
      </div>
      <div className="rounded-2xl bg-background p-4 shadow-2xl">
        <div className="max-w-48">
          <h2 className="text-1xl mt-4 text-center">Actividad de empleados</h2>
          <div className="flex">
            <div>
              <Doughnut className="mt-10 max-h-40 max-w-40" data={dataProcessPorcent} />
              <div className="relative bottom-24 left-16 flex pt-1">
                <span className="font-semibold text-green-500">35%</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 px-2 py-2">
              <div className="relative top-10 flex">
                <div className="h-5 w-5 rounded-full bg-red-500"></div>
                <span className="px-2">Suspendido</span>
              </div>
              <div className="relative top-10 flex">
                <div className="relative h-5 w-5 rounded-full bg-orange-500"></div>
                <span className="pl-2">En</span>
                <span className="pl-1">proceso</span>
              </div>
              <div className="relative top-10 flex">
                <div className="relative h-5 w-5 rounded-full bg-green-500"></div>
                <span className=" px-2">Terminado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-2xl bg-background p-4 shadow-2xl">
        <div className="max-w-48">
          <h2 className="text-1xl mt-4 text-center">Actividad de empleados</h2>
          <div className="flex">
            <div className="">
              <Doughnut className="mt-10 max-h-40 max-w-40" data={dataEmployee} />
              <div className="relative bottom-24 left-14 flex pl-1 pt-1">
                <span className="font-semibold text-red-500">02</span>
                <span className="font-semibold">/</span>
                <span className="font-semibold text-green-500">04</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 px-2 py-2">
              <div className="relative top-10 flex">
                <div className="h-5 w-5 rounded-full bg-green-500"></div>
                <span className=" px-2">Activos</span>
              </div>
              <div className="relative top-10 flex">
                <div className="relative h-5 w-5 rounded-full bg-red-500"></div>
                <span className=" px-2">Inactivos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-full rounded-2xl bg-background p-4 shadow-2xl max-xl:order-5 xl:col-span-2 xl:row-span-2">
        <Line options={optionsComparative} data={dataComparative} height={200} />
      </div>
      <div className="rounded-2xl bg-background p-4 shadow-2xl">
        <div className="max-w-48">
          <h2 className="text-1xl mt-4 text-center">Actividad de empleados</h2>
          <div className="flex">
            <div className="">
              <Doughnut className="mt-10 max-h-40 max-w-40" data={dataProcessQ} />
              <div className="relative bottom-24 left-14 flex pl-1 pt-1">
                <span className="font-semibold text-red-500">04</span>
                <span className="font-semibold">/</span>
                <span className="font-semibold text-orange-500">15</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 px-2 py-2">
              <div className="relative top-10 flex">
                <div className="h-5 w-5 rounded-full bg-red-500"></div>
                <span className=" px-2">Suspendido</span>
              </div>
              <div className="relative top-10 flex">
                <div className="relative h-5 w-5 rounded-full bg-orange-500"></div>
                <span className=" px-2">En proceso</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-2xl bg-background p-4 shadow-2xl">
        {/* <div className="max-w-48">
          <h2 className="text-1xl mt-4 text-center">Procesos</h2>
          <Doughnut className="mt-10 max-h-40 max-w-40" data={dataProcessQ2} />
        </div> */}
        <div className="max-w-48">
          <h2 className="text-1xl mt-4 text-center">Actividad de empleados</h2>
          <div className="flex">
            <div className="">
              <Doughnut className="mt-10 max-h-40 max-w-40" data={dataProcessQ2} />
              <div className="relative bottom-24 left-14 flex pl-1 pt-1">
                <span className="font-semibold text-red-500">04</span>
                <span className="font-semibold">/</span>
                <span className="font-semibold text-green-500">20</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 px-2 py-2">
              <div className="relative top-10 flex">
                <div className="h-5 w-5 rounded-full bg-green-500"></div>
                <span className=" px-2">Terminado</span>
              </div>
              <div className="relative top-10 flex">
                <div className="relative h-5 w-5 rounded-full bg-red-500"></div>
                <span className=" px-2">Suspendido</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
