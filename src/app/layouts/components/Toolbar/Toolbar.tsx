import { AppShell, Button, Group, Image } from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "~/assets/imgs/logo.png";
import logoMobile from "~/assets/imgs/circleLogo.png";

// import EditIcon from "~/assets/icons/Edit.svg";
import { useAuth } from "base/hooks";
// import { IconUser } from "@tabler/icons-react";

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
      px={20}
      pt={5}
      className={
        isScrolled
          ? "!bg-white"
          : "!bg-transparent !transition-all !ease-in-out"
      }
    >
      <Group h="100%">
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
                <Button variant="outline" c="#402905" disabled>
                  {user?.firstname || user?.lastname
                    ? `${user?.firstname ?? ""} ${user?.lastname ?? ""}`.trim()
                    : (user?.email ?? "User")}
                </Button>
                <Button color="#76552B" onClick={signout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  c="#402905"
                  onClick={() => navigate("/sign-in")}
                  // leftSection={
                  //   <IconUser
                  //     stroke={2}
                  //     className="flex items-center md:!hidden"
                  //   />
                  // }
                >
                  <span className="!hidden md:!inline">Sign in</span>
                </Button>
                <Button
                  color="#76552B"
                  onClick={() => navigate("/sign-up")}
                  // leftSection={
                  //   <Image
                  //     src={EditIcon}
                  //     width={16}
                  //     height={16}
                  //     className="md:!hidden"
                  //   />
                  // }
                >
                  <span className="!hidden md:!inline">Join now</span>
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
