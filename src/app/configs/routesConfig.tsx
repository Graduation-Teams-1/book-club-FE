import { PageConfig, RouteConfig } from "base/types";
import CoreUtils from "base/utils";
import settingsConfig from "./settingsConfig";
import HomeConfig from "../pages/HomeConfig";
import AuthConfig from "../pages/auth/AuthConfig";

// Important note: Make sure that ErrorsConfig is the last item in the routesConfig always
const routeConfigs: PageConfig[] = [HomeConfig, AuthConfig];

const routes: RouteConfig[] = [
  ...CoreUtils.generateRoutesFromConfigs(
    routeConfigs,
    settingsConfig.defaultAuth,
  ),
];

export default routes;
