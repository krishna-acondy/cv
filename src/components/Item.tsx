import { Divider, Stack, Typography } from "@mui/joy";

type ItemProps = {
  title: string
  period: string
  company: string
  description: string | React.ReactNode
};

export const Item = ({ title, period, company, description  }: ItemProps) => {
  return (
    <Stack gap={0.25} alignItems="flex-start">
      <Typography
        level="title-md"
        sx={{ color: (t) => t.palette.neutral[500] }}
      >
        {period}
      </Typography>
      <Typography level="title-lg" textAlign='left'>{title}</Typography>
      <Typography level="title-md" sx={{ color: (t) => t.palette.neutral[800] }}>
        {company}
      </Typography>
      {typeof description === "string" ? (
        <Typography level="body-md">{description}</Typography>
      ) : (
        <Typography component="div" level="body-md">
          {description}
        </Typography>
      )}
      <Divider sx={{ mt: 2}} />
    </Stack>
  );
};
