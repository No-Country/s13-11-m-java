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
  
  const randomData = labels.map(() => Math.floor(Math.random() * 10));
  const total1 = randomData.reduce((acc, curr) => acc + curr, 0);
  const total2 = randomData.reduce((acc, curr) => acc + curr, 0);
  
  // Calcular porcentajes
  export const dataComparativeEmployee = {
    labels,
    datasets: [
      {
        label: "Activos",
        data: randomData.map((value) => (value / total2) * 10),
        borderColor: "rgba(1, 167, 67, 1)",
        backgroundColor: "rgba(1, 167, 67, 1)",
      },
      {
        label: "Desvinculados",
        data: randomData.map((value) => (value / total1) * 5),
        borderColor: "rgba(214, 40, 40, 1)",
        backgroundColor: "rgba(214, 40, 40, 1)",
      },
    ],
  };
  