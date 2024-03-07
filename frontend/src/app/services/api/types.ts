export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export type Employee = {
  name: string;
  state: boolean;
  startdate: string;
  jornada: string;
  cantidadfinalizados: number;
  role: string;
  timeEstimatedCompletion: string;
  company: string;
  active: boolean;
};

export type Auth = {
  token: string;
  refreshToken: string;
  user?: User;
};

// new response auth
export type SignUpRequest = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
};

export type SignUpResponse = Auth;

export type SignInRequest = {
  email: string;
  password: string;
};

export type SignInResponse = Auth;

export type RefreshTokenRequest = {
  token: string;
};

export type RefreshTokenResponse = Auth;

export type Product = {
  id?: number;
  idUnico: string;
  name: string;
  instruction: string;
  createDate?: string;
  description: string;
  state?: State;
  timeEstimatedCompletion: number;
  timeAverage: number;
  timeMargin: number;
  productProcesses?: ProductProcess[];
  // company?: Company;
  active?: boolean;
};

export type ProcessAttributes = {
  name: string;
  timeEstimatedCompletion: number;
  timeAverage: number;
  timeMargin: number;
  comment: string;
  state: State;
  active: boolean;
  counter: number;
};

export type ProductProcess = {
  id?: number;
  product: string;
  subProcesses?: SubProcess[];
  processAttributes?: ProcessAttributes;
};

export type SubProcess = {
  id?: number;
  productProcess: string;
  // processAttributes?: ProcessAttributes;
  subProcessAttributes?: ProcessAttributes;
};

export type Company = {
  id: number;
  commonAttribute: CommonAttribute;
  employee: UserE[];
};

export type CommonAttribute = {
  email: string;
  password: string;
  address?: string;
  phone?: string;
  name: string;
};

export type UserE = {
  id: number;
  roles: string[];
  commonAttribute: CommonAttribute;
  // company: CompanyAPI;
};
// new response product
export type ProductUpdateResponse = Product;
export type ProductUpdateRequest = Product;

export type ProductProcessResponse = Product;
export type ProductProcessRequest = ProductProcess & { productId: number };

export type ProductCreateResponse = Product;
export type ProductCreateRequest = Product;

export type ProductNameResponse = Product;
export type ProductNameRequest = string;

export type ProductIdResponse = Product;
export type ProductIdRequest = number;

export type UniqueProductIdResponse = Product;
export type UniqueProductIdRequest = string;

export type AllProductsResponse = Product[];

export type DeleteProductProcessResponse = Product;
export type DeleteProductProcessRequest = {
  productId: number;
  processId: number;
};

export type DeleteProductRequest = number;

// new response order
export type ProductOrder = {
  id: number;
  name: string;
  errorTime: number;
  photoLink: string;
  state: State;
  initialDate: string;
  finishEstimatedDate: string;
  productId: number;
  client: Client;
  product: Product;
};

export type Client = {
  id: number;
  commonAttribute: CommonAttribute;
  company: Company;
};

export type CreateOrderResponse = ProductOrder; /* No response */
export type CreateOrderRequest = Omit<ProductOrder, "id" | "product" | "client"> & {
  client: {
    commonAttribute: Pick<CommonAttribute, "name">;
  };
};

export type UpdateOrderResponse = ProductOrder; /* No response */
export type UpdateOrderRequest = ProductOrder & { orderId: number };

export type GetOrderByIdResponse = ProductOrder;
export type GetOrderByIdRequest = number;

export type GetOrdersByClientIdResponse = ProductOrder[];
export type GetOrdersByClientIdRequest = number;

export type ListAllOrdersResponse = ProductOrder[];

export type GetOrdersByDateResponse = ProductOrder[];
export type GetOrdersByDateRequest = string;

export type DeleteOrderResponse = void;
export type DeleteOrderIdRequest = number;

export type GetProcessByIdResponse = ProductProcess;
export type GetProcessByIdRequest = number;
export type UpdateProcessResponse = ProductProcess;
export type UpdateProcessRequest = ProductProcess;
export type DeleteProcessResponse = void;
export type DeleteProcessRequest = number;
export type CreateSubprocessResponse = SubProcess & { id: number };
export type CreateSubprocessRequest = ProductProcess;
export type ListAllProcessesResponse = ProductProcess[];
export type DeleteSubprocessResponse = void;
export type DeleteSubprocessRequest = {
  processId: number;
  subprocessId: number;
};

export enum State {
  PENDIENTE = "PENDIENTE",
  EN_PROGRESO = "EN_PROGRESO",
  TERMINADO = "TERMINADO",
  SUSPENDIDO = "SUSPENDIDO",
}
