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
        try {
          if (!username || !password) throw new Error();
          await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));
          const json = await import("@/mocks/users/login.json");
          return {
            data: json.default,
          };
        } catch (error) {
          return {
            error: { status: 400, data: { message: "Invalid credentials" } },
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
