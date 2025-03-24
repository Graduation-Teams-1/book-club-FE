import { Button, Tabs } from "@mantine/core";
import profilePic from "~/assets/imgs/profilePic.png";
import export_icon from "~/assets/icons/export_icon.svg"
import settings_icon from "~/assets/icons/Settings_icon.svg"
import link_icon from "~/assets/icons/link_icon.svg"
import PostsPage from "./subpages/PostsPage";
import ClubsPage from "./subpages/ClubsPage";
import SavedPage from "./subpages/SavedPage";
import TrackerPage from "./subpages/TrackerPage";

const ProfilePage = () => {
  return (
    <div className="relative flex h-[100vh] items-center justify-center">
      {/* icons */}
      <div className="absolute right-0 top-0 flex items-center gap-2">
        <img src={export_icon} alt="" />
        <img src={settings_icon} alt="" />
      </div>

      <div className="flex max-w-full flex-col items-center rounded-lg bg-white shadow-md">
        {/* Profile Header */}
        <div className="flex w-full items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <img
              width={100}
              height={100}
              src={profilePic}
              alt="profile picture"
              className="rounded-full"
            />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold">Arwa</h1>
              <p className="text-gray-500">@Arwa</p>
            </div>
          </div>
          {/* Profile Info */}
          <div className="mt-4 flex justify-between gap-4">
            <div className="flex flex-col items-center">
              <p className="text-lg font-semibold">3</p>
              <p className="text-gray-500">Posts</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-lg font-semibold">200</p>
              <p className="text-gray-500">Followers</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-lg font-semibold">100</p>
              <p className="text-gray-500">Following</p>
            </div>
          </div>
        </div>

        {/* Profile Description */}
        <div className="mt-4 text-left">
          <p className="text-[#270909]">
            Two things are infinite: the universe and human stupidity; and I'm
            not sure about the universe.
          </p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex gap-2">
          <div className="text-balck rounded-full bg-[#EAD0A880] px-3 py-1">
            Fiction
          </div>
          <div className="text-black rounded-full bg-[#EAD0A880] px-3 py-1">
            Novels
          </div>
          <div className="text-black rounded-full bg-[#EAD0A880] px-3 py-1">
            Classic
          </div>
        </div>

        {/* Links (Placeholder) */}
        <div className="mt-4">
          <p className="text-[#D4A017]">
            <img src={link_icon} />
            Twitter
          </p>
        </div>

        {/* Edit Profile Button */}
        <Button
          fullWidth
          variant="outline"
          className="mt-4 border-2 border-[#270909] p-2 font-bold"
          classNames={{
            root: "!border-[#270909]", // Ensures the border color is correctly applied
            label: "!text-[#270909]", // Changes the text color
          }}
        >
          Edit Profile
        </Button>

        {/* Tabs Section */}
        <div className="mt-8 w-full">
          <Tabs variant="pills" defaultValue="Tracker">
            <Tabs.List>
              <Tabs.Tab value="Tracker">Tracker</Tabs.Tab>
              <Tabs.Tab value="Posts">Posts</Tabs.Tab>
              <Tabs.Tab value="Clubs">Clubs</Tabs.Tab>
              <Tabs.Tab value="Saved">Saved</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="Tracker"><TrackerPage /> </Tabs.Panel>
            <Tabs.Panel value="Posts"><PostsPage /></Tabs.Panel>
            <Tabs.Panel value="Clubs"><ClubsPage /></Tabs.Panel>
            <Tabs.Panel value="Saved"><SavedPage /></Tabs.Panel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
