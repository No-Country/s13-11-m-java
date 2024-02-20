import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "@/app/store";

export interface User {
  first_name: string;
  last_name: string;
}

export interface UserResponse {
  user: User;
  token: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export const fakeApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      // query: (credentials) => ({
      //   url: "login",
      //   method: "POST",
      //   body: credentials,
      // }),
      queryFn: async (args) => {
        const { username, password } = args;
        if (username === "admin" || password === "admin") {
          return {
            data: (await import("@/mocks/users/login.json")).default,
          };
        } else {
          return {
            error: { status: 401, data: { message: "Invalid credentials" } },
          };
        }
      },
    }),
    protected: builder.mutation<{ message: string }, void>({
      query: () => "protected",
    }),
  }),
});

export const { useLoginMutation, useProtectedMutation } = fakeApi;
