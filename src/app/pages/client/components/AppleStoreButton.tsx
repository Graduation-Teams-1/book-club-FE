import { Button, ButtonProps } from "@mantine/core";
// import { IconBrandApple } from "@tabler/icons-react";

interface AppleStoreButtonProps extends Omit<ButtonProps, "size"> {
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}

const AppleStoreButton: React.FC<AppleStoreButtonProps> = ({
  onClick,
  size = "lg",
  ...props
}) => {
  return (
    <Button
      onClick={onClick}
      size={size}
      // leftSection={<IconBrandApple size={28} />}
      variant="filled"
      color="dark"
      radius="md"
      style={{
        backgroundColor: "#000000",
        border: "1px solid #A6A6A6",
        height: size === "lg" ? "60px" : size === "md" ? "50px" : "40px",
        minWidth: size === "lg" ? "180px" : size === "md" ? "160px" : "140px",
        fontSize: size === "lg" ? "16px" : size === "md" ? "14px" : "12px",
        fontWeight: 400,
      }}
      styles={{
        root: {
          "&:hover": {
            backgroundColor: "#1a1a1a",
            transform: "translateY(-2px)",
            transition: "all 0.2s ease",
          },
        },
        inner: {
          justifyContent: "flex-start",
          gap: "12px",
        },
        section: {
          marginRight: "8px",
        },
      }}
      {...props}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <span
          style={{
            fontSize: "12px",
            lineHeight: "1",
            color: "#ffffff",
            opacity: 0.8,
          }}
        >
          Download on the
        </span>
        <span
          style={{
            fontSize: "18px",
            lineHeight: "1.2",
            fontWeight: 500,
            color: "#ffffff",
          }}
        >
          App Store
        </span>
      </div>
    </Button>
  );
};

export default AppleStoreButton;
