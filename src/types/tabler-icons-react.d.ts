declare module "@tabler/icons-react" {
  import { FC, SVGProps } from "react";

  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    stroke?: number | string;
  }

  export const IconCheck: FC<IconProps>;
  export const IconX: FC<IconProps>;
  export const IconCapProjecting: FC<IconProps>;
  export const IconChartDotsFilled: FC<IconProps>;
  export const IconHome: FC<IconProps>;
  export const IconInvoice: FC<IconProps>;
  export const IconLock: FC<IconProps>;
  export const IconSettings: FC<IconProps>;
  export const IconUser: FC<IconProps>;
  export const IconBrandFacebook: FC<IconProps>;
  export const IconBrandInstagram: FC<IconProps>;
  export const IconBrandLinkedin: FC<IconProps>;
  export const IconBrandTiktok: FC<IconProps>;
  export const IconBrandX: FC<IconProps>;
  export const IconBrandYoutube: FC<IconProps>;
  // Add other icons as needed
}
