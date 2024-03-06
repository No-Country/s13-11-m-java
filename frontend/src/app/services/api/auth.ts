import { api } from "./index";
import { LoginRequest, UserResponse } from "./types";
import { authCredentials } from "@/constants/api";
import { simulateLoading } from "@/utils/fakeUtils";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/security/auth/signin",
        body: credentials,
        method: "POST",
      }),
    }),

    register: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/security/auth/signup",
        body: credentials,
        method: "POST",
      }),
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

export const { useLoginMutation, useRegisterMutation, useForgotPasswordMutation } = authApi;
