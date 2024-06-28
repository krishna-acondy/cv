import { Link, Stack, Typography } from "@mui/joy";

export const Newslaundry = () => {
  return (
    <Stack gap={1} alignItems="flex-start">
      <Typography level="title-lg" textAlign="left">
        Volunteer Developer at Newslaundry
      </Typography>
      <Typography level="body-sm" textAlign="left">
        Helped conceptualise and design features for{" "}
        <Link href="https://www.newslaundry.com/">
          Newslaundry
        </Link>, a subscriber-funded independent news platform in India.
      </Typography>
    </Stack>
  );
};
