import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  AllProductsResponse,
  CreateProductRequest,
  CreateProductResponse,
  DeleteProductRequest,
  DeleteProductResponse,
  GetOrdersResponse,
  GetProductByIdRequest,
  GetProductByIdResponse,
  GetProductByNameRequest,
  GetProductByNameResponse,
  GetProductByUnicoIdRequest,
  GetProductByUnicoIdResponse,
  LoginRequest,
  UpdateProductRequest,
  UpdateProductResponse,
  UserResponse,
} from "./types";
import { apiUrl, authCredentials, registerCredentials } from "@/constants/api";
import { simulateLoading } from "@/utils/fakeUtils";

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
      query: () => "v1/products/all",
    }),

    getProductByName: builder.query<GetProductByNameResponse, GetProductByNameRequest>({
      query: (name) => `products/product-name/${name}`,
    }),
    getProductById: builder.query<GetProductByIdResponse, GetProductByIdRequest>({
      query: (id) => `products/product-id/${id}`,
    }),

    getProductByUnicoId: builder.query<GetProductByUnicoIdResponse, GetProductByUnicoIdRequest>({
      query: (idUnico) => `products/product-id-unico/${idUnico}`,
    }),
    updateProduct: builder.mutation<UpdateProductResponse, UpdateProductRequest>({
      query: (product) => ({
        url: `products/update/${product.id}`,
        body: product,
      }),
    }),

    createProduct: builder.mutation<CreateProductResponse, CreateProductRequest>({
      query: (product) => ({
        url: "/v1/products/create",
        body: product,
        method: "POST",
      }),
    }),

    deleteProduct: builder.mutation<DeleteProductResponse, DeleteProductRequest>({
      query: (id) => `v1/products/delete/${id}`,
    }),
    // endpoints de ordenes
    getOrders: builder.query<GetOrdersResponse, void>({
      query: () => "v1/product-orders/all",
    }),
  }),
});

export const {
  useLoginMutation,
  useForgotPasswordMutation,
  useRegisterMutation,
  useGetAllProductsQuery,
  useLazyGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetProductByNameQuery,
  useGetProductByUnicoIdQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetOrdersQuery,
} = api;
