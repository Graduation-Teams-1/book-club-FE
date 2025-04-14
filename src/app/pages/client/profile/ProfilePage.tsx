import profilePic from "~/assets/imgs/profilePic.png";
import export_icon from "~/assets/icons/export_icon.svg";
import settings_icon from "~/assets/icons/Settings_icon.svg";
import link_icon from "~/assets/icons/link_icon.svg";
import EditProfile from "./EditProfile";
import ProfileTabs from "../components/ProfileTabs";

const ProfilePage = () => {
  return (
    <>
      <div className="flex items-center justify-end gap-4 px-20 pt-24">
        <img src={export_icon} alt="" />
        <img src={settings_icon} alt="" />
      </div>
      <div className="m-auto flex w-1/3 flex-col items-center justify-center pt-16">
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
          <div className="text-balck rounded-lg bg-[#EAD0A880] px-3 py-1">
            Fiction
          </div>
          <div className="text-black rounded-lg bg-[#EAD0A880] px-3 py-1">
            Novels
          </div>
          <div className="text-black rounded-lg bg-[#EAD0A880] px-3 py-1">
            Classic
          </div>
        </div>

        {/* Links (Placeholder) */}
        <div className="mt-4 flex items-center gap-2">
          <img src={link_icon} />
          <p className="text-[#D4A017]">Twitter</p>
        </div>

        {/* Edit Profile Button */}

        <EditProfile />

        {/* Tabs Section */}
        <ProfileTabs />
      </div>
    </>
  );
};

export default ProfilePage;
