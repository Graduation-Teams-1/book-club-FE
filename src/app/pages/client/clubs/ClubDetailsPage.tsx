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
    content: <InfoPage />,
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
      <div className="m-auto flex w-[80%] flex-col py-2 pt-24">
        <CustomTabs tabs={tabsData} listClassName="!p-3" />
      </div>
    </>
  );
};

export default ClubDetailsPage;
