import { Link, Stack, Typography } from "@mui/joy";

export const GMF = () => {
  return (
    <Stack gap={1} alignItems="flex-start">
      <Typography level="title-lg" textAlign="left">
        Developer at GetMeFit
      </Typography>
      <Typography level="body-sm" textAlign="left">
        Helped build MVP and various add-on features for{" "}
        <Link href="https://gmfwellbeing.com/">GetMeFit</Link>, a
        platform that connects fitness trainers with clients.
      </Typography>
    </Stack>
  );
};
