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

export type DeleteOrderRequest = number;
export type DeleteOrderResponse = number;

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
  productProcesses: Process[];
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
  subProcessAttributes?: ProcessAttributes;
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
  clientName: string;
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
  subprocesses: SubProcess[];
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

export interface mainProcesses {
  id: number;
  name: string;
  timeReal: number;
  timeAverage: number;
  timeMargin: number;
  comment: string;
  state: boolean;
  initialDate: string;
  endDate: string;
  employee: string;
}

export interface subprocesses {
  parentId: number;
  id: number;
  name: string;
  timeReal: number;
  timeAverage: number;
  timeMargin: number;
  comment: string;
  state: boolean;
  initialDate: string;
  endDate: string;
  employee: string;
}

export interface formatedOrder {
  id: number;
  name: string;
  clientName: string;
  initialDate: string;
  endDate: string;
  state: string;
  processes: mainProcesses[];
  subprocesses: subprocesses[];
}

export type Auth = {
  token: string;
  refreshToken: string;
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

export type ProductAPI = {
  id?: number;
  idUnico: string;
  name: string;
  instruction: string;
  createDate?: string;
  description: string;
  state?: boolean;
  timeEstimatedCompletion: string;
  productProcesses?: ProductProcessAPI[];
  company?: CompanyAPI;
  active?: boolean;
};

export type ProcessAttributesAPI = {
  name: string;
  timeReal: number;
  timeAverage: number;
  timeMargin: number;
  comment: string;
  state: boolean;
  active: boolean;
  counter: number;
};

export type ProductProcessAPI = {
  id?: number;
  // product: string;
  subProcesses?: SubProcessAPI[];
  processAttributes?: ProcessAttributesAPI;
};

export type SubProcessAPI = {
  id?: number;
  // productProcess: string;
  processAttributes?: ProcessAttributesAPI;
  subProcessAttributes?: ProcessAttributesAPI;
};

export type CompanyAPI = {
  id: number;
  commonAttribute: CommonAttributeAPI;
  employee: UserEAPI[];
};

export type CommonAttributeAPI = {
  email: string;
  password: string;
  address?: string;
  phone?: string;
  name: string;
};

export type UserEAPI = {
  id: number;
  roles: string[];
  commonAttribute: CommonAttributeAPI;
  // company: CompanyAPI;
};
// new response product
export type ProductUpdateResponse = ProductAPI;
export type ProductUpdateRequest = ProductAPI;

export type ProductProcessResponse = ProductAPI;
export type ProductProcessRequest = ProductProcessAPI & { productId: number };

export type ProductCreateResponse = ProductAPI;
export type ProductCreateRequest = ProductAPI;

export type ProductNameResponse = ProductAPI;
export type ProductNameRequest = string;

export type ProductIdResponse = ProductAPI;
export type ProductIdRequest = number;

export type UniqueProductIdResponse = ProductAPI;
export type UniqueProductIdRequest = string;

export type AllProductsResponseAPI = ProductAPI[];

export type DeleteProductProcessResponse = ProductAPI;
export type DeleteProductProcessRequest = {
  productId: number;
  processId: number;
};

export type DeleteProductRequestAPI = number;

// new response order
export type ProductOrderAPI = {
  id: number;
  name: string;
  errorTime: number;
  photoLink: string;
  initialDate: string;
  finishEstimatedDate: string;
  productId: number;
  client: ClientAPI;
  product: ProductAPI;
};

export type ClientAPI = {
  id: number;
  commonAttribute: CommonAttributeAPI;
  company: CompanyAPI;
};

export type CreateOrderResponseAPI = ProductOrderAPI; /* No response */
export type CreateOrderRequestAPI = Omit<ProductOrderAPI, "id" | "product" | "client"> & {
  client: {
    commonAttribute: Pick<CommonAttributeAPI, "name">;
  };
};

export type UpdateOrderResponse = ProductOrderAPI; /* No response */
export type UpdateOrderRequest = ProductOrderAPI & { orderId: number };

export type GetOrderByIdResponseAPI = ProductOrderAPI;
export type GetOrderByIdRequestAPI = number;

export type GetOrdersByClientIdResponse = ProductOrderAPI[];
export type GetOrdersByClientIdRequest = number;

export type ListAllOrdersResponse = ProductOrderAPI[];

export type GetOrdersByDateResponse = ProductOrderAPI[];
export type GetOrdersByDateRequest = string;

export type DeleteOrderResponseAPI = void;
export type DeleteOrderIdRequestAPI = number;

export type GetProcessByIdResponse = ProductProcessAPI;
export type GetProcessByIdRequest = number;
export type UpdateProcessResponse = ProductProcessAPI;
export type UpdateProcessRequest = ProductProcessAPI;
export type DeleteProcessResponse = void;
export type DeleteProcessRequest = number;
export type CreateSubprocessResponse = SubProcessAPI & { id: number };
export type CreateSubprocessRequest = ProductProcessAPI;
export type ListAllProcessesResponse = ProductProcessAPI[];
export type DeleteSubprocessResponse = void;
export type DeleteSubprocessRequest = {
  processId: number;
  subprocessId: number;
};
