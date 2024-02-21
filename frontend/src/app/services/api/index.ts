import { apiUrl, authCredentials } from "@/constants/api";
import { simulateLoading } from "@/utils/fakeUtils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginRequest, UserResponse } from "./types";

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
  }),
});

export const { useLoginMutation, useForgotPasswordMutation } = api;
