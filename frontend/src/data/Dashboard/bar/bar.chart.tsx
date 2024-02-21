export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Procesos activos",
    },
  },
};

const labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(0, 48, 75, 1)",
    },
    //   {
    //     label: 'Dataset 2',
    //     // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //     backgroundColor: 'rgba(0, 48, 75, 1)',
    //   },
  ],
};
