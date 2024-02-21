import Sidebar from "@/components/Sidebar/Sidebar";
import { dataProcessPorcent } from "@/data/Dashboard/procesos.data";
import { dataProcessQ } from "@/data/Dashboard/process.dataq";
import { dataProcessQ2 } from "@/data/Dashboard/process.dataq2";
import { dataEmployee } from "@/data/Dashboard/employee.data";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="flex">
        <div className="w-1/4">
          <Doughnut data={dataProcessPorcent} />
        </div>
        <div className="w-1/4">
          <Doughnut data={dataProcessQ} />
        </div>

        <div className="w-1/4">
          <Doughnut data={dataEmployee} />
        </div>
        <div className="w-1/4">
          <Doughnut data={dataProcessQ2} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
