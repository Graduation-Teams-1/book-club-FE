import { lazy } from "react";
import { PageConfig } from "base/types";

const ClubsPage = lazy(() => import("./client/clubs/ClubsPage"));
const ClubDetailsPage = lazy(() => import("./client/clubs/ClubDetailsPage"));

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
    {
      path: "/clubs/:id",
      element: <ClubDetailsPage />,
    },
  ],
};

export default ClubsConfig;
