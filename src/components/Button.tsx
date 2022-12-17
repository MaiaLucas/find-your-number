import { Button as MUIButton, ButtonProps } from "@mui/material";
import { Box } from "@mui/material";
import Link from "next/link";

interface Props {
  text: string;
  color?: ButtonProps["color"];
  variant?: ButtonProps["variant"];
  link?: string;
  onClick?: (e: any) => void;
}

export default function Button({
  text,
  color = "primary",
  variant = "contained",
  link,
  onClick,
}: Props) {
  const renderButton = () => (
    <MUIButton variant={variant} color={color} onClick={onClick}>
      {text}
    </MUIButton>
  );

  return (
    <Box py={2}>
      {link ? (
        <Link href={link} legacyBehavior>
          {renderButton()}
        </Link>
      ) : (
        renderButton()
      )}
    </Box>
  );
}
