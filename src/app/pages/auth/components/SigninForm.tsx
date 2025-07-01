/* eslint-disable no-console */
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
import { useAuth } from "base/hooks";
import { UserLoginBody } from "~/app/store/types";

export interface AuthFormProps {
  isSigninOrUp: "in" | "up";
}

const AuthForm = ({ isSigninOrUp }: AuthFormProps) => {
  const navigate = useNavigate();
  const [signin, { isLoading, isError, error: signinError }] = useSigninMutation();
  const { setToken, setUser } = useAuth();

  const methods = useForm({
    resolver: yupResolver(signinSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
    setError,
  } = methods;

  const onSubmit = async (data: UserLoginBody) => {
    try {
      const loginRes = await signin(data).unwrap();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (loginRes && (loginRes as any).token) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (setToken) setToken((loginRes as any).token);
        // Simulate user profile extraction (replace with real API call if available)
        const user = {
          _id: "",
          firstname: (data as UserLoginBody).email.split("@")[0],
          lastname: "",
          email: (data as UserLoginBody).email,
          avatar: "",
          role: "User",
          twoFactorAuth: false,
          ipAddress: "",
          lastLogin: "",
          is2FAVerified: false,
          resetCount: 0,
          permissions: [],
          removed: false,
          createdAt: "",
          updatedAt: "",
        };

        if (setUser) setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
      }
    } catch (error) {
      console.log("Login error:", error);
      
      // Clear any previous errors first
      setError("root", { type: "manual", message: "" });
      
      // Note: RTK Query errors will be handled by the useEffect above
      // This catch block handles any other unexpected errors
      if (!isError) {
        let errorMessage = "An unexpected error occurred. Please try again.";
        
        if (error && typeof error === 'object' && 'data' in error) {
          const apiError = error as { data?: { message?: string; error?: string } };
          if (apiError.data?.message) {
            errorMessage = apiError.data.message;
          } else if (apiError.data?.error) {
            errorMessage = apiError.data.error;
          }
        }
        
        setError("root", {
          type: "manual",
          message: errorMessage,
        });
      }
    }
  };

  useEffect(() => {
    // Handle RTK Query error state
    if (isError && signinError) {
      let errorMessage = "Login failed. Please check your credentials and try again.";
      
      // Extract error message from RTK Query error
      if (signinError && typeof signinError === 'object' && 'data' in signinError) {
        const apiError = signinError as { data?: { message?: string; error?: string } };
        if (apiError.data?.message) {
          errorMessage = apiError.data.message;
        } else if (apiError.data?.error) {
          errorMessage = apiError.data.error;
        }
      }
      
      setError("root", {
        type: "manual",
        message: errorMessage,
      });
    }
  }, [isError, signinError, setError]);

  useEffect(() => {
    // Restore user from localStorage on mount
    const userStr = localStorage.getItem("user");
    if (userStr && setUser) {
      try {
        setUser(JSON.parse(userStr));
      } catch {
        // ignore JSON parse error
      }
    }
  }, [setUser]);

  return (
    <FormProvider {...methods}>
      <form
        className="max-w-1/2 flex h-screen flex-col items-center justify-center gap-5 px-4 py-4 xl:px-24"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Text className="text-center !text-xl !font-semibold !text-[#402905]">
          Welcome to Circels!
        </Text>

        {(errors.root || isError) && (
          <div className="w-full rounded-lg border border-red-200 bg-red-50 p-3">
            <Text className="text-center text-sm text-red-600">
              {errors.root?.message || "Login failed. Please try again."}
            </Text>
          </div>
        )}

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
