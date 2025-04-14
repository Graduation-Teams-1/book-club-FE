import { Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import CreateClub from "../components/CreateClub";
import CustomTabs from "../components/CustomTabs";
import ClubCard from "../components/ClubCard";

const tabsData = [
  {
    value: "1",
    label: "All Clubs",
    content: (
      <div className="pt-5">
        <div>
          <h4 className="text-2xl font-semibold text-[#402905]">
            Virtual Online Clubs
          </h4>
          <div className="flex gap-5 pt-5">
            <ClubCard />
            <ClubCard />
          </div>
        </div>
        <div className="pt-5">
          <h4 className="text-2xl font-semibold text-[#402905]">
            Local Offline Clubs
          </h4>
          <div className="flex gap-5 py-5">
            <ClubCard />
            <ClubCard />
          </div>
        </div>
      </div>
    ),
  },
  {
    value: "2",
    label: "My Clubs",
    content: <div>Second tab content</div>,
  },
];

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
        <CustomTabs tabs={tabsData} />
      </div>
    </div>
  );
};

export default ClubsPage;
