import { AppShell, Group } from "@mantine/core";
const Navbar = () => {
  const tabs = ["Clubs", "Borrow & Lend", "More"];
  return (
    <AppShell.Navbar py="md" px={4} className="">
      <Group ml="xl" gap={20} className="!flex-col !items-start">
        {tabs.map((tab) => (
          <ul
            key={tab}
            className="cursor-pointer text-lg font-semibold text-[#402905]"
          >
            {tab}
          </ul>
        ))}
      </Group>
    </AppShell.Navbar>
  );
};

export default Navbar;
