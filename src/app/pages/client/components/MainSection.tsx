import { AiOutlineApple } from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";

import person from "~/assets/imgs/pana.png";
import header from "~/assets/imgs/Header.png";
import { Button, Image } from "@mantine/core";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const MainSection = () => {
  const APKUrl = "https://play.google.com/store/games?device=windows";
  const IOSUrl = "https://www.apple.com/eg-ar/app-store/";
  const navigate = useNavigate();
  return (
    <>
      <div className="flex h-[60rem] items-start justify-center gap-40 bg-home bg-contain bg-right-top bg-no-repeat pt-40">
        <div className="flex w-1/2 flex-col items-center justify-center gap-14">
          <Image src={header} alt="header" w={600} />
          <p className="w-[85%] text-center text-2xl font-semibold text-[#402905]">
            Discover a community of book lovers, join book clubs and share your
            passion for reading and discussion.
          </p>
          <Button
            radius={50}
            color="#76552B"
            size="xl"
            className="!flex !items-center !justify-center !px-9"
            onClick={() => navigate("/sign-up")}
          >
            Get Started
          </Button>
          <div className="flex gap-4">
            <Link to={APKUrl} target="_blank">
              <IoLogoGooglePlaystore className="h-14 w-14 cursor-pointer" />
            </Link>
            <Link to={IOSUrl} target="_blank">
              <AiOutlineApple className="h-14 w-14 cursor-pointer" />
            </Link>
          </div>
        </div>
        <Image src={person} alt="person" className="!w-1/3 !object-contain" />
      </div>
    </>
  );
};

export default MainSection;
