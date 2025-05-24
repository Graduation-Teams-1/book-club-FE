import { Text, Button, Checkbox, Anchor, PasswordInput } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { GoogleButton } from "./GoogleButton";
import { FacebookButton } from "./FacebookButton";
import { useForm, FormProvider } from "react-hook-form";
import { useEffect } from "react";
import { useSigninMutation } from "~/app/store/api/auth/authApi";
import { yupResolver } from "@hookform/resolvers/yup";
import { signinSchema } from "../Schema";
import AuthTextInput from "./AuthTextInput";

interface AuthFormProps {
  isSigninOrUp: "in" | "up";
}

const AuthForm = ({ isSigninOrUp }: AuthFormProps) => {
  const navigate = useNavigate();
  const [signin, { isLoading, isSuccess }] = useSigninMutation();

  const methods = useForm({
    resolver: yupResolver(signinSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);

  return (
    <FormProvider {...methods}>
      <form
        className="max-w-1/2 flex h-screen flex-col items-center justify-center gap-5 px-4 py-4 xl:px-24"
        onSubmit={handleSubmit(signin)}
      >
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

        <AuthTextInput
          label="Email Address"
          name="email"
          size="lg"
          radius="xl"
          className="w-full"
          placeholder="Email@Email.com"
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
          {...methods.register("password")}
          error={errors.password?.message}
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
            {...methods.register("remember")}
            color="#402905"
            classNames={{
              label: "!text-[#4A4A4A] text-[15px] font-normal text-center",
            }}
          />
          <Anchor href="#" className="!text-[#4A4A4A]">
            Forgot Password?
          </Anchor>
        </div>

        <Button
          size="lg"
          className="!rounded-[50px]"
          color="#402905"
          fullWidth
          type="submit"
          loading={isLoading}
          disabled={isLoading}
        >
          Login
        </Button>
      </form>
    </FormProvider>
  );
};

export default AuthForm;
