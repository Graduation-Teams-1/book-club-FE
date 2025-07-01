import club3 from "~/assets/imgs/club3.png";
import club4 from "~/assets/imgs/club4.png";
import EmblaCarousel from "./embla-carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { Image } from "@mantine/core";

// import { useGetClubsQuery } from "~/app/store/api/auth/clubsApi";
// import { Club } from "~/app/store/types/clubs";
const clubsData = [
  {
    h1: "Virtual Book Clubs",
    p: "Join virtual online book clubs, discuss your favorite reads with readers worldwide and participate in fun events.",
    src: club3,
  },
  {
    h1: "Local Book club Meetups",
    p: "Meet fellow book lovers in your area. Attend local book club meetups, share ideas, and build real-life connections.",
    src: club4,
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
  // const { data: clubsData } = useGetClubsQuery({ id: 1 });

  const SLIDES = clubsData.map((club) => (
    <div
      className="flex flex-col-reverse items-center justify-center gap-10 py-20 md:flex-row"
      key={club.h1}
    >
      <div className="flex flex-col gap-12">
        <h1 className="text-5xl font-extrabold text-[#76552B]">{club.h1}</h1>
        <p className="w-[70%] text-4xl font-[480] leading-snug text-[#402905]">
          {club.p}
        </p>
      </div>
      <Image src={club.src} alt={club.h1} className="!w-[500px]" />
    </div>
  ));

  const OPTIONS: EmblaOptionsType = { axis: "y", loop: true };
  return (
    <>
      <h1 className="w-full px-4 py-8 text-center font-serif text-[2rem] font-extrabold text-[#76552B]">
        Explore Our Awesome Services
      </h1>
      <div className="container mx-auto">
        <div className="flex flex-col-reverse items-center justify-center gap-10 py-20 md:flex-row">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </>
  );
};

export default Clubs;
