import { AppShell, Burger, Button, Group, Image } from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "~/assets/imgs/logo.png";

const Toolbar = ({
  opened,
  toggle,
}: {
  opened: boolean;
  toggle: () => void;
}) => {
  const tabs = ["Clubs", "Borrow & Lend", "More"];
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

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
      withBorder={false}
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
          <Image src={logo} alt="logo" height={40} />
          <Group ml="xl" gap={60} visibleFrom="sm">
            {tabs.map((tab) => (
              <ul
                key={tab}
                className="cursor-pointer text-lg font-semibold text-[#402905] hover:underline"
              >
                {tab}
              </ul>
            ))}
          </Group>
          <Group gap="md">
            <Button
              variant="outline"
              c="#402905"
              onClick={() => navigate("/sign-up")}
            >
              Sign up
            </Button>
            <Button color="#76552B" onClick={() => navigate("/sign-in")}>
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
