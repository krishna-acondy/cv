import { Stack, Typography } from "@mui/joy";
import { SxProps } from "@mui/joy/styles/types";

type SectionProps = React.PropsWithChildren<{
  title?: string | React.ReactNode;
  sx?: SxProps
}>;

export const Section = ({ title, children, sx = {} }: SectionProps) => {
  return (
    <Stack gap={1} alignItems="flex-start" sx={sx}>
      <Typography
        level="h2"
        sx={{
          color: "var(--section-header-color)",
          fontFamily: "var(--display-font)",
          fontSize: 32,
        }}
      >
        {title}
      </Typography>
      {children}
    </Stack>
  );
};
