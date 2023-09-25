import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Network } from "../types";

export const networkApi = createApi({
  reducerPath: "networkApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || "http://127.0.0.1:3333",
  }),
  endpoints: (builder) => ({
    getNetworks: builder.query<Network[], void>({
      query: () => `/networks`,
    }),
  }),
  
});

export const { useGetNetworksQuery } = networkApi;
