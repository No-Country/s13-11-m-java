import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { apiUrl } from "@/constants/api";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Products", "Orders", "Order", "Product"],
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
    prepareHeaders: (headers) => {
      const token = sessionStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
        sessionStorage.setItem("token", token);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
