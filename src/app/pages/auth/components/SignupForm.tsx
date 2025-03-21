import {
  Text,
  Button,
  Checkbox,
  TextInput,
  PasswordInput,
  Progress,
  Popover,
  Box,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";

import { IconX, IconCheck } from "@tabler/icons-react";

import { useState } from "react";
import { GoogleButton } from "./GoogleButton";
import { FacebookButton } from "./FacebookButton";

function PasswordRequirement({
  meets,
  label,
}: {
  meets: boolean;
  label: string;
}) {
  return (
    <Text
      c={meets ? "teal" : "red"}
      style={{ display: "flex", alignItems: "center" }}
      mt={7}
      size="sm"
    >
      {meets ? <IconCheck size={14} /> : <IconX size={14} />}
      <Box ml={10}>{label}</Box>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
];

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}
interface AuthFormProps {
  isSigninOrUp: "in" | "up";
}
const AuthForm = ({ isSigninOrUp }: AuthFormProps) => {
  const navigate = useNavigate();
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [value, setValue] = useState("");
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(value)}
    />
  ));

  const strength = getStrength(value);
  const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";

  return (
    <div className="max-w-1/2 flex h-screen flex-col items-center justify-center gap-5 px-4 py-4 xl:px-24">
      <Text className="text-center">Welcome to Circels!</Text>

      <div className="flex w-[250px] justify-between rounded-full bg-[#EAD0A880] px-[8px] py-[5px]">
        <Button
          variant={isSigninOrUp === "up" ? "filled" : "transparent"}
          color="#402905"
          w={120}
          radius="xl"
          onClick={() => navigate("/sign-up")}
        >
          Register
        </Button>
        <Button
          variant={isSigninOrUp === "in" ? "filled" : "transparent"}
          color="#402905"
          w={120}
          radius="xl"
          onClick={() => navigate("/sign-in")}
        >
          Login
        </Button>
      </div>

      <TextInput
        label="Email Address"
        required
        size="lg"
        radius="xl"
        className="w-full"
        placeholder="Enter your email address"
        classNames={{
          input: "!border-[#9E896A]",
          label: "!text-[#402905]",
          required: "!text-red",
        }}
      />

      <TextInput
        label="User Name"
        size="lg"
        required
        radius="xl"
        className="w-full"
        placeholder="Enter your name"
        classNames={{
          input: "!border-[#9E896A] ",
          label: "!text-[#402905]",
          required: "!text-red",
        }}
      />

      <Popover
        opened={popoverOpened}
        position="bottom"
        width="target"
        transitionProps={{ transition: "pop" }}
      >
        <Popover.Target>
          <div
            onFocusCapture={() => setPopoverOpened(true)}
            onBlurCapture={() => setPopoverOpened(false)}
            className="w-full"
          >
            <PasswordInput
              required
              radius={"xl"}
              label="Password"
              placeholder="Enter your password"
              size="lg"
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
              classNames={{
                input: "!border-[#9E896A] ",
                label: "!text-[#402905]",
                required: "!text-red",
              }}
            />
          </div>
        </Popover.Target>
        <Popover.Dropdown>
          <Progress color={color} value={strength} size={5} mb="xs" />
          <PasswordRequirement
            label="Includes at least 6 characters"
            meets={value.length > 5}
          />
          {checks}
        </Popover.Dropdown>
      </Popover>

      <div className="flex items-center justify-center gap-4">
        <div className="w-[100px] flex-1 border-t border-[#1C345442] md:w-[150px] xl:w-[200px]"></div>
        <span className="text-[15px] font-normal text-primary-900">OR</span>
        <div className="w-[100px] flex-1 border-t border-[#1C345442] md:w-[150px] xl:w-[200px]"></div>
      </div>

      <GoogleButton w={235} h={50}>
        Sign up with Google
      </GoogleButton>

      <FacebookButton w={235} h={50}>
        Sign up with Facebook
      </FacebookButton>

      <Checkbox
        label="By signing up , you accept our terms of use and acknowledge our privacy policy"
        color="#402905"
        classNames={{
          label: "!text-[#4A4A4A] text-[15px] font-normal text-center",
        }}
      />

      <Button size="lg" className="!rounded-full" color="#402905" fullWidth>
        Register
      </Button>
    </div>
  );
};

export default AuthForm;
