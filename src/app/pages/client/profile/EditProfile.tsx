import { Avatar, Button, Modal, Radio, Input } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import profilePic from "~/assets/imgs/profilePic.png";
import PasswordInput from "../../auth/components/PasswordInput";

const EditProfile = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Edit profile"
        classNames={{ title: "!text-[#402905] !font-bold !text-2xl" }}
        overlayProps={{
          opacity: 0.55,
          blur: 3,
        }}
        size={"lg"}
        padding={20}
      >
        {/* Modal content */}
        <div className="flex flex-col items-center justify-center gap-4">
          <Avatar src={profilePic} radius="50%" size="xl" className="m-auto" />
          <p className="text-xl font-semibold text-[#270909]">change picture</p>
        </div>

        <div className="flex flex-col gap-4 pt-3">
          <Input.Wrapper label="user name">
            <Input
              placeholder="add a username"
              classNames={{ input: "!border-none" }}
              className="border-b-2"
            />
          </Input.Wrapper>
          <Input.Wrapper label="About you">
            <Input
              placeholder="add a bio"
              classNames={{ input: "!border-none" }}
              className="border-b-2"
            />
          </Input.Wrapper>
          <Input.Wrapper label="social media">
            <Input
              placeholder="add a link"
              classNames={{ input: "!border-none" }}
              className="border-b-2"
            />
          </Input.Wrapper>
          <Radio.Group label="Genres">
            <div className="flex items-center gap-3 pt-2">
              <Radio value={"Male"} label="Male" color="#402905" />
              <Radio value={"Female"} label="Female" color="#402905" />
            </div>
          </Radio.Group>
          <Input.Wrapper label="phone number">
            <Input
              placeholder="add a phone number"
              classNames={{ input: "!border-none" }}
              className="border-b-2"
            />
          </Input.Wrapper>

          <PasswordInput
            classNames={{
              input: "!border-none ",
            }}
            radius="md"
            size="md"
            className="border-b-2"
          />
          <Button color="#402905">Save</Button>
        </div>
      </Modal>
      <Button
        fullWidth
        variant="outline"
        className="mt-4 !w-2/3 border-2 border-[#270909] p-2 font-bold"
        classNames={{
          root: "!border-[#270909]", // Ensures the border color is correctly applied
          label: "!text-[#270909]", // Changes the text color
        }}
        onClick={open}
      >
        Edit Profile
      </Button>
    </>
  );
};

export default EditProfile;

// <div className="relative h-40 max-w-40">
// <div
//   className="absolute bottom-2 right-2 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-White-background text-[--mantine-color-primary-0] transition-all duration-150"
//   role="button"
//   tabIndex={0}
//   onClick={() => imageRef.current?.click()}
//   onKeyDown={() => {}}
//   aria-label="edit profile picture"
// >
//   <PencilSimple className="h-6 w-6" />
// </div>
// <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-gray-200">
//   {!avatar && !userData?.avatar ? (
//     <ImageBroken className="h-20 w-20 fill-[--mantine-color-neutrals-5]" />
//   ) : (
//     <Image
//       src={
//         avatar
//           ? URL.createObjectURL(avatar)
//           : userData?.avatar || ""
//       }
//       alt="Picture of the author"
//       width={160}
//       height={160}
//       sizes="100%"
//       style={{ objectFit: "cover", zIndex: 1 }}
//       loading="eager"
//     />
//   )}

//   {imageLoading.loading && (
//     <div
//       className="absolute left-0 top-0 z-10 flex h-full w-full cursor-pointer items-center justify-center bg-[#0000002d] text-white transition-all duration-150"
//       role="button"
//       tabIndex={0}
//       onClick={() => imageRef.current?.click()}
//       onKeyDown={() => {}}
//       aria-label="edit profile picture"
//     >
//       {imageLoading.progress}%
//     </div>
//   )}
//   <input
//     className="hidden"
//     type="file"
//     accept="image/*"
//     ref={imageRef as LegacyRef<HTMLInputElement>}
//     onChange={(e) => {
//       setAvatar(e.target.files?.[0] || null);
//     }}
//   />
// </div>{" "}
// </div>
