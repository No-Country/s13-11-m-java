export const options = {
  responsive: true,
};

const labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

const randomData = labels.map(() => Math.floor(Math.random() * 100));
const total1 = randomData.reduce((acc, curr) => acc + curr, 0);

// Calcular porcentajes
export const data = {
  labels,
  datasets: [
    {
      label: "Procesos finalizados",
      data: randomData.map((value) => (value / total1) * 100),
      backgroundColor: "rgba(0, 48, 75, 1)",
    },
  ],
};
