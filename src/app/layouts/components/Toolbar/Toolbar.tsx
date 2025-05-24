import { AppShell, Burger, Button, Group, Image } from "@mantine/core";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "~/assets/imgs/logo.png";

const Toolbar = ({
  opened,
  toggle,
}: {
  opened: boolean;
  toggle: () => void;
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const tabs = ["Clubs", "Borrow & Lend", "More"];
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
      withBorder={location.pathname === "/" ? false : true}
      px={40}
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
            className="!h-[50px] !w-[300px] cursor-pointer"
            onClick={() => navigate("/")}
          />

          <Group ml="xl" gap={20} visibleFrom="sm" className="">
            {tabs.map((tab) => (
              <ul
                key={tab}
                className="cursor-pointer text-lg font-bold text-[#402905] transition-all duration-300 hover:text-[#76552B]"
              >
                <NavLink to={`/${tab.toLowerCase()}`}>{tab}</NavLink>
              </ul>
            ))}
          </Group>

          <Group gap="md">
            <Button
              variant="outline"
              c="#402905"
              onClick={() => navigate("/sign-in")}
            >
              Sign in
            </Button>
            <Button color="#76552B" onClick={() => navigate("/sign-up")}>
              Join now
            </Button>
          </Group>
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      </Group>
    </AppShell.Header>
  );
};

export default Toolbar;
