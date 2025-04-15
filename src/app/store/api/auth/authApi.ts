import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseQueryType } from "base/types";
import { BASE_URL } from "app/configs/apiConfig";
import { User, UserSignupBody } from "../../types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + "Account",
    credentials: "include",
  }) as BaseQueryType,
  tagTypes: ["User"],
  endpoints: ({ query, mutation }) => ({
    profile: query<User, void>({
      query: () => "profile",
      providesTags: ["User"],
    }),
    signup: mutation<User, UserSignupBody>({
      query: (body: UserSignupBody) => ({
        url: "/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),

    // initSignupVerification: mutation<User, InitSignupVerificationBody>({
    //   query: (body) => ({
    //     url: "/init-signup-verification",
    //     method: "POST",
    //     body,
    //   }),
    // }),
    // signupVerification: mutation<User, SignupVerificationBody>({
    //   query: (body) => ({
    //     url: "/verify-signup",
    //     method: "POST",
    //     body,
    //   }),
    // }),
    // signin: mutation<User, UserLoginBody>({
    //   query: (body) => ({
    //     url: "/sign-in",
    //     method: "POST",
    //     body,
    //   }),
    //   invalidatesTags: ["User"],
    // }),
    // signout: mutation<void, void>({
    //   query: () => ({
    //     url: "/sign-out",
    //     method: "PUT",
    //   }),
    //   invalidatesTags: ["User"],
    // }),
    // updateProfile: mutation<User, Partial<User>>({
    //   query: (body) => ({
    //     url: "profile",
    //     method: "PATCH",
    //     body,
    //   }),
    //   invalidatesTags: ["User"],
    // }),
    // changePassword: mutation<void, ChangePasswordBody>({
    //   query: (body) => ({
    //     url: "/change-password",
    //     method: "POST",
    //     body,
    //   }),
    // }),
    // forgotPassword: mutation<void, ForgotPasswordBody>({
    //   query: (body) => ({
    //     url: "/forgot-password",
    //     method: "POST",
    //     body,
    //   }),
    // }),
    // resetPassword: mutation<void, ResetPasswordBody>({
    //   query: (body) => ({
    //     url: "/reset-password",
    //     method: "POST",
    //     body,
    //   }),
    // }),
    // set2FA: mutation<void, Set2FABody>({
    //   query: (body) => ({
    //     url: "/set-2fa",
    //     method: "PATCH",
    //     body,
    //   }),
    // }),
    // verify2FA: mutation<void, Verify2FABody>({
    //   query: (body) => ({
    //     url: "/verify-2fa",
    //     method: "PATCH",
    //     body,
    //   }),
    // }),
  }),
});

export const {
  useProfileQuery,
  useSignupMutation,
  // useInitSignupVerificationMutation,
  // useSignupVerificationMutation,
  // useSigninMutation,
  // useSignoutMutation,
  // useUpdateProfileMutation,
  // useChangePasswordMutation,
  // useForgotPasswordMutation,
  // useResetPasswordMutation,
  // useSet2FAMutation,
  // useVerify2FAMutation,
} = authApi;
