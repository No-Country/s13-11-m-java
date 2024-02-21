import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "@/data/user";
//import { RootState } from '@/app/store'

// export interface User {
//   username: string
//   password: string
// }

export interface LoginRequest {
  username: string;
  password: string;
}

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "/src/assets/usersMock.json",
    /*prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
    //   const token = (getState() as RootState).auth.token
    //   if (token) {
    //     headers.set('authorization', `Bearer ${token}`)
    //   }
      return headers
    },*/
  }),
  endpoints: (builder) => ({
    login: builder.mutation<User, LoginRequest>({
      query: (credentials) => ({
        url: "",
        method: "POST",
        body: credentials,
      }),
    }),
    protected: builder.mutation<{ message: string }, void>({
      query: () => "protected",
    }),
  }),
});

export const { useLoginMutation, useProtectedMutation } = authApi;
