import { Typography } from "@mui/material";
import { Box } from "@mui/material";

interface Props {
  title: string;
}

export default function PageHeader({ title }: Props) {
  return (
    <Box py={2}>
      <Typography variant="h2">{title}</Typography>
    </Box>
  );
}
