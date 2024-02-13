// const API_URL: string = import.meta.env.VITE_API_URL;

// ...
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<string, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});
