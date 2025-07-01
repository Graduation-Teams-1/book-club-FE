import { AppShell, Button, Group, Image } from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "~/assets/imgs/logo.png";
import logoMobile from "~/assets/imgs/circleLogo.png";
import { useAuth } from "base/hooks";
import { Button as MantineButton } from "@mantine/core";
import { IoIosLogOut } from "react-icons/io";
const Toolbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, user, signout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppShell.Header
      withBorder={location.pathname !== "/"}
      py={15}
      className={
        isScrolled
          ? "!bg-white"
          : "!bg-transparent !transition-all !ease-in-out"
      }
    >
      <Group h="100%" className="container mx-auto px-3">
        <Group justify="space-between" style={{ flex: 1 }}>
          <Image
            src={logo}
            alt="logo"
            className="!hidden !h-[50px] !w-[300px] cursor-pointer md:!block"
            onClick={() => navigate("/")}
          />
          <Image
            src={logoMobile}
            alt="logo"
            className="!block !h-[50px] !w-[300px] cursor-pointer md:!hidden"
            onClick={() => navigate("/")}
          />

          <Group gap="md">
            {isAuthenticated ? (
              <>
                {/* modal */}
                <Button variant="outline" c="#402905">
                  {user?.fullName || "User"}
                </Button>
                <MantineButton color="#76552B" onClick={signout}>
                  <IoIosLogOut className="w-20" />
                </MantineButton>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  c="#402905"
                  onClick={() => navigate("/sign-in")}
                >
                  Sign in
                </Button>
                <Button color="#76552B" onClick={() => navigate("/sign-up")}>
                  join now
                </Button>
              </>
            )}
          </Group>
        </Group>
      </Group>
    </AppShell.Header>
  );
};

export default Toolbar;
