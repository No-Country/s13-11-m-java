import React from "react";

import type { Bar, Doughnut, Line } from "react-chartjs-2";

type BarProps = React.ComponentPropsWithoutRef<typeof Bar>;
type LineProps = React.ComponentPropsWithoutRef<typeof Line>;
type DoughnutProps = React.ComponentPropsWithoutRef<typeof Doughnut>;

export const barOptions: BarProps["options"] = {
  responsive: true,
};

const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
const days = ["01 Feb", "02 Feb", "03 Feb", "04 Feb", "05 Feb"];

const data2 = getRandomData(5);
const total1 = data2.reduce((acc, curr) => acc + curr, 0);
const total2 = data2.reduce((acc, curr) => acc + curr, 0);

export const barData: BarProps["data"] = {
  labels: months,
  datasets: [
    {
      label: "Procesos finalizados",
      data: getRandomData(5).map((value) => (value / 100) * 100),
      backgroundColor: "rgba(0, 48, 75, 1)",
    },
  ],
};

export const lineOptions: LineProps["options"] = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Gráfico de comparación",
    },
  },
};

export const lineData: LineProps["data"] = {
  labels: days,
  datasets: [
    {
      label: "Terminado",
      data: data2.map((value) => (value / total2) * 100),
      borderColor: "rgba(1, 167, 67, 1)",
      backgroundColor: "rgba(1, 167, 67, 1)",
    },
    {
      label: "Suspendido",
      data: data2.map((value) => (value / total1) * 50),
      borderColor: "rgba(214, 40, 40, 1)",
      backgroundColor: "rgba(214, 40, 40, 1)",
    },
  ],
};
export const doughnutDataEmployee: DoughnutProps["data"] = {
  labels: ["Activos", "Inactivos"],
  datasets: [
    {
      label: "Rendimiento Empleados",
      data: [4, 2],
      backgroundColor: ["rgba(1, 167, 67, 1)", "rgba(214, 40, 40, 1)"],
      borderColor: ["rgba(1, 167, 67, 1)", "rgba(214, 40, 40, 1)"],
      borderWidth: 1,
    },
  ],
};
export const doughnutDataProcessPorcent: DoughnutProps["data"] = {
  labels: ["Terminado", "En Progreso", "Suspendido"],
  datasets: [
    {
      label: "Procesos",
      data: [0.45, 0.35, 0.2],
      backgroundColor: ["rgba(1, 167, 67, 1)", "rgba(247, 127, 0, 1)", "rgba(214, 40, 40, 1)"],
      borderColor: ["rgba(1, 167, 67, 1)", "rgba(247, 127, 0, 1)", "rgba(214, 40, 40, 1)"],
      borderWidth: 1,
    },
  ],
};
export const doughnutDataProcessQ: DoughnutProps["data"] = {
  labels: ["En Progreso", "Suspendido"],
  datasets: [
    {
      label: "Procesos",
      data: [15, 4],
      backgroundColor: ["rgba(247, 127, 0, 1)", "rgba(214, 40, 40, 1)"],
      borderColor: ["rgba(247, 127, 0, 1)", "rgba(214, 40, 40, 1)"],
      borderWidth: 1,
    },
  ],
};
export const doughnutDataProcessQ2: DoughnutProps["data"] = {
  labels: ["Terminado", "Suspendido"],
  datasets: [
    {
      label: "Procesos",
      data: [20, 4],
      backgroundColor: ["rgba(1, 167, 67, 1)", "rgba(214, 40, 40, 1)"],
      borderColor: ["rgba(1, 167, 67, 1)", "rgba(214, 40, 40, 1)"],
      borderWidth: 1,
    },
  ],
};

function getRandomData(length: number) {
  return Array.from({ length }, () => Math.floor(Math.random() * 100));
}
