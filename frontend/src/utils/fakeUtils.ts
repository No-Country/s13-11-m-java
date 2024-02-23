// funcion para simular una espera de tiempo entre 2 rangos de tiempo
export const simulateLoading = (end: number = 500, start: number = 200) => {
  return new Promise((resolve) => {
    setTimeout(resolve, Math.random() * (end - start) + start);
  });
};
