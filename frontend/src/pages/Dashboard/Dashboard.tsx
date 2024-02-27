import useOrder from "@/hooks/useOrder";

import { DataTable } from "@/components/ui/data-table";
import { Progress } from "@/components/ui/progress";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { columns } from "../Orders/columns";
import {
  barData,
  barOptions,
  doughnutDataEmployee,
  doughnutDataProcessPorcent,
  doughnutDataProcessQ,
  doughnutDataProcessQ2,
  lineData,
  lineOptions,
} from "./data";
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

  return (
    <div className="grid grid-flow-row grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      <div className="col-span-full h-full max-h-[26rem] grid-flow-row rounded-2xl bg-background p-4 shadow-2xl md:col-span-3 md:row-span-2">
        <ScrollArea className="h-full whitespace-nowrap rounded-md border">
          <div className="flex">
            <DataTable columns={columns} data={orders} />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <div className="rounded-2xl bg-background p-4 shadow-2xl">
        <div>
          <h2 className="mb-4 mt-4 px-8 text-3xl">
            <b>Progresos Activos</b>
          </h2>
          <label className="m-1 mb-4 mt-4 px-8 text-3xl">04</label>
          <Progress value={33} />
        </div>
      </div>
      <div className="rounded-2xl bg-background p-4 shadow-2xl">
        <div>
          <Bar options={barOptions} data={barData} />
        </div>
      </div>
      <div className="rounded-2xl bg-background p-4 shadow-2xl">
        <div className="max-w-48">
          <Doughnut data={doughnutDataProcessPorcent} />
        </div>
      </div>
      <div className="rounded-2xl bg-background p-4 shadow-2xl">
        <div className="max-w-48">
          <Doughnut data={doughnutDataProcessQ} />
        </div>
      </div>
      <div className="col-span-full rounded-2xl bg-background p-4 shadow-2xl max-xl:order-5 xl:col-span-2 xl:row-span-2">
        <Line options={lineOptions} data={lineData} height={200} />
      </div>
      <div className="rounded-2xl bg-background p-4 shadow-2xl">
        <div className="max-w-48">
          <Doughnut data={doughnutDataEmployee} />
        </div>
      </div>
      <div className="rounded-2xl bg-background p-4 shadow-2xl">
        <div className="max-w-48">
          <Doughnut data={doughnutDataProcessQ2} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
