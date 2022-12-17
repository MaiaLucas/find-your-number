import { Typography } from "@mui/material";
import { Box } from "@mui/material";

interface Props {
  text: string;
  variant?:
    | "h6"
    | "caption"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "overline";
}

export default function InfoText({ text, variant = "body1" }: Props) {
  return (
    <Box py={2} px={1}>
      <Typography variant={variant}>{text}</Typography>
    </Box>
  );
}
