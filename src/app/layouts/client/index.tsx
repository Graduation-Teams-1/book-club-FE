import { memo, Suspense, useContext } from "react";
import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import { selectCurrentLayoutConfig } from "~/app/store/app/settingsSlice";
import { AppShell, Loader } from "@mantine/core";
// import Footer from "../components/Footer/Footer";
import AppContext from "~/app/AppContext";
import Toolbar from "../components/Toolbar/Toolbar";

const Layout = () => {
  const config = useSelector(selectCurrentLayoutConfig);
  const appContext = useContext(AppContext);
  const { routes } = appContext;

  return (
    <AppShell padding="md">
      {config.toolbar.display && <Toolbar />}
      <AppShell.Main>
        <Suspense
          fallback={
            <div className="flex h-screen w-screen items-center justify-center">
              <Loader />
            </div>
          }
        >
          {useRoutes(routes)}
        </Suspense>
      </AppShell.Main>
      {/* {config.footer.display && <Footer />} */}
    </AppShell>
  );
};

export default memo(Layout);
