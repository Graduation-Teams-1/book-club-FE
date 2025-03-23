import { Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import CreateClub from "../components/CreateClub";
import CustomTabs from "../components/CustomTabs";

const ClubsPage = () => {
  return (
    <div className="px-80 pt-28">
      <div className="flex items-center gap-4">
        <Input
          placeholder="Search..."
          leftSection={<IconSearch size={16} />}
          className="w-2/3"
        />
        <CreateClub />
      </div>
      <div className="pt-5">
        <CustomTabs />
      </div>
    </div>
  );
};

export default ClubsPage;
