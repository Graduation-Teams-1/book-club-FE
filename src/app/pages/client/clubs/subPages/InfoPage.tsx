import { Image } from "@mantine/core";
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
    <div className="flex w-full flex-col gap-4 p-4">
      <div>
        <h1>club rules :</h1>
        <p>• Respect all members.</p>
        <p>• Stay on topic during discussions.</p>
        <p>• Participate actively in discussions.</p>
        <p>•Avoid spoilers-don’t reveal book details before reading.</p>
      </div>
      <div>
        <h1>members :</h1>
        <p>• 1854</p>
      </div>
      <div>
        <h1>photos :</h1>
        <div className="flex w-full items-center justify-start gap-4">
          {dummyData.map((item, index) => (
            <Image
              key={index}
              src={item.src}
              alt={item.alt}
              fit="cover"
              className="!w-28"
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
  );
};

export default InfoPage;
