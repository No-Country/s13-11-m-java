import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../../app/store";
import { authApi } from "@/app/services/api/auth";
import { User } from "@/app/services/api/types";

type AuthState = {
  user: User | null;
  token: string | null;
};

const slice = createSlice({
  name: "auth",
  initialState: { user: null, token: null } as AuthState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
    });
  },
});

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;

export const selectToken = (state: RootState) => state.auth.token;

export const { logout } = slice.actions;
