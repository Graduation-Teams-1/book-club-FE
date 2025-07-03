import  GooglePlayButton  from "./GooglePlayButton"
import  AppleStoreButton  from "./AppleStoreButton"

import hero from "~/assets/imgs/hero.jpg";
import header from "~/assets/imgs/Header.png";
import { BackgroundImage, Button, Image } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";

const MainSection = () => {
  const APKUrl = "https://play.google.com/store/games?device=windows";
  const IOSUrl = "https://www.apple.com/eg-ar/app-store/";
  const navigate = useNavigate();

  const handleGooglePlayClick = (): void => {
    window.open(APKUrl, '_blank');
  };

  const handleAppStoreClick = (): void => {
    window.open(IOSUrl, '_blank');
  };

  return (
    <BackgroundImage
      src={hero}
      radius="sm"
      className="relative flex h-screen items-center pt-20 md:gap-40 md:pt-10"
    >
      {/* Black overlay */}
      <div className="absolute inset-0 rounded-sm bg-base bg-opacity-50"></div>

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-14">
        <Image src={header} alt="header" className="!w-96 md:!w-[40%]" />
        <p className="w-full px-4 text-center text-2xl font-semibold text-white md:w-1/2 md:text-4xl">
          Discover a community of book lovers, join book clubs and share your
          passion for reading and discussion.
        </p>
        <Button
          radius={50}
          color="#fff"
          size="xl"
          className="!flex !items-center !justify-center !px-9 !font-bold !text-[#76552B]"
          onClick={() => navigate("/sign-up")}
        >
          Get Started
        </Button>
        <div className="flex gap-4">
          {/*
          <Link to={APKUrl} target="_blank">
            <IoLogoGooglePlaystore className="h-14 w-14 cursor-pointer" />
          </Link>
          <Link to={IOSUrl} target="_blank">
            <AiOutlineApple className="h-14 w-14 cursor-pointer" />
          </Link>
          */}

<GooglePlayButton onClick={handleGooglePlayClick} size="md" />
<AppleStoreButton onClick={handleAppStoreClick} size="md" />


        </div>
      </div>
    </BackgroundImage>
  );
};

export default MainSection;