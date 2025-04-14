/* eslint-disable no-console */
import "@mantine/dropzone/styles.css";
import { Group } from "@mantine/core";
import { IconUpload, IconX, IconPhotoPlus } from "@tabler/icons-react";
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from "@mantine/dropzone";

const DropZone = (props: Partial<DropzoneProps>) => {
  return (
    <>
      <h5 className="pb-3 font-medium capitalize text-[#270909]">
        add cover image
      </h5>
      <Dropzone
        onDrop={(files) => console.log("accepted files", files)}
        onReject={(files) => console.log("rejected files", files)}
        maxSize={5 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
        {...props}
        className="flex !h-16 items-center justify-center !bg-[#D9D9D933]"
      >
        <Group justify="center" gap="sm" style={{ pointerEvents: "none" }}>
          <Dropzone.Accept>
            <IconUpload
              size={52}
              color="var(--mantine-color-blue-6)"
              stroke={1.5}
            />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX size={52} color="var(--mantine-color-red-6)" stroke={1.5} />
          </Dropzone.Reject>

          <Dropzone.Idle>
            <IconPhotoPlus size={40} stroke={2} color="#402905" />
          </Dropzone.Idle>
        </Group>
      </Dropzone>
    </>
  );
};

export default DropZone;
