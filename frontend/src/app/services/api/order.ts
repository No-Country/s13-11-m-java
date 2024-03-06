import { api } from "./index";
import {
  CreateOrderRequest,
  CreateOrderResponse,
  DeleteOrderRequest,
  DeleteOrderResponse,
  GetOrderByIdRequest,
  GetOrderByIdResponse,
  GetOrdersResponse,
} from "./types";

const orderApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query<GetOrdersResponse, void>({
      query: () => ({
        url: "/v1/product-orders/all",
        method: "GET",
      }),
      providesTags: ["Orders"],
    }),
    getOrderById: builder.query<GetOrderByIdResponse, GetOrderByIdRequest>({
      query: (id) => `/v1/product-orders/${id}`,
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

export const { useGetOrdersQuery, useGetOrderByIdQuery, useCreateOrderMutation, useDeleteOrderMutation } = orderApi;
