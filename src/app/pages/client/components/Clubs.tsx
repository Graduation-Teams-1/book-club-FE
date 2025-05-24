import { Image } from "@mantine/core";
import club1 from "~/assets/imgs/club1.png";
import club2 from "~/assets/imgs/club2.png";
import club3 from "~/assets/imgs/club3.png";
import club4 from "~/assets/imgs/club4.png";

const clubsData = [
  {
    h1: "Virtual Book Clubs",
    p: "Join virtual online book clubs, discuss your favorite reads with readers worldwide and participate in fun events.",
    src: club1,
  },
  {
    h1: "Local Book club Meetups",
    p: "Meet fellow book lovers in your area. Attend local book club meetups, share ideas, and build real-life connections.",
    src: club2,
  },
  {
    h1: "Borrow & Lend Books",
    p: "Easily borrow or lend books within the community. A seamless, trusted system to share and discover new reads.",
    src: club3,
  },
  {
    h1: "Track Your Journey",
    p: "Monitor your reading, club attendance, and achievements. Earn points, level up, and celebrate milestones along your reading journey.",
    src: club4,
  },
];

const Clubs = () => {
  return (
    <>
      <h1 className="m-auto w-[800px] py-8 text-center font-serif text-[4rem] font-extrabold text-[#76552B]">
        Explore Our Awesome Services
      </h1>
      <div className="container mx-auto">
        {clubsData.map((club) => (
          <div
            className="flex flex-col-reverse items-center justify-center gap-10 py-20 md:flex-row"
            key={club.h1}
          >
            <div className="flex flex-col gap-12">
              <h1 className="text-5xl font-extrabold text-[#76552B]">
                {club.h1}
              </h1>
              <p className="w-[70%] text-4xl font-[480] leading-snug text-[#402905]">
                {club.p}
              </p>
            </div>
            <Image src={club.src} alt={club.h1} className="!w-[600px]" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Clubs;
