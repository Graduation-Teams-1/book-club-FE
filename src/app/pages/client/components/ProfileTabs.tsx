import { useState } from "react";
import { FloatingIndicator, Tabs } from "@mantine/core";
import PostsPage from "../profile/subpages/PostsPage";
import ClubsPage from "../profile/subpages/ClubsPage";
import SavedPage from "../profile/subpages/SavedPage";
import TrackerPage from "../profile/subpages/TrackerPage";
const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("tracker");

  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [value, setValue] = useState<string | null>("1");
  //prettier-ignore
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node;
    setControlsRefs(controlsRefs);
  };
  return (
    <div className="mt-8 w-full">
      <Tabs variant="none" value={value} onChange={setValue}>
        <Tabs.List
          ref={setRootRef}
          className="!relative rounded-md bg-[#EAD0A880] p-px"
        >
          <Tabs.Tab
            value="1"
            ref={setControlRef("1")}
            className={`!z-10 w-1/4 rounded-md font-medium transition-colors duration-300 ease-in ${
              activeTab === "tracker" ? "!text-white" : "!text-[#402905]"
            }`}
            onClick={() => setActiveTab("tracker")}
          >
            Tracker
          </Tabs.Tab>
          <Tabs.Tab
            value="2"
            ref={setControlRef("2")}
            className={`!z-10 w-1/4 rounded-md font-medium transition-colors duration-300 ${
              activeTab === "posts" ? "!text-white" : "!text-[#402905]"
            }`}
            onClick={() => setActiveTab("posts")}
          >
            Posts
          </Tabs.Tab>
          <Tabs.Tab
            value="3"
            ref={setControlRef("3")}
            className={`!z-10 w-1/4 rounded-md font-medium transition-colors duration-300 ${
              activeTab === "clubs" ? "!text-white" : "!text-[#402905]"
            }`}
            onClick={() => setActiveTab("clubs")}
          >
            Clubs
          </Tabs.Tab>
          <Tabs.Tab
            value="4"
            ref={setControlRef("4")}
            className={`!z-10 w-1/4 rounded-md font-medium transition-colors duration-300 ${
              activeTab === "saved" ? "!text-white" : "!text-[#402905]"
            }`}
            onClick={() => setActiveTab("saved")}
          >
            Saved
          </Tabs.Tab>

          <FloatingIndicator
            target={value ? controlsRefs[value] : null}
            parent={rootRef}
            className="!rounded-md !border !border-gray-200 !bg-[#402905] !shadow-sm"
          />
        </Tabs.List>
        <Tabs.Panel value="1">
          <TrackerPage />
        </Tabs.Panel>
        <Tabs.Panel value="2">
          <PostsPage />
        </Tabs.Panel>
        <Tabs.Panel value="3">
          <ClubsPage />
        </Tabs.Panel>
        <Tabs.Panel value="4">
          <SavedPage />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default ProfileTabs;
