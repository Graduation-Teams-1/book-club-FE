import { Image } from "@mantine/core";
// import vectorLeft from "~/assets/imgs/VectorLeft.png";
// import vectorRight from "~/assets/imgs/VectorRight.png";
import person1 from "~/assets/imgs/image3.png";
import person2 from "~/assets/imgs/image4.png";
import person3 from "~/assets/imgs/image5.png";

const imgSrc = [person1, person2, person3];
const Feedbacks = () => {
  return (
    <>
      <div className="mb-10 h-[65rem] w-full bg-vector_x bg-auto bg-right-bottom bg-no-repeat">
        <div className="w-full bg-vector_y bg-auto bg-left-top bg-no-repeat">
          <div className="pt-40">
            <div className="flex justify-center">
              <h1 className="w-[70%] text-center font-serif text-[4rem] font-extrabold text-[#76552B]">
                Enjoy our feed and share ratings, quotes, reads and more
              </h1>
            </div>
            <div className="flex w-full justify-center gap-10 pt-24">
              {imgSrc.map((img, index) => (
                <div key={index}>
                  <Image
                    src={img}
                    alt="person"
                    fit="cover"
                    className="overflow-hidden"
                  />
                </div>
              ))}
              {/* <Image src={vectorRight} alt="vectorRight" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedbacks;
