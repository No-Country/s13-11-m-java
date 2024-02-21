import Sidebar from "@/components/Sidebar/Sidebar";
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
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { options, data as barData } from "@/data/Dashboard/bar/bar.chart";
import { optionsComparative, dataComparative } from "@/data/Dashboard/comparative/comparative.chart";
import ProductsPage from "../Products/ProductsPage";
import { Progress } from "@/components/ui/progress";
import { Line } from "react-chartjs-2";

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
    <>
      <Sidebar />
      <div className="m-5 flex w-full flex-wrap">
        <div className="justify-content w-3/4 flex-wrap">
          <ProductsPage />
        </div>
        <div className="flex w-1/4 flex-col justify-between">
          <div className="mb-4 mt-8">
            <h2 className="mb-4 mt-4 px-8 text-3xl">
              <b>Progresos Activos</b>
            </h2>
            <label className="m-1 mb-4 mt-4 px-8 text-3xl">04</label>
            <Progress value={33} />
          </div>
          <div className="mb-4 mt-4">
            <Bar options={options} data={barData} />
          </div>
        </div>
        <div className="m-10 w-1/2 flex-wrap">
          <div className="justify-content flex w-1/2 flex-nowrap">
            <Doughnut data={dataProcessPorcent} />
            <Doughnut data={dataProcessQ} />
            <Doughnut data={dataEmployee} />
            <Doughnut data={dataProcessQ2} />
          </div>
          <div className="flex w-1/2">
            <Line options={optionsComparative} data={dataComparative} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
