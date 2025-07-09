import GooglePlayButton from "./GooglePlayButton";
import AppleStoreButton from "./AppleStoreButton";

import hero from "~/assets/imgs/Group 5.svg";
import header from "~/assets/imgs/Header.png";
import { Button, Image } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const MainSection = () => {
  const APKUrl = "https://play.google.com/store/games?device=windows";
  const IOSUrl = "https://www.apple.com/eg-ar/app-store/";
  const navigate = useNavigate();

  const handleGooglePlayClick = (): void => {
    window.open(APKUrl, "_blank");
  };

  const handleAppStoreClick = (): void => {
    window.open(IOSUrl, "_blank");
  };

  return (
    <div className="flex h-screen items-center justify-between pt-20 md:gap-40 md:pt-10">
      <div className="flex w-1/2 flex-col items-center justify-center gap-5">
        <Image src={header} alt="header" className="!w-96 md:!w-[70%]" />
        <p className="w-full px-4 text-center text-2xl font-semibold text-[#402905] md:text-3xl">
          Discover a community of book lovers, join book clubs and share your
          passion for reading and discussion.
        </p>
        <Button
          radius={50}
          color="#76552B"
          size="xl"
          className="!flex !items-center !justify-center !px-9 !font-bold !text-white"
          onClick={() => navigate("/sign-up")}
        >
          Get Started
        </Button>
        <div className="flex gap-4">
          <GooglePlayButton onClick={handleGooglePlayClick} size="md" />
          <AppleStoreButton onClick={handleAppStoreClick} size="md" />
        </div>
      </div>
      <Image src={hero} alt="hero" className="!w-[850px] object-cover" />
    </div>
  );
};

export default MainSection;
