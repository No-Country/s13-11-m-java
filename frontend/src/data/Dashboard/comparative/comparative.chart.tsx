export const optionsComparative = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Gráfico de comparación",
    },
  },
};

const labels = ["01 Feb", "02 Feb", "03 Feb", "04 Feb", "05 Feb"];

const randomData = labels.map(() => Math.floor(Math.random() * 100));
const total1 = randomData.reduce((acc, curr) => acc + curr, 0);
const total2 = randomData.reduce((acc, curr) => acc + curr, 0);

// Calcular porcentajes
export const dataComparative = {
  labels,
  datasets: [
    {
      label: "Terminado",
      data: randomData.map((value) => (value / total2) * 100),
      borderColor: "rgba(1, 167, 67, 1)",
      backgroundColor: "rgba(1, 167, 67, 1)",
    },
    {
      label: "Suspendido",
      data: randomData.map((value) => (value / total1) * 50),
      borderColor: "rgba(214, 40, 40, 1)",
      backgroundColor: "rgba(214, 40, 40, 1)",
    },
  ],
};
