import { lazy } from "react";
import { PageConfig } from "base/types";

const ClubsPage = lazy(() => import("./client/clubs/ClubsPage"));

const ClubsConfig: PageConfig = {
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
          display: false,
        },
      },
    },
  },
  routes: [
    {
      path: "/clubs",
      element: <ClubsPage />,
    },
  ],
};

export default ClubsConfig;
