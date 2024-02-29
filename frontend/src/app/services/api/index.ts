import { apiUrl, authCredentials, registerCredentials } from "@/constants/api";
import { simulateLoading } from "@/utils/fakeUtils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  LoginRequest,
  UserResponse,
  AllProductsResponse,
  GetProductByNameRequest,
  GetProductByNameResponse,
  GetProductByIdRequest,
  GetProductByIdResponse,
  GetProductByUnicoIdRequest,
  GetProductByUnicoIdResponse,
  UpdateProductRequest,
  UpdateProductResponse,
  CreateProductRequest,
  CreateProductResponse,
  DeleteProductRequest,
  DeleteProductResponse,
  GetOrdersResponse,
  GetEmployeesResponse,
} from "./types";
import { RootState } from "@/app/store";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      queryFn: async (args) => {
        const { email, password } = args;
        await simulateLoading();
        if (email === authCredentials.email && password === authCredentials.password) {
          const json = await import("@/mocks/users/user.json");
          return { data: json.default as UserResponse };
        } else {
          return {
            error: {
              status: 401,
              data: { message: "Invalid credentials" },
            },
          };
        }
      },
    }),
    register: builder.mutation<UserResponse, LoginRequest>({
      queryFn: async (args) => {
        const { email, password } = args;
        await simulateLoading();
        if (email === registerCredentials.email && password === registerCredentials.password) {
          const json = await import("@/mocks/users/user.json");
          return { data: json.default as UserResponse };
        } else {
          return {
            error: {
              status: 400,
              data: { message: "Invalid data" },
            },
          };
        }
      },
    }),
    forgotPassword: builder.mutation<void, string>({
      queryFn: async (email) => {
        await simulateLoading();
        if (email === authCredentials.email) {
          return { data: undefined };
        } else {
          return {
            error: {
              status: 404,
              data: { message: "User not found" },
            },
          };
        }
      },
    }),
    // endpoints de productos
    getAllProducts: builder.query<AllProductsResponse, void>({
      // query: () => "products/all",
      queryFn: async () => {
        await simulateLoading();
        const json = await import("@/mocks/products/all.json");
        return { data: json.default as unknown as AllProductsResponse };
      },
    }),
    getProductByName: builder.query<GetProductByNameResponse, GetProductByNameRequest>({
      // query: (name) => `products/product-name/${name}`,
      queryFn: async (name, api) => {
        await simulateLoading();

        const state = api.getState() as RootState;
        const { data } = (state.api.queries.getAllProducts?.data || { data: [] }) as { data: AllProductsResponse };

        const product = data.find((p) => p.name === name);

        if (product) {
          return { data: product };
        } else {
          const json = await import("@/mocks/products/one.json");
          return { data: json.default as unknown as GetProductByNameResponse };
        }
      },
    }),
    getProductById: builder.query<GetProductByIdResponse, GetProductByIdRequest>({
      // query: (id) => `products/product-id/${id}`,
      queryFn: async (id, api) => {
        await simulateLoading();

        const state = api.getState() as RootState;
        const { data } = (state.api.queries.getAllProducts?.data || { data: [] }) as { data: AllProductsResponse };

        const product = data.find((p) => p.id === id);

        if (product) {
          return { data: product };
        } else {
          const json = await import("@/mocks/products/one.json");
          return { data: json.default as unknown as GetProductByNameResponse };
        }
      },
    }),
    getProductByUnicoId: builder.query<GetProductByUnicoIdResponse, GetProductByUnicoIdRequest>({
      // query: (idUnico) => `products/product-id-unico/${idUnico}`,
      queryFn: async (idUnico, api) => {
        await simulateLoading();

        const state = api.getState() as RootState;
        const { data } = (state.api.queries.getAllProducts?.data || { data: [] }) as { data: AllProductsResponse };

        const product = data.find((p) => p.idUnico === idUnico);

        if (product) {
          return { data: product };
        } else {
          const json = await import("@/mocks/products/one.json");
          return { data: json.default as unknown as GetProductByNameResponse };
        }
      },
    }),
    updateProduct: builder.mutation<UpdateProductResponse, UpdateProductRequest>({
      // query: (product) => `products/update/${product.id}`,
      queryFn: async () => {
        await simulateLoading();
        const json = await import("@/mocks/products/one.json");
        return { data: json.default as unknown as UpdateProductResponse };
      },
    }),
    createProduct: builder.mutation<CreateProductResponse, CreateProductRequest>({
      // query:'products/create'
      queryFn: async () => {
        await simulateLoading();
        const json = await import("@/mocks/products/one.json");
        return { data: json.default as unknown as CreateProductResponse };
      },
    }),
    deleteProduct: builder.mutation<DeleteProductResponse, DeleteProductRequest>({
      // query: (id) => `products/delete/${id}`,
      queryFn: async (id) => {
        await simulateLoading();
        return { data: id };
      },
    }),

    // endpoints de ordenes
    getOrders: builder.query<GetOrdersResponse, void>({
      // query: () => "orders/all",
      queryFn: async () => {
        await simulateLoading();
        const json = await import("@/mocks/orders/all.json");
        return { data: json.default as GetOrdersResponse };
      },
    }),
    //endpoint de empleados
    getEmployeers: builder.query<GetEmployeesResponse, void>({
      // query: () => "orders/all",
      queryFn: async () => {
        await simulateLoading();
        const json = await import("@/mocks/employees/employees.json");
        return { data: json.default as GetEmployeesResponse };
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useForgotPasswordMutation,
  useRegisterMutation,
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetProductByNameQuery,
  useGetProductByUnicoIdQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetOrdersQuery,
  useGetEmployeersQuery,
} = api;
