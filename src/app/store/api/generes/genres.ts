import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "~/app/configs/apiConfig";
import { BaseQueryType } from "~/base/types";

export const genresApi = createApi({
  reducerPath: "genresApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}genre`,
    credentials: "include",
  }) as BaseQueryType,
  tagTypes: ["genres"],

  endpoints: ({ query }) => ({
    getGenres: query({
      query: () => {
        return {
          url: "",
          method: "GET",
        };
      },
      providesTags: ["genres"],
    }),
  }),
});

export const { useGetGenresQuery } = genresApi;
