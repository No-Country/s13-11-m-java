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

export type CreateProductRequest = Product;
export type CreateProductResponse = Product;

export type DeleteProductRequest = number;
export type DeleteProductResponse = number;

export type GetOrdersResponse = Order[];

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

// error de registro
export type RegisterError = ErrorRequest<{
  message: string;
  errors: Partial<Record<keyof RegisterRequest, string>>;
}>;

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
  product: string;
  subProcesses: SubProcess[];
  processAttributes: ProcessAttributes;
}

export interface SubProcess {
  id: number;
  process: string;
  processAttributes: ProcessAttributes;
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
  id: number;
  role: string;
  commonAttribute: CommonAttribute;
  company: string;
}

export interface Order {
  id: number;
  name: string;
  entryDate: string;
  errorTime: number;
  photoLink: string;
  initialDate: string;
  finishEstimatedDate: string;
  productId: number;
  clientId: number;
}

export interface ErrorRequest<T = unknown> {
  status: number;
  data: T;
}
