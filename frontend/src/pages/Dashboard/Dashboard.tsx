import Sidebar from "@/components/Sidebar/Sidebar";
import { dataProcessPorcent } from "@/data/Dashboard/donuts/procesos.data";
import { dataProcessQ } from "@/data/Dashboard/donuts/process.dataq";
import { dataProcessQ2 } from "@/data/Dashboard/donuts/process.dataq2";
import { dataEmployee } from "@/data/Dashboard/donuts/employee.data";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";
// import {Bar} from 'react-chartjs-2'
// import {options, data as barData} from '@/data/Dashboard/bar/bar.chart'
import ProductsPage from "../Products/ProductsPage";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="w-full">
        <div className="w-3/4 flex-nowrap justify-center">
          <ProductsPage />
        </div>
        <div className="block w-1/4">
          <div className="w-1/2"></div>
          <div className="w-1/2">{/* <Bar options={options} data={barData} /> */}</div>
        </div>
        <div className="w-1/4"></div>
        <div className="flex w-1/4">
          <Doughnut data={dataProcessPorcent} />
          <Doughnut data={dataProcessQ} />
          <Doughnut data={dataEmployee} />
          <Doughnut data={dataProcessQ2} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
