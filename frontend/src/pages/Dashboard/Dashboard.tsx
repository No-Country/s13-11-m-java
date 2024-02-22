import { dataProcessPorcent } from "@/data/Dashboard/donuts/procesos.data";
import { dataProcessQ } from "@/data/Dashboard/donuts/process.dataq";
import { dataProcessQ2 } from "@/data/Dashboard/donuts/process.dataq2";
import { dataEmployee } from "@/data/Dashboard/donuts/employee.data";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement,
} from "chart.js";

import { Doughnut, Bar, Line } from "react-chartjs-2";
import { options, data as barData } from "@/data/Dashboard/bar/bar.chart";
import { optionsComparative, dataComparative } from "@/data/Dashboard/comparative/comparative.chart";
import { Progress } from "@/components/ui/progress";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "../Products/columns";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { products } from "../Products/data";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  CategoryScale,
  PointElement,
  LineElement
);

const Dashboard = () => {
  return (
    <div className="container grid max-w-full grid-flow-row grid-cols-1 gap-8 py-8 sm:grid-cols-2 md:grid-cols-3 md:pl-20 lg:grid-cols-4">
      <div className="col-span-full h-full max-h-[26rem] rounded-2xl bg-background p-4 shadow-2xl md:col-span-3 md:row-span-2">
        <ScrollArea className="h-full whitespace-nowrap rounded-md border">
          <div className="flex">
            <DataTable columns={columns} data={products} />
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
          <Bar options={options} data={barData} />
        </div>
      </div>
      <div className="rounded-2xl bg-background p-4 shadow-2xl">
        <Doughnut data={dataProcessPorcent} />
      </div>
      <div className="rounded-2xl bg-background p-4 shadow-2xl">
        <Doughnut data={dataProcessQ} />
      </div>
      <div className="col-span-full rounded-2xl bg-background p-4 shadow-2xl max-lg:order-5 lg:col-span-2 lg:row-span-2">
        <Line options={optionsComparative} data={dataComparative} style={{ width: "100%" }} />
      </div>
      <div className="rounded-2xl bg-background p-4 shadow-2xl">
        <Doughnut data={dataEmployee} />
      </div>
      <div className="rounded-2xl bg-background p-4 shadow-2xl">
        <Doughnut data={dataProcessQ2} />
      </div>
    </div>
  );
};

export default Dashboard;
