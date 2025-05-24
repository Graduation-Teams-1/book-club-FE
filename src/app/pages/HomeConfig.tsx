import { lazy } from "react";
import { PageConfig } from "base/types";

const HomePage = lazy(() => import("./client/home/HomePage"));

const HomeConfig: PageConfig = {
  settings: {
    layout: {
      style: "Client",
      config: {
        navbar: {
          display: false,
        },
        toolbar: {
          display: true,
        },
        footer: {
          display: true,
        },
      },
    },
  },
  routes: [
    {
      path: "/",
      element: <HomePage />,
    },
  ],
};

export default HomeConfig;
