import { pokemonApi } from "@/api/apiSlice";
import { counterSlice } from "@/features/sample1/sample1Slice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { configureStore } from "@reduxjs/toolkit";
// ...

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
