import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  AllProductsResponse,
  CreateOrderRequest,
  CreateOrderResponse,
  CreateProcessRequest,
  CreateProcessResponse,
  CreateProductRequest,
  CreateProductResponse,
  DeleteOrderRequest,
  DeleteOrderResponse,
  DeleteProductRequest,
  DeleteProductResponse,
  GetOrdersResponse,
  GetProcessResponse,
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

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Products", "Orders"],
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
    prepareHeaders: (headers) => {
      const token = sessionStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
        sessionStorage.setItem("token", token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/security/auth/signin",
        body: credentials,
        method: "POST",
      }),
    }),

    register: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/security/auth/signup",
        body: credentials,
        method: "POST",
      }),
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
      providesTags: ["Products"],
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
      query: (name) => ({
        url: `/v1/products/product-name/${name}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          "Allow-Control-Allow-Origin": "*",
        },
      }),
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
      invalidatesTags: ["Products"],
    }),
    deleteProduct: builder.mutation<DeleteProductResponse, DeleteProductRequest>({
      query: (id) => ({ url: `/v1/products/delete/${id}`, method: "DELETE" }),
    }),
    // endpoints de ordenes
    getOrders: builder.query<GetOrdersResponse, void>({
      query: () => ({
        url: "/v1/product-orders/all",
        method: "GET",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          "Allow-Control-Allow-Origin": "*",
        },
      }),
      providesTags: ["Orders"],
    }),
    getProcess: builder.query<GetProcessResponse, void>({
      query: () => ({
        url: "/v1/product-orders/all",
        method: "GET",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          "Allow-Control-Allow-Origin": "*",
        },
      }),
    }),
    createProcess: builder.mutation<CreateProcessResponse, CreateProcessRequest>({
      query: ({ productId, ...process }) => ({
        url: `/v1/products/process/${productId}`,
        body: process,
        method: "POST",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          "Allow-Control-Allow-Origin": "*",
        },
      }),
    }),
    createOrder: builder.mutation<CreateOrderResponse, CreateOrderRequest>({
      query: (productOrder) => ({
        url: "/v1/product-orders/create",
        body: productOrder,
        method: "POST",
      }),
    }),
    deleteOrder: builder.mutation<DeleteOrderResponse, DeleteOrderRequest>({
      query: (orderId) => ({
        url: `/v1/product-orders/delete/${orderId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Orders"],
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
  useCreateProcessMutation,
  useGetOrdersQuery,
  useGetProcessQuery,
  useCreateOrderMutation,
  useDeleteOrderMutation,
} = api;
