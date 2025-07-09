import { AppShell, Image } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";
import logo from "~/assets/imgs/logo.png";

const socialLinks = [
  {
    h5: "Follow Us",
    icons: [
      <IconBrandX
        key="x"
        size="32"
        color="#E1E1E1"
        className="hover: !transition hover:!scale-110"
      />,
      <IconBrandInstagram
        key="icon-instagram"
        size="32"
        color="#E1E1E1"
        className="hover: !transition hover:!scale-110"
      />,
      <IconBrandFacebook
        key="icon-facebook"
        size="32"
        color="#E1E1E1"
        className="hover: !transition hover:!scale-110"
      />,
      <IconBrandLinkedin
        key="icon-linkedin"
        size="32"
        color="#E1E1E1"
        className="hover: !transition hover:!scale-110"
      />,
      <IconBrandYoutube
        key="icon-youtube"
        size="32"
        color="#E1E1E1"
        className="hover: !transition hover:!scale-110"
      />,
      <IconBrandTiktok
        key="icon-tiktok"
        size="32"
        color="#E1E1E1"
        className="hover: !transition hover:!scale-110"
      />,
    ],
  },
];

const Footer = () => {
  return (
    <AppShell.Footer
      style={{
        position: "static",
        bottom: 0,
        height: 100,
        backgroundColor: "#2B2824",
      }}
    >
      <div className="flex h-full items-center justify-between gap-5 px-10">
        <Image src={logo} alt="logo" className="!w-[200px]" />
        {/* Copyright Section */}
        <div className="flex items-center justify-center gap-2 text-[#E1E1E1]">
          <span className="text-lg">©</span>
          <span className="text-sm">
            {new Date().getFullYear()} Book Club. All rights reserved.
          </span>
        </div>

        <div className="flex items-start justify-center text-white">
          <div>
            {socialLinks.map((social) => (
              <div key={social.h5}>
                <h5 className="py-2 font-normal text-[#F2D19C]">{social.h5}</h5>
                <div className="flex cursor-pointer flex-wrap gap-4">
                  {social.icons}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell.Footer>
  );
};

export default Footer;
