import { Image } from "@mantine/core";
import register from "~/assets/imgs/register.png";
import logo from "~/assets/imgs/circleLogo.png";
import BackgroundShapes from "../components/BackgroundShapes";
import SignupForm from "../components/SignupForm";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();
  return (
    // <AuthLayout image={logo} type={FormType.SIGNUP}>
    <div className="relative mx-auto flex max-h-screen w-full flex-col-reverse items-center justify-between px-5 xl:flex-row xl:items-center xl:justify-start xl:px-28">
      <BackgroundShapes />
      <div className="hidden w-1/2 items-center justify-center py-5 xl:flex">
        <Image
          src={register}
          className="!rounded-2xl"
          alt="register-image"
          fit="contain"
        />
      </div>
      <SignupForm />
      <div className="flex cursor-pointer flex-col items-start pt-28 xl:h-[100vh]">
        <Image src={logo} onClick={() => navigate("/")} />
      </div>
    </div>

    // </AuthLayout>
  );
}
