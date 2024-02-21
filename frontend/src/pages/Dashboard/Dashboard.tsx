import Sidebar from "@/components/Sidebar/Sidebar";
import { dataProcess } from "@/data/procesos.data";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="flex">
        <div className="w-1/4">
          <Doughnut data={dataProcess} />
        </div>
        <div className="w-1/4">
          <Doughnut data={dataProcess} />
        </div>
        <div className="w-1/4">
          <Doughnut data={dataProcess} />
        </div>
        <div className="w-1/4">
          <Doughnut data={dataProcess} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
