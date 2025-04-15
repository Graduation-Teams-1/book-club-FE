import { IoBook, IoChatbox, IoHome, IoPeople, IoPerson } from "react-icons/io5";
import { Link } from "react-router-dom";

const dataLink = [
  { name: "feed", path: "/feed", icon: <IoHome size={20} /> },
  { name: "borrow", path: "/borrow", icon: <IoBook size={20} /> },
  { name: "clubs", path: "/clubs", icon: <IoPeople size={20} /> },
  { name: "chatbot", path: "/chatbot", icon: <IoChatbox size={20} /> },
  { name: "profile", path: "/profile", icon: <IoPerson size={20} /> },
];

const MainNav = () => {
  return (
    <div className="fixed bottom-0 flex w-full items-center justify-center bg-white">
      {dataLink.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          className="flex w-full cursor-pointer flex-col items-center justify-center gap-2 border-t border-t-gray-200 py-2 text-center text-sm font-semibold text-gray-700"
        >
          {link.icon}
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default MainNav;
