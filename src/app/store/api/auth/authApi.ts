import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseQueryType } from "base/types";
import { BASE_URL } from "app/configs/apiConfig";
import { User, UserLoginBody, UserSignupBody } from "../../types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}Account`,
    credentials: "include",
  }) as BaseQueryType,
  tagTypes: ["User"],
  endpoints: ({ mutation }) => ({
    signup: mutation<User, UserSignupBody>({
      query: (body: UserSignupBody) => ({
        url: "/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),

    signin: mutation<User, UserLoginBody>({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),

    signout: mutation<void, void>({
      query: () => ({
        url: "/sign-out",
        method: "PUT",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useSignupMutation, useSigninMutation, useSignoutMutation } =
  authApi;
