import { useState } from "react";
import { FloatingIndicator, Tabs } from "@mantine/core";
import ClubCard from "./ClubCard";

const CustomTabs = () => {
  const [activeTab, setActiveTab] = useState("allClubs");
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [value, setValue] = useState<string | null>("1");
  //prettier-ignore
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node;
    setControlsRefs(controlsRefs);
  };

  return (
    <Tabs variant="none" value={value} onChange={setValue}>
      <Tabs.List
        ref={setRootRef}
        className="!relative rounded-md bg-[#EAD0A880] p-px"
      >
        <Tabs.Tab
          value="1"
          ref={setControlRef("1")}
          className={`!z-10 w-1/2 rounded-md font-medium transition-colors duration-300 ease-in ${
            activeTab === "allClubs" ? "!text-white" : "!text-[#402905]"
          }`}
          onClick={() => setActiveTab("allClubs")}
        >
          All Clubs
        </Tabs.Tab>
        <Tabs.Tab
          value="2"
          ref={setControlRef("2")}
          className={`!z-10 w-1/2 rounded-md font-medium transition-colors duration-300 ${
            activeTab === "myClubs" ? "!text-white" : "!text-[#402905]"
          }`}
          onClick={() => setActiveTab("myClubs")}
        >
          My Clubs
        </Tabs.Tab>

        <FloatingIndicator
          target={value ? controlsRefs[value] : null}
          parent={rootRef}
          className="!rounded-md !border !border-gray-200 !bg-[#402905] !shadow-sm"
        />
      </Tabs.List>

      <Tabs.Panel value="1">
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
      </Tabs.Panel>
      <Tabs.Panel value="2">Second tab content</Tabs.Panel>
    </Tabs>
  );
};

export default CustomTabs;
