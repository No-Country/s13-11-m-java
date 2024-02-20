import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { User, fakeApi } from "@/api/auth";

type AuthState = {
  user: User | null;
  token: string | null;
};

const slice = createSlice({
  name: "auth",
  initialState: { user: null, token: null } as AuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(fakeApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
    });
  },
});

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
