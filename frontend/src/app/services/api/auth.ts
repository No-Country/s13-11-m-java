import { api } from "./index";
import {
  RefreshTokenRequest,
  RefreshTokenResponse,
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
} from "./types";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<SignInResponse, SignInRequest>({
      query: (credentials) => ({
        url: "/security/auth/signin",
        body: credentials,
        method: "POST",
      }),
    }),
    register: builder.mutation<SignUpResponse, SignUpRequest>({
      query: (credentials) => ({
        url: "/security/auth/signup",
        body: credentials,
        method: "POST",
      }),
    }),
    refreshToken: builder.mutation<RefreshTokenResponse, RefreshTokenRequest>({
      query: (token) => ({
        url: "/security/auth/refresh",
        body: { token },
        method: "POST",
      }),
    }),
    getUser: builder.query<string, void>({
      query: () => ({
        url: "/security/user",
        method: "GET",
        responseHandler: "text",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useRefreshTokenMutation, useGetUserQuery } = authApi;
