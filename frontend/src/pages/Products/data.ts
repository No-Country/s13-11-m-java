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
];
