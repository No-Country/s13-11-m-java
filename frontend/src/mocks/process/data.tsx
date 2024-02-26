export type Status = "completed" | "in-progress" | "pending";

export type SubProcess = {
  name: string;
  timeframe: number;
  progress: number;
  estimatedTime: number;
  status: Status;
};

export type Process = {
  name: string;
  timeframe: number;
  progress: number;
  estimatedTime: number;
  status: Status;
  subProcess: SubProcess[];
};

export const process: Process[] = [
  {
    name: "Collect 3 wood",
    timeframe: 30,
    progress: 100,
    estimatedTime: 0,
    status: "completed",
    subProcess: [
      {
        name: "Look for a three",
        timeframe: 5,
        progress: 100,
        estimatedTime: 20,
        status: "completed",
      },
    ],
  },

  {
    name: "Reunir materiales",
    timeframe: 30,
    progress: 100,
    estimatedTime: 0,
    status: "completed",
    subProcess: [
      {
        name: "Cortar madera",
        timeframe: 15,
        progress: 100,
        estimatedTime: 0,
        status: "completed",
      },
      {
        name: "Extraer piedra",
        timeframe: 10,
        progress: 100,
        estimatedTime: 0,
        status: "completed",
      },
      {
        name: "Recolectar arcilla",
        timeframe: 5,
        progress: 100,
        estimatedTime: 0,
        status: "completed",
      },
    ],
  },
  {
    name: "Construir la base",
    timeframe: 15,
    progress: 50,
    estimatedTime: 0,
    status: "in-progress",
    subProcess: [
      {
        name: "Colocar la base de piedra",
        timeframe: 5,
        progress: 100,
        estimatedTime: 0,
        status: "completed",
      },
      {
        name: "Construir paredes de madera",
        timeframe: 10,
        progress: 50,
        estimatedTime: 0,
        status: "in-progress",
      },
    ],
  },
  {
    name: "Agregar techo y detalles",
    timeframe: 15,
    progress: 0,
    estimatedTime: 0,
    status: "pending",
    subProcess: [],
  },

  {
    name: "Gather Materials",
    timeframe: 60,
    progress: 50,
    estimatedTime: 120,
    status: "in-progress",
    subProcess: [
      {
        name: "Collect Wood",
        timeframe: 30,
        progress: 100,
        estimatedTime: 0,
        status: "completed",
      },
      {
        name: "Mine Stone",
        timeframe: 30,
        progress: 0,
        estimatedTime: 60,
        status: "pending",
      },
    ],
  },
  {
    name: "Construct House",
    timeframe: 60,
    progress: 0,
    estimatedTime: 180,
    status: "pending",
    subProcess: [],
  },
  {
    name: "Prepare Equipment",
    timeframe: 30,
    progress: 100,
    estimatedTime: 0,
    status: "completed",
    subProcess: [
      {
        name: "Craft Torches",
        timeframe: 10,
        progress: 100,
        estimatedTime: 0,
        status: "completed",
      },
      {
        name: "Craft Pickaxe",
        timeframe: 20,
        progress: 100,
        estimatedTime: 0,
        status: "completed",
      },
    ],
  },
  {
    name: "Explore the Cave",
    timeframe: 60,
    progress: 20,
    estimatedTime: 300,
    status: "in-progress",
    subProcess: [
      {
        name: "Search for Ores",
        timeframe: 60,
        progress: 20,
        estimatedTime: 300,
        status: "in-progress",
      },
    ],
  },
];
