import { lazy } from "react";
import { PageConfig } from "base/types";

const ProfilePage = lazy(() => import("./client/profile/ProfilePage"));

const ProfileConfig: PageConfig = {
  settings: {
    layout: {
      style: "Client",
      config: {
        navbar: {
          display: true,
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
      path: "/profile",
      element: <ProfilePage />,
    },
  ],
};

export default ProfileConfig;
