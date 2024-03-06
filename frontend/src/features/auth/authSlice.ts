import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../../app/store";
import { authApi } from "@/app/services/api/auth";
import { User } from "@/app/services/api/types";
import { getUser, removeAuth, setAuth } from "@/utils/storage";
import { jwtDecode } from "jwt-decode";

type AuthState = {
  user: User | null;
};

const slice = createSlice({
  name: "auth",
  initialState: { user: null, token: null } as AuthState,
  reducers: {
    logout: (state) => {
      removeAuth();
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      const { sub: email } = jwtDecode<{ sub: string }>(payload.token);
      const user: User = { id: "1", firstName: "John", lastName: "Doe", email };
      setAuth(user, payload.token);
      state.user = user;
    });
    builder.addMatcher(authApi.endpoints.getUser.matchFulfilled, (state) => {
      const user = getUser();
      if (user) {
        state.user = user;
      } else {
        removeAuth();
        state.user = null;
      }
    });
    builder.addMatcher(authApi.endpoints.getUser.matchRejected, (state) => {
      removeAuth();
      state.user = null;
    });
  },
});

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;

export const { logout } = slice.actions;
