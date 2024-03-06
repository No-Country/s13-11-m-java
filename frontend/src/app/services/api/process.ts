import { api } from "./index";
import { CreateProcessRequest, CreateProcessResponse, GetProcessResponse } from "./types";

const processApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProcess: builder.query<GetProcessResponse, void>({
      query: () => ({
        url: "/v1/product-orders/all",
        method: "GET",
      }),
    }),
    createProcess: builder.mutation<CreateProcessResponse, CreateProcessRequest>({
      query: ({ productId, ...process }) => ({
        url: `/v1/products/process/${productId}`,
        body: process,
        method: "POST",
      }),
    }),
  }),
});

export const { useGetProcessQuery, useCreateProcessMutation } = processApi;
