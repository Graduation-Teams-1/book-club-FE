import { Avatar, BackgroundImage, Button } from "@mantine/core";
import clubPhoto from "assets/imgs/clubphoto.svg";
import clubAvatar from "assets/imgs/clubavatar.svg";
import CustomTabs from "../components/CustomTabs";
import InfoPage from "./subPages/InfoPage";
import BooksPage from "./subPages/BooksPage";
import MeetingsPage from "./subPages/MeetingsPage";
import ChatPage from "./subPages/ChatPage";
import InsightsPage from "./subPages/InsightsPage";

const tabsData = [
  {
    value: "1",
    label: "Info",
    content: (
      <div className="w-full rounded-lg border border-[#4029054D]">
        <InfoPage />
      </div>
    ),
  },
  {
    value: "2",
    label: "Books",
    content: (
      <div className="w-full rounded-lg border border-[#4029054D]">
        <BooksPage />
      </div>
    ),
  },
  {
    value: "3",
    label: "Meetings",
    content: (
      <div className="w-full rounded-lg border border-[#4029054D]">
        <MeetingsPage />
      </div>
    ),
  },
  {
    value: "4",
    label: "Chat",
    content: (
      <div className="w-full rounded-lg border border-[#4029054D]">
        <ChatPage />
      </div>
    ),
  },
  {
    value: "5",
    label: "Insights",
    content: (
      <div className="w-full rounded-lg border border-[#4029054D]">
        <InsightsPage />
      </div>
    ),
  },
];
const ClubDetailsPage = () => {
  return (
    <>
      <div className="flex flex-col items-start gap-4 pt-24">
        <BackgroundImage
          src={clubPhoto}
          className="mx-auto !flex h-64 !w-[85%] !items-center !rounded-t-lg px-20"
        >
          <div className="flex items-center justify-start gap-4">
            <Avatar src={clubAvatar} alt="club avatar" size="xl" />
            <div className="flex flex-col items-start justify-start gap-2">
              <h4 className="pl-5 text-2xl font-extrabold text-white">
                Qaf club
              </h4>
              <p className="flex gap-4 pt-2 font-bold">
                <li className="capitalize text-white">1845 Members.</li>
                <li className="capitalize text-white">since 2024.</li>
              </p>
            </div>
          </div>
        </BackgroundImage>
      </div>
      <div className="m-auto flex w-[85%] items-start gap-10 pt-10">
        <div className="flex w-96 flex-col gap-4 rounded-lg border border-[#4029054D] p-5">
          <h1 className="text-xl font-bold text-[#402905]">About our Club </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat,
            ratione molestiae? Cupiditate amet, voluptas dolores quae ipsa
            maxime cum nihil cumque deserunt minus? In voluptatum exercitationem
            aperiam, adipisci velit natus!
          </p>
          <Button color="#402905">join club now</Button>
        </div>

        <div className="flex w-[80%] flex-col py-2">
          <CustomTabs tabs={tabsData} listClassName="!p-3" />
        </div>
      </div>
    </>
  );
};

export default ClubDetailsPage;
