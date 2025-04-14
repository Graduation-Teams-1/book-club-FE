import { Button, Input, Modal, Radio, Switch } from "@mantine/core";
import { IconArrowRight, IconPlus } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import DropZone from "./DropZone";
//

const CreateClub = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Creat Club"
        classNames={{ title: "!text-[#402905] !font-bold !text-2xl" }}
      >
        {/* Modal content */}
        <DropZone />
        <div className="pt-3">
          <h5 className="text-lg font-medium capitalize text-[#402905]">
            details
          </h5>
          <div className="flex flex-col gap-3 pt-3">
            <Input.Wrapper label="Name">
              <Input placeholder="Name" />
            </Input.Wrapper>
            <Input.Wrapper label="Description">
              <Input placeholder="Description" />
            </Input.Wrapper>
            <Radio.Group label="Genres">
              <div className="flex items-center gap-3 pt-2">
                <Radio value={"Male"} label="Male" color="#402905" />
                <Radio value={"Female"} label="Female" color="#402905" />
              </div>
            </Radio.Group>
            <Input.Wrapper label="Language">
              <Input placeholder="Add a language for your club" />
            </Input.Wrapper>
            <Input.Wrapper label="Type">
              <Input placeholder="Choose Online Or Offline Club" />
            </Input.Wrapper>
          </div>
          <div className="flex items-center justify-between pt-3">
            <h5 className="text-lg font-medium capitalize text-[#402905]">
              books
            </h5>
            <Button variant="outline" className="!border-none !text-[#D4A017]">
              Add
            </Button>
          </div>
          <h5 className="text-lg font-medium capitalize text-[#402905]">
            privacy
          </h5>
          <div className="px-6">
            <Switch
              color="#402905"
              labelPosition="left"
              label="make a club puplic"
              description="Making your clu public allows anyone on  circles to join "
              size="md"
              className="rounded-md bg-[#FBFBFB] p-3"
            />
          </div>
          <div className="flex justify-center pb-3 pt-5">
            <Button
              color="#402905"
              w={300}
              rightSection={<IconArrowRight size={16} />}
            >
              Continue to invites
            </Button>
          </div>
        </div>
      </Modal>
      <Button
        leftSection={<IconPlus size={16} />}
        className="!flex !w-1/3 !items-start !bg-[#402905] !text-white"
        onClick={open}
      >
        Create New Club
      </Button>
    </>
  );
};

export default CreateClub;
