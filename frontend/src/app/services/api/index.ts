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
import { apiUrl, authCredentials } from "@/constants/api";
import { simulateLoading } from "@/utils/fakeUtils";
// import { selectToken } from "@/features/auth/authSlice";
// import { RootState } from "@/app/store";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
    // prepareHeaders: (headers, { getState }) => {
    //   const token = selectToken(getState() as RootState);
    //   if (token) {
    //     sessionStorage.setItem("token", token);
    //     localStorage.setItem("token", token);
    //     headers.set("Authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/security/auth/signin",
        body: credentials,
        method: "POST",
      }),

      // queryFn: async (args) => {
      //   const { email, password } = args;
      //   await simulateLoading();
      //   if (email === authCredentials.email && password === authCredentials.password) {
      //     const json = await import("@/mocks/users/user.json");
      //     return { data: json.default as UserResponse };
      //   } else {
      //     return {
      //       error: {
      //         status: 401,
      //         data: { message: "Invalid credentials" },
      //       },
      //     };
      //   }
      // },
    }),

    register: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/security/auth/signup",
        body: credentials,
        method: "POST",
      }),

      //   queryFn: async (args) => {
      //     const { email, password } = args;
      //     await simulateLoading();
      //     if (email === registerCredentials.email && password === registerCredentials.password) {
      //       const json = await import("@/mocks/users/user.json");
      //       return { data: json.default as UserResponse };
      //     } else {
      //       return {
      //         error: {
      //           status: 400,
      //           data: { message: "Invalid data" },
      //         },
      //       };
      //     }
      // },
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
      // query: () => "/v1/products/all",
      query: () => ({
        url: "/v1/products/all",
        method: "GET",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          "Allow-Control-Allow-Origin": "*",
        },
      }),
    }),

    getProductByName: builder.query<GetProductByNameResponse, GetProductByNameRequest>({
      query: (name) => `/v1/products/product-name/${name}`,
      // query: (name) => ({
      //   url: `/v1/products/product-name/${name}`,
      //   method: "GET",
      //   headers:{
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${sessionStorage.getItem('token')}`
      //   }
      // }),
    }),
    getProductById: builder.query<GetProductByIdResponse, GetProductByIdRequest>({
      query: (id) => `/v1/products/product-id/${id}`,
    }),

    getProductByUnicoId: builder.query<GetProductByUnicoIdResponse, GetProductByUnicoIdRequest>({
      query: (idUnico) => `/v1/products/product-id-unico/${idUnico}`,
    }),
    updateProduct: builder.mutation<UpdateProductResponse, UpdateProductRequest>({
      query: (product) => ({
        url: `/v1/products/update/${product.id}`,
        body: product,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
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
      query: (id) => `/v1/products/delete/${id}`,
    }),
    // endpoints de ordenes
    getOrders: builder.query<GetOrdersResponse, void>({
      query: () => "/v1/product-orders/all",
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
