export type Status = "completed" | "in-progress" | "pending";

export type Process = {
  name: string;
  timeframe: number;
  progress: number;
  estimatedTime: number;
  status: Status;
  subProcess?: Process[];
};

export interface Product {
  _id: string;
  name: string;
  createdDate: string;
  estimatedTime: number;
  progressPercent: number;
  process: Process[];
  image: string;
  note: string;
}

export const products: Product[] = [
  {
    _id: "0001",
    name: "Craft a pickaxe",
    createdDate: "01/01/2020",
    estimatedTime: 0,
    progressPercent: 0,
    process: [
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
    ],
    image: "",
    note: "Remember to do this",
  },
  {
    _id: "0002",
    name: "Construir una casa simple",
    createdDate: "01/01/2020",
    estimatedTime: 60,
    progressPercent: 50,
    process: [
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
      },
    ],
    image: "https://i.imgur.com/5y99zHc.png",
    note: "Recuerda colocar una puerta y ventanas.",
  },
  {
    _id: "0003",
    name: "Build a House",
    createdDate: "02/01/2020",
    estimatedTime: 120,
    progressPercent: 0,
    process: [
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
    ],
    image: "house.jpg",
    note: "Make sure to build near a water source.",
  },
  {
    _id: "0004",
    name: "Explore a Cave",
    createdDate: "03/01/2020",
    estimatedTime: 90,
    progressPercent: 20,
    process: [
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
    ],
    image: "cave.jpg",
    note: "Watch out for monsters!",
  },
];
