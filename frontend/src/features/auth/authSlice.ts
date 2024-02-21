import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { api } from "@/app/services/api";
import { User } from "@/app/services/api/types";

type AuthState = {
  user: User | null;
  token: string | null;
};

const slice = createSlice({
  name: "auth",
  initialState: { user: null, token: null } as AuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
    });
  },
});

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
