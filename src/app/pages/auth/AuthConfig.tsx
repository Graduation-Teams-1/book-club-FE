import { lazy } from "react";
import { PageConfig } from "base/types";

const SignupPage = lazy(() => import("./signup/SignupPage"));
const SigninPage = lazy(() => import("./signin/SigninPage"));
// const ForgotPasswordPage = lazy(
//   () => import("./forgot-password/ForgotPasswordPage"),
// );
// const ResetPasswordPage = lazy(
//   () => import("./reset-password/ResetPasswordPage"),
// );
// const CheckEmailPage = lazy(() => import("./check-email/CheckEmailPage"));

const AuthConfig: PageConfig = {
  settings: {
    layout: {
      style: "Client",
      config: {
        navbar: {
          display: false,
        },
        toolbar: {
          display: false,
        },
        footer: {
          display: false,
        },
      },
    },
  },
  routes: [
    {
      path: "/sign-in",
      element: <SigninPage />,
      auth: [],
    },
    {
      path: "/sign-up",
      element: <SignupPage />,
      auth: [],
    },
    // {
    //   path: "/forgot-password",
    //   element: <ForgotPasswordPage />,
    //   auth: [],
    // },
    // {
    //   path: "/reset-password",
    //   element: <ResetPasswordPage />,
    //   auth: [],
    // },
    // {
    //   path: "/check-email",
    //   element: <CheckEmailPage />,
    //   auth: [],
    // },
  ],
};

export default AuthConfig;
