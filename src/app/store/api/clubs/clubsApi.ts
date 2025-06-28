import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "~/app/configs/apiConfig";
import { BaseQueryType } from "~/base/types";

export const clubsApi = createApi({
  reducerPath: "clubsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}Clubs/clubs/mainpage?userId=6cb8ec6d-a31c-4e3a-843e-958aa6174eef&pageNumber=1`,
    credentials: "include",
  }) as BaseQueryType,
  tagTypes: ["clubs"],

  endpoints: ({ query }) => ({
    getClubs: query({
      query: () => {
        return {
          url: "",
          method: "GET",
        };
      },
      providesTags: ["clubs"],
    }),

    getClub: query({
      query: (id) => ({
        url: `/${id}`,
      }),
      providesTags: ["clubs"],
    }),
  }),
});

export const { useGetClubsQuery, useGetClubQuery } = clubsApi;
