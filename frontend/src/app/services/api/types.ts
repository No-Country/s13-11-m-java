export type AllProductsResponse = Product[];

export type AllEmployeesResponse = Employee[];

export type GetProductByNameRequest = string;
export type GetProductByNameResponse = Product;

export type GetProductByIdRequest = number;
export type GetProductByIdResponse = Product;

export type GetProductByUnicoIdRequest = string;
export type GetProductByUnicoIdResponse = Product;

export type UpdateProductRequest = Product;
export type UpdateProductResponse = Product;

export type GetOrderByIdRequest = number;
export type GetOrderByIdResponse = Order;

export type CreateProductRequest = Pick<
  Product,
  "idUnico" | "name" | "instruction" | "description" | "timeEstimatedCompletion"
>;
export type CreateProductResponse = Product;

export type CreateProcessRequest = Process & { productId: number };
export type CreateProcessResponse = Process;

export type DeleteProductRequest = number;
export type DeleteProductResponse = number;

export type GetOrdersResponse = Order[];
export type GetEmployeesResponse = Employee[];

export type GetProcessResponse = Process;
export type CreateOrderRequest = OrderRequest;
export type CreateOrderResponse = OrderResponse;

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface UserResponse {
  user: User;
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
}

export interface Product {
  id: number;
  idUnico: string;
  name: string;
  instruction: string;
  description: string;
  totalProduction: number;
  state: boolean;
  timeEstimatedCompletion: string;
  processes: Process[];
  company: Company;
  active: boolean;
}

export interface Process {
  id: number;
  subProcesses: SubProcess[];
  processAttributes: ProcessAttributes;
}

export interface SubProcess {
  id?: number;
  process?: string;
  processAttributes?: ProcessAttributes;
}

export interface ProcessAttributes {
  name: string;
  timeReal: number;
  timeAverage: number;
  timeMargin: number;
  comment: string;
  state: boolean;
  active: boolean;
  counter: number;
}

export interface Company {
  id: number;
  commonAttribute: CommonAttribute;
  products: string[];
  employee: Employee[];
}

export interface CommonAttribute {
  email: string;
  password: string;
  address: string;
  phone: string;
  name: string;
}

export interface Employee {
  name: string;
  state: string;
  startdate: string;
  jornada: string;
  cantidadfinalizados: number;
  role: string;
  timeEstimatedCompletion: string;
  company: string;
  active: boolean;
}

export interface Order {
  id: number;
  client: {
    id: number;
    commonAttribute: {
      email: null;
      password: null;
      address: null;
      phone: null;
      name: string;
    };
  };
  product: Product;
  name: string;
  entryDate: string;
  errorTime: number;
  photoLink: string;
  initialDate: string;
  endDate: string;
  productId: number;
  clientId: number;
  idUnico: string;
  instruction: string;
  description: string;
  totalProduction: number;
  finishEstimatedDate: string;
  state: string;
  timeEstimatedCompletion: string;
  processes: Process[];
  company: Company;
  active: boolean;
}

export interface OrderRequest {
  name: string;
  errorTime: number;
  photoLink: string;
  initialDate: string;
  finishEstimatedDate: string;
  productId: number;
  client: {
    commonAttribute: {
      name: string;
    };
  };
}

export interface OrderResponse {
  id: number;
  name: string;
  entryDate: Date;
  errorTime: number;
  photoLink: string;
  initialDate: Date;
  finishEstimatedDate: Date;
  product: Product;
  client: {
    id: number;
    commonAttribute: {
      email: null;
      password: null;
      address: null;
      phone: null;
      name: string;
    };
  };
}
