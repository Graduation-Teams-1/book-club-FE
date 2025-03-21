import {
  Text,
  Button,
  Checkbox,
  TextInput,
  Anchor,
  PasswordInput,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { GoogleButton } from "./GoogleButton";
import { FacebookButton } from "./FacebookButton";

interface AuthFormProps {
  isSigninOrUp: "in" | "up";
}
const AuthForm = ({ isSigninOrUp }: AuthFormProps) => {
  const navigate = useNavigate();
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

      {/* <TextInput
        label="Email Address"
        description=""
        error=""
        size="md"
        radius="xl"
        placeholder="enter your email address"
      /> */}
      <TextInput
        label="Email Address"
        size="lg"
        radius="xl"
        className="w-full"
        placeholder="Enter your Email Address"
        classNames={{
          input: "!border-[#9E896A] ",
          label: "!text-[#402905]",
          required: "!text-red",
        }}
      />

      <PasswordInput
        radius={"xl"}
        label="Password"
        placeholder="Enter your password"
        size="lg"
        className="w-full"
        classNames={{
          input: "!border-[#9E896A] ",
          label: "!text-[#402905]",
          required: "!text-red",
        }}
      />

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

      <div className="flex w-full items-center justify-between">
        <Checkbox
          label="Remember me"
          color="#402905"
          classNames={{
            label: "!text-[#4A4A4A] text-[15px] font-normal text-center",
          }}
        />
        <Anchor href="#" className="!text-[#4A4A4A]">
          Forgot Password?
        </Anchor>
      </div>

      <Button size="lg" className="!rounded-[50px]" color="#402905" fullWidth>
        Login
      </Button>
    </div>
  );
};

export default AuthForm;
