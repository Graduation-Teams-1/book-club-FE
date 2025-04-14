import { Button, Image } from "@mantine/core";
import bookImg from "assets/imgs/bookimg.svg";
import { IconArrowUpRight } from "@tabler/icons-react";

const BookCard = () => {
  return (
    <div className="flex gap-4">
      <Image src={bookImg} alt="book" className="!w-20" fit="cover" />
      <div>
        <h4 className="text-[#402905]">Book Title</h4>
        <p className="text-[#402905]">Author Name</p>
        <p className="text-[#402905]">rating</p>
        <Button variant="outline" rightSection={<IconArrowUpRight />}>
          View book
        </Button>
      </div>
    </div>
  );
};

export default BookCard;
