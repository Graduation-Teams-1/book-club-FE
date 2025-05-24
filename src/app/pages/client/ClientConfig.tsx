import { PageConfig } from "base/types";

const ClientConfig: PageConfig = {
  settings: {
    layout: {
      style: "Client",
      config: {
        navbar: {
          display: true,
        },
        toolbar: {
          display: false,
        },
        footer: {
          display: true,
        },
      },
    },
  },
  routes: [{}],
};

export default ClientConfig;
