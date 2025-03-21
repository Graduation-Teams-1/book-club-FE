import { memo, Suspense, useContext } from "react";
import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import { selectCurrentLayoutConfig } from "~/app/store/app/settingsSlice";
import { useDisclosure } from "@mantine/hooks";
import { AppShell, Loader } from "@mantine/core";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AppContext from "~/app/AppContext";
import Toolbar from "../components/Toolbar/Toolbar";

const Layout = () => {
  const config = useSelector(selectCurrentLayoutConfig);
  const appContext = useContext(AppContext);
  const { routes } = appContext;
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 70 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      {config.toolbar.display && <Toolbar opened={opened} toggle={toggle} />}
      {config.navbar.display && <Navbar />}

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
      {config.footer.display && <Footer />}
    </AppShell>
  );
};

export default memo(Layout);
