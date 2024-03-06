import { api } from "./index";
import {
  CreateOrderRequestAPI,
  CreateOrderResponseAPI,
  DeleteOrderIdRequestAPI,
  DeleteOrderResponseAPI,
  GetOrderByIdRequestAPI,
  GetOrderByIdResponseAPI,
  GetOrdersByClientIdRequest,
  GetOrdersByClientIdResponse,
  GetOrdersByDateRequest,
  GetOrdersByDateResponse,
  ListAllOrdersResponse,
  UpdateOrderRequest,
  UpdateOrderResponse,
} from "./types";

const orderApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<CreateOrderResponseAPI, CreateOrderRequestAPI>({
      query: (orderData) => ({
        url: "/v1/product-orders/create",
        method: "POST",
        body: orderData,
      }),
    }),
    updateOrder: builder.mutation<UpdateOrderResponse, UpdateOrderRequest>({
      query: ({ orderId, ...order }) => ({
        url: `/v1/product-orders/update/${orderId}`,
        method: "PATCH",
        body: order,
      }),
    }),
    getOrderById: builder.query<GetOrderByIdResponseAPI, GetOrderByIdRequestAPI>({
      query: (orderId) => `/v1/product-orders/${orderId}`,
    }),
    getOrdersByClientId: builder.query<GetOrdersByClientIdResponse, GetOrdersByClientIdRequest>({
      query: (clientId) => `/v1/product-orders/orders/${clientId}`,
    }),
    listAllOrders: builder.query<ListAllOrdersResponse, void>({
      query: () => "/v1/product-orders/all",
    }),
    getOrdersByInitialDate: builder.query<GetOrdersByDateResponse, GetOrdersByDateRequest>({
      query: (initialDate) => `/v1/product-orders/all/${initialDate}/initial_date`,
    }),
    getOrdersByFinishDate: builder.query<GetOrdersByDateResponse, GetOrdersByDateRequest>({
      query: (finishDate) => `/v1/product-orders/all/${finishDate}/finish_date`,
    }),
    getOrdersByEntryDate: builder.query<GetOrdersByDateResponse, GetOrdersByDateRequest>({
      query: (entryDate) => `/v1/product-orders/all/${entryDate}/entry_date`,
    }),
    deleteOrder: builder.mutation<DeleteOrderResponseAPI, DeleteOrderIdRequestAPI>({
      query: (orderId) => ({
        url: `/v1/product-orders/delete/${orderId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetOrderByIdQuery,
  useCreateOrderMutation,
  useDeleteOrderMutation,
  useGetOrdersByClientIdQuery,
  useGetOrdersByEntryDateQuery,
  useGetOrdersByFinishDateQuery,
  useGetOrdersByInitialDateQuery,
  useListAllOrdersQuery,
  useLazyListAllOrdersQuery,
} = orderApi;
