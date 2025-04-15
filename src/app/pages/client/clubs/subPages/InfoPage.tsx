import { Image } from "@mantine/core";
import { Avatar, BackgroundImage, Button } from "@mantine/core";
import clubPhoto from "assets/imgs/clubphoto.svg";
import clubAvatar from "assets/imgs/clubavatar.svg";

const dummyData = [
  {
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    alt: "Image 1",
  },
  {
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    alt: "Image 2",
  },
  {
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    alt: "Image 3",
  },
];

const InfoPage = () => {
  return (
    <>
      <div className="flex flex-col items-start gap-4">
        <BackgroundImage
          src={clubPhoto}
          className="mx-auto !flex h-64 !items-center !rounded-t-lg px-4 sm:px-10 md:px-20"
        >
          <div className="flex flex-col items-center justify-start gap-4 sm:flex-row">
            <Avatar src={clubAvatar} alt="club avatar" size="xl" />
            <div className="flex flex-col items-start justify-start gap-2">
              <h4 className="pl-0 text-center text-2xl font-extrabold text-white sm:pl-5 sm:text-left">
                Qaf club
              </h4>
              <p className="flex flex-col gap-2 pt-2 font-bold sm:flex-row sm:gap-4">
                <li className="capitalize text-white">1845 Members.</li>
                <li className="capitalize text-white">since 2024.</li>
              </p>
            </div>
          </div>
        </BackgroundImage>
      </div>
      <div className="m-auto flex flex-col items-start gap-10 py-10 lg:flex-row">
        <div className="flex h-fit w-full flex-col gap-4 rounded-lg border border-[#4029054D] p-5 lg:w-96">
          <h1 className="text-xl font-bold text-[#402905]">About our Club </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat,
            ratione molestiae? Cupiditate amet, voluptas dolores quae ipsa
            maxime cum nihil cumque deserunt minus? In voluptatum exercitationem
            aperiam, adipisci velit natus!
          </p>
          <Button color="#402905">join club now</Button>
        </div>
        <div className="flex h-fit w-full flex-col gap-4 rounded-lg border border-[#4029054D] p-5 lg:w-96">
          <div>
            <h1>club rules :</h1>
            <p>• Respect all members.</p>
            <p>• Stay on topic during discussions.</p>
            <p>• Participate actively in discussions.</p>
            <p>• Avoid spoilers-don’t reveal book details before reading.</p>
          </div>
          <div>
            <h1>members :</h1>
            <p>• 1854</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-lg border border-[#4029054D] p-4">
        <div>
          <h1>photos :</h1>
          <div className="flex flex-wrap items-center justify-start gap-4">
            {dummyData.map((item, index) => (
              <Image
                key={index}
                src={item.src}
                alt={item.alt}
                fit="cover"
                className="!w-20 sm:!w-28"
              />
            ))}
          </div>
        </div>
        <div>
          <h1>documents :</h1>
          <p>• Club Rules (PDF).</p>
          <p>• Club Rules (PDF).</p>
          <p>• Club Rules (PDF).</p>
        </div>
      </div>
    </>
  );
};

export default InfoPage;
