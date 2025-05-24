import { Image } from "@mantine/core";
import { ReactNode } from "react";
import MainContent from "./MainContent";
import { FormType } from "../enum";

const AuthLayout = ({
  children,
  image,
  type,
}: {
  children: ReactNode;
  image: string;
  type: string;
}) => {
  return (
    <div className="flex h-screen w-full items-center justify-center overflow-hidden bg-home bg-cover bg-center bg-no-repeat px-6 pt-1 md:p-0">
      <div className="absolute inset-0 bg-slate-100 bg-opacity-70"></div>
      <div className="relative h-full w-full flex-col items-center py-4 md:flex md:flex-row md:justify-between lg:py-8">
        <div
          className={`mx-auto my-auto flex w-full max-w-full items-center justify-center rounded-lg bg-white px-4 pb-4 md:-translate-x-8 md:py-8 lg:w-1/2 lg:rounded-[2.5rem] ${type !== FormType.SIGNUP ? "h-fit md:h-full" : "h-full"}`}
        >
          <div
            className={`flex h-full w-full flex-col items-center justify-center ${type === FormType.CHECK_EMAIL && "items-center justify-center"} gap-5`}
          >
            {type !== FormType.SIGNUP && (
              <div className="w-36">
                <Image src={""} alt="logo" />
              </div>
            )}
            <div
              className={`w-full max-w-md md:pl-8 ${FormType.SIGNUP === type && "h-full"}`}
            >
              {children}
            </div>
          </div>
        </div>
        <MainContent image={image} type={type} />
      </div>
    </div>
  );
};

export default AuthLayout;
