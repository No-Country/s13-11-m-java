import { api } from "./index";
import {
  CreateOrderRequest,
  CreateOrderResponse,
  DeleteOrderIdRequest,
  DeleteOrderResponse,
  GetOrderByIdRequest,
  GetOrderByIdResponse,
  GetOrdersByClientIdRequest,
  GetOrdersByClientIdResponse,
  GetOrdersByDateRequest,
  GetOrdersByDateResponse,
  ListAllOrdersResponse,
  ObtainFinishEstimateDateRequest,
  ObtainFinishEstimateDateResponse,
  UpdateOrderRequest,
  UpdateOrderResponse,
} from "./types";

const orderApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<CreateOrderResponse, CreateOrderRequest>({
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
      invalidatesTags: ["Order", "Orders"],
    }),
    getOrderById: builder.query<GetOrderByIdResponse, GetOrderByIdRequest>({
      query: (orderId) => `/v1/product-orders/${orderId}`,
      providesTags: ["Order"],
    }),
    getOrdersByClientId: builder.query<GetOrdersByClientIdResponse, GetOrdersByClientIdRequest>({
      query: (clientId) => `/v1/product-orders/orders/${clientId}`,
    }),
    listAllOrders: builder.query<ListAllOrdersResponse, void>({
      query: () => "/v1/product-orders/all",
      providesTags: ["Orders"],
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
    deleteOrder: builder.mutation<DeleteOrderResponse, DeleteOrderIdRequest>({
      query: (orderId) => ({
        url: `/v1/product-orders/delete/${orderId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Orders"],
    }),
    obtainFinishEstimateDate: builder.query<ObtainFinishEstimateDateResponse, ObtainFinishEstimateDateRequest>({
      query: ({ initialDate, productId }) => ({
        url: `/v1/product-orders/obtain-finishEstimateDate/${initialDate}/${productId}`,
        responseHandler: "text",
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
  useLazyGetOrderByIdQuery,
  useLazyListAllOrdersQuery,
  useUpdateOrderMutation,
  useLazyObtainFinishEstimateDateQuery,
} = orderApi;
