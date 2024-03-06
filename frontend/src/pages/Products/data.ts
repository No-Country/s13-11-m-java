export type ProductState = "completed" | "in-progress" | "pending";

export interface Product {
  id: string;
  name: string;
  state: ProductState;
  progress: number;
  total: number;
  startDatetime: string;
  client: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Product 1",
    state: "completed",
    progress: 100,
    total: 100,
    startDatetime: "2024-03-22T00:00:00Z",
    client: "Client 1",
  },
  {
    id: "2",
    name: "Product 2",
    state: "in-progress",
    progress: 50,
    total: 100,
    startDatetime: "2024-03-23T00:00:00Z",
    client: "Client 2",
  },
  {
    id: "3",
    name: "Product 3",
    state: "pending",
    progress: 0,
    total: 100,
    startDatetime: "2024-03-24T00:00:00Z",
    client: "Client 3",
  },
  {
    id: "4",
    name: "Product 4",
    state: "completed",
    progress: 100,
    total: 100,
    startDatetime: "2024-03-25T00:00:00Z",
    client: "Client 4",
  },
  {
    id: "5",
    name: "Product 5",
    state: "in-progress",
    progress: 25,
    total: 100,
    startDatetime: "2024-03-26T00:00:00Z",
    client: "Client 5",
  },
  {
    id: "6",
    name: "Product 6",
    state: "pending",
    progress: 0,
    total: 100,
    startDatetime: "2024-03-27T00:00:00Z",
    client: "Client 6",
  },
  {
    id: "7",
    name: "Product 7",
    state: "completed",
    progress: 100,
    total: 100,
    startDatetime: "2024-03-28T00:00:00Z",
    client: "Client 7",
  },
  {
    id: "8",
    name: "Product 8",
    state: "in-progress",
    progress: 75,
    total: 100,
    startDatetime: "2024-03-29T00:00:00Z",
    client: "Client 8",
  },
  {
    id: "9",
    name: "Product 9",
    state: "pending",
    progress: 0,
    total: 100,
    startDatetime: "2024-04-03T00:00:00Z",
    client: "Client 9",
  },
  {
    id: "10",
    name: "Product 10",
    state: "completed",
    progress: 100,
    total: 100,
    startDatetime: "2024-04-04T00:00:00Z",
    client: "Client 10",
  },
  {
    id: "11",
    name: "Product 11",
    state: "in-progress",
    progress: 100,
    total: 100,
    startDatetime: "2024-04-06T00:00:00Z",
    client: "Client 11",
  },
  {
    id: "12",
    name: "Product 12",
    state: "pending",
    progress: 0,
    total: 100,
    startDatetime: "2024-04-08T00:00:00Z",
    client: "Client 12",
  },
  {
    id: "13",
    name: "Product 13",
    state: "completed",
    progress: 100,
    total: 100,
    startDatetime: "2024-04-14T00:00:00Z",
    client: "Client 13",
  },
  {
    id: "14",
    name: "Product 14",
    state: "in-progress",
    progress: 100,
    total: 100,
    startDatetime: "2024-04-05T00:00:00Z",
    client: "Client 14",
  },
];
